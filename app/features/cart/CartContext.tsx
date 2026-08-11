"use client";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { Product } from "@/app/data/marketplace";

export type CartItem = { key: string; product: Product; size: string; color: string; garment?: string; placement?: Product["placement"]; quantity: number };
type CartValue = { items: CartItem[]; count: number; total: number; add: (product: Product, size: string, color: string, quantity?: number, garment?: string, placement?: Product["placement"]) => void; remove: (key: string) => void; update: (key: string, quantity: number) => void };
const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => { try { setItems(JSON.parse(localStorage.getItem("one-cart") || "[]")); } catch {} setReady(true); }, []);
  useEffect(() => { if (ready) localStorage.setItem("one-cart", JSON.stringify(items)); }, [items, ready]);
  const value = useMemo<CartValue>(() => ({
    items, count: items.reduce((n, x) => n + x.quantity, 0), total: items.reduce((n, x) => n + x.quantity * x.product.price, 0),
    add(product, size, color, quantity = 1, garment = product.shirtType, placement = product.placement) { const key = `${product.id}-${size}-${color}-${garment}-${placement}`; setItems(cur => cur.some(x => x.key === key) ? cur.map(x => x.key === key ? { ...x, quantity: x.quantity + quantity } : x) : [...cur, { key, product, size, color, garment, placement, quantity }]); },
    remove(key) { setItems(cur => cur.filter(x => x.key !== key)); }, update(key, quantity) { setItems(cur => cur.map(x => x.key === key ? { ...x, quantity: Math.max(1, quantity) } : x)); },
  }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() { const cart = useContext(CartContext); if (!cart) throw new Error("useCart must be used inside CartProvider"); return cart; }
