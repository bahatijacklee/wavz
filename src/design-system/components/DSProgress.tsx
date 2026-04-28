import React from "react";
import { cn } from "@/lib/utils";

// ─── PROGRESS BAR ─────────────────────────────────────────────────────────────

export interface DSProgressBarProps {
  value: number;         // 0–100
  max?: number;
  variant?: "brand" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  label?: string;
  showValue?: boolean;
  className?: string;
}

const trackColors = {
  brand:   "bg-[rgba(79,70,229,0.15)]",
  success: "bg-[rgba(34,197,94,0.12)]",
  warning: "bg-[rgba(245,158,11,0.12)]",
  danger:  "bg-[rgba(239,68,68,0.12)]",
};

const fillColors = {
  brand:   "bg-[#4F46E5]",
  success: "bg-[#22C55E]",
  warning: "bg-[#F59E0B]",
  danger:  "bg-[#EF4444]",
};

const heights = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

export function DSProgressBar({
  value,
  max = 100,
  variant = "brand",
  size = "md",
  animated = true,
  label,
  showValue,
  className,
}: DSProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <span className="text-body-sm text-[#94A3B8]">{label}</span>
          )}
          {showValue && (
            <span className="text-body-sm font-medium text-[#F1F5FF]">
              {value} / {max}
            </span>
          )}
        </div>
      )}
      <div
        className={cn(
          "w-full overflow-hidden rounded-full",
          heights[size],
          trackColors[variant]
        )}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-slow",
            fillColors[variant],
            animated && "relative overflow-hidden"
          )}
          style={{ width: `${pct}%` }}
        >
          {animated && (
            <span
              className="absolute inset-0 bg-white/20"
              style={{
                animation: "progress-shine 2s linear infinite",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── XP PROGRESS BAR ─────────────────────────────────────────────────────────

export function DSXPProgressBar({
  currentXP,
  nextLevelXP,
  level,
  className,
}: {
  currentXP: number;
  nextLevelXP: number;
  level: number;
  className?: string;
}) {
  const pct = Math.min(100, (currentXP / nextLevelXP) * 100);

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-body-sm font-semibold text-[#22C55E]">Level {level}</span>
          <span className="text-caption text-[#4A5568]">→</span>
          <span className="text-body-sm text-[#4A5568]">Level {level + 1}</span>
        </div>
        <span className="text-body-sm font-medium text-[#F1F5FF]">
          {currentXP.toLocaleString()} / {nextLevelXP.toLocaleString()} XP
        </span>
      </div>

      <div className="relative h-2 w-full overflow-hidden rounded-full bg-[rgba(34,197,94,0.12)]">
        {/* Animated fill */}
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-[#22C55E] transition-all duration-slow"
          style={{ width: `${pct}%` }}
        />
        {/* Glow at tip */}
        <div
          className="absolute inset-y-0 w-8 rounded-full"
          style={{
            left: `calc(${pct}% - 16px)`,
            background:
              "radial-gradient(circle, rgba(34,197,94,0.6) 0%, transparent 70%)",
          }}
        />
      </div>

      <p className="text-caption text-[#4A5568]">
        {(nextLevelXP - currentXP).toLocaleString()} XP to next level
      </p>
    </div>
  );
}

// ─── SKELETON ─────────────────────────────────────────────────────────────────

export function DSSkeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-skeleton rounded-ds-md bg-skeleton-anim bg-skeleton",
        "bg-[#1A2236]",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.03) 75%)",
        backgroundSize: "400% 100%",
        animation: "skeleton-shimmer 1.8s linear infinite",
      }}
      {...props}
    />
  );
}

