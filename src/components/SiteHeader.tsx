import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./ui/Container";

export function SiteHeader() {
  const { wordmark, navigation, skipLink } = site;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/40 bg-navy-deep/95 backdrop-blur">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-navy"
      >
        {skipLink}
      </a>
      <Container className="flex flex-col items-center gap-1 py-2 md:flex-row md:justify-between md:py-3">
        <Link
          href="/"
          aria-label={`${navigation.homeLabel} — ${site.name}`}
          className="flex min-h-11 items-center gap-2 rounded-md px-1 text-white"
        >
          <span className="font-serif text-lg font-semibold sm:text-xl">{wordmark.primary}</span>
          <span aria-hidden="true" className="h-5 w-px bg-gold" />
          <span className="text-sm font-medium tracking-wide text-gold-soft">
            {wordmark.secondary}
          </span>
        </Link>
        <nav aria-label={navigation.label}>
          <ul className="flex items-center gap-1 sm:gap-2">
            {navigation.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-blue-50 transition-colors hover:bg-white/10 hover:text-white sm:px-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
