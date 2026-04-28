import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── VARIANTS ────────────────────────────────────────────────────────────────

const cardVariants = cva(
  "relative overflow-hidden rounded-ds-lg transition-all duration-medium",
  {
    variants: {
      variant: {
        default: [
          "bg-[#121826] border border-[rgba(255,255,255,0.08)]",
          "shadow-ds-md",
        ],
        elevated: [
          "bg-[#1A2236] border border-[rgba(255,255,255,0.08)]",
          "shadow-ds-lg",
        ],
        interactive: [
          "bg-[#121826] border border-[rgba(255,255,255,0.08)]",
          "shadow-ds-md cursor-pointer",
          "hover:-translate-y-1.5 hover:shadow-brand hover:border-[rgba(79,70,229,0.4)]",
        ],
        glass: [
          "bg-[rgba(18,24,38,0.85)] border border-[rgba(255,255,255,0.06)]",
          "backdrop-blur-xl shadow-ds-md",
        ],
        ghost: [
          "bg-transparent border border-[rgba(255,255,255,0.06)]",
        ],
      },
      padding: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        none: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

// ─── TYPES ───────────────────────────────────────────────────────────────────

export interface DSCardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  shine?: boolean;
}

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

export function DSCardHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function DSCardTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-satoshi text-h4 text-[#F1F5FF] tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function DSCardDescription({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("mt-1 text-body-sm text-[#94A3B8]", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function DSCardFooter({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-4 flex items-center gap-3", className)}
      {...props}
    >
      {children}
    </div>
  );
}

// ─── ICON CONTAINER ──────────────────────────────────────────────────────────

export function DSIconContainer({
  className,
  children,
  color = "brand",
}: {
  className?: string;
  children: ReactNode;
  color?: "brand" | "success" | "warning" | "danger";
}) {
  const colorMap = {
    brand:   "bg-[rgba(79,70,229,0.15)] text-[#4F46E5]",
    success: "bg-[rgba(34,197,94,0.12)] text-[#22C55E]",
    warning: "bg-[rgba(245,158,11,0.12)] text-[#F59E0B]",
    danger:  "bg-[rgba(239,68,68,0.12)] text-[#EF4444]",
  };

  return (
    <div
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-ds-md",
        colorMap[color],
        className
      )}
    >
      {children}
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export const DSCard = forwardRef<HTMLDivElement, DSCardProps>(
  ({ className, variant, padding, shine, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding, className }))}
        {...props}
      >
        {shine && (
          <div
            className="pointer-events-none absolute inset-0 bg-card-shine"
            aria-hidden
          />
        )}
        {children}
      </div>
    );
  }
);

DSCard.displayName = "DSCard";
export { cardVariants };
