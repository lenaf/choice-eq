import Image from "next/image";

const TRAINED_WITH = ["LaBarre Dressage", "Dharma Horse Fitness", "Monaco Dressage", "Edgewood Equestrian", "Fox Run Equestrian", "Centaur Stride"];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-base-100 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[5fr_7fr] md:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
          <Image src="/images/site/emily.jpg" alt="Emily Markham smiling in a riding helmet" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Meet your trainer</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Emily Markham</h2>
          <div className="mt-6 space-y-4 text-lg text-base-content/80">
            <p>
              Emily has cared for horses for about 20 years and has spent the last several in dressage as a working student, groom, and rider. She trains under Michelle LaBarre of LaBarre Dressage.
            </p>
            <p>
              Before dressage, she worked in therapeutic riding and taught children with autism. She holds a BS in Psychology from Ohio State, has audited the USDF L Education Program, and brings Mindfulness-Based Stress Reduction training to her lessons.
            </p>
            <p>Her goal is simple: a kind, judgment-free place to learn, where your growth as a person matters as much as your horse&apos;s.</p>
          </div>
          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-base-content/60" style={{ fontFamily: "var(--font-sans)" }}>
              Has trained with
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {TRAINED_WITH.map((name) => (
                <li key={name} className="rounded-full border border-base-content/15 px-4 py-1.5 text-sm">{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
