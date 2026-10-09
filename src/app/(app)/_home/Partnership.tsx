import Image from "next/image";

const OUTCOMES = [
  "Increased confidence and self-awareness.",
  "Solid understanding of the basics and a strong foundation to support any discipline of riding.",
  "Knowledge of your physical patterns and development of core strength.",
  "Sense of clarity in understanding how to develop your horse independently.",
  "Deeper and clearer connection to your equine partner.",
  "Connection to a larger community that is committed to personal development and wellness.",
];

export function Partnership() {
  return (
    <section id="our-impact" className="scroll-mt-24 bg-black text-neutral-content">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        <div className="relative min-h-[420px] md:min-h-full">
          <Image src="/images/site/black-horse.jpg" alt="Portrait of a black horse in a dressage bridle" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover brightness-150" />
        </div>
        <div className="px-4 py-16 md:px-14 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our impact</p>
          <h2 className="mt-4 text-2xl leading-snug text-white md:text-3xl">
            ChoiceEQ works to improve clients&apos; confidence in the saddle, to nurture horse and rider wellbeing, and to create personal growth opportunities in the local community.
          </h2>
          <h3 className="mt-12 text-lg text-white" style={{ fontFamily: "var(--font-sans)" }}>
            Through working with us, you will gain:
          </h3>
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
