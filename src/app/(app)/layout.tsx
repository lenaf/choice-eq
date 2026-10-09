import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CartProvider } from "@/components/cart/CartProvider";
import { Poppins, Questrial } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${questrial.variable}`}
        style={{
          fontFamily: 'var(--font-sans), Questrial, sans-serif',
        }}
      >
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </CartProvider>
      </body>
    </html>
  );
}
