import { site } from "@/content/site";
import { Container } from "./ui/Container";
import { ExternalLink } from "./ui/ExternalLink";
import { ArrowUpRightIcon, InstagramIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";

export function Ministries() {
  const { ministries } = site;
  const headingId = `${ministries.id}-title`;

  return (
    <section
      id={ministries.id}
      aria-labelledby={headingId}
      className="relative isolate overflow-hidden bg-section-dark py-24 md:py-32"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid" />
      <div
        aria-hidden="true"
        className="absolute -right-32 -bottom-32 -z-10 size-96 rounded-full border border-dashed border-gold/20"
      />
      <Container>
        <SectionHeading
          id={headingId}
          title={ministries.title}
          intro={ministries.intro}
          tone="dark"
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {ministries.profiles.map((profile) => (
            <li
              key={profile.handle}
              className="reveal rounded-3xl bg-linear-to-br from-gold/60 via-white/10 to-royal/60 p-px"
            >
              <ExternalLink
                href={profile.href}
                className="group flex h-full flex-col gap-10 rounded-[calc(1.5rem-1px)] bg-night/85 p-7 transition-colors hover:bg-night/60"
              >
                <span className="flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-gold-light via-gold to-royal text-navy-deep shadow-lg shadow-black/30">
                    <InstagramIcon className="size-7" />
                  </span>
                  <span className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-gold group-hover:text-navy-deep">
                    <ArrowUpRightIcon className="size-5" />
                  </span>
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-lg font-bold text-white">{profile.name}</span>
                  <span className="font-semibold text-gold-soft">{profile.handle}</span>
                </span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
