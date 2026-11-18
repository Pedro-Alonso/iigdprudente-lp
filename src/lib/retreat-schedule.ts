// O Brasil não tem horário de verão desde 2019, então -03:00 é fixo em todo o ano.
export const RETREAT_START = Date.parse("2027-02-05T21:30:00-03:00");
export const REGISTRATION_DEADLINE = Date.parse("2027-02-01T23:59:59-03:00");
export const RETREAT_END = Date.parse("2027-02-09T23:59:59-03:00");

export type RetreatPhase = "open" | "closed" | "ended";

/** `null` (render do servidor, antes da hidratação) conta como "inscrições abertas". */
export function getRetreatPhase(now: number | null): RetreatPhase {
  if (now === null) return "open";
  if (now > RETREAT_END) return "ended";
  if (now > REGISTRATION_DEADLINE) return "closed";
  return "open";
}

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/** Tempo restante até a saída, ou `null` se a saída já passou. */
export function getCountdown(now: number): Countdown | null {
  const remaining = RETREAT_START - now;
  if (remaining <= 0) return null;

  const totalSeconds = Math.floor(remaining / 1000);
  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
  };
}
