/**
 * WAVR Design System — Tokens
 * Single source of truth for all design decisions.
 * All values map to CSS variables defined in index.css.
 */

// ─── COLOR TOKENS ─────────────────────────────────────────────────────────────

export const colors = {
  // Backgrounds
  bgPrimary: "#0B0F19",       // Deep navy — page background
  bgSecondary: "#121826",     // Surface cards, panels
  bgElevated: "#1A2236",      // Elevated surfaces, dropdowns, modals

  // Text
  textPrimary: "#F1F5FF",     // Near-white, primary headings & body
  textSecondary: "#94A3B8",   // Subdued labels, descriptions
  textMuted: "#4A5568",       // Placeholders, disabled labels

  // Brand
  brandPrimary: "#4F46E5",    // Indigo — buttons, links, active states
  brandHover: "#4338CA",      // Darker indigo on hover
  brandActive: "#3730A3",     // Pressed state
  brandSubtle: "rgba(79,70,229,0.15)", // Icon container backgrounds, tints

  // Accent — XP / Rewards (green only)
  accentSuccess: "#22C55E",   // XP gain, level up, positive events
  accentSuccessSubtle: "rgba(34,197,94,0.12)",
  accentWarning: "#F59E0B",   // Streak fire, time-limited challenges
  accentWarningSubtle: "rgba(245,158,11,0.12)",
  accentDanger: "#EF4444",    // Errors, destructive actions
  accentDangerSubtle: "rgba(239,68,68,0.12)",

  // Borders
  borderDefault: "rgba(255,255,255,0.08)",  // Most card / panel borders
  borderSubtle: "rgba(255,255,255,0.04)",   // Very subtle divisions
  borderBrand: "rgba(79,70,229,0.4)",       // Active / focused borders

  // States
  stateHover: "rgba(255,255,255,0.05)",
  stateActive: "rgba(79,70,229,0.1)",
  stateDisabled: "rgba(255,255,255,0.2)",

  // Level / Tier Colors (gamification)
  tierBronze: "#CD7F32",
  tierSilver: "#94A3B8",
  tierGold: "#F59E0B",
  tierPlatinum: "#A855F7",
  tierDiamond: "#3B82F6",

  // Streak
  streakColor: "#F97316",
} as const;

// ─── TYPOGRAPHY TOKENS ────────────────────────────────────────────────────────

export const typography = {
  fontDisplay: "'Satoshi', sans-serif",
  fontBody: "'DM Sans', sans-serif",

  // Scale — desktop
  scale: {
    display: { size: "72px", lineHeight: "1.05", weight: "800", letterSpacing: "-0.03em" },
    h1:      { size: "48px", lineHeight: "1.1",  weight: "800", letterSpacing: "-0.025em" },
    h2:      { size: "36px", lineHeight: "1.15", weight: "700", letterSpacing: "-0.02em" },
    h3:      { size: "24px", lineHeight: "1.25", weight: "700", letterSpacing: "-0.015em" },
    h4:      { size: "18px", lineHeight: "1.35", weight: "600", letterSpacing: "-0.01em" },
    bodyLg:  { size: "18px", lineHeight: "1.65", weight: "400", letterSpacing: "0" },
    bodyMd:  { size: "15px", lineHeight: "1.6",  weight: "400", letterSpacing: "0" },
    bodySm:  { size: "13px", lineHeight: "1.55", weight: "400", letterSpacing: "0" },
    caption: { size: "11px", lineHeight: "1.45", weight: "500", letterSpacing: "0.04em" },
  },
} as const;

// ─── SPACING TOKENS (8px grid) ────────────────────────────────────────────────

export const spacing = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  // Section spacing
  sectionSm: "80px",
  sectionMd: "120px",
  sectionLg: "160px",
  // Card padding
  cardSm: "16px",
  cardMd: "24px",
  cardLg: "32px",
} as const;

// ─── BORDER RADIUS ────────────────────────────────────────────────────────────

export const radius = {
  sm: "6px",
  md: "10px",
  lg: "14px",
  xl: "20px",
  full: "9999px",
} as const;

// ─── SHADOWS ─────────────────────────────────────────────────────────────────

export const shadows = {
  sm: "0 2px 8px rgba(0,0,0,0.25)",
  md: "0 4px 24px rgba(0,0,0,0.40)",
  lg: "0 8px 48px rgba(0,0,0,0.55)",
  // Brand glow
  brandGlow: "0 0 0 1px #4F46E5, 0 8px 32px rgba(79,70,229,0.25)",
  brandGlowSm: "0 0 0 1px rgba(79,70,229,0.5), 0 4px 16px rgba(79,70,229,0.2)",
  // Success glow (XP)
  xpGlow: "0 0 12px rgba(34,197,94,0.3)",
} as const;

// ─── ANIMATION TOKENS ─────────────────────────────────────────────────────────

export const animation = {
  durationFast: "150ms",
  durationMedium: "250ms",
  durationSlow: "400ms",
  easingDefault: "cubic-bezier(0.4, 0, 0.2, 1)",
  easingOut: "cubic-bezier(0, 0, 0.2, 1)",
  easingIn: "cubic-bezier(0.4, 0, 1, 1)",
  easingBounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

// ─── GAMIFICATION TOKENS ──────────────────────────────────────────────────────

export const gamification = {
  xpColor: "#22C55E",
  xpBg: "rgba(34,197,94,0.12)",
  streakColor: "#F97316",
  streakBg: "rgba(249,115,22,0.12)",
  rewardHighlight: "#F59E0B",

  tiers: {
    bronze:   { label: "Bronze",   color: "#CD7F32", bg: "rgba(205,127,50,0.12)",  minXP: 0 },
    silver:   { label: "Silver",   color: "#94A3B8", bg: "rgba(148,163,184,0.12)", minXP: 1000 },
    gold:     { label: "Gold",     color: "#F59E0B", bg: "rgba(245,158,11,0.12)",  minXP: 5000 },
    platinum: { label: "Platinum", color: "#A855F7", bg: "rgba(168,85,247,0.12)",  minXP: 15000 },
    diamond:  { label: "Diamond",  color: "#3B82F6", bg: "rgba(59,130,246,0.12)",  minXP: 50000 },
  },
} as const;

// ─── BREAKPOINTS ──────────────────────────────────────────────────────────────

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;
