import type { ReactNode } from "react";
import type { IconName } from "@/content/site";

type IconProps = {
  className?: string;
};

function StrokeIcon({ className = "size-5", children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {children}
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </StrokeIcon>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </StrokeIcon>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </StrokeIcon>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </StrokeIcon>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </StrokeIcon>
  );
}

export function CrossIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 3v18" />
      <path d="M6 9h12" />
    </StrokeIcon>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />
    </StrokeIcon>
  );
}

export function HandsIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
      <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.9l-4.2 3.9" />
      <path d="m2 15 6 6" />
      <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.7 2.7 0 0 0 16 4a2.8 2.8 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12z" />
    </StrokeIcon>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </StrokeIcon>
  );
}

export function QuoteMarkIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M9.3 6C5 8.3 2 12.6 2 18v8h11V15H7.2c.5-3 2.4-5.4 5.1-6.8zm17 0C22 8.3 19 12.6 19 18v8h11V15h-5.8c.5-3 2.4-5.4 5.1-6.8z" />
    </svg>
  );
}

const iconComponents: Record<IconName, (props: IconProps) => ReactNode> = {
  clock: ClockIcon,
  users: UsersIcon,
  mapPin: MapPinIcon,
  cross: CrossIcon,
  heart: HeartIcon,
  hands: HandsIcon,
};

export function Icon({ name, className }: IconProps & { name: IconName }) {
  const IconComponent = iconComponents[name];
  return <IconComponent className={className} />;
}
