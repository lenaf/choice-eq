import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    alt: "Emily coaching a young rider on a palomino in an indoor arena",
    body: ["We provide individualized instruction based on rider needs with a focus on mastering the basics and advancing the practice using the dressage training scale."],
    image: "/images/site/teaching.jpg",
    title: "Teaching",
  },
  {
    alt: "A rider schooling a black horse in an indoor arena",
    body: [
      "We offer intentional, holistic training for horses with a dressage focus and knowledge of biomechanics that promotes longevity and soundness.",
      "We recommend a combination of lessons and training sessions to ensure proper development of horse and rider skills.",
      "We understand that riding is a partnership; you can only teach your horse as much as you know.",
    ],
    image: "/images/site/training.jpg",
    title: "Training",
  },
  {
    alt: "Emily leading a young rider on a horse through the woods",
    body: ["We offer group stretching and mindfulness practices, workshops, and community connection circles in an equestrian setting."],
    image: "/images/site/trail-walk.jpg",
    title: "Wellness experiences",
  },
];

const PACKAGES = [
  "Group lessons (up to 3 riders)",
  "Youth lessons (<15 years of age)",
  "Show coaching",
  "Clinics: Invite me to spend the day at your facility!",
  "Travel services (for existing clients only)",
];

export function Services() {
  return (
    <section id="what-we-offer" className="scroll-mt-24 bg-base-200 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">What we offer</p>
        <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
          ChoiceEQ supports every aspect of a rider and horses&apos; journey and meets them where they&apos;re at to support wellness and promote growth.
        </h2>

        <div className="mt-14 space-y-16 md:space-y-24">
          {SERVICES.map((service, i) => (
            <article key={service.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${i % 2 ? "md:order-2" : ""}`}>
                <Image src={service.image} alt={service.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div>
                <h3 className="text-3xl font-medium">{service.title}</h3>
                {service.body.map((line) => (
                  <p key={line} className="mt-4 text-lg text-base-content/80">{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-base-100 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div>
              <h3 className="text-2xl font-medium">Packages</h3>
              <p className="mt-3 text-base-content/70">
                Packages can be tailored to client-specific needs and can mix/match lessons or training sessions depending on what is needed that month.
              </p>
            </div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {PACKAGES.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link href="#reach-out" className="mt-10 inline-block rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-content transition-colors hover:bg-neutral">
            Reach out
          </Link>
        </div>
      </div>
    </section>
  );
}
