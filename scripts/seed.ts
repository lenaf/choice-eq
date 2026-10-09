// Seeds an empty local database with an admin user, starter pages, and sample products.
import "dotenv/config";
import path from "path";
import { getPayload } from "payload";
import config from "../src/payload.config";

const richText = (blocks: { tag?: "h1" | "h2" | "h3"; text: string }[]) => ({
  root: {
    type: "root",
    direction: "ltr" as const,
    format: "" as const,
    indent: 0,
    version: 1,
    children: blocks.map(({ tag, text }) => ({
      type: tag ? "heading" : "paragraph",
      ...(tag ? { tag } : {}),
      direction: "ltr",
      format: "",
      indent: 0,
      version: 1,
      children: [{ type: "text", text, detail: 0, format: 0, mode: "normal", style: "", version: 1 }],
    })),
  },
});

const seed = async () => {
  const payload = await getPayload({ config });
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;
  if (!email || !password) throw new Error("Set SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD in .env.local");

  const { totalDocs: userCount } = await payload.count({ collection: "users" });
  if (userCount === 0) await payload.create({ collection: "users", data: { email, password } });

  const { totalDocs: pageCount } = await payload.count({ collection: "pages" });
  if (pageCount > 0) {
    console.log("Pages already exist; skipping content seed.");
    process.exit(0);
  }

  const photoDir = path.resolve(process.cwd(), "public/images/photography");
  const hero = await payload.create({ collection: "media", data: { alt: "Horses in a field" }, filePath: path.join(photoDir, "hero1.jpeg") });
  const productPhoto = await payload.create({ collection: "media", data: { alt: "Sample product" }, filePath: path.join(photoDir, "yellowMug.jpeg") });

  for (const [i, name] of ["Sample Product One", "Sample Product Two", "Sample Product Three"].entries()) {
    await payload.create({
      collection: "products",
      data: {
        featured: true,
        images: [productPhoto.id],
        inventory: i === 2 ? 0 : 5,
        name,
        order: i,
        price: 25 + i * 10,
        summary: "Placeholder product. Edit or delete it in the admin.",
      },
    });
  }

  await payload.create({
    collection: "pages",
    data: {
      _status: "published",
      slug: "home",
      title: "Home",
      sections: [
        {
          blockType: "heroCarouselSection",
          slides: [
            {
              backgroundImage: hero.id,
              darkScrim: true,
              content: richText([{ tag: "h1", text: "Choice Equine" }, { text: "Welcome. Edit this hero in the admin." }]),
            },
          ],
        },
        {
          blockType: "collectionListSection",
          backgroundColor: "base-200",
          dataSource: "products",
          filterFeatured: true,
          heading: "Shop",
          layout: "grid",
          columns: "3",
          limit: 6,
          sortField: "order_asc",
          viewAllLabel: "View all",
          viewAllLinkType: "url",
          viewAllUrl: "/products",
        },
      ],
    },
  });

  const about = await payload.create({
    collection: "pages",
    data: {
      _status: "published",
      slug: "about",
      title: "About",
      sections: [
        {
          blockType: "fullWidthSection",
          backgroundColor: "base-100",
          padding: "standard",
          content: richText([{ tag: "h1", text: "About" }, { text: "Tell your story here." }]),
        },
      ],
    },
  });

  await payload.updateGlobal({
    slug: "navigation",
    data: {
      navItems: [
        { label: "Shop", linkType: "url", url: "/products" },
        { label: "About", linkType: "page", page: about.id },
      ],
    },
  });
  await payload.updateGlobal({ slug: "site-settings", data: { siteName: "Choice Equine" } });

  console.log("Seeded.");
  process.exit(0);
};

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
