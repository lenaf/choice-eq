import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    alt: "Emily coaching a young rider on a palomino in an indoor arena",
    body: "Individual instruction built around your goals. We master the basics and advance through the dressage training scale, at a pace that feels right for you.",
    image: "/images/site/teaching.jpg",
    title: "Lessons",
  },
  {
    alt: "A rider schooling a black horse in an indoor arena",
    body: "Intentional, holistic training for your horse with a dressage focus and an understanding of biomechanics that supports soundness and longevity.",
    image: "/images/site/training.jpg",
    title: "Training",
  },
  {
    alt: "Emily leading a young rider on a horse through the woods",
    body: "Group stretching and mindfulness, workshops, and community connection circles, all in an equestrian setting.",
    image: "/images/site/trail-walk.jpg",
    title: "Wellness experiences",
  },
];

const ALSO_OFFERED = [
  "Private and group lessons (up to 3 riders)",
  "Youth lessons",
  "Lesson and training packages",
  "Mindful grooming sessions",
  "Show coaching",
  "Clinics at your facility",
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-base-200 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Services</p>
        <h2 className="mt-4 max-w-2xl text-4xl leading-tight md:text-5xl">Support for every part of the journey.</h2>

        <div className="mt-14 space-y-16 md:space-y-24">
          {SERVICES.map((service, i) => (
            <article key={service.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${i % 2 ? "md:order-2" : ""}`}>
                <Image src={service.image} alt={service.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div>
                <span className="text-sm text-secondary" style={{ fontFamily: "var(--font-heading)" }}>{`0${i + 1}`}</span>
                <h3 className="mt-2 text-3xl font-medium">{service.title}</h3>
                <p className="mt-4 text-lg text-base-content/80">{service.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-base-100 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div>
              <h3 className="text-2xl font-medium">Also offered</h3>
              <p className="mt-3 text-base-content/70">Packages can mix lessons and training sessions to fit what you and your horse need each month.</p>
            </div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {ALSO_OFFERED.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link href="#contact" className="mt-10 inline-block rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-content transition-colors hover:bg-neutral">
            Ask about rates and scheduling
          </Link>
        </div>
      </div>
    </section>
  );
}
