import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";

export const dynamic = "force-dynamic";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  if (!siteConfig.shopEnabled) notFound();
  return children;
}
