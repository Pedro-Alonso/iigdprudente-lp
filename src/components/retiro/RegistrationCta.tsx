"use client";

import { ExternalLink } from "@/components/ui/ExternalLink";
import { retreat } from "@/content/retreat";
import { useRetreatPhase } from "./use-now";

type RegistrationCtaProps = {
  size?: "md" | "lg";
  className?: string;
};

const sizeClasses = {
  md: "min-h-12 px-6 text-base",
  lg: "min-h-14 px-8 text-lg",
} as const;

/** Botão de inscrição: vira "Inscrições encerradas" depois de 01/02/2027. */
export function RegistrationCta({ size = "md", className = "" }: RegistrationCtaProps) {
  const phase = useRetreatPhase();
  const { form, closed } = retreat.registration;
  const base = `inline-flex items-center justify-center gap-2 rounded-full font-bold ${sizeClasses[size]} ${className}`;

  if (phase !== "open") {
    return (
      <span role="status" className={`${base} border border-ice/30 bg-abyss/50 text-ice/80`}>
        {closed}
      </span>
    );
  }

  return (
    <ExternalLink
      href={form.href}
      className={`${base} group bg-sun text-abyss shadow-lg shadow-sun/25 transition-all duration-300 hover:shadow-sun/45 motion-safe:hover:-translate-y-0.5`}
    >
      {form.label}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        className="size-5 transition-transform group-hover:translate-x-1"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </ExternalLink>
  );
}

/** Linha com o prazo das inscrições, que acompanha o estado do botão. */
export function RegistrationDeadline({ className = "" }: { className?: string }) {
  const phase = useRetreatPhase();
  const { deadline, closed } = retreat.registration;

  return <p className={className}>{phase === "open" ? deadline : closed}</p>;
}
