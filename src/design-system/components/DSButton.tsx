import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

// ─── VARIANTS ────────────────────────────────────────────────────────────────

const buttonVariants = cva(
  // Base styles — shared by all variants
  [
    "inline-flex items-center justify-center gap-2 font-dm-sans font-medium",
    "select-none rounded-ds-md border transition-all",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19]",
    "disabled:pointer-events-none disabled:opacity-40",
    "active:scale-[0.97]",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[#4F46E5] text-white border-transparent",
          "hover:bg-[#4338CA] hover:shadow-brand",
          "hover:scale-[1.02]",
        ],
        secondary: [
          "bg-[#1A2236] text-[#F1F5FF] border-[rgba(255,255,255,0.08)]",
          "hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.15)]",
        ],
        ghost: [
          "bg-transparent text-[#94A3B8] border-transparent",
          "hover:bg-[rgba(255,255,255,0.05)] hover:text-[#F1F5FF]",
        ],
        danger: [
          "bg-transparent text-[#EF4444] border-[rgba(239,68,68,0.3)]",
          "hover:bg-[rgba(239,68,68,0.1)] hover:border-[#EF4444]",
        ],
        xp: [
          "bg-[rgba(34,197,94,0.15)] text-[#22C55E] border-[rgba(34,197,94,0.3)]",
          "hover:bg-[rgba(34,197,94,0.25)] hover:shadow-xp",
        ],
      },
      size: {
        sm: "h-8 px-3 text-body-sm rounded-ds-sm",
        md: "h-10 px-5 text-body-md",
        lg: "h-12 px-7 text-body-lg",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0 rounded-ds-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

// ─── TYPES ───────────────────────────────────────────────────────────────────

export interface DSButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export const DSButton = forwardRef<HTMLButtonElement, DSButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading,
      disabled,
      iconLeft,
      iconRight,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          iconLeft && <span className="shrink-0">{iconLeft}</span>
        )}
        {children && <span>{children}</span>}
        {!loading && iconRight && (
          <span className="shrink-0">{iconRight}</span>
        )}
      </button>
    );
  }
);

DSButton.displayName = "DSButton";
export { buttonVariants };
