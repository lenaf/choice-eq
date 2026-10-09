import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-neutral text-white">
      <Image src="/images/site/hero-ride.jpg" alt="A rider sitting calmly on a bay horse in an open field" fill priority sizes="100vw" className="object-cover object-[60%_center]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20 md:bg-gradient-to-r md:from-black/75 md:via-black/40 md:to-transparent" />
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-32 md:px-8 md:pb-24">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white/85">Teaching · Training · Mindfulness</p>
        <h1 className="max-w-3xl text-white">From the saddle to the soul.</h1>
        <p className="mt-6 max-w-xl text-lg text-white/90 md:text-xl">
          Dressage-focused lessons and training that build confident riders, happy horses, and a community rooted in connection.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="#contact" className="rounded-full bg-base-100 px-7 py-3.5 font-semibold text-base-content transition-colors hover:bg-accent">
            Book a lesson
          </Link>
          <Link href="#services" className="rounded-full border border-white/70 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10">
            See services
          </Link>
        </div>
      </div>
    </section>
  );
}
