import { site } from "@/content/site";
import { Container } from "./ui/Container";
import { ExternalLink } from "./ui/ExternalLink";
import { ArrowUpRightIcon, Icon, QuoteMarkIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";

export function About() {
  const { about } = site;
  const headingId = `${about.id}-title`;

  return (
    <section id={about.id} aria-labelledby={headingId} className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading id={headingId} title={about.title} />
            <div className="reveal relative mt-10">
              <QuoteMarkIcon className="size-12 text-gold" />
              <h3 className="mt-4 text-sm font-bold tracking-[0.2em] text-royal uppercase">
                {about.missionTitle}
              </h3>
              <blockquote className="mt-3 text-xl leading-relaxed font-semibold text-navy sm:text-2xl sm:leading-relaxed">
                {about.mission}
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <h3 className="reveal text-2xl font-extrabold tracking-tight text-navy">
              {about.pillarsTitle}
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {about.pillars.map((pillar) => (
                <li
                  key={pillar.title}
                  className="reveal group relative overflow-hidden rounded-3xl bg-mist p-7 ring-1 ring-navy/5 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-navy/10 hover:ring-gold/40"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-10 -right-10 size-32 rounded-full bg-linear-to-br from-royal/10 to-transparent transition-transform duration-500 group-hover:scale-125"
                  />
                  <span className="relative grid size-12 place-items-center rounded-2xl bg-linear-to-br from-navy to-royal text-gold-soft shadow-lg shadow-navy/25">
                    <Icon name={pillar.icon} className="size-6" />
                  </span>
                  <h4 className="relative mt-5 text-lg font-bold text-navy">{pillar.title}</h4>
                  <p className="relative mt-2 leading-relaxed text-muted">{pillar.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal relative isolate mt-20 overflow-hidden rounded-4xl bg-section-dark p-8 text-white shadow-2xl shadow-navy/25 sm:p-12">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid" />
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-14">
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] text-gold-soft uppercase">
                {about.historyTitle}
              </h3>
              <p
                aria-hidden="true"
                className="mt-2 text-7xl leading-none font-extrabold tracking-tighter text-gold-gradient sm:text-8xl"
              >
                {about.foundedYear}
              </p>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-blue-50">{about.history}</p>
              <ExternalLink
                href={about.historyLink.href}
                className="group mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/40 px-5 font-bold text-gold-light transition-colors hover:bg-gold/10"
              >
                {about.historyLink.label}
                <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </ExternalLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
