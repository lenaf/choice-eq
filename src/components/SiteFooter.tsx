import Image from "next/image";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-4">
          <span className="rounded-lg bg-base-100 p-2">
            <Image src="/images/logos/choice-logo.png" alt="choice. Emily Markham Equestrian" width={409} height={275} className="h-12 w-auto" />
          </span>
          <p className="max-w-xs text-sm opacity-80">Teaching, training, and mindfulness for horse and rider in Western New York.</p>
        </div>
        <div className="flex flex-col gap-1 text-sm md:items-end">
          <a href={`mailto:${siteConfig.email}`} className="hover:underline">{siteConfig.email}</a>
          <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:underline">{siteConfig.phone}</a>
          <div className="mt-2 flex gap-4">
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
          </div>
        </div>
      </div>
      <p className="pb-8 text-center text-xs opacity-60">© {new Date().getFullYear()} Choice, Emily Markham Equestrian</p>
    </footer>
  );
}
