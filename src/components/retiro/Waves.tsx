type WavesProps = {
  className?: string;
};

const wavePath = "M0 60 C 180 20, 360 100, 540 60 S 900 20, 1080 60 S 1260 100, 1440 60 V120 H0 Z";

/** Faixa de ondas que desliza devagar (parada com prefers-reduced-motion). */
export function Waves({ className = "" }: WavesProps) {
  return (
    <div aria-hidden="true" className={`pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 2880 120"
        preserveAspectRatio="none"
        focusable="false"
        className="retreat-wave h-full w-[200%] fill-current"
      >
        <path d={wavePath} />
        <path d={wavePath} transform="translate(1440 0)" />
      </svg>
    </div>
  );
}
