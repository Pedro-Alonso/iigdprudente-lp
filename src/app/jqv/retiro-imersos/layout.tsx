import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { retreat } from "@/content/retreat";
import { site } from "@/content/site";
import "./retiro.css";

// Corpo em Sora. Para usar a Agrandir, é preciso a licença web da Pangram Pangram
// (a versão gratuita é só para uso pessoal): troque esta fonte por `next/font/local`.
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const dirtyline = localFont({
  src: "./fonts/dirtyline.otf",
  variable: "--font-dirtyline",
  display: "swap",
});

const { seo } = retreat;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: retreat.path },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: retreat.path,
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    images: [{ url: retreat.assets.ogImage, width: 1200, height: 630, alt: seo.ogAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [retreat.assets.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#172236",
};

export default function RetreatLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div
      className={`${sora.variable} ${dirtyline.variable} retreat-root bg-abyss font-body text-ice antialiased`}
    >
      {children}
    </div>
  );
}
