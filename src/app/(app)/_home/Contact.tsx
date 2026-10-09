import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Contact() {
  const tel = siteConfig.phone.replace(/\D/g, "");

  return (
    <section id="reach-out" className="relative scroll-mt-24 overflow-hidden bg-primary text-primary-content">
      <Image src="/images/site/between-the-ears.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center md:px-8 md:py-32">
        <h2 className="text-4xl leading-tight text-white md:text-6xl">Please reach out with any questions.</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
          Please feel free to respond via email or you can call/text me at {siteConfig.phone}.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`mailto:${siteConfig.email}?subject=Lesson%20inquiry`} className="w-full rounded-full bg-base-100 px-8 py-4 font-semibold text-base-content transition-colors hover:bg-accent sm:w-auto">
            {siteConfig.email}
          </a>
          <a href={`tel:${tel}`} className="w-full rounded-full border border-white/70 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto">
            Call/text {siteConfig.phone}
          </a>
        </div>
        <p className="mt-8 text-sm text-white/80">
          Follow us on social media:{" "}
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Instagram</a>{" · "}
          <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Facebook</a>
        </p>
      </div>
    </section>
  );
}
