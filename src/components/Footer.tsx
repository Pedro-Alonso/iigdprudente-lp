import { site } from "@/content/site";
import { Container } from "./ui/Container";

export function Footer() {
  const { footer } = site;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/40 bg-white py-8">
      <Container className="space-y-1 text-center text-xs text-muted">
        <p>{footer.legalLine}</p>
        <p>{footer.officialSiteLine}</p>
        <p>
          {footer.copyrightSymbol} {currentYear}
        </p>
      </Container>
    </footer>
  );
}
