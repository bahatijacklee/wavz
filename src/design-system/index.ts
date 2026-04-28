/**
 * WAVR Design System — Barrel Export
 *
 * Single import point for all design system components and tokens.
 *
 * Usage:
 *   import { DSButton, DSCard, tokens } from "@/design-system";
 */

// ─── TOKENS ───────────────────────────────────────────────────────────────────
import * as tokens from "./tokens";
export { tokens };
export {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  animation,
  gamification,
  breakpoints,
} from "./tokens";

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

// Button
export { DSButton, buttonVariants } from "./components/DSButton";
export type { DSButtonProps } from "./components/DSButton";

// Card
export {
  DSCard,
  DSCardHeader,
  DSCardTitle,
  DSCardDescription,
  DSCardFooter,
  DSIconContainer,
  cardVariants,
} from "./components/DSCard";
export type { DSCardProps } from "./components/DSCard";

// Form elements
export {
  DSInput,
  DSTextarea,
  DSSelect,
  DSCheckbox,
  DSToggle,
} from "./components/DSForm";
export type {
  DSInputProps,
  DSTextareaProps,
  DSSelectProps,
  DSCheckboxProps,
  DSToggleProps,
} from "./components/DSForm";

// Badges
export {
  DSBadge,
  DSXPBadge,
  DSTierBadge,
} from "./components/DSBadge";
export type { DSBadgeProps } from "./components/DSBadge";

// Progress & Skeletons
export {
  DSProgressBar,
  DSXPProgressBar,
  DSSkeleton,
} from "./components/DSProgress";
export type { DSProgressBarProps } from "./components/DSProgress";

// Motion & Layout
export {
  DSScrollReveal,
  DSFloatingXP,
  DSHoverLift,
  DSSection,
  DSDivider,
} from "./components/DSMotion";
export type { DSScrollRevealProps } from "./components/DSMotion";

// Typography
export {
  DSDisplay,
  DSHeading,
  DSText,
  DSCaption,
  DSSectionLabel,
} from "./components/DSTypography";

// Product-specific
export {
  DSTrackCard,
  DSMiniPlayer,
  DSXPCard,
  DSChallengeCard,
  DSRewardCard,
  DSFeedCard,
  DSLeaderboardItem,
} from "./components/DSProduct";
export type {
  DSTrackCardProps,
  DSMiniPlayerProps,
  DSXPCardProps,
  DSChallengeCardProps,
  DSRewardCardProps,
  DSFeedCardProps,
  DSLeaderboardItemProps,
} from "./components/DSProduct";

// Toast
export {
  DSToastProvider,
  useToast,
} from "./components/DSToast";
export type { DSToastItem, DSToastVariant } from "./components/DSToast";
