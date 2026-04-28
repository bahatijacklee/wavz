import { useState, useRef } from "react";
import { Play, Pause, Music, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { DSXPBadge } from "./DSBadge";
import { DSProgressBar } from "./DSProgress";

// ─── TRACK CARD ───────────────────────────────────────────────────────────────

export interface DSTrackCardProps {
  cover?: string;
  title: string;
  artist: string;
  duration?: string;
  xpReward?: number;
  progress?: number;  // 0-100 if currently playing
  liked?: boolean;
  onPlay?: () => void;
  onLike?: () => void;
  className?: string;
}

export function DSTrackCard({
  cover,
  title,
  artist,
  duration,
  xpReward,
  progress,
  liked,
  onPlay,
  onLike,
  className,
}: DSTrackCardProps) {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(!playing);
    onPlay?.();
  };

  return (
    <div
      className={cn(
        "group flex items-center gap-4 rounded-ds-lg p-4",
        "bg-[#121826] border border-[rgba(255,255,255,0.08)]",
        "hover:bg-[#1A2236] hover:border-[rgba(255,255,255,0.12)]",
        "transition-all duration-medium cursor-pointer",
        className
      )}
    >
      {/* Cover */}
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-ds-md bg-[#1A2236]">
        {cover ? (
          <img src={cover} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[#4A5568]">
            <Music className="h-5 w-5" />
          </div>
        )}
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-fast"
        >
          {playing ? (
            <Pause className="h-4 w-4 text-white" />
          ) : (
            <Play className="h-4 w-4 fill-white text-white" />
          )}
        </button>
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-body-md font-medium text-[#F1F5FF]">{title}</p>
          {xpReward && <DSXPBadge amount={xpReward} />}
        </div>
        <p className="truncate text-body-sm text-[#94A3B8]">{artist}</p>
        {progress !== undefined && (
          <DSProgressBar
            value={progress}
            variant="brand"
            size="sm"
            className="mt-1.5"
          />
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 shrink-0">
        {duration && (
          <span className="text-body-sm text-[#4A5568]">{duration}</span>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); onLike?.(); }}
          className={cn(
            "rounded-full p-1.5 transition-colors duration-fast",
            "text-[#4A5568] hover:text-[#EF4444]",
            liked && "text-[#EF4444]"
          )}
        >
          <Heart className={cn("h-4 w-4", liked && "fill-current")} />
        </button>
      </div>
    </div>
  );
}

// ─── MINI PLAYER ──────────────────────────────────────────────────────────────

export interface DSMiniPlayerProps {
  cover?: string;
  title: string;
  artist: string;
  progress?: number;
  isPlaying?: boolean;
  onPlayPause?: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  className?: string;
}

export function DSMiniPlayer({
  cover,
  title,
  artist,
  progress = 0,
  isPlaying = false,
  onPlayPause,
  onNext,
  onPrev,
  className,
}: DSMiniPlayerProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-ds-xl px-4 py-3",
        "bg-[rgba(18,24,38,0.95)] border border-[rgba(255,255,255,0.08)]",
        "backdrop-blur-xl shadow-ds-lg",
        className
      )}
    >
      {/* Cover */}
      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-ds-md bg-[#1A2236]">
        {cover ? (
          <img src={cover} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[#4A5568]">
            <Music className="h-4 w-4" />
          </div>
        )}
      </div>

      {/* Info + Progress */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-body-sm font-medium text-[#F1F5FF]">{title}</p>
        <p className="truncate text-caption text-[#94A3B8]">{artist}</p>
        <DSProgressBar value={progress} size="sm" className="mt-1" />
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onPrev}
          className="rounded-full p-1 text-[#94A3B8] hover:text-[#F1F5FF] transition-colors duration-fast"
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 3a1 1 0 0 1 2 0v4.5l7-4.5A1 1 0 0 1 13 4v8a1 1 0 0 1-1.5.866l-7-4.5V13a1 1 0 1 1-2 0V3z" />
          </svg>
        </button>
        <button
          onClick={onPlayPause}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-full",
            "bg-[#4F46E5] text-white",
            "hover:bg-[#4338CA] hover:scale-105",
            "active:scale-95 transition-all duration-fast"
          )}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4 fill-white" />
          )}
        </button>
        <button
          onClick={onNext}
          className="rounded-full p-1 text-[#94A3B8] hover:text-[#F1F5FF] transition-colors duration-fast"
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M14 13a1 1 0 0 1-2 0V8.5l-7 4.5A1 1 0 0 1 3 12V4a1 1 0 0 1 1.5-.866l7 4.5V3a1 1 0 1 1 2 0v10z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── XP CARD ──────────────────────────────────────────────────────────────────

export interface DSXPCardProps {
  xp: number;
  level: number;
  nextLevelXP: number;
  tier?: "bronze" | "silver" | "gold" | "platinum" | "diamond";
  className?: string;
}

const tierConfig = {
  bronze:   { color: "#CD7F32", label: "Bronze",   icon: "🥉" },
  silver:   { color: "#94A3B8", label: "Silver",   icon: "🥈" },
  gold:     { color: "#F59E0B", label: "Gold",     icon: "🥇" },
  platinum: { color: "#A855F7", label: "Platinum", icon: "💜" },
  diamond:  { color: "#3B82F6", label: "Diamond",  icon: "💎" },
};

export function DSXPCard({
  xp,
  level,
  nextLevelXP,
  tier = "bronze",
  className,
}: DSXPCardProps) {
  const config = tierConfig[tier];
  const progress = Math.min(100, (xp / nextLevelXP) * 100);

  return (
    <div
      className={cn(
        "rounded-ds-xl p-6",
        "bg-[#121826] border border-[rgba(255,255,255,0.08)]",
        "shadow-ds-md",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-body-sm text-[#94A3B8]">Your XP</p>
          <p className="font-satoshi text-h3 font-bold text-[#22C55E]">
            {xp.toLocaleString()}
          </p>
        </div>
        <div
          className="flex h-12 w-12 items-center justify-center rounded-ds-md text-2xl"
          style={{ background: `${config.color}22`, border: `1px solid ${config.color}44` }}
        >
          {config.icon}
        </div>
      </div>

      {/* Tier */}
      <div className="mt-3 flex items-center gap-2">
        <span
          className="text-body-sm font-semibold"
          style={{ color: config.color }}
        >
          {config.label} Tier
        </span>
        <span className="text-caption text-[#4A5568]">Level {level}</span>
      </div>

      {/* Progress */}
      <div className="mt-4 space-y-1.5">
        <div className="flex justify-between">
          <span className="text-caption text-[#4A5568]">
            Progress to Level {level + 1}
          </span>
          <span className="text-caption font-medium text-[#94A3B8]">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[rgba(34,197,94,0.12)]">
          <div
            className="h-full rounded-full bg-[#22C55E] transition-all duration-slow"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-caption text-[#4A5568]">
          {(nextLevelXP - xp).toLocaleString()} XP to go
        </p>
      </div>
    </div>
  );
}

// ─── CHALLENGE CARD ───────────────────────────────────────────────────────────

export interface DSChallengeCardProps {
  title: string;
  description?: string;
  xpReward: number;
  progress: number;
  total: number;
  timeLeft?: string;
  completed?: boolean;
  className?: string;
}

export function DSChallengeCard({
  title,
  description,
  xpReward,
  progress,
  total,
  timeLeft,
  completed,
  className,
}: DSChallengeCardProps) {
  const pct = Math.min(100, (progress / total) * 100);

  return (
    <div
      className={cn(
        "rounded-ds-lg p-5",
        "bg-[#121826] border transition-all duration-medium",
        completed
          ? "border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.04)]"
          : "border-[rgba(255,255,255,0.08)] hover:border-[rgba(79,70,229,0.3)]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-medium text-body-md text-[#F1F5FF]">{title}</p>
          {description && (
            <p className="mt-0.5 text-body-sm text-[#94A3B8]">{description}</p>
          )}
        </div>
        <DSXPBadge amount={xpReward} className="shrink-0" />
      </div>

      <div className="mt-4 space-y-2">
        <DSProgressBar
          value={pct}
          variant={completed ? "success" : "brand"}
          size="md"
        />
        <div className="flex items-center justify-between">
          <span className="text-caption text-[#4A5568]">
            {progress} / {total} completed
          </span>
          {timeLeft && !completed && (
            <span className="text-caption text-[#F59E0B]">⏱ {timeLeft}</span>
          )}
          {completed && (
            <span className="text-caption text-[#22C55E] font-medium">
              ✓ Complete
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── REWARD CARD ──────────────────────────────────────────────────────────────

export interface DSRewardCardProps {
  image?: string;
  title: string;
  description?: string;
  xpCost: number;
  userXP?: number;
  onRedeem?: () => void;
  className?: string;
}

export function DSRewardCard({
  image,
  title,
  description,
  xpCost,
  userXP,
  onRedeem,
  className,
}: DSRewardCardProps) {
  const canAfford = userXP !== undefined ? userXP >= xpCost : true;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-ds-xl",
        "bg-[#121826] border border-[rgba(255,255,255,0.08)]",
        "transition-all duration-medium hover:-translate-y-1 hover:shadow-brand hover:border-[rgba(79,70,229,0.3)]",
        className
      )}
    >
      {/* Image */}
      <div className="h-40 bg-[#1A2236] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl">🎁</div>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="font-medium text-body-md text-[#F1F5FF]">{title}</p>
        {description && (
          <p className="mt-1 text-body-sm text-[#94A3B8]">{description}</p>
        )}
        <div className="mt-4 flex items-center justify-between gap-3">
          <span
            className={cn(
              "text-body-sm font-semibold",
              canAfford ? "text-[#22C55E]" : "text-[#EF4444]"
            )}
          >
            ⚡ {xpCost.toLocaleString()} XP
          </span>
          <button
            onClick={onRedeem}
            disabled={!canAfford}
            className={cn(
              "rounded-ds-md px-4 py-2 text-body-sm font-medium transition-all duration-fast",
              canAfford
                ? "bg-[#4F46E5] text-white hover:bg-[#4338CA] hover:scale-105 active:scale-95"
                : "bg-[rgba(255,255,255,0.05)] text-[#4A5568] cursor-not-allowed"
            )}
          >
            Redeem
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── FEED CARD ────────────────────────────────────────────────────────────────

export interface DSFeedCardProps {
  avatar?: string;
  username: string;
  handle?: string;
  timestamp: string;
  content: string;
  likes?: number;
  comments?: number;
  xpEarned?: number;
  liked?: boolean;
  onLike?: () => void;
  onComment?: () => void;
  className?: string;
}

export function DSFeedCard({
  avatar,
  username,
  handle,
  timestamp,
  content,
  likes = 0,
  comments = 0,
  xpEarned,
  liked,
  onLike,
  onComment,
  className,
}: DSFeedCardProps) {
  return (
    <div
      className={cn(
        "rounded-ds-lg p-5",
        "bg-[#121826] border border-[rgba(255,255,255,0.08)]",
        "hover:border-[rgba(255,255,255,0.12)] transition-colors duration-medium",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[#1A2236] border border-[rgba(255,255,255,0.08)]">
            {avatar ? (
              <img src={avatar} alt={username} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm font-bold text-[#4F46E5]">
                {username[0].toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <p className="text-body-sm font-semibold text-[#F1F5FF]">{username}</p>
            <p className="text-caption text-[#4A5568]">
              {handle && `${handle} · `}{timestamp}
            </p>
          </div>
        </div>
        {xpEarned && <DSXPBadge amount={xpEarned} />}
      </div>

      {/* Content */}
      <p className="mt-3 text-body-md text-[#94A3B8] leading-relaxed">{content}</p>

      {/* Actions */}
      <div className="mt-4 flex items-center gap-4 border-t border-[rgba(255,255,255,0.06)] pt-3">
        <button
          onClick={onLike}
          className={cn(
            "flex items-center gap-1.5 text-body-sm transition-colors duration-fast",
            liked ? "text-[#EF4444]" : "text-[#4A5568] hover:text-[#EF4444]"
          )}
        >
          <Heart className={cn("h-4 w-4", liked && "fill-current")} />
          <span>{likes}</span>
        </button>
        <button
          onClick={onComment}
          className="flex items-center gap-1.5 text-body-sm text-[#4A5568] hover:text-[#94A3B8] transition-colors duration-fast"
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14 10.5a2 2 0 0 1-2 2H4.5l-2.5 2v-12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{comments}</span>
        </button>
      </div>
    </div>
  );
}

// ─── LEADERBOARD ITEM ─────────────────────────────────────────────────────────

export interface DSLeaderboardItemProps {
  rank: number;
  avatar?: string;
  username: string;
  xp: number;
  tier?: "bronze" | "silver" | "gold" | "platinum" | "diamond";
  isCurrentUser?: boolean;
  className?: string;
}

const rankColors: Record<number, string> = {
  1: "text-[#F59E0B]",
  2: "text-[#94A3B8]",
  3: "text-[#CD7F32]",
};

export function DSLeaderboardItem({
  rank,
  avatar,
  username,
  xp,
  tier,
  isCurrentUser,
  className,
}: DSLeaderboardItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-ds-lg px-4 py-3",
        "transition-all duration-medium",
        isCurrentUser
          ? "bg-[rgba(79,70,229,0.08)] border border-[rgba(79,70,229,0.25)]"
          : "bg-[#121826] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.1)]",
        className
      )}
    >
      {/* Rank */}
      <span
        className={cn(
          "w-6 text-center font-satoshi font-bold",
          rankColors[rank] || "text-[#4A5568]"
        )}
      >
        {rank <= 3 ? ["🥇", "🥈", "🥉"][rank - 1] : rank}
      </span>

      {/* Avatar */}
      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#1A2236] border border-[rgba(255,255,255,0.08)]">
        {avatar ? (
          <img src={avatar} alt={username} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs font-bold text-[#4F46E5]">
            {username[0].toUpperCase()}
          </div>
        )}
      </div>

      {/* Name */}
      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "truncate text-body-sm font-medium",
            isCurrentUser ? "text-[#4F46E5]" : "text-[#F1F5FF]"
          )}
        >
          {username} {isCurrentUser && <span className="text-caption text-[#4A5568]">(you)</span>}
        </p>
      </div>

      {/* XP */}
      <span className="text-body-sm font-semibold text-[#22C55E]">
        ⚡ {xp.toLocaleString()}
      </span>
    </div>
  );
}
