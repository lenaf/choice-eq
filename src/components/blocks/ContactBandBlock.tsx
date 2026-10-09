import Image from "next/image";
import type { SiteSetting } from "@/payload-types";
import { getMediaSrc, type BlockOf } from "./types";

export function ContactBandBlock({ block, settings }: { block: BlockOf<"contactBand">; settings: SiteSetting | null }) {
  const email = settings?.contact?.email;
  const phone = settings?.contact?.phone;
  const { facebook, instagram } = settings?.socialMedia || {};
  const bg = getMediaSrc(block.backgroundImage);

  return (
    <section id={block.anchor || undefined} className="relative scroll-mt-24 overflow-hidden bg-primary text-primary-content">
      {bg && <Image src={bg} alt="" fill sizes="100vw" className="object-cover opacity-20" />}
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center md:px-8 md:py-32">
        <h2 className="text-4xl leading-tight text-white md:text-6xl">{block.heading}</h2>
        {block.text && <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">{block.text}</p>}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {email && (
            <a href={`mailto:${email}`} className="w-full rounded-full bg-base-100 px-8 py-4 font-semibold text-base-content transition-colors hover:bg-accent sm:w-auto">
              {email}
            </a>
          )}
          {phone && (
            <a href={`tel:${phone.replace(/\D/g, "")}`} className="w-full rounded-full border border-white/70 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto">
              {[block.phoneLabel, phone].filter(Boolean).join(" ")}
            </a>
          )}
        </div>
        {(instagram || facebook) && (
          <p className="mt-8 text-sm text-white/80">
            {block.socialText && `${block.socialText} `}
            {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Instagram</a>}
            {instagram && facebook && " · "}
            {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Facebook</a>}
          </p>
        )}
      </div>
    </section>
  );
}
