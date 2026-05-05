import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Compass,
  Users,
  Library,
  ListMusic,
  Activity,
  Gift,
  MessageCircle,
  Trophy,
  Settings,
  Crown,
  Flame,
  Zap,
  Star,
  Clock,
  ChevronRight,
  SkipBack,
  SkipForward,
  Play,
  Heart,
  Sparkles,
  Lock,
  Check,
  Music,
  Mic2,
  Package,
  Ticket,
  Headphones,
  MessageSquare,
  Share2,
  RotateCcw,
  TrendingUp,
  ShoppingBag,
  Users2,
  ArrowUp,
} from "lucide-react";

// ─── Nav Items ────────────────────────────────────────────────────────────────
const navItems = [
  { icon: Home, label: "Home" },
  { icon: Compass, label: "Discover" },
  { icon: Users, label: "Following" },
  { icon: Library, label: "Library" },
  { icon: ListMusic, label: "Playlists" },
  { icon: Activity, label: "Activity" },
  { icon: Gift, label: "Rewards" },
  { icon: MessageCircle, label: "Messages" },
  { icon: Trophy, label: "Leaderboards" },
  { icon: Settings, label: "Settings" },
];

// ─── Data ─────────────────────────────────────────────────────────────────────
const featuredRewards = [
  {
    id: 1,
    title: "VIP Backstage Pass",
    artist: "Luna Lane",
    img: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&q=80",
    xpRequired: 3000,
    xpCurrent: 2650,
    rarity: "VIP",
    rarityColor: "#A855F7",
    tag: "Meet & Greet",
    unlocks: "Feb 28, 2025",
    spotsLeft: 3,
  },
  {
    id: 2,
    title: "Signed Vinyl Bundle",
    artist: "The Weekenders",
    img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&q=80",
    xpRequired: 2500,
    xpCurrent: 2650,
    rarity: "Exclusive",
    rarityColor: "#F59E0B",
    tag: "Merch Drop",
    unlocks: null,
    spotsLeft: 12,
  },
  {
    id: 3,
    title: "Early Album Access",
    artist: "Jaylon",
    img: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&q=80",
    xpRequired: 2000,
    xpCurrent: 2650,
    rarity: "Limited",
    rarityColor: "#22C55E",
    tag: "Music Drop",
    unlocks: null,
    spotsLeft: 28,
  },
  {
    id: 4,
    title: "Fan Club Membership",
    artist: "Aria Mae",
    img: "https://images.unsplash.com/photo-1484876065684-b1cf1b0d50d7?w=400&q=80",
    xpRequired: 4500,
    xpCurrent: 2650,
    rarity: "VIP",
    rarityColor: "#A855F7",
    tag: "Fan Perks",
    unlocks: null,
    spotsLeft: 5,
  },
  {
    id: 5,
    title: "Exclusive Merch Drop",
    artist: "Northline",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
    xpRequired: 1800,
    xpCurrent: 2650,
    rarity: "Limited",
    rarityColor: "#22C55E",
    tag: "Merch Drop",
    unlocks: null,
    spotsLeft: 45,
  },
  {
    id: 6,
    title: "Private Listening Session",
    artist: "Luna Lane",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
    xpRequired: 6000,
    xpCurrent: 2650,
    rarity: "VIP",
    rarityColor: "#A855F7",
    tag: "Artist Access",
    unlocks: null,
    spotsLeft: 1,
  },
];

const dailyMissions = [
  {
    id: 1,
    icon: Headphones,
    label: "Listen to 10 songs",
    progress: 7,
    total: 10,
    xp: "+50 XP",
    color: "#4F46E5",
    timeLeft: "Resets in 8h 22m",
    nearComplete: true,
  },
  {
    id: 2,
    icon: Heart,
    label: "Support 1 artist",
    progress: 1,
    total: 1,
    xp: "+100 XP",
    color: "#22C55E",
    timeLeft: "Complete!",
    nearComplete: false,
    completed: true,
  },
  {
    id: 3,
    icon: MessageSquare,
    label: "Comment on 3 posts",
    progress: 2,
    total: 3,
    xp: "+30 XP",
    color: "#06B6D4",
    timeLeft: "Resets in 8h 22m",
    nearComplete: true,
  },
  {
    id: 4,
    icon: Share2,
    label: "Share a release",
    progress: 0,
    total: 1,
    xp: "+40 XP",
    color: "#F59E0B",
    timeLeft: "Resets in 8h 22m",
    nearComplete: false,
  },
];

const limitedDrops = [
  {
    id: 1,
    title: "Exclusive Meet & Greet",
    artist: "Luna Lane",
    img: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=300&q=80",
    xpRequired: 5000,
    hoursLeft: 47,
    minutesLeft: 22,
    spotsLeft: 3,
    rarity: "VIP",
    rarityColor: "#A855F7",
  },
  {
    id: 2,
    title: "Limited Tour Poster",
    artist: "The Weekenders",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80",
    xpRequired: 1200,
    hoursLeft: 11,
    minutesLeft: 45,
    spotsLeft: 18,
    rarity: "Limited",
    rarityColor: "#F59E0B",
  },
];

const redemptionHistory = [
  {
    id: 1,
    title: "Luna Lane Sticker Pack",
    date: "Jan 12, 2025",
    xpSpent: 500,
    status: "delivered",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=60&q=80",
  },
  {
    id: 2,
    title: "Early Track Access — Jaylon",
    date: "Jan 8, 2025",
    xpSpent: 1200,
    status: "claimed",
    img: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=60&q=80",
  },
  {
    id: 3,
    title: "Digital Fan Kit",
    date: "Dec 28, 2024",
    xpSpent: 800,
    status: "delivered",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&q=80",
  },
  {
    id: 4,
    title: "VIP Discord Access",
    date: "Dec 15, 2024",
    xpSpent: 1500,
    status: "claimed",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=60&q=80",
  },
];

const rewardCategories = [
  { label: "All Rewards", icon: Star },
  { label: "VIP Access", icon: Crown },
  { label: "Merch", icon: ShoppingBag },
  { label: "Fan Perks", icon: Users2 },
  { label: "Limited Drops", icon: Flame },
  { label: "Artist Exclusives", icon: Mic2 },
];

const fanLevels = [
  { level: 1, label: "New Fan", minXP: 0, color: "#94A3B8", perks: ["Access to fan feed"] },
  { level: 5, label: "Fan", minXP: 500, color: "#4F46E5", perks: ["Early access to releases", "Fan badge"] },
  { level: 10, label: "Dedicated Fan", minXP: 2000, color: "#22C55E", perks: ["Monthly merch discounts", "Priority support"] },
  { level: 12, label: "Super Fan", minXP: 3500, color: "#A855F7", perks: ["VIP event access", "Artist DMs", "Exclusive content"], current: true },
  { level: 13, label: "VIP Insider", minXP: 5000, color: "#F59E0B", perks: ["Backstage passes", "Meet & Greet priority", "Custom profile badge"], next: true },
  { level: 15, label: "Legend", minXP: 8000, color: "#3B82F6", perks: ["Co-create with artists", "Platinum badge", "Annual reward bundle"] },
];

// ─── XP Floating Badge ────────────────────────────────────────────────────────
function XpBadge({ value, delay, x }: { value: string; delay: number; x: number }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 3400 + delay);
    return () => clearInterval(id);
  }, [delay]);
  return (
    <div
      key={tick}
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, bottom: "22%", animation: `xpFloat 3.4s ease-out forwards`, opacity: 0 }}
    >
      <span className="text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/30 px-2 py-0.5 rounded-full whitespace-nowrap">
        {value}
      </span>
    </div>
  );
}

// ─── Countdown component ──────────────────────────────────────────────────────
function Countdown({ hours, minutes }: { hours: number; minutes: number }) {
  const [h, setH] = useState(hours);
  const [m, setM] = useState(minutes);
  useEffect(() => {
    const id = setInterval(() => {
      setM((prev) => {
        if (prev === 0) { setH((ph) => Math.max(0, ph - 1)); return 59; }
        return prev - 1;
      });
    }, 60000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="font-mono font-bold text-orange-400">
      {String(h).padStart(2, "0")}:{String(m).padStart(2, "0")}h
    </span>
  );
}

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function RewardsPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Rewards");
  const [isPlaying, setIsPlaying] = useState(true);
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set(["Falling Stars"]));
  const [activeCategory, setActiveCategory] = useState("All Rewards");
  const [claimedMissions, setClaimedMissions] = useState<Set<number>>(new Set([2]));
  const [redeemedRewards, setRedeemedRewards] = useState<Set<number>>(new Set([2, 3]));

  const userXP = 2650;
  const nextLevelXP = 3500;
  const currentLevel = 12;
  const streakDays = 7;
  const xpToNextUnlock = 350;
  const nextUnlockReward = "VIP Backstage Pass";
  const xpProgressPct = Math.round((userXP / nextLevelXP) * 100);

  const heroReveal = useScrollReveal(0);
  const missionsReveal = useScrollReveal(0.1);
  const categoriesReveal = useScrollReveal(0.1);
  const dropsReveal = useScrollReveal(0.1);
  const levelReveal = useScrollReveal(0.1);
  const historyReveal = useScrollReveal(0.1);

  const handleNavClick = (label: string) => {
    setActiveNav(label);
    if (label === "Home") navigate("/dashboard");
    if (label === "Following") navigate("/dashboard");
    if (label === "Rewards") navigate("/rewards");
  };

  const filteredRewards =
    activeCategory === "All Rewards"
      ? featuredRewards
      : featuredRewards.filter((r) => {
          if (activeCategory === "VIP Access") return r.rarity === "VIP";
          if (activeCategory === "Merch") return r.tag === "Merch Drop";
          if (activeCategory === "Fan Perks") return r.tag === "Fan Perks";
          if (activeCategory === "Limited Drops") return r.rarity === "Limited";
          if (activeCategory === "Artist Exclusives") return r.tag === "Artist Access" || r.tag === "Music Drop";
          return true;
        });

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: "#0B0F19", color: "#fff", fontFamily: "DM Sans, sans-serif" }}
    >
      <style>{`
        @keyframes xpFloat {
          0% { transform: translateY(0); opacity: 0; }
          12% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-64px); opacity: 0; }
        }
        @keyframes livePulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(16px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes progressFill {
          from { width: 0%; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes timerPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .progress-animate { animation: progressFill 1s cubic-bezier(.4,0,.2,1) both; }
        .reveal { animation: slideUp 0.5s cubic-bezier(0,0,0.2,1) both; }
        .reward-card:hover { transform: translateY(-4px); box-shadow: 0 0 0 1px #4F46E5, 0 12px 40px rgba(79,70,229,0.22); }
        .reward-card { transition: transform 200ms ease-out, box-shadow 200ms ease-out; }
        .mission-card:hover { background: rgba(255,255,255,0.03); }
        .mission-card { transition: background 150ms ease; }
        .cat-btn { transition: all 150ms ease; }
      `}</style>

      {/* ── Sidebar ───────────────────────────────────────────────────────── */}
      <aside
        className="w-56 flex-shrink-0 flex flex-col py-5 px-3 border-r"
        style={{ backgroundColor: "#0D1120", borderColor: "rgba(255,255,255,0.05)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-3 mb-7">
          <div
            className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center"
            style={{ boxShadow: "0 0 16px rgba(79,70,229,0.6)" }}
          >
            <Activity className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-white font-bold text-base tracking-tight" style={{ fontFamily: "Satoshi, sans-serif" }}>
            SoundBridge
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 flex flex-col gap-0.5">
          {navItems.map(({ icon: Icon, label }) => {
            const isActive = activeNav === label;
            return (
              <button
                key={label}
                onClick={() => handleNavClick(label)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 w-full text-left group ${
                  isActive ? "text-white" : "text-white/45 hover:text-white/80 hover:bg-white/[0.04]"
                }`}
                style={
                  isActive
                    ? {
                        background: "linear-gradient(90deg,rgba(79,70,229,0.22) 0%,rgba(79,70,229,0.05) 100%)",
                        boxShadow: "inset 2px 0 0 #4F46E5",
                      }
                    : {}
                }
              >
                <Icon
                  className={`w-4 h-4 flex-shrink-0 transition-colors duration-200 ${isActive ? "text-indigo-400" : "group-hover:text-white/60"}`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {label}
                {label === "Rewards" && (
                  <span className="ml-auto w-1.5 h-1.5 bg-green-400 rounded-full" style={{ animation: "livePulse 2s infinite" }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* User identity */}
        <div className="mt-4 rounded-xl p-3 border mb-3" style={{ backgroundColor: "#111827", borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&q=80"
                className="w-9 h-9 rounded-full object-cover border-2 border-indigo-500/60"
                alt="user"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0D1120]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-semibold truncate">Alex</p>
              <div className="flex items-center gap-1">
                <Crown className="w-2.5 h-2.5 text-yellow-400" />
                <p className="text-yellow-400 text-[10px] font-medium">Level 12 • Super Fan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mini player */}
        <div className="rounded-xl p-3 border" style={{ backgroundColor: "#111827", borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2 mb-2">
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=40&q=80"
              className="w-9 h-9 rounded-lg object-cover"
              alt="track"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-semibold truncate">Falling Stars</p>
              <p className="text-white/40 text-xs truncate">Luna Lane</p>
            </div>
            <button
              onClick={() => setLikedTracks((prev) => { const n = new Set(prev); n.has("Falling Stars") ? n.delete("Falling Stars") : n.add("Falling Stars"); return n; })}
              style={{ color: likedTracks.has("Falling Stars") ? "#F43F5E" : "rgba(255,255,255,0.3)" }}
            >
              <Heart className="w-3.5 h-3.5" fill={likedTracks.has("Falling Stars") ? "currentColor" : "none"} />
            </button>
          </div>
          <div className="relative h-1 bg-white/10 rounded-full mb-2 cursor-pointer group">
            <div className="absolute left-0 top-0 h-full bg-indigo-500 rounded-full group-hover:bg-indigo-400 transition-colors" style={{ width: "42%" }} />
          </div>
          <div className="flex items-center justify-between text-white/30 text-[10px] mb-2">
            <span>1:24</span><span>3:24</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="text-white/40 hover:text-white/70 transition-colors"><SkipBack className="w-3.5 h-3.5" /></button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-indigo-100 transition-colors"
              style={{ boxShadow: "0 0 12px rgba(255,255,255,0.2)" }}
            >
              {isPlaying ? (
                <span className="flex gap-0.5">
                  <span className="w-0.5 h-2.5 bg-[#0B0F19] rounded-sm" />
                  <span className="w-0.5 h-2.5 bg-[#0B0F19] rounded-sm" />
                </span>
              ) : (
                <Play className="w-3 h-3 text-[#0B0F19] ml-0.5" fill="#0B0F19" />
              )}
            </button>
            <button className="text-white/40 hover:text-white/70 transition-colors"><SkipForward className="w-3.5 h-3.5" /></button>
          </div>
        </div>
      </aside>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b flex-shrink-0"
          style={{ backgroundColor: "#0B0F19", borderColor: "rgba(255,255,255,0.05)" }}
        >
          <div>
            <h1 className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: "Satoshi, sans-serif" }}>
              Rewards
            </h1>
            <p className="text-white/40 text-xs mt-0.5">Turn your passion into exclusive experiences</p>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
              style={{ backgroundColor: "rgba(34,197,94,0.08)", borderColor: "rgba(34,197,94,0.2)" }}
            >
              <Zap className="w-3.5 h-3.5 text-green-400" fill="currentColor" />
              <span className="text-green-400 text-sm font-bold">{userXP.toLocaleString()} XP</span>
            </div>
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border"
              style={{ backgroundColor: "rgba(249,115,22,0.08)", borderColor: "rgba(249,115,22,0.2)" }}
            >
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-orange-400 text-sm font-bold">{streakDays} day streak</span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-6 py-6 space-y-8">

            {/* ── 1. Hero XP Status ──────────────────────────────────────── */}
            <div
              ref={heroReveal.ref}
              className={heroReveal.visible ? "reveal" : "opacity-0"}
              style={{
                background: "linear-gradient(135deg, #121826 0%, #1a1535 50%, #121826 100%)",
                borderRadius: "16px",
                border: "1px solid rgba(79,70,229,0.2)",
                padding: "28px 32px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Mesh gradient atmosphere */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 70% 50%, rgba(79,70,229,0.12) 0%, transparent 60%)",
                }}
              />

              {/* XP floating badges */}
              <XpBadge value="+10 XP" delay={0} x={60} />
              <XpBadge value="+25 XP" delay={1700} x={73} />

              <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Left: Level + XP */}
                <div className="flex items-center gap-5">
                  {/* Level ring */}
                  <div className="relative flex-shrink-0">
                    <svg width="80" height="80" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#A855F7"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 42}`}
                        strokeDashoffset={`${2 * Math.PI * 42 * (1 - xpProgressPct / 100)}`}
                        transform="rotate(-90 50 50)"
                        style={{ filter: "drop-shadow(0 0 6px rgba(168,85,247,0.5))" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-white font-black text-lg leading-none" style={{ fontFamily: "Satoshi, sans-serif" }}>
                        {currentLevel}
                      </span>
                      <span className="text-white/40 text-[9px] uppercase tracking-widest">LVL</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Crown className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 text-sm font-semibold">Super Fan</span>
                    </div>
                    <p className="text-white font-black text-2xl leading-none mb-1" style={{ fontFamily: "Satoshi, sans-serif" }}>
                      {userXP.toLocaleString()} XP
                    </p>
                    <p className="text-white/40 text-xs">of {nextLevelXP.toLocaleString()} XP for Level {currentLevel + 1}</p>
                    {/* XP bar */}
                    <div className="w-48 h-2 rounded-full bg-white/10 mt-2.5 overflow-hidden">
                      <div
                        className="h-full rounded-full progress-animate"
                        style={{
                          width: `${xpProgressPct}%`,
                          background: "linear-gradient(90deg, #4F46E5, #A855F7)",
                          boxShadow: "0 0 8px rgba(168,85,247,0.5)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden lg:block w-px h-16 bg-white/[0.06] mx-2" />

                {/* Middle: Streak */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.2)" }}
                  >
                    <Flame className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-orange-400 font-black text-xl leading-none" style={{ fontFamily: "Satoshi, sans-serif" }}>
                      {streakDays} Days
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">Current Streak</p>
                    <p className="text-orange-300/70 text-[11px] mt-0.5">+20% XP bonus active</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden lg:block w-px h-16 bg-white/[0.06] mx-2" />

                {/* Right: Next Unlock */}
                <div className="flex-1">
                  <div
                    className="rounded-xl p-3.5"
                    style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.15)" }}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Gift className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">Next Unlock</span>
                    </div>
                    <p className="text-white font-bold text-sm leading-snug">{nextUnlockReward}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full progress-animate"
                          style={{
                            width: `${Math.round((userXP / (userXP + xpToNextUnlock)) * 100)}%`,
                            background: "linear-gradient(90deg, #22C55E, #16A34A)",
                          }}
                        />
                      </div>
                      <span className="text-green-400 text-xs font-bold whitespace-nowrap">
                        {xpToNextUnlock} XP away
                      </span>
                    </div>
                    <p className="text-white/30 text-[11px] mt-1.5">
                      🎁 Only {xpToNextUnlock} XP until {nextUnlockReward}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 2. Daily XP Missions ──────────────────────────────────── */}
            <div ref={missionsReveal.ref} className={missionsReveal.visible ? "reveal" : "opacity-0"}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-white font-bold text-lg" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    Daily XP Missions
                  </h2>
                  <p className="text-white/40 text-xs mt-0.5">
                    {dailyMissions.filter((m) => claimedMissions.has(m.id)).length}/{dailyMissions.length} complete ·{" "}
                    <span className="text-green-400">Complete 1 more → Bonus +25 XP</span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-white/40 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  Resets in 8h 22m
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dailyMissions.map((mission) => {
                  const isClaimed = claimedMissions.has(mission.id);
                  const pct = Math.round((mission.progress / mission.total) * 100);
                  return (
                    <div
                      key={mission.id}
                      className="mission-card rounded-xl p-4 border"
                      style={{
                        backgroundColor: isClaimed ? "rgba(34,197,94,0.05)" : "#121826",
                        borderColor: isClaimed ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: isClaimed ? "rgba(34,197,94,0.12)" : `rgba(${mission.color === "#4F46E5" ? "79,70,229" : mission.color === "#22C55E" ? "34,197,94" : mission.color === "#06B6D4" ? "6,182,212" : "245,158,11"},0.12)`,
                            border: `1px solid ${isClaimed ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.06)"}`,
                          }}
                        >
                          {isClaimed ? (
                            <Check className="w-4 h-4 text-green-400" strokeWidth={2.5} />
                          ) : (
                            <mission.icon className="w-4 h-4" style={{ color: mission.color }} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <p className={`text-sm font-semibold ${isClaimed ? "text-white/50 line-through" : "text-white"}`}>
                              {mission.label}
                            </p>
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                              style={{
                                color: isClaimed ? "#22C55E" : mission.color,
                                background: isClaimed ? "rgba(34,197,94,0.1)" : `rgba(${mission.color === "#4F46E5" ? "79,70,229" : mission.color === "#22C55E" ? "34,197,94" : mission.color === "#06B6D4" ? "6,182,212" : "245,158,11"},0.1)`,
                              }}
                            >
                              {mission.xp}
                            </span>
                          </div>
                          <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className="h-full rounded-full progress-animate"
                              style={{
                                width: `${pct}%`,
                                background: isClaimed ? "#22C55E" : mission.color,
                              }}
                            />
                          </div>
                          <div className="flex items-center justify-between mt-1.5">
                            <span className="text-white/30 text-[11px]">
                              {mission.progress}/{mission.total}
                              {mission.nearComplete && !isClaimed && (
                                <span className="text-yellow-400/80 ml-1.5">· Almost there!</span>
                              )}
                            </span>
                            {isClaimed ? (
                              <span className="text-green-400 text-[11px] font-medium">✓ Claimed</span>
                            ) : mission.progress === mission.total ? (
                              <button
                                onClick={() => setClaimedMissions((prev) => new Set([...prev, mission.id]))}
                                className="text-[11px] font-bold px-2.5 py-1 rounded-lg text-white"
                                style={{ background: "linear-gradient(90deg,#4F46E5,#7C3AED)" }}
                              >
                                Claim XP
                              </button>
                            ) : (
                              <span className="text-white/25 text-[11px]">{mission.timeLeft}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── 3. Featured Rewards (with category filter) ────────────── */}
            <div ref={categoriesReveal.ref} className={categoriesReveal.visible ? "reveal" : "opacity-0"}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-bold text-lg" style={{ fontFamily: "Satoshi, sans-serif" }}>
                  Featured Rewards
                </h2>
                <button className="flex items-center gap-1 text-white/40 text-xs hover:text-white/70 transition-colors">
                  View All <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Category tabs */}
              <div className="flex gap-2 mb-5 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                {rewardCategories.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    onClick={() => setActiveCategory(label)}
                    className="cat-btn flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0"
                    style={
                      activeCategory === label
                        ? { background: "rgba(79,70,229,0.2)", color: "#818CF8", border: "1px solid rgba(79,70,229,0.4)" }
                        : { background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.06)" }
                    }
                  >
                    <Icon className="w-3 h-3" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Rewards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredRewards.map((reward) => {
                  const isRedeemable = reward.xpCurrent >= reward.xpRequired;
                  const isRedeemed = redeemedRewards.has(reward.id);
                  const pct = Math.min(100, Math.round((reward.xpCurrent / reward.xpRequired) * 100));
                  return (
                    <div
                      key={reward.id}
                      className="reward-card rounded-xl overflow-hidden border"
                      style={{ backgroundColor: "#121826", borderColor: "rgba(255,255,255,0.06)" }}
                    >
                      {/* Image */}
                      <div className="relative h-36 overflow-hidden">
                        <img src={reward.img} alt={reward.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121826] via-transparent to-transparent" />
                        {/* Rarity badge */}
                        <div
                          className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
                          style={{
                            background: `rgba(${reward.rarityColor === "#A855F7" ? "168,85,247" : reward.rarityColor === "#F59E0B" ? "245,158,11" : "34,197,94"},0.15)`,
                            border: `1px solid ${reward.rarityColor}40`,
                            color: reward.rarityColor,
                          }}
                        >
                          {reward.rarity === "VIP" && <Crown className="w-2.5 h-2.5" />}
                          {reward.rarity === "Exclusive" && <Star className="w-2.5 h-2.5" />}
                          {reward.rarity === "Limited" && <Flame className="w-2.5 h-2.5" />}
                          {reward.rarity}
                        </div>
                        {reward.spotsLeft <= 5 && (
                          <div className="absolute top-2.5 right-2.5 bg-red-500/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                            {reward.spotsLeft} left
                          </div>
                        )}
                      </div>

                      {/* Card body */}
                      <div className="p-4">
                        <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">{reward.tag}</p>
                        <p className="text-white font-bold text-sm leading-snug mb-0.5">{reward.title}</p>
                        <p className="text-white/40 text-xs mb-3">{reward.artist}</p>

                        {/* XP progress */}
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="text-white/40">{reward.xpCurrent.toLocaleString()} XP</span>
                          <span className={isRedeemable ? "text-green-400 font-bold" : "text-white/40"}>
                            {reward.xpRequired.toLocaleString()} XP
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-3">
                          <div
                            className="h-full rounded-full progress-animate"
                            style={{
                              width: `${pct}%`,
                              background: isRedeemable
                                ? "linear-gradient(90deg, #22C55E, #16A34A)"
                                : "linear-gradient(90deg, #4F46E5, #7C3AED)",
                            }}
                          />
                        </div>

                        {/* CTA */}
                        {isRedeemed ? (
                          <div className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-green-400 border border-green-400/20 bg-green-400/5">
                            <Check className="w-3.5 h-3.5" />
                            Redeemed
                          </div>
                        ) : isRedeemable ? (
                          <button
                            onClick={() => setRedeemedRewards((prev) => new Set([...prev, reward.id]))}
                            className="w-full py-2 rounded-lg text-xs font-bold text-white transition-all hover:scale-[1.02]"
                            style={{ background: "linear-gradient(90deg,#4F46E5,#7C3AED)", boxShadow: "0 4px 16px rgba(79,70,229,0.3)" }}
                          >
                            Redeem Now →
                          </button>
                        ) : (
                          <button
                            className="w-full py-2 rounded-lg text-xs font-semibold text-white/40 border border-white/10 flex items-center justify-center gap-1.5 hover:border-indigo-500/40 hover:text-white/60 transition-all"
                          >
                            <TrendingUp className="w-3.5 h-3.5" />
                            Keep Earning · {(reward.xpRequired - reward.xpCurrent).toLocaleString()} XP away
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── 4. Limited-Time Drops ─────────────────────────────────── */}
            <div ref={dropsReveal.ref} className={dropsReveal.visible ? "reveal" : "opacity-0"}>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-4 h-4 text-orange-400" />
                <h2 className="text-white font-bold text-lg" style={{ fontFamily: "Satoshi, sans-serif" }}>
                  Limited-Time Drops
                </h2>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(239,68,68,0.12)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.2)" }}
                >
                  URGENT
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {limitedDrops.map((drop) => (
                  <div
                    key={drop.id}
                    className="reward-card rounded-xl border overflow-hidden flex"
                    style={{
                      backgroundColor: "#121826",
                      borderColor: "rgba(239,68,68,0.15)",
                      boxShadow: "0 0 0 1px rgba(239,68,68,0.08)",
                    }}
                  >
                    <img src={drop.img} alt={drop.title} className="w-28 object-cover flex-shrink-0" />
                    <div className="p-4 flex-1">
                      <div
                        className="flex items-center gap-1.5 mb-2"
                        style={{ animation: "timerPulse 1.5s ease infinite" }}
                      >
                        <Clock className="w-3 h-3 text-red-400" />
                        <span className="text-red-400 text-xs font-bold">
                          <Countdown hours={drop.hoursLeft} minutes={drop.minutesLeft} /> left
                        </span>
                      </div>
                      <p className="text-white font-bold text-sm leading-snug mb-0.5">{drop.title}</p>
                      <p className="text-white/40 text-xs mb-3">{drop.artist} · {drop.spotsLeft} spots left</p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-400 text-xs font-bold">
                          <Zap className="w-3 h-3 inline mr-0.5" fill="currentColor" />
                          {drop.xpRequired.toLocaleString()} XP
                        </span>
                        <button
                          className="text-xs font-bold px-3 py-1.5 rounded-lg text-white"
                          style={{ background: "linear-gradient(90deg,#EF4444,#DC2626)", boxShadow: "0 0 12px rgba(239,68,68,0.3)" }}
                        >
                          Unlock Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 5. Fan Status / Level System ─────────────────────────── */}
            <div ref={levelReveal.ref} className={levelReveal.visible ? "reveal" : "opacity-0"}>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <h2 className="text-white font-bold text-lg" style={{ fontFamily: "Satoshi, sans-serif" }}>
                  Fan Level System
                </h2>
              </div>

              <div
                className="rounded-xl p-5 border"
                style={{ backgroundColor: "#121826", borderColor: "rgba(255,255,255,0.06)" }}
              >
                {/* Level progression strip */}
                <div className="flex items-start gap-0 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
                  {fanLevels.map((level, i) => (
                    <div key={level.level} className="flex items-start flex-shrink-0">
                      <div className="flex flex-col items-center w-28">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-2 border-2 transition-all"
                          style={{
                            backgroundColor: level.current
                              ? level.color
                              : level.next
                              ? "rgba(255,255,255,0.03)"
                              : level.minXP <= userXP
                              ? `${level.color}20`
                              : "rgba(255,255,255,0.03)",
                            borderColor: level.current
                              ? level.color
                              : level.next
                              ? `${level.color}60`
                              : level.minXP <= userXP
                              ? `${level.color}50`
                              : "rgba(255,255,255,0.1)",
                            color: level.current || level.minXP <= userXP ? level.color : "rgba(255,255,255,0.2)",
                            boxShadow: level.current ? `0 0 12px ${level.color}50` : "none",
                          }}
                        >
                          {level.minXP <= userXP && !level.current ? (
                            <Check className="w-4 h-4" strokeWidth={2.5} />
                          ) : (
                            level.level
                          )}
                        </div>
                        <p
                          className="text-center text-[11px] font-semibold leading-tight"
                          style={{ color: level.current ? level.color : level.next ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.25)" }}
                        >
                          {level.label}
                        </p>
                        {level.current && (
                          <span className="mt-1 text-[9px] uppercase font-bold px-1.5 py-0.5 rounded-full"
                            style={{ background: `${level.color}20`, color: level.color }}>
                            You
                          </span>
                        )}
                        {level.next && (
                          <span className="mt-1 text-[9px] uppercase font-bold px-1.5 py-0.5 rounded-full"
                            style={{ background: "rgba(245,158,11,0.12)", color: "#F59E0B" }}>
                            Next
                          </span>
                        )}
                      </div>
                      {i < fanLevels.length - 1 && (
                        <div
                          className="flex-1 h-0.5 mt-5 mx-1 rounded-full min-w-[16px]"
                          style={{
                            background: fanLevels[i + 1].minXP <= userXP
                              ? "linear-gradient(90deg,#4F46E5,#A855F7)"
                              : "rgba(255,255,255,0.08)",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Next level perks */}
                <div className="mt-5 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="w-3.5 h-3.5 text-yellow-400" />
                    <p className="text-white/60 text-xs">
                      Unlock at <strong className="text-yellow-400">Level 13 — VIP Insider</strong> by earning{" "}
                      <strong className="text-white">{(nextLevelXP - userXP).toLocaleString()} more XP</strong>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {fanLevels.find((l) => l.next)?.perks.map((perk) => (
                      <span
                        key={perk}
                        className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(245,158,11,0.08)", color: "rgba(245,158,11,0.7)", border: "1px solid rgba(245,158,11,0.15)" }}
                      >
                        <Lock className="w-2.5 h-2.5" />
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── 6. Redemption History ──────────────────────────────────── */}
            <div ref={historyReveal.ref} className={historyReveal.visible ? "reveal" : "opacity-0"}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-white/40" />
                  <h2 className="text-white font-bold text-lg" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    Redemption History
                  </h2>
                </div>
                <button className="text-white/30 text-xs hover:text-white/60 transition-colors">View All</button>
              </div>

              <div
                className="rounded-xl border overflow-hidden"
                style={{ backgroundColor: "#121826", borderColor: "rgba(255,255,255,0.06)" }}
              >
                {redemptionHistory.map((item, i) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 px-5 py-4 hover:bg-white/[0.02] transition-colors"
                    style={{ borderBottom: i < redemptionHistory.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
                  >
                    <img src={item.img} alt={item.title} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold truncate">{item.title}</p>
                      <p className="text-white/30 text-xs">{item.date}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-white/50 text-sm font-medium">−{item.xpSpent} XP</p>
                    </div>
                    <span
                      className="flex-shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full"
                      style={
                        item.status === "delivered"
                          ? { background: "rgba(34,197,94,0.1)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.2)" }
                          : { background: "rgba(79,70,229,0.1)", color: "#818CF8", border: "1px solid rgba(79,70,229,0.2)" }
                      }
                    >
                      {item.status === "delivered" ? "✓ Delivered" : "⏳ Claimed"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom padding */}
            <div className="h-6" />
          </div>
        </div>
      </main>
    </div>
  );
}
