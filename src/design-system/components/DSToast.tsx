import { useState, useEffect, createContext, useContext, useCallback, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { X, CheckCircle2, AlertCircle, Info, Zap } from "lucide-react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

export type DSToastVariant = "success" | "error" | "info" | "xp";

export interface DSToastItem {
  id: string;
  variant: DSToastVariant;
  title: string;
  description?: string;
  duration?: number;
}

// ─── CONTEXT ──────────────────────────────────────────────────────────────────

interface ToastContextValue {
  toasts: DSToastItem[];
  push: (toast: Omit<DSToastItem, "id">) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within DSToastProvider");
  return ctx;
}

// ─── PROVIDER ─────────────────────────────────────────────────────────────────

export function DSToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<DSToastItem[]>([]);

  const push = useCallback((toast: Omit<DSToastItem, "id">) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, push, dismiss }}>
      {children}
      <DSToastContainer toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}

// ─── INDIVIDUAL TOAST ─────────────────────────────────────────────────────────

const variantConfig = {
  success: {
    icon: CheckCircle2,
    bg: "bg-[#121826]",
    border: "border-[rgba(34,197,94,0.3)]",
    iconColor: "text-[#22C55E]",
    titleColor: "text-[#F1F5FF]",
  },
  error: {
    icon: AlertCircle,
    bg: "bg-[#121826]",
    border: "border-[rgba(239,68,68,0.3)]",
    iconColor: "text-[#EF4444]",
    titleColor: "text-[#F1F5FF]",
  },
  info: {
    icon: Info,
    bg: "bg-[#121826]",
    border: "border-[rgba(79,70,229,0.3)]",
    iconColor: "text-[#4F46E5]",
    titleColor: "text-[#F1F5FF]",
  },
  xp: {
    icon: Zap,
    bg: "bg-[rgba(34,197,94,0.08)]",
    border: "border-[rgba(34,197,94,0.3)]",
    iconColor: "text-[#22C55E]",
    titleColor: "text-[#22C55E]",
  },
};

function DSToast({
  toast,
  onDismiss,
}: {
  toast: DSToastItem;
  onDismiss: (id: string) => void;
}) {
  const config = variantConfig[toast.variant];
  const Icon = config.icon;

  useEffect(() => {
    const t = setTimeout(
      () => onDismiss(toast.id),
      toast.duration ?? 4000
    );
    return () => clearTimeout(t);
  }, [toast.id, toast.duration, onDismiss]);

  return (
    <div
      className={cn(
        "flex items-start gap-3 w-80 rounded-ds-lg px-4 py-3.5",
        "border shadow-ds-lg backdrop-blur-xl",
        "animate-slide-right",
        config.bg,
        config.border
      )}
      role="alert"
    >
      <Icon className={cn("h-5 w-5 shrink-0 mt-0.5", config.iconColor)} />
      <div className="min-w-0 flex-1">
        <p className={cn("text-body-sm font-semibold", config.titleColor)}>
          {toast.title}
        </p>
        {toast.description && (
          <p className="mt-0.5 text-body-sm text-[#94A3B8]">{toast.description}</p>
        )}
      </div>
      <button
        onClick={() => onDismiss(toast.id)}
        className="shrink-0 text-[#4A5568] hover:text-[#94A3B8] transition-colors duration-fast"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

// ─── CONTAINER ────────────────────────────────────────────────────────────────

function DSToastContainer({
  toasts,
  onDismiss,
}: {
  toasts: DSToastItem[];
  onDismiss: (id: string) => void;
}) {
  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <DSToast key={t.id} toast={t} onDismiss={onDismiss} />
      ))}
    </div>
  );
}
