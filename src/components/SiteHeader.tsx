import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./ui/Container";
import { ExternalLink } from "./ui/ExternalLink";
import { CrossIcon, Icon, InstagramIcon } from "./ui/Icons";

export function SiteHeader() {
  const { wordmark, navigation, skipLink, hero } = site;

  return (
    <header className="absolute inset-x-0 top-0 z-50 md:fixed md:top-4">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-navy"
      >
        {skipLink}
      </a>
      <Container>
        <div className="flex items-center justify-between gap-4 py-4 md:rounded-full md:border md:border-white/10 md:bg-night/70 md:py-2 md:pr-2 md:pl-3 md:shadow-xl md:shadow-black/25 md:backdrop-blur-xl">
          <Link href="/" className="flex min-h-11 items-center gap-3 rounded-full pr-2 text-white">
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-full bg-linear-to-br from-gold-light to-gold text-navy-deep shadow-md shadow-gold/30"
            >
              <CrossIcon className="size-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base font-extrabold tracking-tight">{wordmark.primary}</span>
              <span className="text-xs font-semibold tracking-wide text-gold-soft">
                {wordmark.secondary}
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <nav aria-label={navigation.label}>
              <ul className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-3 gap-1 rounded-2xl border border-white/10 bg-night/90 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-xl md:static md:flex md:gap-1 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
                {navigation.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-xs font-semibold text-blue-50 transition-colors hover:bg-white/10 hover:text-white md:min-h-11 md:flex-row md:rounded-full md:px-4 md:text-sm"
                    >
                      <Icon name={link.icon} className="size-5 text-gold-soft md:hidden" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ExternalLink
              href={hero.secondaryCta.href}
              className="hidden size-11 place-items-center rounded-full bg-white/10 text-gold-soft transition-colors hover:bg-white/20 md:grid"
            >
              <InstagramIcon />
              <span className="sr-only">{hero.secondaryCta.label}</span>
            </ExternalLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
