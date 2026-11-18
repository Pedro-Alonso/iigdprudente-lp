import type { MetadataRoute } from "next";
import { retreat } from "@/content/retreat";
import { site } from "@/content/site";
import { RETREAT_END } from "@/lib/retreat-schedule";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap[number] = {
    url: `${site.url}/`,
    changeFrequency: "monthly",
    priority: 1,
  };

  // A página do retiro só entra no sitemap enquanto o evento não terminou.
  if (Date.now() > RETREAT_END) return [home];

  return [home, { url: retreat.url, changeFrequency: "weekly", priority: 0.8 }];
}
