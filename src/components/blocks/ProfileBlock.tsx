import Image from "next/image";
import { getMediaAlt, getMediaPosition, getMediaSrc, type BlockOf } from "./types";

export function ProfileBlock({ block }: { block: BlockOf<"profile"> }) {
  return (
    <section id={block.anchor || undefined} className="scroll-mt-24 bg-base-100 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[5fr_7fr] md:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
          <Image src={getMediaSrc(block.image)}
              style={getMediaPosition(block.image)} alt={getMediaAlt(block.image)} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
        </div>
        <div>
          <h2 className="text-4xl leading-tight md:text-5xl">{block.name}</h2>
          {block.role && <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{block.role}</p>}
          <div className="mt-6 space-y-4 text-lg text-base-content/80">
            {block.paragraphs?.map((p) => <p key={p.id || p.text}>{p.text}</p>)}
          </div>
          {!!block.items?.length && (
            <ul className="mt-8 space-y-3">
              {block.items.map((item) => (
                <li key={item.id || item.text} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                  {item.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
