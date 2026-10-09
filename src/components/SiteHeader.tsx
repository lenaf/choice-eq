"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { CartButton } from "./cart/CartButton";

const NAV_LINKS = [
  { href: "/#who-we-are", label: "Who we are" },
  { href: "/#what-we-offer", label: "What we offer" },
  { href: "/#our-impact", label: "Our impact" },
];

export function SiteHeader() {
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
          <Image src="/images/logos/choice-mark.svg" alt="choice. Emily Markham Equestrian" width={1850} height={1307} priority className="h-[76px] w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-base-content transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
          {siteConfig.shopEnabled && <CartButton />}
          <Link href="/#reach-out" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-content transition-colors hover:bg-neutral">
            Reach out
          </Link>
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
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-lg">
              {link.label}
            </Link>
          ))}
          <Link
            href="/#reach-out"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-content"
          >
            Reach out
          </Link>
        </nav>
      )}
    </header>
  );
}
