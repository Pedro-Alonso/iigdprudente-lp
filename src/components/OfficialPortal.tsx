import { site } from "@/content/site";
import { Container } from "./ui/Container";
import { ExternalLink } from "./ui/ExternalLink";

export function OfficialPortal() {
  const { officialPortal } = site;
  const headingId = `${officialPortal.id}-title`;

  return (
    <section
      id={officialPortal.id}
      aria-labelledby={headingId}
      className="border-t border-navy/10 bg-mist py-12"
    >
      <Container>
        <h2 id={headingId} className="font-serif text-xl font-semibold text-navy">
          {officialPortal.title}
        </h2>
        <p className="mt-2 text-muted">{officialPortal.intro}</p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
          {officialPortal.links.map((link) => (
            <li key={link.href}>
              <ExternalLink
                href={link.href}
                className="inline-flex min-h-11 items-center text-royal underline decoration-gold underline-offset-4 hover:text-navy"
              >
                {link.label}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
