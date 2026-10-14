import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.notFound.title} | ${site.name}`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const { notFound } = site;

  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="min-h-[70svh] bg-mist pt-32 pb-24 md:pt-44">
        <Container className="text-center">
          <span aria-hidden="true" className="mx-auto mb-6 block h-1 w-12 rounded-full bg-gold" />
          <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            {notFound.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{notFound.description}</p>
          <div className="mt-8">
            <ButtonLink href={notFound.backLink.href}>{notFound.backLink.label}</ButtonLink>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
