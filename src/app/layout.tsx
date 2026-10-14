import type { Metadata, Viewport } from "next";
import { Lora } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  referrer: "strict-origin-when-cross-origin",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary",
    title: site.seo.title,
    description: site.seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2a5b",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={lora.variable}>
      <body className="bg-white font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
