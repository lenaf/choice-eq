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
  description: "Dressage training, riding lessons, and mindfulness for horse and rider in Western New York.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"),
  openGraph: { images: ["/images/site/hero-ride.jpg"] },
  title: "Choice Equestrian | From the Saddle to the Soul",
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
