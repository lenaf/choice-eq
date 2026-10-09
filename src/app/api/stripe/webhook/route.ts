import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getPayload } from "@/lib/payload";
import { getStripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

// Decrements product inventory when a checkout completes.
export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");
  if (!secret || !signature) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(await request.text(), signature, secret);
  } catch (err) {
    console.error("Stripe webhook signature error:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  try {
    const lineItems = await getStripe().checkout.sessions.listLineItems(event.data.object.id, {
      expand: ["data.price.product"],
      limit: 100,
    });
    const payload = await getPayload();

    for (const item of lineItems.data) {
      const stripeProduct = item.price?.product as Stripe.Product | undefined;
      const productId = stripeProduct?.metadata?.productId;
      if (!productId) continue;
      const product = await payload.findByID({ collection: "products", id: productId, depth: 0 });
      if (typeof product.inventory !== "number") continue;
      await payload.update({
        collection: "products",
        id: productId,
        data: { inventory: Math.max(0, product.inventory - (item.quantity || 0)) },
      });
    }
  } catch (err) {
    console.error("Inventory update error:", err);
    return NextResponse.json({ error: "Inventory update failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
