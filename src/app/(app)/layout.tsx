import { serverURL } from "@/lib/serverUrl";
import "@/app/globals.css";
import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { CartProvider } from "@/components/cart/CartProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getNavLinks, getSiteSettings } from "@/lib/siteData";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  description: "Provide flexible and holistic equine services and experiences with a focus on dressage and developing an intentional mindset.",
  metadataBase: new URL(serverURL),
  openGraph: { images: ["/images/site/hero-ride.jpg"] },
  title: "ChoiceEQ | From the Saddle to the Soul: Equine Training and Wellness Practices",
};

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const [settings, nav] = await Promise.all([getSiteSettings(), getNavLinks()]);

  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${dmSans.variable}`}>
        <CartProvider>
          <SiteHeader cta={nav.cta} links={nav.links} />
          {children}
          <SiteFooter settings={settings} />
          <ScrollToTop />
        </CartProvider>
      </body>
    </html>
  );
}
