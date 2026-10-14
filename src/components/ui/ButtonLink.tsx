import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalLink } from "./ExternalLink";

type ButtonVariant = "gold" | "glass" | "navy";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  gold: "bg-linear-to-r from-gold-light via-gold-soft to-gold text-navy-deep shadow-lg shadow-gold/25 hover:shadow-gold/40",
  glass:
    "border border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/50 hover:bg-white/10",
  navy: "bg-navy text-white shadow-lg shadow-navy/20 hover:bg-royal",
};

const baseClasses =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition-all duration-300 motion-safe:hover:-translate-y-0.5";

export function ButtonLink({
  href,
  children,
  variant = "navy",
  external = false,
}: ButtonLinkProps) {
  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (external) {
    return (
      <ExternalLink href={href} className={className}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
