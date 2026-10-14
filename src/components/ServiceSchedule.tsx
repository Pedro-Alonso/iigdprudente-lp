import { site } from "@/content/site";
import { formatServiceTime } from "@/lib/format-service-time";
import { Container } from "./ui/Container";
import { ClockIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";

export function ServiceSchedule() {
  const { services } = site;
  const headingId = `${services.id}-title`;
  const [featuredDay, ...weekDays] = services.days;

  return (
    <section
      id={services.id}
      aria-labelledby={headingId}
      className="relative bg-mist pt-16 pb-24 md:pt-20 md:pb-32"
    >
      <Container>
        <SectionHeading id={headingId} title={services.title} intro={services.intro} />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {featuredDay ? (
            <li className="reveal relative isolate overflow-hidden rounded-4xl bg-section-dark p-7 text-white shadow-xl shadow-navy/20 sm:col-span-2 sm:p-10 lg:col-span-5">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 -right-4 -z-10 text-[9rem] leading-none font-extrabold tracking-tighter text-white/5 select-none sm:text-[12rem]"
              >
                {featuredDay.day}
              </span>
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <span
                    aria-hidden="true"
                    className="mb-4 block h-1 w-10 rounded-full bg-linear-to-r from-gold to-gold-soft"
                  />
                  <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {featuredDay.day}
                  </h3>
                  {"theme" in featuredDay ? (
                    <p className="mt-2 font-semibold text-gold-soft">{featuredDay.theme}</p>
                  ) : null}
                </div>
                <ul className="flex flex-wrap gap-3">
                  {featuredDay.times.map((time) => (
                    <li
                      key={time}
                      className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 backdrop-blur"
                    >
                      <ClockIcon className="size-6 text-gold-soft" />
                      <time dateTime={time} className="text-3xl font-extrabold sm:text-4xl">
                        {formatServiceTime(time)}
                      </time>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ) : null}

          {weekDays.map((serviceDay) => (
            <li
              key={serviceDay.dayOfWeek}
              className="reveal group flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/8 transition-all duration-300 sm:last:col-span-2 hover:shadow-xl hover:shadow-navy/10 hover:ring-gold/50 motion-safe:hover:-translate-y-1 lg:last:col-span-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-extrabold tracking-tight text-navy">
                  {serviceDay.day}
                </h3>
                <span
                  aria-hidden="true"
                  className="grid size-9 place-items-center rounded-full bg-mist text-royal transition-colors group-hover:bg-navy group-hover:text-gold-soft"
                >
                  <ClockIcon className="size-4" />
                </span>
              </div>
              {"theme" in serviceDay ? (
                <p className="mt-2 text-sm font-semibold text-royal">{serviceDay.theme}</p>
              ) : null}
              <span
                aria-hidden="true"
                className="my-5 block h-px w-full bg-linear-to-r from-gold/70 via-navy/10 to-transparent"
              />
              <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-1">
                {serviceDay.times.map((time) => (
                  <li key={time}>
                    <time dateTime={time} className="text-2xl font-extrabold text-navy">
                      {formatServiceTime(time)}
                    </time>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
