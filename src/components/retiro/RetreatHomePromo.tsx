"use client";

import Link from "next/link";
import { retreat } from "@/content/retreat";
import { useRetreatPhase } from "./use-now";

/** Faixa fixa no topo da home. Some sozinha depois de 09/02/2027. */
export function RetreatBanner() {
  const phase = useRetreatPhase();
  const { home } = retreat;

  if (phase === "ended") return null;

  return (
    <Link
      href={retreat.path}
      data-retreat-banner=""
      className="group fixed inset-x-0 top-0 z-60 flex h-10 items-center justify-center gap-2 bg-linear-to-r from-petrol via-abyss to-petrol px-3 text-center text-xs font-semibold text-ice sm:text-sm"
    >
      <span aria-hidden="true" className="relative flex size-2.5">
        <span className="absolute inline-flex size-full rounded-full bg-sun opacity-75 motion-safe:animate-ping" />
        <span className="relative inline-flex size-2.5 rounded-full bg-sun" />
      </span>
      <span className="font-bold tracking-wide">{home.bannerLabel}</span>
      <span aria-hidden="true" className="text-ice/40">
        ·
      </span>
      <span>{home.bannerDates}</span>
      <span aria-hidden="true" className="hidden text-ice/40 sm:inline">
        ·
      </span>
      <span className="hidden underline decoration-sun decoration-2 underline-offset-4 sm:inline">
        {phase === "open" ? home.bannerOpen : home.bannerClosed}
      </span>
      <span className="font-bold text-sun transition-transform group-hover:translate-x-1">
        {home.bannerCta} →
      </span>
    </Link>
  );
}

/** Destaque abaixo dos perfis em Ministérios, ligado ao cartão do JQV. */
export function RetreatMinistryCard() {
  const phase = useRetreatPhase();
  const { home } = retreat;

  if (phase === "ended") return null;

  return (
    <Link
      href={retreat.path}
      className="group mt-6 flex flex-col gap-4 rounded-3xl border border-turq/40 bg-linear-to-r from-petrol/70 to-abyss/90 p-6 transition-colors hover:border-sun md:flex-row md:items-center md:justify-between md:p-8"
    >
      <span className="flex flex-col gap-1">
        <span className="text-xs font-semibold tracking-[0.3em] text-turq uppercase">
          {home.cardKicker}
        </span>
        <span className="text-2xl font-extrabold text-ice">{home.cardTitle}</span>
        <span className="text-ice/85">{home.cardDescription}</span>
      </span>
      <span className="inline-flex items-center gap-2 self-start rounded-full bg-sun px-5 py-3 font-bold text-abyss transition-transform group-hover:translate-x-1 md:self-auto">
        {home.cardCta} →
      </span>
    </Link>
  );
}
