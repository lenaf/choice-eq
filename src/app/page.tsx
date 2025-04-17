
import ContentfulImage from "@/components/ContentfulImage";
import { getAllPages } from "src/lib/api";

export default async function Home() {
  const pages = await getAllPages(false);
  console.log(pages)
  // const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY ?? '');

  // const { data } = await stripe.products.list({ expand: ['data.default_price'], })

  return (
    <div>
      <ContentfulImage
        alt={`Cover Image for`}
        priority
        height={100}
        className='w-full h-96 object-cover'
        src={pages[0].sectionsCollection.items[0].imagesCollection.items[0].url}
      />
      ;
    </div>
  );
}
