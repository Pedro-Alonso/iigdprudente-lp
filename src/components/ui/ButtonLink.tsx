import type { ReactNode } from "react";
import { ExternalLink } from "./ExternalLink";

type ButtonVariant = "gold" | "outlineLight" | "navy";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  gold: "bg-gold text-navy hover:bg-gold-soft",
  outlineLight: "border border-white/70 text-white hover:bg-white/10",
  navy: "bg-navy text-white hover:bg-royal",
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors";

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
    <a href={href} className={className}>
      {children}
    </a>
  );
}
