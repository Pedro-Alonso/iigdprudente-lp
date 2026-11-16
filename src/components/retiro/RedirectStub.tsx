import Link from "next/link";
import { retreat } from "@/content/retreat";

/** Página estática de redirecionamento (o GitHub Pages não tem redirects de servidor). */
export function RedirectStub() {
  const { redirect, path } = retreat;

  return (
    <main className="grid min-h-svh place-items-center p-6 text-center">
      <meta httpEquiv="refresh" content={`0; url=${path}`} />
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">{redirect.title}</h1>
        <p className="text-muted">{redirect.message}</p>
        <Link href={path} className="inline-block font-semibold text-navy underline">
          {redirect.link}
        </Link>
      </div>
    </main>
  );
}
