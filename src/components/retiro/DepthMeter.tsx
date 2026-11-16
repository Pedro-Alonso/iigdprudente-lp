"use client";

import { useEffect, useState } from "react";
import { retreat } from "@/content/retreat";

/** Mostra o "nível da água" conforme a seção na tela (cada seção declara seu `data-depth`). */
export function DepthMeter() {
  const [level, setLevel] = useState(0);
  const { levels, depthMeterLabel } = retreat;

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));
    const visible = new Set<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target as HTMLElement;
          if (entry.isIntersecting) visible.add(section);
          else visible.delete(section);
        }
        if (visible.size > 0) {
          setLevel(Math.max(...Array.from(visible, (section) => Number(section.dataset.depth))));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
