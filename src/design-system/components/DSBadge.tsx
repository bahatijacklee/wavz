import React, { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// ─── BADGE ────────────────────────────────────────────────────────────────────

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full font-medium font-dm-sans transition-colors",
  {
    variants: {
      variant: {
        brand:   "bg-[rgba(79,70,229,0.15)] text-[#4F46E5] border border-[rgba(79,70,229,0.3)]",
        success: "bg-[rgba(34,197,94,0.12)] text-[#22C55E] border border-[rgba(34,197,94,0.25)]",
        warning: "bg-[rgba(245,158,11,0.12)] text-[#F59E0B] border border-[rgba(245,158,11,0.25)]",
        danger:  "bg-[rgba(239,68,68,0.12)] text-[#EF4444] border border-[rgba(239,68,68,0.25)]",
        muted:   "bg-[rgba(255,255,255,0.05)] text-[#94A3B8] border border-[rgba(255,255,255,0.08)]",
        // Tier badges
        bronze:   "bg-[rgba(205,127,50,0.15)] text-[#CD7F32] border border-[rgba(205,127,50,0.3)]",
        silver:   "bg-[rgba(148,163,184,0.12)] text-[#94A3B8] border border-[rgba(148,163,184,0.25)]",
        gold:     "bg-[rgba(245,158,11,0.12)] text-[#F59E0B] border border-[rgba(245,158,11,0.3)]",
        platinum: "bg-[rgba(168,85,247,0.12)] text-[#A855F7] border border-[rgba(168,85,247,0.3)]",
        diamond:  "bg-[rgba(59,130,246,0.12)] text-[#3B82F6] border border-[rgba(59,130,246,0.3)]",
      },
      size: {
        sm: "px-2 py-0.5 text-caption",
        md: "px-2.5 py-1 text-body-sm",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "sm",
    },
  }
);

export interface DSBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: ReactNode;
}

export function DSBadge({ className, variant, size, icon, children, ...props }: DSBadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}

// ─── XP BADGE (floating animated) ────────────────────────────────────────────

export function DSXPBadge({
  amount,
  className,
}: {
  amount: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1",
        "bg-[rgba(34,197,94,0.15)] text-[#22C55E] border border-[rgba(34,197,94,0.3)]",
        "text-body-sm font-semibold font-dm-sans shadow-xp",
        className
      )}
    >
      <span className="text-[10px]">⚡</span>+{amount} XP
    </span>
  );
}

// ─── TIER BADGE ──────────────────────────────────────────────────────────────

const tierMap: Record<string, VariantProps<typeof badgeVariants>["variant"]> = {
  bronze: "bronze",
  silver: "silver",
  gold: "gold",
  platinum: "platinum",
  diamond: "diamond",
};

export function DSTierBadge({
  tier,
  className,
}: {
  tier: "bronze" | "silver" | "gold" | "platinum" | "diamond";
  className?: string;
}) {
  const icons = { bronze: "🥉", silver: "🥈", gold: "🥇", platinum: "💜", diamond: "💎" };
  return (
    <DSBadge variant={tierMap[tier]} className={className}>
      {icons[tier]} {tier.charAt(0).toUpperCase() + tier.slice(1)}
    </DSBadge>
  );
}
