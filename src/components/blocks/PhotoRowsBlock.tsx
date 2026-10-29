import Image from "next/image";
import Link from "next/link";
import { getMediaAlt, getMediaPosition, getMediaSrc, type BlockOf } from "./types";

export function PhotoRowsBlock({ block }: { block: BlockOf<"photoRows"> }) {
  const box = block.box;

  return (
    <section id={block.anchor || undefined} className="scroll-mt-24 bg-base-200 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        {block.eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{block.eyebrow}</p>}
        {block.heading && <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">{block.heading}</h2>}

        <div className="mt-14 space-y-16 md:space-y-24">
          {block.rows?.map((row, i) => (
            <article key={row.id || row.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${i % 2 ? "md:order-2" : ""}`}>
                <Image src={getMediaSrc(row.image)}
              style={getMediaPosition(row.image)} alt={getMediaAlt(row.image)} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div>
                <h3 className="text-3xl font-medium">{row.title}</h3>
                {row.paragraphs?.map((p) => (
                  <p key={p.id || p.text} className="mt-4 text-lg text-base-content/80">{p.text}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {box?.title && (
          <div className="mt-20 rounded-2xl bg-base-100 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
              <div>
                <h3 className="text-2xl font-medium">{box.title}</h3>
                {box.text && <p className="mt-3 text-base-content/70">{box.text}</p>}
              </div>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {box.items?.map((item) => (
                  <li key={item.id || item.text} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            {box.buttonLabel && box.buttonHref && (
              <Link href={box.buttonHref} className="mt-10 inline-block rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-content transition-colors hover:bg-neutral">
                {box.buttonLabel}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
