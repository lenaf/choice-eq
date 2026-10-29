"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import type { NavLink } from "@/lib/siteData";
import { CartButton } from "./cart/CartButton";

type Logo = { height: number; src: string; width: number };

export function SiteHeader({ cta, links, logo }: { cta: NavLink | null; links: NavLink[]; logo: Logo }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-base-200/95 backdrop-blur transition-shadow duration-300 ${
        scrolled || open ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          aria-label="ChoiceEQ home"
          className="shrink-0"
        >
          <Image src={logo.src} alt="choice. Emily Markham Equestrian" width={logo.width} height={logo.height} priority unoptimized={logo.src.includes(".svg")} className="h-[76px] w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-base-content transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
          {siteConfig.shopEnabled && <CartButton />}
          {cta && (
            <Link href={cta.href} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-content transition-colors hover:bg-neutral">
              {cta.label}
            </Link>
          )}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="cursor-pointer p-2 text-base-content md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-base-content/10 px-4 pb-6 md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-lg">
              {link.label}
            </Link>
          ))}
          {cta && (
            <Link
              href={cta.href}
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-content"
            >
              {cta.label}
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
