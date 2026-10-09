import Image from "next/image";

export function About() {
  return (
    <section className="bg-base-100 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[5fr_7fr] md:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
          <Image src="/images/site/emily.jpg" alt="Emily Markham smiling in a riding helmet" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
        </div>
        <div>
          <h2 className="text-4xl leading-tight md:text-5xl">Emily Markham</h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Owner/CEO</p>
          <div className="mt-6 space-y-4 text-lg text-base-content/80">
            <p>
              I am a traveling instructor who teaches lessons and provides training services with a dressage focus. I pride myself on having a creative and inclusive approach to training, while showing exceptional care for horse and rider.
            </p>
          </div>
          <ul className="mt-8 space-y-3">
            {[
              "A trainer, instructor, and coach who is committed to helping you achieve your equestrian goals.",
              "Personalized mental and physical exercises in combination with goal monitoring for progress.",
              "Practices to increase the ability to regulate your emotional responses to riding.",
              "Mentorship from a professional with 20+ years of experience caring for horses at all levels.",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
