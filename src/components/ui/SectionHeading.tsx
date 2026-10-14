type SectionHeadingProps = {
  id: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ id, title, intro, tone = "light" }: SectionHeadingProps) {
  const titleColor = tone === "dark" ? "text-white" : "text-navy";
  const introColor = tone === "dark" ? "text-blue-100/90" : "text-muted";

  return (
    <div className="reveal max-w-2xl">
      <span aria-hidden="true" className="mb-5 flex items-center gap-1.5">
        <span className="h-1 w-10 rounded-full bg-linear-to-r from-gold to-gold-soft" />
        <span className="h-1 w-3 rounded-full bg-gold/50" />
      </span>
      <h2
        id={id}
        className={`text-4xl leading-tight font-extrabold tracking-tight text-balance sm:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      {intro ? <p className={`mt-4 text-lg leading-relaxed ${introColor}`}>{intro}</p> : null}
    </div>
  );
}
