import { themeConfig } from "@/config/theme";

const getRgbFromHex = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(", ");

const OVERLAY_RGB = {
  charcoal: getRgbFromHex(themeConfig.colors.neutral),
  dark: "0, 0, 0",
  green: getRgbFromHex(themeConfig.colors.primary),
  plum: getRgbFromHex(themeConfig.colors.secondary),
} as const;
const OVERLAY_ALPHA = { light: 0.4, medium: 0.65, strong: 0.85 } as const;

type OverlayMedia = number | { overlayColor?: string | null; overlayStrength?: string | null } | null | undefined;

const getSetting = (value: string | null | undefined, fallback: string) => (!value || value === "auto" ? fallback : value);

export const getOverlayFromMedia = (media: OverlayMedia, fallback: { color: "dark" | "green"; strength: keyof typeof OVERLAY_ALPHA }) => {
  const settings = media && typeof media === "object" ? media : {};
  const color = getSetting(settings.overlayColor, fallback.color) as keyof typeof OVERLAY_RGB | "none";
  if (color === "none") return null;
  const alpha = OVERLAY_ALPHA[getSetting(settings.overlayStrength, fallback.strength) as keyof typeof OVERLAY_ALPHA] ?? OVERLAY_ALPHA.medium;
  return { alpha, rgb: OVERLAY_RGB[color] ?? OVERLAY_RGB.dark };
};
