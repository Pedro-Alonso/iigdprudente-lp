import { site } from "@/content/site";
import { Container } from "./ui/Container";
import { ExternalLink } from "./ui/ExternalLink";
import { ArrowUpRightIcon, CrossIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";

export function About() {
  const { about } = site;
  const headingId = `${about.id}-title`;

  return (
    <section id={about.id} aria-labelledby={headingId} className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading id={headingId} title={about.title} />

        <div className="mt-12 rounded-2xl border-l-4 border-gold bg-mist p-6 sm:p-8">
          <h3 className="text-sm font-semibold tracking-widest text-royal uppercase">
            {about.missionTitle}
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-ink sm:text-xl">{about.mission}</p>
        </div>

        <h3 className="mt-16 font-serif text-2xl font-semibold text-navy">{about.pillarsTitle}</h3>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/10"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-navy text-gold">
                <CrossIcon />
              </span>
              <h4 className="mt-4 text-lg font-semibold text-navy">{pillar.title}</h4>
              <p className="mt-2 text-muted">{pillar.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 max-w-3xl">
          <h3 className="font-serif text-2xl font-semibold text-navy">{about.historyTitle}</h3>
          <p className="mt-4 text-lg leading-relaxed text-muted">{about.history}</p>
          <ExternalLink
            href={about.historyLink.href}
            className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-semibold text-royal underline decoration-gold decoration-2 underline-offset-4 hover:text-navy"
          >
            {about.historyLink.label}
            <ArrowUpRightIcon className="size-4" />
          </ExternalLink>
        </div>
      </Container>
    </section>
  );
}
