import { NextResponse } from "next/server";
import { getPayload } from "@/lib/payload";
import { getStripe } from "@/lib/stripe";
import { getProductImages, isSoldOut } from "@/lib/products";
import { siteConfig } from "@/config/site";

export const dynamic = "force-dynamic";

interface CheckoutRequestItem {
  id: string;
  quantity: number;
}

export async function POST(request: Request) {
  if (!siteConfig.shopEnabled) return NextResponse.json({ error: "Not found" }, { status: 404 });
  try {
    const body = await request.json();
    const requested: CheckoutRequestItem[] = Array.isArray(body?.items) ? body.items : [];
    if (requested.length === 0) {
      return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
    }

    const payload = await getPayload();
    const { docs: products } = await payload.find({
      collection: "products",
      depth: 1,
      limit: requested.length,
      where: { id: { in: requested.map((i) => i.id) } },
    });

    const lineItems = [];
    for (const item of requested) {
      const product = products.find((p) => String(p.id) === String(item.id));
      const quantity = Math.floor(Number(item.quantity));
      if (!product || !Number.isFinite(quantity) || quantity < 1) {
        return NextResponse.json({ error: "An item in your cart is no longer available." }, { status: 400 });
      }
      if (isSoldOut(product) || (typeof product.inventory === "number" && quantity > product.inventory)) {
        return NextResponse.json({ error: `Only ${product.inventory ?? 0} left of ${product.name}.` }, { status: 400 });
      }
      const imageUrl = getProductImages(product)[0]?.url;
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            images: imageUrl?.startsWith("https://") ? [imageUrl] : undefined,
            metadata: { productId: String(product.id) },
            name: product.name,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity,
      });
    }

    const origin = request.headers.get("origin") || process.env.NEXT_PUBLIC_SERVER_URL;
    const session = await getStripe().checkout.sessions.create({
      cancel_url: `${origin}/cart`,
      line_items: lineItems,
      mode: "payment",
      shipping_address_collection: { allowed_countries: ["US"] },
      success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "Could not start checkout. Please try again." }, { status: 500 });
  }
}
