import Image from "next/image";
import { getMediaAlt, getMediaPosition, getMediaSrc, type BlockOf } from "./types";

export function PhotoBandBlock({ block }: { block: BlockOf<"photoBand"> }) {
  return (
    <section id={block.anchor || undefined} className="scroll-mt-24 bg-black text-neutral-content">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        <div className="relative min-h-[420px] md:min-h-full">
          <Image
            src={getMediaSrc(block.image)}
              style={getMediaPosition(block.image)}
            alt={getMediaAlt(block.image)}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={`object-cover ${block.brighten ? "brightness-150" : ""}`}
          />
        </div>
        <div className="px-4 py-16 md:px-14 md:py-24">
          {block.eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{block.eyebrow}</p>}
          {block.heading && <h2 className="mt-4 text-2xl leading-snug text-white md:text-3xl">{block.heading}</h2>}
          {block.listHeading && (
            <h3 className="mt-12 text-lg text-white" style={{ fontFamily: "var(--font-sans)" }}>{block.listHeading}</h3>
          )}
          <ul className="mt-6 space-y-4">
            {block.items?.map((item) => (
              <li key={item.id || item.text} className="flex gap-3 text-neutral-content/90">
                <svg viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
