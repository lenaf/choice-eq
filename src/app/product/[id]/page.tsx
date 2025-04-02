import AddToCart from "@/components/cart/add-to-cart";
import ProductImage from "@/components/ProductImage";
import ProductStatusBadge from "@/components/ProductStatusBadge";
import getFormattedPrice from "src/helpers/getFormattedPrice";
import Stripe from "stripe";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY ?? '');
    const product = await stripe.products.retrieve(id, { expand: ['default_price'], });
    const inventoryCount = Number(product.metadata.inventoryCount);

    return (
        <div className="p-16">
            <div className="w-96 relative">
                <div className='absolute top-2 right-2'>
                    <ProductStatusBadge product={product} />
                </div>
                <ProductImage product={product} />
                <h3 className="text-lg font-medium text-center">{product.name}</h3>
                <p className="text-sm text-gray-600 text-center">
                    {getFormattedPrice((product.default_price as Stripe.Price).unit_amount)}
                </p>
                <AddToCart product={product} inventoryCount={inventoryCount} />
            </div>
        </div>
    )
}