import Image from "next/image";

const OUTCOMES = [
  "More confidence and self-awareness, in and out of the saddle",
  "A solid foundation that supports any discipline",
  "Better understanding of your body, posture, and core strength",
  "Clarity on how to keep developing your horse between lessons",
  "A deeper, clearer connection with your horse",
  "A community committed to growth and wellbeing",
];

export function Partnership() {
  return (
    <section className="bg-black text-neutral-content">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        <div className="relative min-h-[420px] md:min-h-full">
          <Image src="/images/site/black-horse.jpg" alt="Portrait of a black horse in a dressage bridle" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover brightness-150" />
        </div>
        <div className="px-4 py-16 md:px-14 md:py-24">
          <blockquote className="text-3xl leading-snug md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
            Riding is a partnership. You can only teach your horse as much as you know.
          </blockquote>
          <h2 className="mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-accent" style={{ fontFamily: "var(--font-sans)" }}>
            What you&apos;ll gain
          </h2>
          <ul className="mt-6 space-y-4">
            {OUTCOMES.map((outcome) => (
              <li key={outcome} className="flex gap-3 text-neutral-content/90">
                <svg viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
