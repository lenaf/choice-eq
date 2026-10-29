import { serverURL } from "@/lib/serverUrl";
import "@/app/globals.css";
import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { CartProvider } from "@/components/cart/CartProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getNavLinks, getSiteSettings } from "@/lib/siteData";
import { getGoogleFontsUrlFromSettings, getLogoFromMedia, getThemeCssFromSettings } from "@/lib/siteTheme";

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
  const themeCss = getThemeCssFromSettings(settings);
  const fontsUrl = getGoogleFontsUrlFromSettings(settings);
  const headerLogo = getLogoFromMedia(settings?.logo, { height: 1307, src: "/images/logos/choice-mark.svg", width: 1850 });
  const footerLogo = getLogoFromMedia(settings?.footerLogo, { height: 1639, src: "/images/logos/choice-logo.svg", width: 2440 });

  return (
    <html lang="en">
      <head>
        {fontsUrl && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link rel="stylesheet" href={fontsUrl} />
          </>
        )}
        {themeCss && <style>{themeCss}</style>}
      </head>
      <body className={`${fraunces.variable} ${dmSans.variable}`}>
        <CartProvider>
          <SiteHeader cta={nav.cta} links={nav.links} logo={headerLogo} />
          {children}
          <SiteFooter logo={footerLogo} settings={settings} />
          <ScrollToTop />
        </CartProvider>
      </body>
    </html>
  );
}
