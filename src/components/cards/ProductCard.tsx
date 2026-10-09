import type { Product } from "@/payload-types";
import { formatPrice, getProductImages, isSoldOut } from "@/lib/products";

export function ProductCard({ item }: { item: Product }) {
  const image = getProductImages(item)[0];

  return (
    <div className="group h-full flex flex-col bg-base-100 text-base-content">
      <div className="relative aspect-square overflow-hidden bg-base-200">
        {image?.url ? (
          <img src={image.url} alt={image.alt || item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl" aria-hidden="true">🐴</div>
        )}
        {isSoldOut(item) && (
          <span className="absolute top-3 left-3 bg-neutral text-neutral-content text-xs font-bold uppercase px-2 py-1">Sold Out</span>
        )}
      </div>
      <div className="pt-3 flex-1 flex flex-col">
        <h3 className="text-base font-semibold leading-snug">{item.name}</h3>
        <span className="text-sm opacity-75">{formatPrice(item.price)}</span>
      </div>
    </div>
  );
}
