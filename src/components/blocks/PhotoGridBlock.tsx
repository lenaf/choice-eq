import Image from "next/image";
import { getMediaAlt, getMediaSrc, type BlockOf } from "./types";

const SIZE_CLASSES: Record<string, string> = {
  large: "md:col-span-2 md:row-span-2",
  normal: "",
  tall: "md:row-span-2",
  wide: "col-span-2",
};

export function PhotoGridBlock({ block }: { block: BlockOf<"photoGrid"> }) {
  return (
    <section id={block.anchor || undefined} className="scroll-mt-24 bg-base-200 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        {(block.heading || block.text) && (
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            {block.heading && <h2 className="text-4xl leading-tight md:text-5xl">{block.heading}</h2>}
            {block.text && <p className="max-w-md text-base-content/80">{block.text}</p>}
          </div>
        )}
        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4 md:gap-4">
          {block.photos?.map((photo, i) => (
            <div key={photo.id || i} className={`relative overflow-hidden rounded-xl ${SIZE_CLASSES[photo.size || "normal"]}`}>
              <Image src={getMediaSrc(photo.image)} alt={getMediaAlt(photo.image)} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
