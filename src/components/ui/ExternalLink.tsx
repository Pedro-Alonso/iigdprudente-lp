import type { ComponentPropsWithoutRef } from "react";
import { site } from "@/content/site";

type ExternalLinkProps = Omit<ComponentPropsWithoutRef<"a">, "target" | "rel"> & {
  href: string;
};

export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> {site.externalLinkHint}</span>
    </a>
  );
}
