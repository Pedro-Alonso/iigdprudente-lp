"use client";

import { useEffect } from "react";
import { useRetreatPhase } from "./use-now";

/** Depois de 09/02/2027, leva quem ainda abrir a página de volta para a home. */
export function PostEventRedirect() {
  const phase = useRetreatPhase();

  useEffect(() => {
    if (phase === "ended") window.location.replace("/");
  }, [phase]);

  return null;
}
