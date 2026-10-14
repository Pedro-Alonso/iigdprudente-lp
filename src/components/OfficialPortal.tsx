import { site } from "@/content/site";
import { Container } from "./ui/Container";
import { ExternalLink } from "./ui/ExternalLink";
import { ArrowUpRightIcon } from "./ui/Icons";

export function OfficialPortal() {
  const { officialPortal } = site;
  const headingId = `${officialPortal.id}-title`;

  return (
    <section id={officialPortal.id} aria-labelledby={headingId} className="bg-mist pb-20">
      <Container>
        <div className="flex flex-col gap-6 border-t border-navy/10 pt-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h2 id={headingId} className="text-lg font-extrabold tracking-tight text-navy">
              {officialPortal.title}
            </h2>
            <p className="mt-1 text-muted">{officialPortal.intro}</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {officialPortal.links.map((link) => (
              <li key={link.href}>
                <ExternalLink
                  href={link.href}
                  className="group inline-flex min-h-11 items-center gap-1.5 rounded-full bg-white px-4 text-sm font-semibold text-royal ring-1 ring-navy/10 transition-all hover:text-navy hover:ring-gold/60"
                >
                  {link.label}
                  <ArrowUpRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
