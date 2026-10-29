import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { LivePreviewListener } from "@/components/LivePreviewListener";
import { RenderBlocks } from "@/components/blocks/RenderBlocks";
import { serverURL } from "@/lib/serverUrl";
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
  const { isEnabled: draft } = await draftMode();
  const [page, settings] = await Promise.all([getPageBySlug("home", draft), getSiteSettings()]);

  if (!page) return <main className="min-h-screen pt-24" />;

  return (
    <main className="pt-24">
      {draft && <LivePreviewListener serverURL={serverURL} />}
      <RenderBlocks sections={page.sections || []} settings={settings} />
    </main>
  );
}
