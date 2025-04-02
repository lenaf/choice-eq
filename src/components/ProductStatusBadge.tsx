
import { Stripe } from 'stripe';

type Props = {
    product: Stripe.Product
}

export default function ProductStatusBadge({ product }: Props) {
    const inventoryCount = Number(product.metadata.inventoryCount);
    const isPreOrder = inventoryCount > 100
    const isSoldOut = inventoryCount === 0

    return (
        <div className="badge badge-secondary"> {isPreOrder ? 'Pre-order' : isSoldOut ? 'Sold Out' : 'In Stock'}</div>
    )
}