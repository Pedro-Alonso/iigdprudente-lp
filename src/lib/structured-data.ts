import { site } from "@/content/site";

type OpeningHoursSpecification = {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: string;
  opens: string;
};

export type ChurchJsonLd = {
  "@context": "https://schema.org";
  "@type": "Church";
  name: string;
  alternateName: string;
  legalName: string;
  url: string;
  logo: string;
  taxID: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  sameAs: string[];
  openingHoursSpecification: OpeningHoursSpecification[];
};

export function buildChurchJsonLd(): ChurchJsonLd {
  const { location } = site;

  return {
    "@context": "https://schema.org",
    "@type": "Church",
    name: site.name,
    alternateName: site.organizationName,
    legalName: site.legalName,
    url: site.url,
    logo: new URL(site.logo.src, site.url).toString(),
    taxID: site.taxId,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      addressLocality: location.addressLocality,
      addressRegion: location.addressRegion,
      addressCountry: location.addressCountry,
    },
    sameAs: site.ministries.profiles.map((profile) => profile.href),
    openingHoursSpecification: site.services.days.flatMap((serviceDay) =>
      serviceDay.times.map((time) => ({
        "@type": "OpeningHoursSpecification" as const,
        dayOfWeek: `https://schema.org/${serviceDay.dayOfWeek}`,
        opens: time,
      })),
    ),
  };
}

export function serializeJsonLd(data: ChurchJsonLd): string {
  return JSON.stringify(data).replace(/</g, "\u003c");
}
