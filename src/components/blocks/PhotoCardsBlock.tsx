import Image from "next/image";
import { getMediaAlt, getMediaSrc, type BlockOf } from "./types";

export function PhotoCardsBlock({ block }: { block: BlockOf<"photoCards"> }) {
  return (
    <section id={block.anchor || undefined} className="scroll-mt-24 bg-base-100 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          {block.eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{block.eyebrow}</p>}
          {block.heading && <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{block.heading}</h2>}
          {block.intro && <p className="mt-6 text-lg text-base-content/80">{block.intro}</p>}
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {block.cards?.map((card) => (
            <article key={card.id || card.title}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-base-200">
                <Image src={getMediaSrc(card.image)} alt={getMediaAlt(card.image)} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <h3 className="mt-6 text-2xl font-medium">{card.title}</h3>
              {card.lead && <p className="mt-3 text-base-content/90">{card.lead}</p>}
              {card.details?.map((detail) => (
                <p key={detail.id || detail.text} className="mt-3 text-base-content/70">{detail.text}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
