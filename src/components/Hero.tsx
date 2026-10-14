import { site } from "@/content/site";
import { formatServiceTime } from "@/lib/format-service-time";
import { ButtonLink } from "./ui/ButtonLink";
import { Container } from "./ui/Container";
import { ExternalLink } from "./ui/ExternalLink";
import { ArrowRightIcon, ClockIcon, InstagramIcon, MapPinIcon } from "./ui/Icons";

const factCardClasses =
  "flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur";
const factIconClasses =
  "grid size-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold-soft";

export function Hero() {
  const { hero, logo, organizationName, services, location, ministries } = site;
  const [featuredService] = services.days;
  const [mainProfile] = ministries.profiles;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-hero text-white"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-gold/60 to-transparent"
      />

      <Container className="grid items-center gap-14 pt-24 pb-36 md:min-h-[min(100svh,60rem)] md:pt-36 md:pb-40 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-sm font-semibold text-gold-light motion-safe:animate-fade-up">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-gold-soft" />
            {organizationName}
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[2.75rem] leading-[1.02] font-extrabold tracking-tight text-balance motion-safe:animate-fade-up sm:text-6xl lg:text-7xl"
          >
            {hero.titleLead}
            <span className="sr-only">{hero.titleSeparator}</span>
            <span className="block pb-2 text-gold-gradient">{hero.titleHighlight}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-blue-100/90 motion-safe:animate-fade-up sm:text-xl lg:mx-0">
            {hero.tagline}
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 motion-safe:animate-fade-up sm:flex-row sm:justify-center lg:justify-start">
            <ButtonLink href={hero.primaryCta.href} variant="gold">
              {hero.primaryCta.label}
              <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="glass" external>
              <InstagramIcon />
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <ul className="mt-12 grid gap-3 text-left motion-safe:animate-fade-up sm:grid-cols-3">
            {featuredService ? (
              <li className={factCardClasses}>
                <span className={factIconClasses}>
                  <ClockIcon />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-medium text-blue-100/80">
                    {featuredService.day}
                  </span>
                  <span className="font-bold">
                    {featuredService.times.map(formatServiceTime).join(" · ")}
                  </span>
                </span>
              </li>
            ) : null}
            <li className={factCardClasses}>
              <span className={factIconClasses}>
                <MapPinIcon />
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-medium text-blue-100/80">
                  {location.neighborhood}
                </span>
                <span className="font-bold">{location.city}</span>
              </span>
            </li>
            {mainProfile ? (
              <li>
                <ExternalLink
                  href={mainProfile.href}
                  className={`${factCardClasses} transition-colors hover:border-gold/40 hover:bg-white/10`}
                >
                  <span className={factIconClasses}>
                    <InstagramIcon />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-medium text-blue-100/80">{mainProfile.name}</span>
                    <span className="font-bold">{mainProfile.handle}</span>
                  </span>
                </ExternalLink>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-76 sm:max-w-sm lg:max-w-md">
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-full bg-linear-to-tr from-gold/35 via-royal/40 to-sky/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-10 rounded-full border border-dashed border-gold/25 motion-safe:animate-orbit sm:-inset-14"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2.75rem] border border-white/10 sm:-inset-5"
          />
          <div className="relative rounded-[2.25rem] bg-linear-to-b from-white via-white to-blue-100 p-5 shadow-2xl ring-1 shadow-black/40 ring-gold/50 sm:p-7">
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
        </div>
      </Container>

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-14 w-full text-mist sm:h-20"
        fill="currentColor"
      >
        <path d="M0 90V52c160-34 340-52 540-38 220 15 330 54 540 52 150-1 260-22 360-46v70z" />
      </svg>
    </section>
  );
}
