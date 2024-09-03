'use client'

import React from 'react'
import { CartProvider as USCProvider } from 'use-shopping-cart'

type Props = {
    children: React.ReactNode
}
export default function CartProvider({ children }: Props) {


    return (
        <USCProvider
            // @ts-ignore
            mode="payment"
            cartMode="client-only"
            stripe={process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY as string}
            currency="USD"
            successUrl={'https://example.com/success'}
            cancelUrl={'https://example.com/cancel'}
            allowedCountries={['US', 'CA']}
            billingAddressCollection={true}
            shouldPersist
        >
            {children}
        </USCProvider>
    )
}