# WAVR Design System

A unified, production-ready design system for the Wavr music engagement platform.

## Structure

```
src/design-system/
├── tokens.ts                    # All design tokens (colors, spacing, typography, etc.)
├── index.ts                     # Barrel export — single import point
└── components/
    ├── DSButton.tsx             # Button with 5 variants + icon + loading support
    ├── DSCard.tsx               # Card with 5 variants + icon container
    ├── DSForm.tsx               # Input, Textarea, Select, Checkbox, Toggle
    ├── DSBadge.tsx              # Badge, XP badge, Tier badge
    ├── DSProgress.tsx           # ProgressBar, XPProgressBar, Skeleton
    ├── DSMotion.tsx             # ScrollReveal, FloatingXP, HoverLift, Section, Divider
    ├── DSTypography.tsx         # Display, Heading, Text, Caption, SectionLabel
    ├── DSProduct.tsx            # TrackCard, MiniPlayer, XPCard, ChallengeCard,
    │                            # RewardCard, FeedCard, LeaderboardItem
    └── DSToast.tsx              # Toast system with Provider + useToast hook
```

## Usage

```tsx
import {
  DSButton,
  DSCard,
  DSXPCard,
  DSTrackCard,
  useToast,
  tokens,
} from "@/design-system";
```

## Design Tokens

### Colors

| Token           | Value     | Usage                            |
|-----------------|-----------|----------------------------------|
| bgPrimary       | #0B0F19   | Page background                  |
| bgSecondary     | #121826   | Card/panel surfaces              |
| bgElevated      | #1A2236   | Elevated surfaces, modals        |
| textPrimary     | #F1F5FF   | Headlines, important body text   |
| textSecondary   | #94A3B8   | Body text, descriptions          |
| textMuted       | #4A5568   | Placeholders, disabled states    |
| brandPrimary    | #4F46E5   | Buttons, links, active states    |
| accentSuccess   | #22C55E   | XP, rewards, positive signals    |
| accentWarning   | #F59E0B   | Streaks, time-limited alerts     |
| accentDanger    | #EF4444   | Errors, destructive actions      |

### Typography

| Scale     | Size  | Weight | Font    |
|-----------|-------|--------|---------|
| Display   | 72px  | 800    | Satoshi |
| H1        | 48px  | 800    | Satoshi |
| H2        | 36px  | 700    | Satoshi |
| H3        | 24px  | 700    | Satoshi |
| H4        | 18px  | 600    | Satoshi |
| Body LG   | 18px  | 400    | DM Sans |
| Body MD   | 15px  | 400    | DM Sans |
| Body SM   | 13px  | 400    | DM Sans |
| Caption   | 11px  | 500    | DM Sans |

### Spacing (8px grid)

`4, 8, 12, 16, 24, 32, 40, 48, 64, 80` px

### Border Radius

| Token   | Value |
|---------|-------|
| ds-sm   | 6px   |
| ds-md   | 10px  |
| ds-lg   | 14px  |
| ds-xl   | 20px  |

## Gamification Tiers

| Tier     | Color   | Min XP  |
|----------|---------|---------|
| Bronze   | #CD7F32 | 0       |
| Silver   | #94A3B8 | 1,000   |
| Gold     | #F59E0B | 5,000   |
| Platinum | #A855F7 | 15,000  |
| Diamond  | #3B82F6 | 50,000  |

## Theming

All tokens are exposed as CSS custom properties (`--ds-*`) and can be
overridden per-theme. Light mode skeleton is available via `[data-theme="light"]`.

## Interaction Patterns

- **Hover lift**: `hover:-translate-y-1.5 hover:shadow-brand` — all interactive cards
- **Button press**: `active:scale-[0.97]` — all buttons
- **XP feedback**: `<DSFloatingXP>` + `animate-xp-rise` keyframe
- **Scroll reveal**: `<DSScrollReveal>` — threshold-based fade+slide
- **Skeleton loading**: `<DSSkeleton>` — shimmer animation, no spinners
