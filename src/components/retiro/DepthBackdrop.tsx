"use client";

import { useEffect, useRef } from "react";
import { retreat } from "@/content/retreat";

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const smooth = (value: number) => value * value * (3 - 2 * value);
const depthOf = (section: HTMLElement) => Number(section.dataset.depth ?? 0);

/**
 * Fundo fixo que troca de foto conforme a pessoa desce na página: cada seção declara seu
 * `data-depth` e a foto seguinte entra em fade por cima da anterior, em vez de um corte
 * seco na divisa entre as seções. Só mexe em `opacity` pelo CSSOM (compatível com a CSP).
 * As camadas são os filhos diretos do contêiner, na ordem: superfície, calmo, ondas, fundo.
 */
export function DepthBackdrop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { assets } = retreat;

  useEffect(() => {
    const container = containerRef.current;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));
    const [firstSection] = sections;
    if (!container || !firstSection) return;

    const layers = Array.from(container.children) as HTMLElement[];
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const center = window.scrollY + viewport * 0.5;
      const band = viewport * 0.4;

      let position = depthOf(firstSection);
      sections.forEach((section, index) => {
        const previousSection = sections[index - 1];
        if (!previousSection) return;

        const previous = depthOf(previousSection);
        const next = depthOf(section);
        if (previous === next) return;

        const boundary = section.getBoundingClientRect().top + window.scrollY;
        const progress = clamp((center - (boundary - band)) / (band * 2));
        position += (next - previous) * smooth(progress);
      });

      layers.forEach((layer, layerIndex) => {
        if (layerIndex === 0) return;
        layer.style.opacity = String(clamp(position - (layerIndex - 1)));
      });
    };

    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
      if (frame !== 0) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 bg-abyss"
    >
      <div className="absolute inset-0">
        <img
          src={assets.surface}
          alt=""
          width={1080}
          height={1350}
          fetchPriority="high"
          className="size-full object-cover object-[50%_62%]"
        />
      </div>
      <div className="absolute inset-0 opacity-0">
        <img
          src={assets.calm}
          alt=""
          width={1080}
          height={1350}
          className="size-full object-cover object-[50%_55%]"
        />
      </div>
      <div className="absolute inset-0 opacity-0">
        <img
          src={assets.ripples}
          alt=""
          width={1080}
          height={1350}
          className="size-full object-cover object-[50%_65%]"
        />
      </div>
      <div className="bg-abyss-glow absolute inset-0 bg-abyss opacity-0" />
    </div>
  );
}
