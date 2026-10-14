type SectionHeadingProps = {
  id: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ id, title, intro, tone = "light" }: SectionHeadingProps) {
  const titleColor = tone === "dark" ? "text-white" : "text-navy";
  const introColor = tone === "dark" ? "text-blue-100" : "text-muted";

  return (
    <div className="max-w-2xl">
      <span aria-hidden="true" className="mb-4 block h-1 w-12 rounded-full bg-gold" />
      <h2 id={id} className={`font-serif text-3xl font-semibold sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {intro ? <p className={`mt-3 text-lg ${introColor}`}>{intro}</p> : null}
    </div>
  );
}
