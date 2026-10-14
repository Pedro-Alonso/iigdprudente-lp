import { site } from "@/content/site";
import { Container } from "./ui/Container";
import { ExternalLink } from "./ui/ExternalLink";
import { InstagramIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";

export function Ministries() {
  const { ministries } = site;
  const headingId = `${ministries.id}-title`;

  return (
    <section
      id={ministries.id}
      aria-labelledby={headingId}
      className="relative isolate overflow-hidden bg-navy py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -bottom-24 -z-10 size-80 rotate-45 rounded-3xl border border-gold/20"
      />
      <Container>
        <SectionHeading
          id={headingId}
          title={ministries.title}
          intro={ministries.intro}
          tone="dark"
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {ministries.profiles.map((profile) => (
            <li key={profile.handle}>
              <ExternalLink
                href={profile.href}
                className="flex h-full min-h-11 items-center gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/15 transition-colors hover:bg-white/10"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold">
                  <InstagramIcon className="size-6" />
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-white">{profile.name}</span>
                  <span className="text-gold-soft">{profile.handle}</span>
                </span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
