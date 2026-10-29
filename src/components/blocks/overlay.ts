const OVERLAY_COLOR = {
  charcoal: "var(--color-neutral)",
  dark: "#000000",
  green: "var(--color-primary)",
  plum: "var(--color-secondary)",
} as const;
const OVERLAY_ALPHA = { light: 0.4, medium: 0.65, strong: 0.85 } as const;

type OverlayMedia = number | { overlayColor?: string | null; overlayStrength?: string | null } | null | undefined;

const getSetting = (value: string | null | undefined, fallback: string) => (!value || value === "auto" ? fallback : value);

export const getOverlayFromMedia = (media: OverlayMedia, fallback: { color: "dark" | "green"; strength: keyof typeof OVERLAY_ALPHA }) => {
  const settings = media && typeof media === "object" ? media : {};
  const color = getSetting(settings.overlayColor, fallback.color) as keyof typeof OVERLAY_COLOR | "none";
  if (color === "none") return null;
  const alpha = OVERLAY_ALPHA[getSetting(settings.overlayStrength, fallback.strength) as keyof typeof OVERLAY_ALPHA] ?? OVERLAY_ALPHA.medium;
  const base = OVERLAY_COLOR[color] ?? OVERLAY_COLOR.dark;
  return { alpha, tint: (amount = 1) => `color-mix(in srgb, ${base} ${Math.round(Math.min(alpha * amount, 1) * 100)}%, transparent)` };
};
