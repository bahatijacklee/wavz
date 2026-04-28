import {
  forwardRef,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  type SelectHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

// ─── INPUT ───────────────────────────────────────────────────────────────────

const inputBase = [
  "w-full rounded-ds-md bg-[#1A2236] border border-[rgba(255,255,255,0.08)]",
  "px-4 py-2.5 text-body-md text-[#F1F5FF] font-dm-sans",
  "placeholder:text-[#4A5568]",
  "transition-all duration-medium",
  "focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[rgba(79,70,229,0.2)]",
  "hover:border-[rgba(255,255,255,0.15)]",
  "disabled:opacity-40 disabled:cursor-not-allowed",
].join(" ");

export interface DSInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const DSInput = forwardRef<HTMLInputElement, DSInputProps>(
  ({ className, label, hint, error, iconLeft, iconRight, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-body-sm font-medium text-[#94A3B8]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {iconLeft && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4A5568]">
              {iconLeft}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              inputBase,
              iconLeft && "pl-10",
              iconRight && "pr-10",
              error && "border-[#EF4444] focus:border-[#EF4444] focus:ring-[rgba(239,68,68,0.2)]",
              className
            )}
            {...props}
          />
          {iconRight && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4A5568]">
              {iconRight}
            </span>
          )}
        </div>
        {error && (
          <p className="text-body-sm text-[#EF4444]">{error}</p>
        )}
        {hint && !error && (
          <p className="text-body-sm text-[#4A5568]">{hint}</p>
        )}
      </div>
    );
  }
);
DSInput.displayName = "DSInput";

// ─── TEXTAREA ─────────────────────────────────────────────────────────────────

export interface DSTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const DSTextarea = forwardRef<HTMLTextAreaElement, DSTextareaProps>(
  ({ className, label, hint, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-body-sm font-medium text-[#94A3B8]"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            inputBase,
            "min-h-[100px] resize-y py-3",
            error && "border-[#EF4444] focus:border-[#EF4444] focus:ring-[rgba(239,68,68,0.2)]",
            className
          )}
          {...props}
        />
        {error && <p className="text-body-sm text-[#EF4444]">{error}</p>}
        {hint && !error && <p className="text-body-sm text-[#4A5568]">{hint}</p>}
      </div>
    );
  }
);
DSTextarea.displayName = "DSTextarea";

// ─── SELECT ───────────────────────────────────────────────────────────────────

export interface DSSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const DSSelect = forwardRef<HTMLSelectElement, DSSelectProps>(
  ({ className, label, hint, error, id, children, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-body-sm font-medium text-[#94A3B8]"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={inputId}
          className={cn(
            inputBase,
            "appearance-none cursor-pointer",
            "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394A3B8' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")] bg-no-repeat bg-[right_12px_center]",
            error && "border-[#EF4444]",
            className
          )}
          {...props}
        >
          {children}
        </select>
        {error && <p className="text-body-sm text-[#EF4444]">{error}</p>}
        {hint && !error && <p className="text-body-sm text-[#4A5568]">{hint}</p>}
      </div>
    );
  }
);
DSSelect.displayName = "DSSelect";

// ─── CHECKBOX ────────────────────────────────────────────────────────────────

export interface DSCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
}

export const DSCheckbox = forwardRef<HTMLInputElement, DSCheckboxProps>(
  ({ className, label, description, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <label
        htmlFor={inputId}
        className="flex cursor-pointer items-start gap-3 group"
      >
        <div className="relative mt-0.5">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              "h-4 w-4 rounded-[4px] border border-[rgba(255,255,255,0.2)] bg-[#1A2236]",
              "transition-all duration-fast",
              "peer-checked:bg-[#4F46E5] peer-checked:border-[#4F46E5]",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-[rgba(79,70,229,0.4)]",
              "group-hover:border-[rgba(255,255,255,0.4)]",
              className
            )}
          />
          <svg
            className="pointer-events-none absolute inset-0 m-auto h-3 w-3 stroke-white opacity-0 peer-checked:opacity-100 transition-opacity duration-fast"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path d="M2 6l3 3 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {(label || description) && (
          <div>
            {label && (
              <span className="text-body-md text-[#F1F5FF] font-medium">{label}</span>
            )}
            {description && (
              <p className="text-body-sm text-[#94A3B8]">{description}</p>
            )}
          </div>
        )}
      </label>
    );
  }
);
DSCheckbox.displayName = "DSCheckbox";

// ─── TOGGLE ───────────────────────────────────────────────────────────────────

export interface DSToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const DSToggle = forwardRef<HTMLInputElement, DSToggleProps>(
  ({ className, label, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <label
        htmlFor={inputId}
        className="flex cursor-pointer items-center gap-3"
      >
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              "h-6 w-11 rounded-full border border-[rgba(255,255,255,0.1)] bg-[#1A2236]",
              "transition-all duration-medium",
              "peer-checked:bg-[#4F46E5] peer-checked:border-[#4F46E5]",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-[rgba(79,70,229,0.4)]",
              className
            )}
          />
          <div
            className={cn(
              "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-[#4A5568]",
              "transition-all duration-medium",
              "peer-checked:translate-x-5 peer-checked:bg-white"
            )}
          />
        </div>
        {label && (
          <span className="text-body-md text-[#F1F5FF]">{label}</span>
        )}
      </label>
    );
  }
);
DSToggle.displayName = "DSToggle";
