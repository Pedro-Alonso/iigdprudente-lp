import { Container } from "@/components/ui/Container";
import { retreat } from "@/content/retreat";

const stepHeights = ["h-16", "h-28", "h-44", "h-64"] as const;

export function VerseSection() {
  const { verse } = retreat;

  return (
    <section
      id={verse.id}
      data-depth="2"
      aria-labelledby="verse-title"
      className="relative isolate snap-start overflow-hidden text-ice"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-abyss/55" />

      <Container className="py-28 md:py-40">
        <figure className="mx-auto max-w-4xl text-center">
          <figcaption
            id="verse-title"
            className="reveal text-xs font-semibold tracking-[0.35em] text-turq uppercase md:text-sm"
          >
            {verse.label}
          </figcaption>
          <blockquote className="reveal mt-8 text-3xl leading-snug font-light tracking-tight text-balance sm:text-4xl md:text-6xl">
            <p>
              “{verse.text.before}
              <span className="font-semibold underline decoration-sun decoration-4 underline-offset-[0.2em]">
                {verse.text.highlight}
              </span>
              {verse.text.after}”
            </p>
          </blockquote>
          <p className="reveal mt-8 text-lg font-semibold tracking-[0.2em] uppercase">
            {verse.reference}
            <span className="ml-3 font-normal text-ice/70">{verse.version}</span>
          </p>
        </figure>

        <div className="mx-auto mt-20 max-w-3xl md:mt-28">
          <p className="reveal text-center text-sm font-semibold tracking-[0.2em] text-ice/80 uppercase">
            {verse.stepsTitle}
          </p>
          <ol className="mt-8 grid grid-cols-4 items-end gap-2 sm:gap-4">
            {verse.steps.map((step, index) => (
              <li key={step} className="reveal flex flex-col items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`block w-full rounded-t-3xl bg-linear-to-b from-turq/70 to-petrol/50 ${stepHeights[index]}`}
                />
                <span className="text-xs font-semibold text-balance md:text-base">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
