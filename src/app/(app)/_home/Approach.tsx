import Image from "next/image";

const PILLARS = [
  {
    alt: "Emily greeting a gray horse over a pasture fence",
    body: "Connect with yourself, your horse, and a community of riders who care. Mindful practices, grooming, and groundwork build a steadier partnership under saddle.",
    image: "/images/site/pasture.jpg",
    title: "Connection",
  },
  {
    alt: "Emily feeding hay to a horse from a wheelbarrow",
    body: "Your wellbeing matters as much as your horse's. We teach practices that support the whole rider, with equal care for your equine partner.",
    image: "/images/site/care-feeding.jpg",
    title: "Care",
  },
  {
    alt: "Two riders doing groundwork with a horse on a lunge line",
    body: "Kinesthetic, visual, and verbal teaching for every learning style and level. Think creatively about your own journey as a rider.",
    image: "/images/site/groundwork.jpg",
    title: "Creativity",
  },
];

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 bg-base-100 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Our approach</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Every ride starts with a choice.</h2>
          <p className="mt-6 text-lg text-base-content/80">
            Horses live in the present moment, and they ask us to do the same. Choice offers flexible, holistic equine services with a focus on dressage and an intentional mindset. We meet you and your horse where you are, and grow from there.
          </p>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {PILLARS.map((pillar) => (
            <article key={pillar.title}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-base-200">
                <Image src={pillar.image} alt={pillar.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <h3 className="mt-6 text-2xl font-medium">{pillar.title}</h3>
              <p className="mt-3 text-base-content/80">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
