export default function getFormattedPrice(price: number | null) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(((price ?? 0) / 100))
}