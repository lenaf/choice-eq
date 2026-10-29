import Image from "next/image";
import type { SiteSetting } from "@/payload-types";

type Logo = { height: number; src: string; width: number };

export function SiteFooter({ logo, settings }: { logo: Logo; settings: SiteSetting | null }) {
  const email = settings?.contact?.email;
  const phone = settings?.contact?.phone;
  const { facebook, instagram } = settings?.socialMedia || {};
  const siteName = settings?.siteName || "ChoiceEQ";

  return (
    <footer className="bg-accent text-accent-content">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-4">
          <Image src={logo.src} alt={settings?.siteName || "choice. Emily Markham Equestrian"} width={logo.width} height={logo.height} unoptimized={logo.src.includes(".svg")} className="h-24 w-auto" />
          {settings?.tagline && <p className="max-w-xs text-sm opacity-80">{settings.tagline}</p>}
        </div>
        <div className="flex flex-col gap-1 text-sm md:items-end">
          {email && <a href={`mailto:${email}`} className="hover:underline">{email}</a>}
          {phone && <a href={`tel:${phone.replace(/\D/g, "")}`} className="hover:underline">{phone}</a>}
          <div className="mt-2 flex gap-4">
            {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>}
            {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>}
          </div>
        </div>
      </div>
      <p className="pb-8 text-center text-xs opacity-60">© {new Date().getFullYear()} {siteName}</p>
    </footer>
  );
}
