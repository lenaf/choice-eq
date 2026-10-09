"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export interface CartItem {
  id: string;
  imageUrl?: string;
  name: string;
  price: number;
  quantity: number;
  slug: string;
}

interface CartContextValue {
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  clear: () => void;
  count: number;
  items: CartItem[];
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  subtotal: number;
}

const STORAGE_KEY = "choice-eq-cart";

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch {
      // Storage unavailable; start with an empty cart.
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage unavailable; the cart still works for this visit.
    }
  }, [items, loaded]);

  const addItem: CartContextValue["addItem"] = (item, quantity = 1) =>
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i));
      return [...prev, { ...item, quantity }];
    });

  const clear = useCallback(() => setItems([]), []);

  const setQuantity = (id: string, quantity: number) =>
    setItems((prev) => (quantity <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, quantity } : i))));

  const value: CartContextValue = {
    addItem,
    clear,
    count: items.reduce((sum, i) => sum + i.quantity, 0),
    items,
    removeItem: (id) => setItems((prev) => prev.filter((i) => i.id !== id)),
    setQuantity,
    subtotal: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
