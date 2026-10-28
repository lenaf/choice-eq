// Loads Emily's home page content and photos into the CMS. Replaces only the home page and the menu/settings globals.
// With --if-empty, does nothing when a home page already exists.
import "dotenv/config";
import path from "path";
import { getPayload, type Payload } from "payload";
import config from "../src/payload.config";

const PHOTOS: Record<string, string> = {
  "barn-path": "Two riders walking their horses down a farm path",
  "between-the-ears": "View between a horse's ears of a rider in a field",
  "black-horse": "Portrait of a black horse in a dressage bridle",
  "care-feeding": "Emily feeding hay to a horse from a wheelbarrow",
  "community-ribbons": "Four riders smiling with their ribbons in front of horse stalls",
  emily: "Emily Markham smiling in a riding helmet",
  friends: "Two riders standing with their horses outside the barn",
  groundwork: "Two riders doing groundwork with a horse on a lunge line",
  "hero-ride": "A rider sitting on a bay horse in an open field",
  pasture: "Emily greeting a gray horse over a pasture fence",
  resting: "A paint horse resting in a bed of shavings",
  "ribbon-day": "A gray horse between two smiling women holding a red ribbon",
  teaching: "Emily coaching a young rider on a palomino in an indoor arena",
  "trail-walk": "Emily leading a young rider on a horse through the woods",
  training: "A rider schooling a black horse in an indoor arena",
  "young-rider": "A young rider on a palomino listening to Emily",
};

const getMediaIds = async (payload: Payload): Promise<Record<string, number>> => {
  const ids: Record<string, number> = {};
  for (const [name, alt] of Object.entries(PHOTOS)) {
    const filename = `${name}.jpg`;
    const { docs } = await payload.find({ collection: "media", limit: 1, where: { filename: { equals: filename } } });
    const doc = docs[0] || (await payload.create({ collection: "media", data: { alt }, filePath: path.resolve(process.cwd(), "public/images/site", filename) }));
    ids[name] = doc.id as number;
  }
  return ids;
};

const t = (text: string) => ({ text });

const seedHome = async () => {
  const payload = await getPayload({ config });
  if (process.argv.includes("--if-empty")) {
    const { totalDocs } = await payload.count({ collection: "pages", where: { slug: { equals: "home" } } });
    if (totalDocs > 0) {
      console.log("Home page exists; skipping.");
      process.exit(0);
    }
  }
  const m = await getMediaIds(payload);

  const sections = [
    {
      blockType: "photoHero" as const,
      buttons: [
        { href: "#reach-out", label: "Reach out", style: "solid" as const },
        { href: "#what-we-offer", label: "What we offer", style: "outline" as const },
      ],
      eyebrow: "Teaching · Training · Mindfulness",
      heading: "From the Saddle to the Soul",
      image: m["hero-ride"],
      subheading: "Equine Training and Wellness Practices",
    },
    {
      anchor: "who-we-are",
      blockType: "photoCards" as const,
      cards: [
        {
          details: [
            t("We incorporate mindful practices to develop yourself as a person and as an equestrian."),
            t("We help to deepen your connection with your horse by teaching intentional training methods and utilizing grooming and groundwork that translate to a more confirmed riding relationship."),
          ],
          image: m.pasture,
          lead: "Connect with yourself, the horse, like-minded equestrians and community members.",
          title: "Connection",
        },
        {
          details: [t("We understand that your development as a person is just as important as the development of your horse.")],
          image: m["care-feeding"],
          lead: "We teach practices that promote rider wholeness and wellbeing alongside equal care and concern for your equine partner.",
          title: "Care",
        },
        {
          details: [t("We encourage riders to think creatively about the larger experience of their personal equestrian journey.")],
          image: m.groundwork,
          lead: "We use a combination of kinesthetic, visual, and verbal techniques to accommodate all learning styles and levels of ability.",
          title: "Creativity",
        },
      ],
      eyebrow: "Who we are",
      heading: "We train horses, teach equestrians, and support our local community through connection, care, and creativity.",
      intro: "Provide flexible and holistic equine services and experiences with a focus on dressage and developing an intentional mindset.",
    },
    {
      anchor: "what-we-offer",
      blockType: "photoRows" as const,
      box: {
        buttonHref: "#reach-out",
        buttonLabel: "Reach out",
        items: [
          t("Group lessons (up to 3 riders)"),
          t("Youth lessons (<15 years of age)"),
          t("Show coaching"),
          t("Clinics: Invite me to spend the day at your facility!"),
          t("Travel services (for existing clients only)"),
        ],
        text: "Packages can be tailored to client-specific needs and can mix/match lessons or training sessions depending on what is needed that month.",
        title: "Packages",
      },
      eyebrow: "What we offer",
      heading: "ChoiceEQ supports every aspect of a rider and horses' journey and meets them where they're at to support wellness and promote growth.",
      rows: [
        {
          image: m.teaching,
          paragraphs: [t("We provide individualized instruction based on rider needs with a focus on mastering the basics and advancing the practice using the dressage training scale.")],
          title: "Teaching",
        },
        {
          image: m.training,
          paragraphs: [
            t("We offer intentional, holistic training for horses with a dressage focus and knowledge of biomechanics that promotes longevity and soundness."),
            t("We recommend a combination of lessons and training sessions to ensure proper development of horse and rider skills."),
            t("We understand that riding is a partnership; you can only teach your horse as much as you know."),
          ],
          title: "Training",
        },
        {
          image: m["trail-walk"],
          paragraphs: [t("We offer group stretching and mindfulness practices, workshops, and community connection circles in an equestrian setting.")],
          title: "Wellness experiences",
        },
      ],
    },
    {
      anchor: "our-impact",
      blockType: "photoBand" as const,
      brighten: true,
      eyebrow: "Our impact",
      heading: "ChoiceEQ works to improve clients' confidence in the saddle, to nurture horse and rider wellbeing, and to create personal growth opportunities in the local community.",
      image: m["black-horse"],
      items: [
        t("Increased confidence and self-awareness."),
        t("Solid understanding of the basics and a strong foundation to support any discipline of riding."),
        t("Knowledge of your physical patterns and development of core strength."),
        t("Sense of clarity in understanding how to develop your horse independently."),
        t("Deeper and clearer connection to your equine partner."),
        t("Connection to a larger community that is committed to personal development and wellness."),
      ],
      listHeading: "Through working with us, you will gain:",
    },
    {
      attribution: "Tricia",
      blockType: "quote" as const,
      paragraphs: [
        t("Today's lesson was soooo great! I truly felt so comfortable and I'm gaining confidence, you are an amazing instructor, getting the best out of people..."),
        t("For me, it's an opportunity to strengthen my body and especially my mind. It's almost like yoga...concentrating and being in the moment is great for my mental health."),
      ],
    },
    {
      blockType: "profile" as const,
      image: m.emily,
      items: [
        t("A trainer, instructor, and coach who is committed to helping you achieve your equestrian goals."),
        t("Personalized mental and physical exercises in combination with goal monitoring for progress."),
        t("Practices to increase the ability to regulate your emotional responses to riding."),
        t("Mentorship from a professional with 20+ years of experience caring for horses at all levels."),
      ],
      name: "Emily Markham",
      paragraphs: [
        t("I am a traveling instructor who teaches lessons and provides training services with a dressage focus. I pride myself on having a creative and inclusive approach to training, while showing exceptional care for horse and rider."),
      ],
      role: "Owner/CEO",
    },
    {
      blockType: "photoGrid" as const,
      heading: "Ride. Learn. Connect.",
      photos: [
        { image: m["community-ribbons"], size: "large" as const },
        { image: m["barn-path"], size: "normal" as const },
        { image: m["ribbon-day"], size: "tall" as const },
        { image: m["young-rider"], size: "normal" as const },
        { image: m.friends, size: "wide" as const },
        { image: m.resting, size: "wide" as const },
      ],
      text: "Growing our community through horses.",
    },
    {
      anchor: "reach-out",
      backgroundImage: m["between-the-ears"],
      blockType: "contactBand" as const,
      heading: "Please reach out with any questions.",
      phoneLabel: "Call/text",
      socialText: "Follow us on social media:",
      text: "Please feel free to respond via email or you can call/text me at 716.785.5288.",
    },
  ];

  const data = {
    _status: "published" as const,
    sections,
    seo: {
      description: "Provide flexible and holistic equine services and experiences with a focus on dressage and developing an intentional mindset.",
      title: "ChoiceEQ | From the Saddle to the Soul: Equine Training and Wellness Practices",
    },
    slug: "home",
    title: "Home",
  };
  const { docs } = await payload.find({ collection: "pages", limit: 1, where: { slug: { equals: "home" } } });
  if (docs[0]) await payload.update({ collection: "pages", data, id: docs[0].id });
  else await payload.create({ collection: "pages", data });

  await payload.updateGlobal({
    data: {
      ctaButtons: [{ label: "Reach out", linkType: "url", style: "primary", url: "/#reach-out" }],
      navItems: [
        { label: "Who we are", linkType: "url", url: "/#who-we-are" },
        { label: "What we offer", linkType: "url", url: "/#what-we-offer" },
        { label: "Our impact", linkType: "url", url: "/#our-impact" },
      ],
    },
    slug: "navigation",
  });
  await payload.updateGlobal({
    data: {
      contact: { email: "emarkham@choiceeq.com", phone: "716.785.5288" },
      siteName: "ChoiceEQ",
      socialMedia: { facebook: "https://www.facebook.com/choiceeq", instagram: "https://www.instagram.com/choiceeq/" },
      tagline: "Encourage creativity & wholeness in people through equine practices.",
    },
    slug: "site-settings",
  });

  console.log("Home page loaded.");
  process.exit(0);
};

seedHome().catch((err) => {
  console.error(err);
  process.exit(1);
});
