import { Stripe } from "stripe";

import ProductTile from "@/components/ProductTile";

export default async function Home() {
  const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY ?? '');

  const { data } = await stripe.products.list({ expand: ['data.default_price'], })

  return (
    <div>
      <section id='products' className="px-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
