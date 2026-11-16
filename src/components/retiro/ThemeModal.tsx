"use client";

import { useRef, type MouseEvent } from "react";
import { retreat } from "@/content/retreat";

/**
 * Resumo do tema em um modal (`<dialog>` nativo): fecha com o botão, com Esc ou clicando fora.
 * O cabeçalho fica fixo e só o texto rola, então nunca é preciso voltar ao topo para fechar.
 */
export function ThemeModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { why, manifesto } = retreat;

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  // Clicar no fundo escurecido dispara o clique no próprio <dialog> (o conteúdo ocupa todo o resto).
  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) close();
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="reveal group flex min-h-14 w-full items-center justify-between gap-4 rounded-3xl border border-ice/20 bg-abyss/50 px-6 text-left text-base font-semibold text-ice backdrop-blur-md transition-colors hover:border-sun"
      >
        {why.readMore}
        <span
          aria-hidden="true"
          className="grid size-9 shrink-0 place-items-center rounded-full bg-sun text-xl leading-none text-abyss transition-transform group-hover:rotate-90"
        >
          +
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="theme-modal-title"
        onClick={closeOnBackdrop}
        className="retreat-modal m-auto max-h-[calc(100svh-2rem)] w-[min(42rem,calc(100%-2rem))] overflow-hidden rounded-3xl border border-ice/20 bg-abyss p-0 text-ice shadow-2xl shadow-abyss/60 backdrop:bg-abyss/75 backdrop:backdrop-blur-sm open:flex open:flex-col"
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-ice/15 px-6 py-4 md:px-8">
          <h3
            id="theme-modal-title"
            className="text-sm font-semibold tracking-[0.3em] text-turq uppercase"
          >
            {manifesto.title}
          </h3>
          <button
            type="button"
            onClick={close}
            aria-label={manifesto.closeLabel}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-ice/25 text-ice transition-colors hover:border-sun hover:text-sun"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
              focusable="false"
              className="size-5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="space-y-8 overflow-y-auto overscroll-contain px-6 py-8 text-base leading-relaxed md:px-8 md:text-lg">
          {manifesto.blocks.map((block, blockIndex) => (
            <div key={blockIndex} className="space-y-4">
              {"heading" in block && block.heading ? (
                <h4 className="text-2xl font-semibold tracking-tight text-ice">{block.heading}</h4>
              ) : null}
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-ice/90">
                  {paragraph}
                </p>
              ))}
              {"list" in block && block.list ? (
                <ul className="space-y-2 border-l-2 border-sun pl-5 font-medium text-ice">
                  {block.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {"closing" in block && block.closing
                ? block.closing.map((line) => (
                    <p key={line} className="text-ice/90">
                      {line}
                    </p>
                  ))
                : null}
            </div>
          ))}
        </div>
      </dialog>
    </>
  );
}
