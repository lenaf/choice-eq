import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Product } from "@/payload-types";
import { getPayload } from "@/lib/payload";
import { formatPrice, getProductImages, isSoldOut } from "@/lib/products";
import { LexicalRenderer } from "@/components/LexicalRenderer";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

async function getProductBySlug(slug: string): Promise<Product | null> {
  const payload = await getPayload();
  const { docs } = await payload.find({ collection: "products", depth: 1, limit: 1, where: { slug: { equals: slug } } });
  return docs[0] || null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = await getProductBySlug((await params).slug);
  if (!product) return {};
  const image = getProductImages(product)[0]?.url;
  return {
    description: product.summary || undefined,
    openGraph: image ? { images: [image] } : undefined,
    title: `${product.name} | Choice Equine`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = await getProductBySlug((await params).slug);
  if (!product) notFound();

  const images = getProductImages(product);
  const soldOut = isSoldOut(product);

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <Link href="/products" className="text-sm opacity-75 hover:opacity-100">← Back to shop</Link>
        <div className="mt-6 grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            {images.length === 0 && <div className="aspect-square bg-base-200 flex items-center justify-center text-6xl" aria-hidden="true">🐴</div>}
            {images.map((image) => (
              <img key={image.id} src={image.url || ""} alt={image.alt || product.name} className="w-full object-cover" />
            ))}
          </div>
          <div className="md:sticky md:top-24 self-start">
            <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{product.name}</h1>
            <p className="text-xl mt-2">{formatPrice(product.price)}</p>
            {product.summary && <p className="mt-4 opacity-80">{product.summary}</p>}
            <div className="mt-6">
              <AddToCartButton
                maxQuantity={product.inventory}
                product={{ id: String(product.id), imageUrl: images[0]?.url || undefined, name: product.name, price: product.price, slug: product.slug || "" }}
                soldOut={soldOut}
              />
            </div>
            {product.description && (
              <div className="mt-8 prose max-w-none">
                <LexicalRenderer content={product.description} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
