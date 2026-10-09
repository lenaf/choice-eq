"use client";

import { useState } from "react";
import { useCart, type CartItem } from "./CartProvider";

interface AddToCartButtonProps {
  maxQuantity?: number | null;
  product: Omit<CartItem, "quantity">;
  soldOut: boolean;
}

export function AddToCartButton({ maxQuantity, product, soldOut }: AddToCartButtonProps) {
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = items.find((i) => i.id === product.id)?.quantity || 0;
  const atLimit = typeof maxQuantity === "number" && inCart >= maxQuantity;

  if (soldOut) {
    return <button className="btn btn-disabled w-full" disabled>Sold Out</button>;
  }

  return (
    <button
      className="btn btn-primary w-full cursor-pointer"
      disabled={atLimit}
      onClick={() => {
        addItem(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
      }}
    >
      {atLimit ? "All in your cart" : added ? "Added ✓" : "Add to Cart"}
    </button>
  );
}
