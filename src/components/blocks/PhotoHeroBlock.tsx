import Image from "next/image";
import Link from "next/link";
import { getOverlayFromMedia } from "./overlay";
import { getMediaAlt, getMediaPosition, getMediaSrc, type BlockOf } from "./types";

export function PhotoHeroBlock({ block }: { block: BlockOf<"photoHero"> }) {
  const src = getMediaSrc(block.image);
  const overlay = getOverlayFromMedia(block.image, { color: "dark", strength: "medium" });
  const tint = (amount: number) => overlay?.tint(amount) ?? "transparent";

  return (
    <section className="relative flex min-h-[calc(92svh-6rem)] items-end overflow-hidden bg-neutral text-white">
      {src && <Image src={src} alt={getMediaAlt(block.image)} fill priority sizes="100vw" className="object-cover" style={getMediaPosition(block.image)} />}
      {overlay && (
        <div
          className="absolute inset-0 bg-[image:var(--overlay-mobile)] md:bg-[image:var(--overlay-desktop)]"
          style={{
            "--overlay-desktop": `linear-gradient(to right, ${tint(1.15)}, ${tint(0.6)}, transparent)`,
            "--overlay-mobile": `linear-gradient(to top, ${tint(1.2)}, ${tint(0.55)}, ${tint(0.3)})`,
          } as React.CSSProperties}
        />
      )}
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-24 md:px-8 md:pb-24">
        {block.eyebrow && <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white/85">{block.eyebrow}</p>}
        <h1 className="max-w-3xl text-white">{block.heading}</h1>
        {block.subheading && <p className="mt-6 max-w-xl text-lg text-white/90 md:text-xl">{block.subheading}</p>}
        {!!block.buttons?.length && (
          <div className="mt-9 flex flex-wrap gap-3">
            {block.buttons.map((button) => (
              <Link
                key={button.id || button.label}
                href={button.href}
                className={
                  button.style === "outline"
                    ? "rounded-full border border-white/70 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
                    : "rounded-full bg-base-100 px-7 py-3.5 font-semibold text-base-content transition-colors hover:bg-accent"
                }
              >
                {button.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
