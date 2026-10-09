import Link from "next/link";
import type { Metadata } from "next";
import { getPayload } from "@/lib/payload";
import { ProductCard } from "@/components/cards/ProductCard";

export const metadata: Metadata = { title: "Shop | Choice Equine" };

export default async function ProductsPage() {
  const payload = await getPayload();
  const { docs: products } = await payload.find({
    collection: "products",
    depth: 1,
    limit: 100,
    sort: ["order", "-createdAt"],
  });

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 md:px-10 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10" style={{ fontFamily: "var(--font-heading)" }}>Shop</h1>
        {products.length === 0 ? (
          <p className="opacity-75">New products are on the way. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="block">
                <ProductCard item={product} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
