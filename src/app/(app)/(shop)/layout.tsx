import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  if (!siteConfig.shopEnabled) notFound();
  return children;
}
