export function Testimonial() {
  return (
    <section className="bg-accent px-4 py-20 md:px-8 md:py-28">
      <figure className="mx-auto max-w-3xl text-center">
        <svg viewBox="0 0 40 30" className="mx-auto h-8 w-10 text-secondary" fill="currentColor" aria-hidden="true">
          <path d="M0 30V17Q0 4 14 0l2 4Q8 7 8 14h7v16zm23 0V17q0-13 14-17l2 4q-8 3-8 10h7v16z" />
        </svg>
        <blockquote className="mt-8 text-2xl leading-relaxed md:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
          I truly felt so comfortable and I&apos;m gaining confidence. It&apos;s almost like yoga. Concentrating and being in the moment is great for my mental health.
        </blockquote>
        <figcaption className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-accent-content/70">Tricia, lesson student</figcaption>
      </figure>
    </section>
  );
}
