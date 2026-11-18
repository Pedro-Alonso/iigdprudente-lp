import { Container } from "@/components/ui/Container";
import { retreat } from "@/content/retreat";
import { ThemeModal } from "./ThemeModal";

export function WhySection() {
  const { why } = retreat;

  return (
    <section
      id={why.id}
      data-depth="2"
      aria-labelledby="why-title"
      className="relative isolate snap-start overflow-hidden text-ice"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-abyss/55" />

      <Container className="grid gap-12 py-28 md:py-40 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <h2
          id="why-title"
          className="reveal self-start text-5xl leading-[1.05] font-semibold tracking-tight text-balance lg:sticky lg:top-28 lg:text-7xl"
        >
          {why.title.before}
          <span className="underline decoration-sun decoration-4 underline-offset-[0.18em]">
            {why.title.highlight}
          </span>
          {why.title.after}
        </h2>

        <div className="space-y-8 text-xl leading-relaxed font-light md:text-2xl">
          {why.paragraphs.map((paragraph) => (
            <p key={paragraph} className="reveal text-pretty">
              {paragraph}
            </p>
          ))}

          <p className="reveal pt-4 text-3xl leading-tight font-semibold tracking-tight text-turq md:text-5xl">
            {why.motto}
          </p>

          <ThemeModal />
        </div>
      </Container>
    </section>
  );
}
