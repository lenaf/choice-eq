"use client";

import { useRowLabel } from "@payloadcms/ui";

const DATA_SOURCE_LABELS: Record<string, string> = {
  products: "Products",
};

const LAYOUT_LABELS: Record<string, string> = {
  grid: "Grid",
  list: "List",
  carousel: "Carousel",
  featured: "Featured",
};

export function BlockLabel() {
  const { data } = useRowLabel<{ label?: string; title?: string; dataSource?: string; layout?: string }>();
  if (data?.label) return <span>{data.label}</span>;
  if (data?.title) return <span>{data.title}</span>;
  if (data?.dataSource) {
    const source = DATA_SOURCE_LABELS[data.dataSource] || data.dataSource;
    const layout = data.layout ? LAYOUT_LABELS[data.layout] || data.layout : "";
    return <span>{layout ? `${source} — ${layout}` : source}</span>;
  }
  return null;
}

export function NavItemRowLabel() {
  const { data, rowNumber } = useRowLabel<{ label?: string }>();
  if (data?.label) return <span>{data.label}</span>;
  return <span>{`Item ${String(rowNumber).padStart(2, "0")}`}</span>;
}

export function CtaButtonRowLabel() {
  const { data, rowNumber } = useRowLabel<{ label?: string }>();
  if (data?.label) return <span>{data.label}</span>;
  return <span>{`Button ${String(rowNumber).padStart(2, "0")}`}</span>;
}

export function FormFieldRowLabel() {
  const { data, rowNumber } = useRowLabel<{ label?: string; mapsTo?: string }>();
  if (data?.label) return <span>{data.label}{data.mapsTo ? ` → ${data.mapsTo}` : ""}</span>;
  return <span>{`Field ${String(rowNumber).padStart(2, "0")}`}</span>;
}

export function HeroButtonRowLabel() {
  const { data, rowNumber } = useRowLabel<{ href?: string; label?: string; style?: string }>();
  const isOutline = data?.style === "outline";
  return (
    <span style={{ alignItems: "center", display: "flex", gap: "0.75rem", minWidth: 0 }}>
      <span
        style={{
          background: isOutline ? "transparent" : "#4F6E61",
          border: "1.5px solid #4F6E61",
          borderRadius: 999,
          color: isOutline ? "#4F6E61" : "#FFFFFF",
          flexShrink: 0,
          fontSize: 13,
          fontWeight: 600,
          padding: "4px 14px",
          whiteSpace: "nowrap",
        }}
      >
        {data?.label || `Button ${String((rowNumber ?? 0) + 1).padStart(2, "0")}`}
      </span>
      {data?.href && (
        <span style={{ color: "var(--theme-elevation-500)", fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          → {data.href}
        </span>
      )}
    </span>
  );
}
