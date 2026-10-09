import "@/app/globals.css";
import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { CartProvider } from "@/components/cart/CartProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"),
  openGraph: { images: ["/images/site/hero-ride.jpg"] },
  title: "ChoiceEQ | From the Saddle to the Soul: Equine Training and Wellness Practices",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${dmSans.variable}`}>
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <ScrollToTop />
        </CartProvider>
      </body>
    </html>
  );
}
