import type { Media, SiteSetting } from "@/payload-types";
import { themeConfig } from "@/config/theme";

type FontOption = { family: string; fallback: string; label: string; weights: string };

export const HEADING_FONTS: Record<string, FontOption> = {
  cormorant: { family: "Cormorant Garamond", fallback: "Georgia, serif", label: "Cormorant Garamond", weights: "400;500;600;700" },
  dmSerif: { family: "DM Serif Display", fallback: "Georgia, serif", label: "DM Serif Display", weights: "400" },
  fraunces: { family: "Fraunces", fallback: "Georgia, serif", label: "Fraunces", weights: "400;500;600;700" },
  libreBaskerville: { family: "Libre Baskerville", fallback: "Georgia, serif", label: "Libre Baskerville", weights: "400;700" },
  lora: { family: "Lora", fallback: "Georgia, serif", label: "Lora", weights: "400;500;600;700" },
  montserrat: { family: "Montserrat", fallback: "system-ui, sans-serif", label: "Montserrat", weights: "400;500;600;700" },
  playfair: { family: "Playfair Display", fallback: "Georgia, serif", label: "Playfair Display", weights: "400;500;600;700" },
};

export const BODY_FONTS: Record<string, FontOption> = {
  dmSans: { family: "DM Sans", fallback: "system-ui, sans-serif", label: "DM Sans", weights: "400;500;600;700" },
  inter: { family: "Inter", fallback: "system-ui, sans-serif", label: "Inter", weights: "400;500;600;700" },
  karla: { family: "Karla", fallback: "system-ui, sans-serif", label: "Karla", weights: "400;500;600;700" },
  lato: { family: "Lato", fallback: "system-ui, sans-serif", label: "Lato", weights: "400;700" },
  nunitoSans: { family: "Nunito Sans", fallback: "system-ui, sans-serif", label: "Nunito Sans", weights: "400;500;600;700" },
  sourceSans: { family: "Source Sans 3", fallback: "system-ui, sans-serif", label: "Source Sans 3", weights: "400;500;600;700" },
  workSans: { family: "Work Sans", fallback: "system-ui, sans-serif", label: "Work Sans", weights: "400;500;600;700" },
};

export const DEFAULT_HEADING_FONT = "fraunces";
export const DEFAULT_BODY_FONT = "dmSans";

export const THEME_COLOR_FIELDS = [
  { cssVar: "--color-primary", contentVar: "--color-primary-content", defaultValue: themeConfig.colors.primary, label: "Primary (buttons, links)", name: "primary" },
  { cssVar: "--color-secondary", contentVar: "--color-secondary-content", defaultValue: themeConfig.colors.secondary, label: "Secondary", name: "secondary" },
  { cssVar: "--color-accent", contentVar: "--color-accent-content", defaultValue: themeConfig.colors.accent, label: "Accent (soft background)", name: "accent" },
  { cssVar: "--color-neutral", contentVar: "--color-neutral-content", defaultValue: themeConfig.colors.neutral, label: "Dark sections", name: "neutral" },
  { cssVar: "--color-base-100", defaultValue: themeConfig.colors.base100, label: "Page background", name: "background" },
  { cssVar: "--color-base-200", defaultValue: themeConfig.colors.base200, label: "Alternate background", name: "backgroundAlt" },
  { cssVar: "--color-base-content", defaultValue: themeConfig.colors.baseContent, label: "Text", name: "text" },
] as const;

const HEX = /^#[0-9a-f]{6}$/i;

const getContentColorFromHex = (hex: string, darkText: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.4 ? darkText : "#FFFFFF";
};

export const getThemeCssFromSettings = (settings: SiteSetting | null) => {
  const colors = (settings?.theme?.colors || {}) as Record<string, string | null | undefined>;
  const text = HEX.test(colors.text || "") ? (colors.text as string) : themeConfig.colors.baseContent;
  const lines: string[] = [];
  for (const field of THEME_COLOR_FIELDS) {
    const value = colors[field.name];
    if (!value || !HEX.test(value) || value.toLowerCase() === field.defaultValue.toLowerCase()) continue;
    lines.push(`${field.cssVar}: ${value};`);
    if ("contentVar" in field) lines.push(`${field.contentVar}: ${getContentColorFromHex(value, text)};`);
  }
  const heading = HEADING_FONTS[settings?.theme?.headingFont || ""];
  const body = BODY_FONTS[settings?.theme?.bodyFont || ""];
  const fontLines = [
    heading && settings?.theme?.headingFont !== DEFAULT_HEADING_FONT ? `--font-heading: "${heading.family}", ${heading.fallback};` : "",
    body && settings?.theme?.bodyFont !== DEFAULT_BODY_FONT ? `--font-sans: "${body.family}", ${body.fallback};` : "",
  ].filter(Boolean);
  return [lines.length ? `:root:root { ${lines.join(" ")} }` : "", fontLines.length ? `body[class] { ${fontLines.join(" ")} }` : ""].filter(Boolean).join("\n");
};

export const getGoogleFontsUrlFromSettings = (settings: SiteSetting | null) => {
  const picks = [
    settings?.theme?.headingFont !== DEFAULT_HEADING_FONT ? HEADING_FONTS[settings?.theme?.headingFont || ""] : undefined,
    settings?.theme?.bodyFont !== DEFAULT_BODY_FONT ? BODY_FONTS[settings?.theme?.bodyFont || ""] : undefined,
  ].filter((font): font is FontOption => !!font);
  if (!picks.length) return null;
  const families = picks.map((font) => `family=${font.family.replace(/ /g, "+")}:wght@${font.weights}`).join("&");
  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
};

export const getLogoFromMedia = (media: number | Media | null | undefined, fallback: { height: number; src: string; width: number }) => {
  if (!media || typeof media !== "object" || !media.url) return fallback;
  const src = media.url.replace(/^https?:\/\/[^/]+(?=\/api\/media\/)/, "");
  return { height: media.height || fallback.height, src: media.updatedAt ? `${src}?v=${Date.parse(media.updatedAt)}` : src, width: media.width || fallback.width };
};
