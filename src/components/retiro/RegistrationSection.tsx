import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { InstagramIcon } from "@/components/ui/Icons";
import { retreat } from "@/content/retreat";
import { RegistrationCta, RegistrationDeadline } from "./RegistrationCta";
import { Waves } from "./Waves";

const contactClasses =
  "inline-flex min-h-12 items-center gap-2 rounded-full border border-ice/25 px-5 text-base font-semibold text-ice transition-colors hover:border-sun hover:text-sun";

export function RegistrationSection() {
  const { registration, assets, footer } = retreat;

  return (
    <section
      id={registration.id}
      aria-labelledby="registration-title"
      className="bg-abyss-glow relative isolate snap-start overflow-hidden bg-abyss text-ice"
    >
      <Waves className="absolute inset-x-0 top-0 -z-10 h-12 text-abyss md:h-20" />

      <Container className="py-28 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="registration-title"
            className="reveal text-5xl leading-[1.05] font-semibold tracking-tight md:text-7xl"
          >
            {registration.title}
          </h2>

          <p className="reveal mt-12 text-xs font-semibold tracking-[0.3em] text-turq uppercase">
            {registration.price.label}
          </p>
          <p className="reveal mt-2 text-6xl font-extrabold tracking-tight text-sun md:text-8xl">
            {registration.price.value}
          </p>
          <p className="reveal mx-auto mt-4 max-w-xl text-lg text-ice/85 md:text-xl">
            {registration.payment}
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-3xl gap-3 md:grid-cols-3">
          {registration.steps.map((step, index) => (
            <li
              key={step.when}
              className="reveal flex items-center gap-4 rounded-2xl border border-ice/15 bg-ice/5 p-4 md:flex-col md:items-start md:gap-2 md:p-5"
            >
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-turq/20 text-sm font-bold text-turq"
              >
                {index + 1}
              </span>
              <span>
                <span className="block text-lg font-bold">{step.when}</span>
                <span className="block text-sm text-ice/80">{step.what}</span>
              </span>
            </li>
          ))}
        </ol>

        <div className="reveal mt-14 flex flex-col items-center gap-3 text-center">
          <RegistrationCta size="lg" className="w-full sm:w-auto" />
          <RegistrationDeadline className="text-sm text-ice/80" />
        </div>

        <div className="reveal mt-24 text-center">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {registration.contactTitle}
          </h3>
          <ul className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            {registration.contacts.map((contact) => (
              <li key={contact.label}>
                <ExternalLink href={contact.href} className={contactClasses}>
                  <span className="text-sun">{registration.contactVia}</span>
                  {contact.label}
                </ExternalLink>
              </li>
            ))}
            <li>
              <ExternalLink href={registration.instagram.href} className={contactClasses}>
                <InstagramIcon className="size-5 text-sun" />
                {registration.instagram.label}
              </ExternalLink>
            </li>
          </ul>
        </div>

        <div className="mt-24 flex flex-col items-center gap-5 border-t border-ice/15 pt-10 pb-16 text-center text-sm text-ice/70 md:pb-8">
          <div className="flex items-center gap-5">
            <img
              src={assets.iigdLight}
              alt="Igreja Internacional da Graça de Deus"
              width={480}
              height={230}
              loading="lazy"
              className="h-8 w-auto brightness-150"
            />
            <span aria-hidden="true" className="h-8 w-px bg-ice/25" />
            <img
              src={assets.jqvLight}
              alt="Jovens Que Vencem"
              width={480}
              height={485}
              loading="lazy"
              className="h-10 w-auto opacity-90"
            />
          </div>
          <p>{footer.line}</p>
          <Link
            href={footer.backLink.href}
            className="inline-flex min-h-11 items-center font-semibold text-ice underline decoration-sun decoration-2 underline-offset-4"
          >
            {footer.backLink.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
