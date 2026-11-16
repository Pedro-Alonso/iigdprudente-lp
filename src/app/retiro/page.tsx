import type { Metadata } from "next";
import { RedirectStub } from "@/components/retiro/RedirectStub";
import { retreat } from "@/content/retreat";

export const metadata: Metadata = {
  title: retreat.redirect.title,
  robots: { index: false, follow: true },
  alternates: { canonical: retreat.path },
};

export default function RetreatRedirectPage() {
  return <RedirectStub />;
}
