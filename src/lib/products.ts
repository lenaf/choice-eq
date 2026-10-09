import type { Media, Product } from "@/payload-types";

export const formatPrice = (dollars: number): string =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(dollars);

export const getProductImages = (product: Pick<Product, "images">): Media[] =>
  (product.images || []).filter((img): img is Media => typeof img === "object" && img !== null);

export const isSoldOut = (product: Pick<Product, "inventory">): boolean =>
  typeof product.inventory === "number" && product.inventory <= 0;
