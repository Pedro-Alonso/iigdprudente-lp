import type { ReactNode } from "react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Container } from "@/components/ui/Container";
import { InstagramIcon, MapPinIcon } from "@/components/ui/Icons";
import { retreat } from "@/content/retreat";

const cardClasses =
  "reveal rounded-3xl border border-ice/15 bg-abyss/60 p-6 backdrop-blur-md md:p-8";
const labelClasses = "text-xs font-semibold tracking-[0.3em] text-turq uppercase";
const linkClasses =
  "inline-flex min-h-11 items-center gap-2 rounded-full border border-ice/25 px-4 text-sm font-semibold text-ice transition-colors hover:border-sun hover:text-sun";

const toneClasses = {
  rose: "border-[#f4a6c8]/40 text-[#f4a6c8]",
  ice: "border-ice/40 text-ice",
  sun: "border-sun/50 text-sun",
} as const;

function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`${cardClasses} ${className}`}>{children}</div>;
}

export function DetailsSection() {
  const { details } = retreat;

  return (
    <section
      id={details.id}
      data-depth="1"
      aria-labelledby="details-title"
      className="relative isolate snap-start overflow-hidden text-ice"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-abyss/90 via-abyss/55 via-20% to-abyss/55"
      />

      <Container className="py-28 md:py-40">
        <h2
          id="details-title"
          className="reveal text-5xl leading-[1.05] font-semibold tracking-tight md:text-7xl"
        >
          {details.title}
        </h2>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-12">
          <Card className="md:col-span-7">
            <p className={labelClasses}>{details.when.label}</p>
            <p className="mt-4 text-5xl font-light tracking-tight md:text-7xl">
              {details.when.value}
            </p>
            <p className="mt-4 text-lg text-ice/85">{details.when.note}</p>
          </Card>

          <Card className="md:col-span-5">
            <p className={labelClasses}>{details.departure.label}</p>
            <p className="mt-4 text-3xl font-semibold tracking-tight">{details.departure.value}</p>
            <p className="mt-3 text-ice/85">{details.departure.note}</p>
            <p className="mt-2 text-sm text-ice/70">{details.departure.address}</p>
          </Card>

          <Card className="md:col-span-5">
            <p className={labelClasses}>{details.place.label}</p>
            <p className="mt-4 text-3xl font-semibold tracking-tight">{details.place.value}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <ExternalLink href={details.place.mapLink.href} className={linkClasses}>
                <MapPinIcon className="size-4" />
                {details.place.mapLink.label}
              </ExternalLink>
              <ExternalLink href={details.place.instagramLink.href} className={linkClasses}>
                <InstagramIcon className="size-4" />
                {details.place.instagramLink.label}
              </ExternalLink>
            </div>
          </Card>

          <Card className="md:col-span-7">
            <p className={labelClasses}>{details.audience.label}</p>
            <p className="mt-4 text-3xl font-semibold tracking-tight">{details.audience.value}</p>
            <p className="mt-3 text-lg text-ice/85">{details.audience.note}</p>
          </Card>
        </div>

        <h3 className="reveal mt-16 text-2xl font-semibold tracking-tight md:mt-24 md:text-4xl">
          {details.momentsTitle}
        </h3>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {details.moments.map((moment) => (
            <li
              key={moment.name}
              className={`reveal rounded-3xl border bg-abyss/60 p-6 backdrop-blur-md md:p-8 ${toneClasses[moment.tone]}`}
            >
              <p className="text-2xl font-bold tracking-tight">{moment.name}</p>
              <p className="mt-2 text-base text-ice/90">{moment.description}</p>
            </li>
          ))}
        </ul>

        <Card className="mt-4 text-center md:mt-6 md:py-12">
          <p className={labelClasses}>{details.guests.label}</p>
          <p className="mt-4 text-2xl font-light tracking-tight text-balance md:text-4xl">
            {details.guests.value}
          </p>
        </Card>
      </Container>
    </section>
  );
}
