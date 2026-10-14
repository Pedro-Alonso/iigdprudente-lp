import { buildChurchJsonLd, serializeJsonLd } from "@/lib/structured-data";

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildChurchJsonLd()) }}
    />
  );
}
