import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Contact() {
  const tel = siteConfig.phone.replace(/\D/g, "");

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-primary text-primary-content">
      <Image src="/images/site/between-the-ears.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center md:px-8 md:py-32">
        <h2 className="text-4xl leading-tight text-white md:text-6xl">Let&apos;s find your starting point.</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
          New rider, returning rider, or bringing your own horse: reach out for rates and scheduling. Serving riders across Western New York.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`mailto:${siteConfig.email}?subject=Lesson%20inquiry`} className="w-full rounded-full bg-base-100 px-8 py-4 font-semibold text-base-content transition-colors hover:bg-accent sm:w-auto">
            Email Emily
          </a>
          <a href={`tel:${tel}`} className="w-full rounded-full border border-white/70 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto">
            Call or text {siteConfig.phone}
          </a>
        </div>
        <p className="mt-8 text-sm text-white/80">
          Follow along on{" "}
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Instagram</a> and{" "}
          <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Facebook</a>.
        </p>
      </div>
    </section>
  );
}
