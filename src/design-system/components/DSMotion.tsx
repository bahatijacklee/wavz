import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────

export interface DSScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;         // ms
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;     // 0–1
  once?: boolean;
}

const directionMap = {
  up:    "translateY(24px)",
  down:  "translateY(-24px)",
  left:  "translateX(24px)",
  right: "translateX(-24px)",
  none:  "none",
};

export function DSScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.15,
  once = true,
}: DSScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={cn("transition-all", className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "none"
          : direction !== "none"
          ? directionMap[direction]
          : "none",
        transitionDuration: "600ms",
        transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── FLOATING XP INDICATOR ────────────────────────────────────────────────────

export function DSFloatingXP({
  amount,
  style,
  className,
}: {
  amount: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inline-flex items-center gap-1",
        "rounded-full px-2.5 py-1",
        "bg-[rgba(34,197,94,0.2)] text-[#22C55E] border border-[rgba(34,197,94,0.35)]",
        "text-body-sm font-semibold font-dm-sans shadow-xp",
        "animate-xp-rise",
        className
      )}
      style={style}
    >
      <span className="text-[10px]">⚡</span>+{amount} XP
    </div>
  );
}

// ─── HOVER CARD WRAPPER ───────────────────────────────────────────────────────

export function DSHoverLift({
  children,
  className,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "transition-all duration-medium cursor-pointer",
        "hover:-translate-y-1.5",
        glow && "hover:shadow-brand",
        className
      )}
    >
      {children}
    </div>
  );
}

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────────

export function DSSection({
  children,
  className,
  id,
  noiseOverlay = false,
  meshBrand = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  noiseOverlay?: boolean;
  meshBrand?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full py-section-sm md:py-section-md",
        meshBrand && "bg-mesh-brand",
        className
      )}
    >
      {noiseOverlay && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
          aria-hidden
        />
      )}
      {children}
    </section>
  );
}

// ─── DIVIDER ──────────────────────────────────────────────────────────────────

export function DSDivider({ className }: { className?: string }) {
  return (
    <hr
      className={cn(
        "border-0 border-t border-[rgba(255,255,255,0.06)]",
        className
      )}
    />
  );
}

