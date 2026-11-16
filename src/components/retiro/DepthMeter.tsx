"use client";

import { useEffect, useState } from "react";
import { retreat } from "@/content/retreat";

type Target = { element: HTMLElement; index: number };

/** Mostra o "nível da água" conforme a seção que está na tela (tornozelos → a nado). */
export function DepthMeter() {
  const [level, setLevel] = useState(0);
  const { levels, depthMeterLabel } = retreat;

  useEffect(() => {
    const targets = levels
      .map((item, index) => ({ element: document.getElementById(item.id), index }))
      .filter((target): target is Target => target.element !== null);

    const visible = new Set<number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = targets.find((target) => target.element === entry.target)?.index;
          if (index === undefined) continue;
          if (entry.isIntersecting) visible.add(index);
          else visible.delete(index);
        }
        if (visible.size > 0) setLevel(Math.max(...visible));
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    targets.forEach((target) => observer.observe(target.element));
    return () => observer.disconnect();
  }, [levels]);

  return (
    <nav
      aria-label={depthMeterLabel}
      className="pointer-events-none fixed inset-x-0 top-3 z-40 flex justify-center lg:inset-x-auto lg:top-1/2 lg:right-5 lg:-translate-y-1/2"
    >
      <ol className="pointer-events-auto flex items-center gap-1 rounded-full border border-ice/15 bg-abyss/70 p-1.5 shadow-xl shadow-abyss/30 backdrop-blur-xl lg:flex-col lg:items-stretch lg:gap-0 lg:rounded-3xl lg:p-2">
        {levels.map((item, index) => {
          const reached = index <= level;
          const current = index === level;

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={current ? "location" : undefined}
                className="flex items-center gap-2 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors lg:px-3 lg:py-2.5"
              >
                <span
                  aria-hidden="true"
                  className={`size-2.5 shrink-0 rounded-full border transition-all duration-500 ${
                    current
                      ? "scale-125 border-sun bg-sun"
                      : reached
                        ? "border-turq bg-turq"
                        : "border-ice/50 bg-transparent"
                  }`}
                />
                <span
                  className={`transition-colors duration-500 ${
                    current ? "inline text-sun" : "hidden text-ice/60 lg:inline"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
