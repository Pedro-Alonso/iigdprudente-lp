import { site } from "@/content/site";
import { ButtonLink } from "./ui/ButtonLink";
import { Container } from "./ui/Container";
import { InstagramIcon } from "./ui/Icons";

export function Hero() {
  const { hero, logo } = site;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-navy pt-36 pb-20 text-white md:pt-32 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(30,79,163,0.55),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(7,28,63,0.9),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 -z-10 size-72 rotate-45 rounded-3xl border border-gold/25 md:size-96"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-20 -z-10 size-80 rounded-full border border-gold/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="mx-auto w-full max-w-md rounded-[2rem] bg-gradient-to-b from-white to-blue-100 p-5 shadow-2xl ring-1 shadow-black/30 ring-gold/60 sm:p-7 lg:max-w-none">
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            fetchPriority="high"
            decoding="async"
            className="h-auto w-full"
          />
        </div>
        <div className="text-center lg:text-left">
          <h1
            id="hero-title"
            className="font-serif text-4xl leading-tight font-semibold text-balance sm:text-5xl lg:text-6xl"
          >
            {hero.title}
          </h1>
          <span
            aria-hidden="true"
            className="mx-auto mt-6 block h-1 w-20 rounded-full bg-gold lg:mx-0"
          />
          <p className="mt-6 text-lg text-blue-100 sm:text-xl">{hero.tagline}</p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ButtonLink href={hero.primaryCta.href} variant="gold">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outlineLight" external>
              <InstagramIcon />
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
