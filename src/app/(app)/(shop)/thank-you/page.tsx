import Link from "next/link";
import type { Metadata } from "next";
import { ClearCart } from "./ClearCart";

export const metadata: Metadata = { robots: { index: false }, title: "Thank you | Choice Equine" };

export default function ThankYouPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 md:px-10">
      <ClearCart />
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Thank you!</h1>
        <p className="mt-4 opacity-80">Your order is in. A receipt is on its way to your email.</p>
        <Link href="/products" className="btn btn-primary mt-8">Keep shopping</Link>
      </div>
    </main>
  );
}
