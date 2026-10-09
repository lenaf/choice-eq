import type { Media, Page } from "@/payload-types";

export type PageSection = NonNullable<Page["sections"]>[number];
export type BlockOf<T extends PageSection["blockType"]> = Extract<PageSection, { blockType: T }>;

export const getMediaSrc = (media: number | Media | null | undefined): string => {
  if (!media || typeof media !== "object" || !media.url) return "";
  return media.url.replace(/^https?:\/\/localhost(:\d+)?/, "");
};

export const getMediaAlt = (media: number | Media | null | undefined): string =>
  media && typeof media === "object" ? media.alt || "" : "";
