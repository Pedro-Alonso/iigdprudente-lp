import { site } from "@/content/site";
import { ButtonLink } from "./ui/ButtonLink";
import { Container } from "./ui/Container";
import { MapPinIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";

export function Location() {
  const { location } = site;
  const headingId = `${location.id}-title`;

  return (
    <section id={location.id} aria-labelledby={headingId} className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading id={headingId} title={location.title} />
        <div className="mt-10 flex flex-col gap-6 rounded-2xl bg-mist p-6 ring-1 ring-navy/10 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
              <MapPinIcon className="size-6" />
            </span>
            <address className="text-lg text-ink not-italic">{location.display}</address>
          </div>
          <ButtonLink href={location.directions.href} external>
            {location.directions.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
