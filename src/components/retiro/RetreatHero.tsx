import { Container } from "@/components/ui/Container";
import { retreat } from "@/content/retreat";
import { RegistrationCta, RegistrationDeadline } from "./RegistrationCta";
import { Wordmark } from "./Wordmark";

export function RetreatHero() {
  const { hero, assets, ministry, details } = retreat;

  return (
    <section
      id="superficie"
      data-depth="0"
      aria-labelledby="retiro-title"
      className="relative isolate flex min-h-svh snap-start flex-col overflow-hidden text-abyss"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-transparent from-40% via-abyss/45 via-62% to-abyss/90"
      />

      <Container className="flex flex-1 flex-col pt-16 pb-24 text-center md:pt-12 md:pb-16">
        <div className="flex items-center justify-center gap-5">
          <img
            src={assets.iigdDark}
            alt="Igreja Internacional da Graça de Deus"
            width={480}
            height={230}
            className="h-9 w-auto md:h-11"
          />
          <span aria-hidden="true" className="h-9 w-px bg-abyss/25" />
          <img
            src={assets.jqvDark}
            alt="Jovens Que Vencem"
            width={480}
            height={485}
            className="h-11 w-auto md:h-14"
          />
        </div>

        <p className="mt-8 text-[0.7rem] font-medium tracking-[0.35em] uppercase md:mt-10 md:text-sm">
          {hero.kicker}
        </p>

        <h1 id="retiro-title" className="mt-14 md:mt-20">
          <span className="sr-only">
            {retreat.name} {retreat.year}, {ministry}
          </span>
          <Wordmark className="mx-auto w-fit text-[clamp(6.5rem,31vw,10rem)] text-abyss lg:text-[clamp(10rem,17vw,17rem)]" />
        </h1>

        <p className="mt-5 text-lg font-light tracking-[0.18em] md:text-2xl">
          {hero.tagline.before}
          <strong className="font-bold underline decoration-sun decoration-[3px] underline-offset-[6px]">
            {hero.tagline.highlight}
          </strong>
          {hero.tagline.after}
        </p>

        <div className="mt-auto pt-16 text-ice">
          <p className="text-4xl font-light tracking-tight sm:text-5xl md:text-6xl">{hero.dates}</p>
          <p className="mt-2 text-xs tracking-[0.3em] text-ice/85 uppercase md:text-sm">
            {hero.datesNote}
          </p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <RegistrationCta size="lg" />
            <a
              href={`#${details.id}`}
              className="inline-flex min-h-14 items-center gap-2 rounded-full px-6 text-base font-semibold text-ice underline decoration-sun decoration-2 underline-offset-8 motion-safe:hover:translate-y-0.5"
            >
              {hero.scrollHint}
              <span aria-hidden="true" className="motion-safe:animate-bounce">
                ↓
              </span>
            </a>
          </div>
          <RegistrationDeadline className="mt-2 text-sm text-ice/80" />
        </div>
      </Container>
    </section>
  );
}
