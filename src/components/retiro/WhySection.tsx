import { Container } from "@/components/ui/Container";
import { retreat } from "@/content/retreat";
import { Waves } from "./Waves";

export function WhySection() {
  const { why, assets, manifesto } = retreat;

  return (
    <section
      id={why.id}
      aria-labelledby="why-title"
      className="relative isolate snap-start overflow-hidden bg-petrol text-ice"
    >
      <img
        src={assets.calm}
        alt=""
        width={1080}
        height={1350}
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-abyss/45" />
      <Waves className="absolute inset-x-0 top-0 -z-10 h-12 text-abyss/90 md:h-20" />

      <Container className="grid gap-12 py-28 md:py-40 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <h2
          id="why-title"
          className="reveal self-start text-5xl leading-[1.05] font-semibold tracking-tight text-balance lg:sticky lg:top-28 lg:text-7xl"
        >
          {why.title.before}
          <span className="underline decoration-sun decoration-4 underline-offset-[0.18em]">
            {why.title.highlight}
          </span>
          {why.title.after}
        </h2>

        <div className="space-y-8 text-xl leading-relaxed font-light md:text-2xl">
          {why.paragraphs.map((paragraph) => (
            <p key={paragraph} className="reveal text-pretty">
              {paragraph}
            </p>
          ))}

          <p className="reveal pt-4 text-3xl leading-tight font-semibold tracking-tight text-turq md:text-5xl">
            {why.motto}
          </p>

          <details className="group reveal rounded-3xl border border-ice/20 bg-abyss/50 backdrop-blur-md">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-3xl px-6 text-base font-semibold text-ice marker:hidden [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">{why.readMore}</span>
              <span className="hidden group-open:inline">{why.readLess}</span>
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-sun text-xl leading-none text-abyss transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="space-y-10 px-6 pt-2 pb-10 text-base leading-relaxed font-normal md:text-lg">
              <p className="text-sm font-semibold tracking-[0.3em] text-turq uppercase">
                {manifesto.title}
              </p>
              {manifesto.blocks.map((block, blockIndex) => (
                <div key={blockIndex} className="space-y-4">
                  {"heading" in block && block.heading ? (
                    <h3 className="text-2xl font-semibold tracking-tight text-ice">
                      {block.heading}
                    </h3>
                  ) : null}
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-ice/90">
                      {paragraph}
                    </p>
                  ))}
                  {"list" in block && block.list ? (
                    <ul className="space-y-2 border-l-2 border-sun pl-5 text-lg font-medium text-ice">
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
          </details>
        </div>
      </Container>
    </section>
  );
}
