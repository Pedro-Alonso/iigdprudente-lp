type WordmarkProps = {
  className?: string;
};

/** Logotipo IMERSOS: texto em Dirtyline (minúsculas = grotesca pesada, E e O = floreados). */
export function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span
      role="img"
      aria-label="Imersos"
      className={`block font-display leading-[0.74] ${className}`}
    >
      <span aria-hidden="true" className="block">
        imEr
      </span>
      <span aria-hidden="true" className="-mt-[0.02em] block pl-[0.07em]">
        sOs
      </span>
    </span>
  );
}
