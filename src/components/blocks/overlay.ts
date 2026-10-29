const OVERLAY_RGB = { dark: "0, 0, 0", green: "79, 110, 97" } as const;
const OVERLAY_ALPHA = { light: 0.4, medium: 0.65, strong: 0.85 } as const;

type OverlayBlock = { overlayColor?: string | null; overlayStrength?: string | null };

export const getOverlayFromBlock = (block: OverlayBlock, fallback: { color: "dark" | "green"; strength: keyof typeof OVERLAY_ALPHA }) => {
  const color = (block.overlayColor || fallback.color) as keyof typeof OVERLAY_RGB | "none";
  if (color === "none") return null;
  const alpha = OVERLAY_ALPHA[(block.overlayStrength || fallback.strength) as keyof typeof OVERLAY_ALPHA] ?? OVERLAY_ALPHA.medium;
  return { alpha, rgb: OVERLAY_RGB[color] };
};
