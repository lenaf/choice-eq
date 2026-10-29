import { cache } from "react";
import type { Navigation, Page, SiteSetting } from "@/payload-types";
import { getPayload } from "./payload";

export interface NavLink {
  href: string;
  label: string;
}

const getHrefFromNavItem = (item: { linkType?: string | null; page?: number | Page | null; url?: string | null }): string => {
  if (item.linkType === "page" && item.page && typeof item.page === "object") return item.page.slug === "home" ? "/" : `/${item.page.slug}`;
  return item.url || "/";
};

export const getSiteSettings = cache(async (): Promise<SiteSetting | null> => {
  try {
    const payload = await getPayload();
    return await payload.findGlobal({ slug: "site-settings", depth: 1 });
  } catch {
    return null;
  }
});

export const getNavLinks = cache(async (): Promise<{ cta: NavLink | null; links: NavLink[] }> => {
  try {
    const payload = await getPayload();
    const nav: Navigation = await payload.findGlobal({ slug: "navigation", depth: 1 });
    const links = (nav.navItems || []).filter((i) => i.label).map((i) => ({ href: getHrefFromNavItem(i), label: i.label as string }));
    const button = nav.ctaButtons?.[0];
    return { cta: button ? { href: getHrefFromNavItem(button), label: button.label } : null, links };
  } catch {
    return { cta: null, links: [] };
  }
});

export const getPageBySlug = cache(async (slug: string, draft = false): Promise<Page | null> => {
  try {
    const payload = await getPayload();
    const { docs } = await payload.find({ collection: "pages", depth: 2, draft, limit: 1, where: { slug: { equals: slug } } });
    return docs[0] || null;
  } catch {
    return null;
  }
});
