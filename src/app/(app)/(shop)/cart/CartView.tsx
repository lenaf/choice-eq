"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/products";

export function CartView() {
  const { items, removeItem, setQuantity, subtotal } = useCart();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const checkout = async () => {
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/checkout", {
        body: JSON.stringify({ items: items.map(({ id, quantity }) => ({ id, quantity })) }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || "Could not start checkout.");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not start checkout.");
      setSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div>
        <p className="opacity-75">Your cart is empty.</p>
        <Link href="/products" className="btn btn-primary mt-6">Browse the shop</Link>
      </div>
    );
  }

  return (
    <div>
      <ul className="divide-y divide-base-300/30 border-y border-base-300/30">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-4 py-4">
            {item.imageUrl ? (
              <img src={item.imageUrl} alt="" className="w-20 h-20 object-cover bg-base-200" />
            ) : (
              <div className="w-20 h-20 bg-base-200" aria-hidden="true" />
            )}
            <div className="flex-1 min-w-0">
              <Link href={`/products/${item.slug}`} className="font-semibold hover:underline">{item.name}</Link>
              <p className="text-sm opacity-75">{formatPrice(item.price)}</p>
            </div>
            <label className="sr-only" htmlFor={`qty-${item.id}`}>Quantity</label>
            <input
              id={`qty-${item.id}`}
              type="number"
              min={1}
              value={item.quantity}
              onChange={(e) => setQuantity(item.id, Number(e.target.value))}
              className="input input-bordered w-20"
            />
            <button onClick={() => removeItem(item.id)} className="btn btn-ghost btn-sm cursor-pointer">Remove</button>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-col items-end gap-3">
        <p className="text-lg">Subtotal: <strong>{formatPrice(subtotal)}</strong></p>
        <p className="text-sm opacity-75">Shipping and tax are calculated at checkout.</p>
        {error && <p className="text-error text-sm" role="alert">{error}</p>}
        <button onClick={checkout} disabled={submitting} className="btn btn-primary cursor-pointer">
          {submitting ? "Redirecting…" : "Checkout"}
        </button>
      </div>
    </div>
  );
}
