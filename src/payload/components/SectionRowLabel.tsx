"use client";

import { useEffect, useState } from "react";
import { useRowLabel } from "@payloadcms/ui";

const BLOCK_LABELS: Record<string, string> = {
  contactBand: "Contact Band",
  photoBand: "Dark Photo Band",
  photoCards: "Photo Cards",
  photoGrid: "Photo Grid",
  photoHero: "Photo Hero",
  photoRows: "Photo + Text Rows",
  profile: "Profile",
  quote: "Quote",
};

type MediaRef = number | string | { id?: number | string; thumbnailURL?: string | null } | null | undefined;

type SectionData = {
  anchor?: string;
  backgroundImage?: MediaRef;
  blockType?: string;
  cards?: { image?: MediaRef }[];
  heading?: string;
  image?: MediaRef;
  name?: string;
  paragraphs?: { text?: string }[];
  photos?: { image?: MediaRef }[];
  rows?: { image?: MediaRef }[];
};

const getPreviewTextFromSection = (data: SectionData) =>
  (data.heading || data.name || data.paragraphs?.[0]?.text || data.anchor || "").replace(/\s+/g, " ").trim();

const getImageFromSection = (data: SectionData): MediaRef =>
  data.image || data.backgroundImage || data.cards?.[0]?.image || data.rows?.[0]?.image || data.photos?.[0]?.image;

export function SectionRowLabel() {
  const { data, rowNumber } = useRowLabel<SectionData>();
  const image = getImageFromSection(data || {});
  const imageId = image && typeof image === "object" ? image.id : image;
  const [thumbnail, setThumbnail] = useState<string | null>(
    image && typeof image === "object" ? image.thumbnailURL || null : null,
  );

  useEffect(() => {
    if (!imageId) return setThumbnail(null);
    const loadThumbnail = async () => {
      try {
        const res = await fetch(`/api/media/${imageId}?depth=0`, { credentials: "include" });
        const media = await res.json();
        setThumbnail(media?.thumbnailURL || media?.url || null);
      } catch {
        setThumbnail(null);
      }
    };
    loadThumbnail();
  }, [imageId]);

  const preview = getPreviewTextFromSection(data || {});
  const blockLabel = BLOCK_LABELS[data?.blockType || ""] || data?.blockType;

  return (
    <span style={{ alignItems: "center", display: "flex", gap: "0.875rem", minWidth: 0, padding: "2px 0" }}>
      <span
        style={{
          alignItems: "center",
          background: thumbnail ? `center / cover no-repeat url("${thumbnail}")` : "var(--theme-elevation-100)",
          borderRadius: 6,
          boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.06)",
          color: "#4F6E61",
          display: "flex",
          flexShrink: 0,
          fontFamily: "Georgia, serif",
          fontSize: 28,
          height: 44,
          justifyContent: "center",
          lineHeight: 1,
          width: 64,
        }}
      >
        {!imageId && "\u201C"}
      </span>
      <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
        <span
          style={{
            color: "var(--theme-elevation-500)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {String((rowNumber ?? 0) + 1).padStart(2, "0")} · {blockLabel}
        </span>
        <span
          style={{
            color: "var(--theme-elevation-800)",
            fontSize: 15,
            fontWeight: 500,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {preview || "No heading yet"}
        </span>
      </span>
    </span>
  );
}
