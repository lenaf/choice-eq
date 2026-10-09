import type { Metadata } from "next";
import { RenderBlocks } from "@/components/blocks/RenderBlocks";
import { getPageBySlug, getSiteSettings } from "@/lib/siteData";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("home");
  const seo = page?.seo;
  return {
    ...(seo?.title ? { title: seo.title } : {}),
    ...(seo?.description ? { description: seo.description } : {}),
  };
}

export default async function Home() {
  const [page, settings] = await Promise.all([getPageBySlug("home"), getSiteSettings()]);

  if (!page) return <main className="min-h-screen pt-24" />;

  return (
    <main className="pt-24">
      <RenderBlocks sections={page.sections || []} settings={settings} />
    </main>
  );
}
