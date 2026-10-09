import Image from "next/image";

const PILLARS = [
  {
    alt: "Emily greeting a gray horse over a pasture fence",
    lead: "Connect with yourself, the horse, like-minded equestrians and community members.",
    points: [
      "We incorporate mindful practices to develop yourself as a person and as an equestrian.",
      "We help to deepen your connection with your horse by teaching intentional training methods and utilizing grooming and groundwork that translate to a more confirmed riding relationship.",
    ],
    image: "/images/site/pasture.jpg",
    title: "Connection",
  },
  {
    alt: "Emily feeding hay to a horse from a wheelbarrow",
    lead: "We teach practices that promote rider wholeness and wellbeing alongside equal care and concern for your equine partner.",
    points: ["We understand that your development as a person is just as important as the development of your horse."],
    image: "/images/site/care-feeding.jpg",
    title: "Care",
  },
  {
    alt: "Two riders doing groundwork with a horse on a lunge line",
    lead: "We use a combination of kinesthetic, visual, and verbal techniques to accommodate all learning styles and levels of ability.",
    points: ["We encourage riders to think creatively about the larger experience of their personal equestrian journey."],
    image: "/images/site/groundwork.jpg",
    title: "Creativity",
  },
];

export function Approach() {
  return (
    <section id="who-we-are" className="scroll-mt-24 bg-base-100 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Who we are</p>
          <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
            We train horses, teach equestrians, and support our local community through connection, care, and creativity.
          </h2>
          <p className="mt-6 text-lg text-base-content/80">
            Provide flexible and holistic equine services and experiences with a focus on dressage and developing an intentional mindset.
          </p>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {PILLARS.map((pillar) => (
            <article key={pillar.title}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-base-200">
                <Image src={pillar.image} alt={pillar.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <h3 className="mt-6 text-2xl font-medium">{pillar.title}</h3>
              <p className="mt-3 text-base-content/90">{pillar.lead}</p>
              {pillar.points.map((point) => (
                <p key={point} className="mt-3 text-base-content/70">{point}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
