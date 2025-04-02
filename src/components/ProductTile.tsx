import getFormattedPrice from 'src/helpers/getFormattedPrice';
import { Stripe } from 'stripe';
import ProductStatusBadge from './ProductStatusBadge';
import ProductImage from './ProductImage';

type Props = {
    product: Stripe.Product
}

export default function ProductTile({ product }: Props) {
    return (
        <a key={product.id} href={`/product/${product.id}`} className="group relative">
            <div className='absolute top-2 right-2'>
                <ProductStatusBadge product={product} />
            </div>
            <ProductImage product={product} />
            <h3 className="text-lg font-medium text-center">{product.name}</h3>
            <p className="text-sm text-gray-600 text-center">
                {getFormattedPrice((product.default_price as Stripe.Price).unit_amount)}
            </p>
        </a>
    )
}