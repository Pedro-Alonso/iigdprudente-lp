import { useSyncExternalStore } from "react";
import { getRetreatPhase, type RetreatPhase } from "@/lib/retreat-schedule";

let currentTime: number | null = null;
let timer: ReturnType<typeof setInterval> | undefined;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);

  if (listeners.size === 1) {
    currentTime = Date.now();
    timer = setInterval(() => {
      currentTime = Date.now();
      listeners.forEach((notify) => notify());
    }, 1000);
  }

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      clearInterval(timer);
      timer = undefined;
    }
  };
}

const getSnapshot = () => currentTime;
const getServerSnapshot = () => null;

/** Hora atual em ms, atualizada a cada segundo. `null` no servidor e na hidratação. */
export function useNow(): number | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useRetreatPhase(): RetreatPhase {
  return getRetreatPhase(useNow());
}
