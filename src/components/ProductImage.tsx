import Image from 'next/image'
import { Stripe } from 'stripe';

type Props = {
    product: Stripe.Product
}

export default function ProductImage({ product }: Props) {
    return (
        <div
            className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
            <Image
                src={product.images[0]}
                alt={product.name}
                width={500}
                height={500}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
        </div>
    )
}