import { site } from "@/content/site";
import { ButtonLink } from "./ui/ButtonLink";
import { Container } from "./ui/Container";
import { ArrowUpRightIcon, MapPinIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";

export function Location() {
  const { location } = site;
  const headingId = `${location.id}-title`;

  return (
    <section id={location.id} aria-labelledby={headingId} className="bg-mist py-24 md:py-32">
      <Container>
        <SectionHeading id={headingId} title={location.title} />

        <div className="reveal mt-12 grid overflow-hidden rounded-4xl bg-white shadow-xl ring-1 shadow-navy/10 ring-navy/5 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-8 p-8 sm:p-12">
            <span className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-navy to-royal text-gold-soft shadow-lg shadow-navy/25">
              <MapPinIcon className="size-7" />
            </span>
            <address className="flex flex-col gap-1 not-italic">
              <span className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                {location.street}
              </span>
              <span className="text-lg font-semibold text-royal">{location.neighborhood}</span>
              <span className="text-lg text-muted">{location.city}</span>
            </address>
            <div>
              <ButtonLink href={location.directions.href} external>
                {location.directions.label}
                <ArrowUpRightIcon className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </ButtonLink>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="relative isolate min-h-64 overflow-hidden bg-section-dark lg:min-h-full"
          >
            <div className="absolute inset-0 bg-grid" />
            <span className="absolute top-[38%] -left-10 h-3 w-[140%] -rotate-12 rounded-full bg-white/10" />
            <span className="absolute top-0 left-[58%] h-[140%] w-2.5 rotate-18 rounded-full bg-white/10" />
            <span className="absolute top-[70%] -left-10 h-1.5 w-[140%] rotate-6 rounded-full bg-white/5" />
            <span className="absolute top-0 left-[22%] h-[140%] w-1.5 -rotate-6 rounded-full bg-white/5" />
            <span className="absolute top-1/2 left-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center">
              <span className="absolute size-16 rounded-full bg-gold/40 motion-safe:animate-pulse-ring" />
              <span className="absolute size-16 rounded-full bg-gold/15" />
              <span className="relative grid size-12 place-items-center rounded-full bg-linear-to-br from-gold-light to-gold text-navy-deep shadow-xl shadow-black/40">
                <MapPinIcon className="size-6" />
              </span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
