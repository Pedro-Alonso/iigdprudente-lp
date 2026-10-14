import { site } from "@/content/site";
import { formatServiceTime } from "@/lib/format-service-time";
import { Container } from "./ui/Container";
import { ClockIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";

export function ServiceSchedule() {
  const { services } = site;
  const headingId = `${services.id}-title`;

  return (
    <section id={services.id} aria-labelledby={headingId} className="bg-mist py-20 md:py-28">
      <Container>
        <SectionHeading id={headingId} title={services.title} intro={services.intro} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.days.map((serviceDay) => (
            <li
              key={serviceDay.dayOfWeek}
              className="flex flex-col rounded-2xl border-t-4 border-gold bg-white p-6 shadow-sm ring-1 ring-navy/5"
            >
              <h3 className="font-serif text-2xl font-semibold text-navy">{serviceDay.day}</h3>
              {"theme" in serviceDay ? (
                <p className="mt-1 font-medium text-royal">{serviceDay.theme}</p>
              ) : null}
              <ul className="mt-5 flex flex-wrap gap-2">
                {serviceDay.times.map((time) => (
                  <li
                    key={time}
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3.5 py-1.5 text-sm font-semibold text-white"
                  >
                    <ClockIcon className="size-4 text-gold" />
                    <time dateTime={time}>{formatServiceTime(time)}</time>
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
