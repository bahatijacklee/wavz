import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// ─── DISPLAY HEADING ──────────────────────────────────────────────────────────

export function DSDisplay({
  children,
  className,
  gradient,
  ...props
}: HTMLAttributes<HTMLHeadingElement> & { gradient?: boolean }) {
  return (
    <h1
      className={cn(
        "font-satoshi font-black tracking-tight leading-[1.05]",
        "text-5xl md:text-6xl lg:text-[72px]",
        gradient
          ? "bg-gradient-to-br from-[#F1F5FF] via-[#C7D2FE] to-[#818CF8] bg-clip-text text-transparent"
          : "text-[#F1F5FF]",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

// ─── SECTION HEADING ─────────────────────────────────────────────────────────

export function DSHeading({
  as: Tag = "h2",
  children,
  className,
  gradient,
  ...props
}: HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4";
  gradient?: boolean;
}) {
  const sizes: Record<string, string> = {
    h1: "text-4xl md:text-5xl lg:text-h1",
    h2: "text-3xl md:text-4xl lg:text-h2",
    h3: "text-xl md:text-2xl lg:text-h3",
    h4: "text-lg lg:text-h4",
  };
  const weights: Record<string, string> = {
    h1: "font-black",
    h2: "font-bold",
    h3: "font-bold",
    h4: "font-semibold",
  };

  return (
    <Tag
      className={cn(
        "font-satoshi tracking-tight",
        sizes[Tag],
        weights[Tag],
        gradient
          ? "bg-gradient-to-r from-[#F1F5FF] to-[#94A3B8] bg-clip-text text-transparent"
          : "text-[#F1F5FF]",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

// ─── BODY TEXT ────────────────────────────────────────────────────────────────

export function DSText({
  size = "md",
  muted,
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement> & {
  size?: "lg" | "md" | "sm";
  muted?: boolean;
}) {
  const sizeMap = {
    lg: "text-body-lg",
    md: "text-body-md",
    sm: "text-body-sm",
  };
  return (
    <p
      className={cn(
        "font-dm-sans leading-relaxed",
        sizeMap[size],
        muted ? "text-[#4A5568]" : "text-[#94A3B8]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

// ─── CAPTION ──────────────────────────────────────────────────────────────────

export function DSCaption({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "font-dm-sans text-caption uppercase tracking-widest text-[#4A5568]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

// ─── SECTION LABEL ────────────────────────────────────────────────────────────

export function DSSectionLabel({
  children,
  icon,
  className,
}: {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5",
        "bg-[rgba(79,70,229,0.12)] border border-[rgba(79,70,229,0.25)]",
        "text-body-sm font-medium text-[#818CF8]",
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </div>
  );
}
