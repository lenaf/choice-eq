import type { CSSProperties } from "react";
import type { Media, Page } from "@/payload-types";

export type PageSection = NonNullable<Page["sections"]>[number];
export type BlockOf<T extends PageSection["blockType"]> = Extract<PageSection, { blockType: T }>;

export const getMediaSrc = (media: number | Media | null | undefined): string => {
  if (!media || typeof media !== "object" || !media.url) return "";
  const src = media.url.replace(/^https?:\/\/[^/]+(?=\/api\/media\/)/, "");
  return media.updatedAt ? `${src}?v=${Date.parse(media.updatedAt)}` : src;
};

export const getMediaPosition = (media: number | Media | null | undefined): CSSProperties | undefined =>
  media && typeof media === "object" && media.focalX != null && media.focalY != null
    ? { objectPosition: `${media.focalX}% ${media.focalY}%` }
    : undefined;

export const getMediaAlt = (media: number | Media | null | undefined): string =>
  media && typeof media === "object" ? media.alt || "" : "";
