import type { Metadata } from "next";
import { CartView } from "./CartView";

export const metadata: Metadata = { robots: { index: false }, title: "Cart | Choice Equine" };

export default function CartPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: "var(--font-heading)" }}>Cart</h1>
        <CartView />
      </div>
    </main>
  );
}
