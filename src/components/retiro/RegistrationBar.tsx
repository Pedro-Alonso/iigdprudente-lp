"use client";

import { ExternalLink } from "@/components/ui/ExternalLink";
import { retreat } from "@/content/retreat";
import { getCountdown, getRetreatPhase } from "@/lib/retreat-schedule";
import { useNow } from "./use-now";

const pad = (value: number) => String(value).padStart(2, "0");

/** Barra fixa com contagem regressiva até a saída. Aparece depois de rolar a capa. */
export function RegistrationBar() {
  const now = useNow();
  const phase = getRetreatPhase(now);
  const countdown = now === null ? null : getCountdown(now);
  const { bar, registration } = retreat;

  return (
    <div className="retreat-bar fixed inset-x-3 bottom-3 z-40 mx-auto max-w-md lg:inset-x-auto lg:top-5 lg:bottom-auto lg:left-5 lg:mx-0 lg:max-w-none">
      <div className="flex items-center justify-between gap-3 rounded-full border border-ice/20 bg-abyss/85 py-2 pr-2 pl-5 shadow-2xl shadow-abyss/50 backdrop-blur-xl">
        <p role="timer" className="min-w-0 text-sm leading-tight text-ice">
          {countdown ? (
            <>
              <span className="block text-[0.65rem] tracking-[0.2em] text-ice/70 uppercase">
                {bar.countdownPrefix}
              </span>
              <span className="font-semibold tabular-nums">
                {countdown.days}
                {bar.units.days} {pad(countdown.hours)}
                {bar.units.hours} {pad(countdown.minutes)}
                {bar.units.minutes} {pad(countdown.seconds)}
                {bar.units.seconds}
              </span>
            </>
          ) : (
            <span className="font-semibold">
              {now === null ? retreat.hero.dates : bar.inProgress}
            </span>
          )}
        </p>
        {phase === "open" ? (
          <ExternalLink
            href={registration.form.href}
            className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-sun px-5 text-sm font-bold text-abyss"
          >
            {bar.cta}
          </ExternalLink>
        ) : (
          <span className="shrink-0 pr-3 text-xs font-semibold text-ice/80">
            {registration.closed}
          </span>
        )}
      </div>
    </div>
  );
}
