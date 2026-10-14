import { site } from "@/content/site";
import { Container } from "./ui/Container";

export function Footer() {
  const { footer } = site;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-night pt-8 pb-28 md:pb-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent"
      />
      <Container className="space-y-1 text-center text-xs text-subtle">
        <p>{footer.legalLine}</p>
        <p>{footer.officialSiteLine}</p>
        <p>
          {footer.copyrightSymbol} {currentYear}
        </p>
      </Container>
    </footer>
  );
}
