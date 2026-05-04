import { useState, useEffect, useRef } from "react";
import {
  Activity,
  Home,
  Compass,
  Users,
  Library,
  ListMusic,
  Gift,
  MessageCircle,
  Trophy,
  Settings,
  Bell,
  Search,
  Play,
  Heart,
  Share2,
  MessageSquare,
  MoreHorizontal,
  CheckCircle2,
  Crown,
  Zap,
  Flame,
  ChevronRight,
  SkipBack,
  SkipForward,
  Twitter,
  Instagram,
  Youtube,
  ExternalLink,
  Headphones,
  Music,
  Star,
  TrendingUp,
  Users2,
  DollarSign,
  Lock,
  Unlock,
  ChevronDown,
  Sparkles,
  ArrowUp,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────

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

const topTracks = [
  { id: 1, title: "City Lights", plays: "12.4M", duration: "3:47", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&q=80", xp: "+12 XP", peak: 1 },
  { id: 2, title: "Midnight Drive", plays: "9.8M", duration: "4:12", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&q=80", xp: "+10 XP", peak: 2 },
  { id: 3, title: "Falling Stars", plays: "7.2M", duration: "3:24", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&q=80", xp: "+10 XP", peak: 3 },
  { id: 4, title: "Aurora", plays: "5.9M", duration: "5:01", img: "https://images.unsplash.com/photo-1484876065684-b1cf1b0d50d7?w=120&q=80", xp: "+8 XP", peak: 4 },
  { id: 5, title: "Golden Hour", plays: "4.3M", duration: "3:58", img: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=120&q=80", xp: "+8 XP", peak: 7 },
];

const communityPosts = [
  {
    id: 1,
    type: "release",
    text: "Just dropped the visual for 'City Lights' 🎥 This one means everything to me. Shot in my hometown over 3 nights. Watch it and tell me what you feel.",
    media: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
    time: "2h ago",
    likes: "4.2K",
    comments: 318,
    shares: 92,
    xpEarned: "+15 XP",
    tag: "New Release",
  },
  {
    id: 2,
    type: "bts",
    text: "Recording session 3am, coffee #4, this hook has been living in my head for 6 months. I think we finally got it 🎹🔥 Fan Club gets to hear it first next week.",
    media: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80",
    time: "1d ago",
    likes: "6.8K",
    comments: 542,
    shares: 140,
    xpEarned: "+10 XP",
    tag: "Behind the Scenes",
  },
  {
    id: 3,
    type: "update",
    text: "Europe tour dates are LIVE. I saved a special row of seats at every venue for Fan Club members. First 48 hours exclusive access before public sale.",
    media: null,
    time: "3d ago",
    likes: "11.1K",
    comments: 893,
    shares: 320,
    xpEarned: "+5 XP",
    tag: "Announcement",
  },
];

const subscriptionTiers = [
  {
    id: "fan",
    label: "Fan",
    price: "$4.99",
    period: "/mo",
    color: "#4F46E5",
    glow: "rgba(79,70,229,0.25)",
    icon: Music,
    popular: false,
    perks: [
      "Early access to new tracks",
      "Exclusive fan-only posts",
      "+50 XP / month bonus",
      "Fan badge on profile",
    ],
  },
  {
    id: "superfan",
    label: "Super Fan",
    price: "$9.99",
    period: "/mo",
    color: "#A855F7",
    glow: "rgba(168,85,247,0.25)",
    icon: Crown,
    popular: true,
    perks: [
      "Everything in Fan tier",
      "Monthly exclusive content drop",
      "+150 XP / month bonus",
      "Name in credits",
      "Private Discord access",
    ],
  },
  {
    id: "vip",
    label: "VIP",
    price: "$24.99",
    period: "/mo",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.25)",
    icon: Star,
    popular: false,
    perks: [
      "Everything in Super Fan",
      "Virtual meet & greet access",
      "+400 XP / month bonus",
      "Merch drops (priority access)",
      "1-on-1 Q&A sessions",
      "Set list votes",
    ],
  },
];

const exclusiveRewards = [
  { title: "VIP Backstage Pass", desc: "Meet Luna Lane in person at her next show", tag: "Meet & Greet", icon: "🎤", xp: 5000, locked: false, progress: 82 },
  { title: "Signed Vinyl", desc: "Exclusive signed copy of City Lights EP", tag: "Merch Drop", icon: "🎵", xp: 3500, locked: false, progress: 65 },
  { title: "Studio Session", desc: "Watch Luna record her next album live via stream", tag: "Exclusive Access", icon: "🎹", xp: 8000, locked: true, progress: 31 },
  { title: "Unreleased Track", desc: "Listen to a never-released demo from the vault", tag: "Music Drop", icon: "🔒", xp: 6500, locked: true, progress: 45 },
];

const fanLeaderboard = [
  { rank: 1, name: "Maya K.", xp: "12,890 XP", avatar: "M", color: "#F59E0B", badge: "👑", tier: "Diamond" },
  { rank: 2, name: "Jordan T.", xp: "11,240 XP", avatar: "J", color: "#94A3B8", badge: "💎", tier: "Platinum" },
  { rank: 3, name: "Sam L.", xp: "9,800 XP", avatar: "S", color: "#CD7F32", badge: "🏅", tier: "Platinum" },
  { rank: 4, name: "Riley M.", xp: "8,650 XP", avatar: "R", color: "#4B5563", badge: "", tier: "Gold" },
  { rank: 5, name: "Casey P.", xp: "7,920 XP", avatar: "C", color: "#4B5563", badge: "", tier: "Gold" },
  { rank: 18, name: "You (Alex)", xp: "2,450 XP", avatar: "A", isYou: true, color: "#4F46E5", badge: "", tier: "Silver" },
];

const relatedArtists = [
  { name: "The Weekenders", genre: "Indie Pop", listeners: "2.1M", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80", xpMulti: "1.8x" },
  { name: "Aria Mae", genre: "Dream Pop", listeners: "1.4M", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80", xpMulti: "1.5x" },
  { name: "Northline", genre: "Shoegaze", listeners: "890K", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80", xpMulti: "1.2x" },
  { name: "Jaylon", genre: "R&B Soul", listeners: "3.2M", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80", xpMulti: "2.0x" },
];

// ─── Floating XP Badge ──────────────────────────────────────────────────────
function XpBadge({ value, delay, x }: { value: string; delay: number; x: number }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 3600 + delay);
    return () => clearInterval(id);
  }, [delay]);
  return (
    <div
      key={tick}
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, bottom: "20%", animation: `xpFloat 3.4s ease-out forwards`, opacity: 0 }}
    >
      <span className="text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/30 px-2 py-0.5 rounded-full whitespace-nowrap">
        {value}
      </span>
    </div>
  );
}

// ─── Scroll Reveal Hook ─────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function ArtistProfile() {
  const [activeNav, setActiveNav] = useState("Following");
  const [isFollowing, setIsFollowing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);
  const [likedTracks, setLikedTracks] = useState<Set<number>>(new Set([1, 3]));
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [selectedTier, setSelectedTier] = useState<string | null>("superfan");
  const [tipAmount, setTipAmount] = useState<number | null>(5);
  const [activeTab, setActiveTab] = useState("posts");
  const [showTipSuccess, setShowTipSuccess] = useState(false);

  const toggleLike = (id: number) => {
    setLikedTracks((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleTip = () => {
    setShowTipSuccess(true);
    setTimeout(() => setShowTipSuccess(false), 2400);
  };

  const statsReveal = useScrollReveal();
  const tracksReveal = useScrollReveal();
  const communityReveal = useScrollReveal();
  const supportReveal = useScrollReveal();
  const leaderReveal = useScrollReveal();
  const relatedReveal = useScrollReveal();

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
          50% { transform: scale(1.5); opacity: 0.4; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes revealUp {
          from { transform: translateY(24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes tipSuccess {
          0% { transform: scale(0.85); opacity: 0; }
          50% { transform: scale(1.04); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes heroIn {
          from { transform: translateY(16px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes progressFill {
          from { width: 0%; }
        }
        .reveal-up { animation: revealUp 0.55s cubic-bezier(0,0,0.2,1) both; }
        .progress-fill { animation: progressFill 1.2s cubic-bezier(.4,0,.2,1) both; }
        .hero-in { animation: heroIn 0.6s cubic-bezier(0,0,0.2,1) both; }
      `}</style>

      {/* ── Sidebar ─────────────────────────────────────────────────────── */}
      <aside
        className="w-56 flex-shrink-0 flex flex-col py-5 px-3 border-r"
        style={{ backgroundColor: "#0D1120", borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="flex items-center gap-2 px-3 mb-7">
          <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center" style={{ boxShadow: "0 0 16px rgba(79,70,229,0.6)" }}>
            <Activity className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-white font-bold text-base tracking-tight" style={{ fontFamily: "Satoshi, sans-serif" }}>SoundBridge</span>
        </div>

        <nav className="flex-1 flex flex-col gap-0.5">
          {navItems.map(({ icon: Icon, label }) => {
            const isActive = activeNav === label;
            return (
              <button
                key={label}
                onClick={() => setActiveNav(label)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 w-full text-left group ${
                  isActive ? "text-white" : "text-white/45 hover:text-white/80 hover:bg-white/[0.04]"
                }`}
                style={isActive ? { background: "linear-gradient(90deg,rgba(79,70,229,0.22) 0%,rgba(79,70,229,0.05) 100%)", boxShadow: "inset 2px 0 0 #4F46E5" } : {}}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-indigo-400" : "group-hover:text-white/60"}`} strokeWidth={isActive ? 2.5 : 2} />
                {label}
                {label === "Rewards" && <span className="ml-auto w-1.5 h-1.5 bg-green-400 rounded-full" style={{ animation: "livePulse 2s infinite" }} />}
              </button>
            );
          })}
        </nav>

        {/* User card */}
        <div className="mt-3 pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl" style={{ background: "rgba(79,70,229,0.08)" }}>
            <div className="relative w-8 h-8 flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&q=80" className="w-8 h-8 rounded-full object-cover" alt="avatar" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 border-2 rounded-full" style={{ borderColor: "#0D1120" }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white truncate">Alex Rivera</p>
              <p className="text-[10px] text-indigo-400 font-medium">Level 12 · Super Fan</p>
            </div>
            <Crown className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          </div>
        </div>

        {/* Mini player */}
        <div className="mt-3 px-2">
          <div className="rounded-xl p-2.5" style={{ background: "#121826", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center gap-2 mb-2">
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=40&q=80" className="w-8 h-8 rounded-lg object-cover flex-shrink-0" alt="" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-white truncate">City Lights</p>
                <p className="text-[10px] text-white/40 truncate">Luna Lane</p>
              </div>
            </div>
            <div className="w-full h-0.5 rounded-full mb-2" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div className="h-0.5 rounded-full" style={{ width: "38%", background: "linear-gradient(90deg,#4F46E5,#8B5CF6)" }} />
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="text-white/40 hover:text-white/80 transition-colors"><SkipBack className="w-3.5 h-3.5" /></button>
              <button
                className="w-7 h-7 rounded-full flex items-center justify-center transition-all"
                style={{ background: "linear-gradient(135deg,#4F46E5,#7C3AED)" }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying
                  ? <span className="flex gap-0.5"><span className="w-0.5 h-2.5 bg-white rounded-full" /><span className="w-0.5 h-2.5 bg-white rounded-full" /></span>
                  : <Play className="w-3 h-3 text-white ml-0.5" />}
              </button>
              <button className="text-white/40 hover:text-white/80 transition-colors"><SkipForward className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main Content ────────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto">

        {/* Top Bar */}
        <header
          className="sticky top-0 z-20 flex items-center justify-between px-6 h-14 border-b"
          style={{ backgroundColor: "rgba(11,15,25,0.85)", backdropFilter: "blur(16px)", borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-3 flex-1 max-w-xs">
            <div className="flex items-center gap-2 px-3 h-8 rounded-lg flex-1" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <Search className="w-3.5 h-3.5 text-white/30" />
              <span className="text-xs text-white/25">Search artists, tracks…</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "rgba(34,197,94,0.12)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.2)" }}>
              ⚡ 2,450 XP
            </span>
            <span className="text-xs text-orange-400 font-semibold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" /> 14d
            </span>
            <button className="relative w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)" }}>
              <Bell className="w-4 h-4 text-white/60" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-indigo-400 rounded-full" />
            </button>
          </div>
        </header>

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <div className="relative">
          {/* Cover Banner */}
          <div className="relative h-52 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1400&q=80"
              className="w-full h-full object-cover"
              alt="cover"
              style={{ filter: "brightness(0.55)" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(11,15,25,0) 30%, rgba(11,15,25,0.95) 100%)" }} />
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(79,70,229,0.18) 0%, transparent 60%)" }} />
          </div>

          {/* Artist info row */}
          <div className="px-8 pb-6" style={{ marginTop: "-56px", position: "relative", zIndex: 10 }}>
            <div className="flex items-end gap-5 mb-5">
              {/* Avatar */}
              <div className="relative flex-shrink-0 hero-in" style={{ animationDelay: "0ms" }}>
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                  className="w-24 h-24 rounded-2xl object-cover"
                  alt="Luna Lane"
                  style={{ border: "3px solid #0B0F19", boxShadow: "0 8px 32px rgba(0,0,0,0.6), 0 0 0 2px rgba(79,70,229,0.4)" }}
                />
                <span className="absolute -bottom-1 -right-1 text-sm">🎵</span>
              </div>

              {/* Name + meta */}
              <div className="flex-1 min-w-0 pb-1 hero-in" style={{ animationDelay: "80ms" }}>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-extrabold tracking-tight text-white" style={{ fontFamily: "Satoshi, sans-serif" }}>Luna Lane</h1>
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                </div>
                <div className="flex items-center gap-3 text-xs text-white/50 flex-wrap">
                  <span className="flex items-center gap-1"><Music className="w-3 h-3" /> Indie Pop · Dream Folk</span>
                  <span className="text-white/20">·</span>
                  <span className="flex items-center gap-1"><Headphones className="w-3 h-3" /> 4.8M monthly listeners</span>
                  <span className="text-white/20">·</span>
                  <span className="text-indigo-400 font-medium flex items-center gap-1"><Users2 className="w-3 h-3" /> 128K fans on SoundBridge</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-2 pb-1 hero-in" style={{ animationDelay: "160ms" }}>
                {[Twitter, Instagram, Youtube].map((Icon, i) => (
                  <button key={i} className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <Icon className="w-3.5 h-3.5 text-white/50 hover:text-white/80" />
                  </button>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <div className="flex items-center gap-3 flex-wrap hero-in" style={{ animationDelay: "240ms" }}>
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={isFollowing
                  ? { background: "rgba(79,70,229,0.12)", border: "1px solid rgba(79,70,229,0.4)", color: "#818CF8" }
                  : { background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }
                }
              >
                {isFollowing ? "✓ Following" : "+ Follow"}
              </button>

              <button
                className="px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg,#4F46E5,#7C3AED)", boxShadow: "0 4px 20px rgba(79,70,229,0.35)" }}
              >
                💜 Support Artist
              </button>

              <button
                className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.35)", color: "#C084FC" }}
              >
                <span className="flex items-center gap-1.5"><Crown className="w-3.5 h-3.5" /> Join Fan Club</span>
              </button>

              <button className="w-8 h-8 rounded-lg flex items-center justify-center ml-1"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <MoreHorizontal className="w-4 h-4 text-white/40" />
              </button>
            </div>

            {/* Top Supporters preview */}
            <div className="mt-4 flex items-center gap-3 hero-in" style={{ animationDelay: "320ms" }}>
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&q=80",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80",
                ].map((src, i) => (
                  <img key={i} src={src} className="w-6 h-6 rounded-full object-cover ring-2" style={{ ringColor: "#0B0F19" } as React.CSSProperties} alt="" />
                ))}
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold ring-2 ring-[#0B0F19]" style={{ background: "#1A2236", color: "#94A3B8" }}>+9K</div>
              </div>
              <span className="text-xs text-white/40">
                <span className="text-white/70 font-medium">Maya K., Jordan T.</span> and <span className="text-indigo-400 font-semibold">9,248 others</span> are top supporters
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.2)" }}>
                🏆 Top Fan Community
              </span>
            </div>
          </div>
        </div>

        {/* ── Stats Strip ──────────────────────────────────────────────── */}
        <div
          ref={statsReveal.ref}
          className="mx-6 mb-6 grid grid-cols-4 gap-3"
          style={statsReveal.visible ? { animation: "revealUp 0.5s ease both" } : { opacity: 0 }}
        >
          {[
            { icon: Headphones, label: "Total Streams", value: "48.2M", change: "+12%", color: "#4F46E5" },
            { icon: Users2, label: "Monthly Listeners", value: "4.8M", change: "+8%", color: "#8B5CF6" },
            { icon: Crown, label: "Top Supporters", value: "9,248", change: "+340 this week", color: "#F59E0B" },
            { icon: Gift, label: "Rewards Given", value: "$18,400", change: "All time", color: "#22C55E" },
          ].map(({ icon: Icon, label, value, change, color }) => (
            <div key={label}
              className="rounded-2xl p-4 flex items-start gap-3 transition-all duration-200 hover:-translate-y-1"
              style={{ background: "#121826", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                <Icon className="w-4 h-4" style={{ color }} />
              </div>
              <div>
                <p className="text-[10px] text-white/40 mb-0.5 uppercase tracking-wider font-medium">{label}</p>
                <p className="text-lg font-bold text-white" style={{ fontFamily: "Satoshi, sans-serif" }}>{value}</p>
                <p className="text-[10px] text-green-400 font-medium">{change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Content Grid ─────────────────────────────────────────────── */}
        <div className="px-6 pb-8 grid grid-cols-3 gap-5">

          {/* Left + Center (2/3) */}
          <div className="col-span-2 flex flex-col gap-5">

            {/* Top Tracks */}
            <div
              ref={tracksReveal.ref}
              className="rounded-2xl overflow-hidden"
              style={tracksReveal.visible ? { animation: "revealUp 0.5s ease both", background: "#121826", border: "1px solid rgba(255,255,255,0.06)" } : { opacity: 0 }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <h2 className="font-bold text-white" style={{ fontFamily: "Satoshi, sans-serif" }}>Top Tracks</h2>
                <button className="text-xs text-indigo-400 flex items-center gap-1 hover:text-indigo-300 transition-colors">
                  See all <ChevronRight className="w-3 h-3" />
                </button>
              </div>
              <div className="p-2">
                {topTracks.map((track, idx) => (
                  <div
                    key={track.id}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group cursor-pointer"
                    style={{ background: hoveredTrack === track.id ? "rgba(79,70,229,0.07)" : "transparent" }}
                    onMouseEnter={() => setHoveredTrack(track.id)}
                    onMouseLeave={() => setHoveredTrack(null)}
                  >
                    {/* Index / play */}
                    <div className="w-6 text-center flex-shrink-0">
                      {hoveredTrack === track.id
                        ? <Play className="w-4 h-4 text-indigo-400 mx-auto" />
                        : <span className="text-xs text-white/30 font-medium">{idx + 1}</span>}
                    </div>

                    <img src={track.img} className="w-9 h-9 rounded-lg object-cover flex-shrink-0" alt={track.title} style={{ boxShadow: hoveredTrack === track.id ? "0 0 12px rgba(79,70,229,0.3)" : "none" }} />

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{track.title}</p>
                      <p className="text-xs text-white/35">{track.plays} streams</p>
                    </div>

                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.2)" }}>
                      {track.xp}
                    </span>

                    <button
                      className="p-1.5 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                      onClick={() => toggleLike(track.id)}
                    >
                      <Heart className={`w-3.5 h-3.5 transition-colors ${likedTracks.has(track.id) ? "text-rose-400 fill-rose-400" : "text-white/30 hover:text-rose-400"}`} />
                    </button>

                    <span className="text-xs text-white/30 w-8 text-right flex-shrink-0">{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Posts */}
            <div ref={communityReveal.ref} style={communityReveal.visible ? { animation: "revealUp 0.55s ease both" } : { opacity: 0 }}>
              {/* Tabs */}
              <div className="flex items-center gap-1 mb-3">
                {["posts", "releases", "events"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="px-4 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all duration-200"
                    style={activeTab === tab
                      ? { background: "rgba(79,70,229,0.15)", color: "#818CF8", border: "1px solid rgba(79,70,229,0.3)" }
                      : { background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.4)", border: "1px solid transparent" }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                {communityPosts.map((post) => (
                  <div
                    key={post.id}
                    className="rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "#121826", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
                  >
                    <div className="p-4">
                      {/* Post header */}
                      <div className="flex items-start gap-3 mb-3">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80" className="w-9 h-9 rounded-full object-cover flex-shrink-0" alt="" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-white">Luna Lane</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                              style={{
                                background: post.type === "release" ? "rgba(79,70,229,0.12)" : post.type === "bts" ? "rgba(168,85,247,0.12)" : "rgba(245,158,11,0.12)",
                                color: post.type === "release" ? "#818CF8" : post.type === "bts" ? "#C084FC" : "#F59E0B",
                                border: `1px solid ${post.type === "release" ? "rgba(79,70,229,0.25)" : post.type === "bts" ? "rgba(168,85,247,0.25)" : "rgba(245,158,11,0.25)"}`
                              }}>
                              {post.tag}
                            </span>
                          </div>
                          <p className="text-[10px] text-white/35">{post.time}</p>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.2)" }}>
                          {post.xpEarned}
                        </span>
                      </div>

                      <p className="text-sm text-white/75 leading-relaxed mb-3">{post.text}</p>

                      {post.media && (
                        <div className="rounded-xl overflow-hidden mb-3" style={{ maxHeight: "200px" }}>
                          <img src={post.media} className="w-full h-full object-cover" style={{ maxHeight: "200px" }} alt="" />
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="px-4 py-3 flex items-center gap-4 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                      <button
                        className="flex items-center gap-1.5 text-xs transition-colors group"
                        onClick={() => setLikedPosts((prev) => { const n = new Set(prev); n.has(post.id) ? n.delete(post.id) : n.add(post.id); return n; })}
                      >
                        <Heart className={`w-3.5 h-3.5 transition-colors ${likedPosts.has(post.id) ? "text-rose-400 fill-rose-400" : "text-white/35 group-hover:text-rose-400"}`} />
                        <span className={likedPosts.has(post.id) ? "text-rose-400" : "text-white/35"}>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-xs text-white/35 hover:text-white/70 transition-colors">
                        <MessageSquare className="w-3.5 h-3.5" /> {post.comments}
                      </button>
                      <button className="flex items-center gap-1.5 text-xs text-white/35 hover:text-white/70 transition-colors">
                        <Share2 className="w-3.5 h-3.5" /> {post.shares}
                      </button>
                      <div className="flex-1" />
                      <button className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                        💜 Support
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (1/3) */}
          <div className="flex flex-col gap-5">

            {/* Support / Tip Box */}
            <div
              ref={supportReveal.ref}
              className="rounded-2xl overflow-hidden"
              style={supportReveal.visible
                ? { animation: "revealUp 0.5s ease both", background: "#121826", border: "1px solid rgba(255,255,255,0.06)" }
                : { opacity: 0 }}
            >
              <div className="p-4 border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "linear-gradient(135deg,rgba(79,70,229,0.1) 0%,rgba(168,85,247,0.06) 100%)" }}>
                <div className="flex items-center gap-2 mb-0.5">
                  <Zap className="w-4 h-4 text-indigo-400" />
                  <h3 className="font-bold text-white text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>Tip Luna Lane</h3>
                </div>
                <p className="text-xs text-white/40">100% goes directly to the artist</p>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[1, 5, 10, 25].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setTipAmount(amt)}
                      className="py-2 rounded-xl text-xs font-bold transition-all duration-150"
                      style={tipAmount === amt
                        ? { background: "rgba(79,70,229,0.2)", border: "1px solid rgba(79,70,229,0.5)", color: "#818CF8" }
                        : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleTip}
                  className="w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-[1.02]"
                  style={{ background: "linear-gradient(135deg,#4F46E5,#7C3AED)", boxShadow: "0 4px 20px rgba(79,70,229,0.35)" }}
                >
                  {showTipSuccess ? "💜 Sent!" : `Send $${tipAmount} Tip · +20 XP`}
                </button>
                {showTipSuccess && (
                  <p className="text-center text-xs text-green-400 mt-2 font-medium" style={{ animation: "tipSuccess 0.4s ease" }}>
                    🎉 Luna will love this! +20 XP earned
                  </p>
                )}
              </div>
            </div>

            {/* Subscription Tiers */}
            <div className="rounded-2xl overflow-hidden" style={{ background: "#121826", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <h3 className="font-bold text-white text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>🎵 Join Fan Club</h3>
                <p className="text-xs text-white/40 mt-0.5">Unlock exclusive perks & rewards</p>
              </div>
              <div className="p-3 flex flex-col gap-2">
                {subscriptionTiers.map((tier) => {
                  const Icon = tier.icon;
                  const isSelected = selectedTier === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTier(tier.id)}
                      className="w-full text-left rounded-xl p-3 transition-all duration-200"
                      style={isSelected
                        ? { background: `${tier.color}14`, border: `1px solid ${tier.color}55`, boxShadow: `0 4px 16px ${tier.glow}` }
                        : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${tier.color}20` }}>
                            <Icon className="w-3.5 h-3.5" style={{ color: tier.color }} />
                          </div>
                          <span className="text-sm font-bold text-white">{tier.label}</span>
                          {tier.popular && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(79,70,229,0.2)", color: "#818CF8", border: "1px solid rgba(79,70,229,0.3)" }}>
                              POPULAR
                            </span>
                          )}
                        </div>
                        <span className="text-sm font-bold" style={{ color: tier.color }}>{tier.price}<span className="text-xs font-normal text-white/30">{tier.period}</span></span>
                      </div>
                      {isSelected && (
                        <ul className="space-y-1 mb-2">
                          {tier.perks.map((perk) => (
                            <li key={perk} className="flex items-center gap-1.5 text-xs text-white/60">
                              <span className="w-3 h-3 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${tier.color}20` }}>
                                <span className="w-1 h-1 rounded-full" style={{ background: tier.color, display: "block" }} />
                              </span>
                              {perk}
                            </li>
                          ))}
                        </ul>
                      )}
                      {isSelected && (
                        <button
                          className="w-full py-2 rounded-lg text-xs font-bold text-white transition-all hover:scale-[1.02]"
                          style={{ background: `linear-gradient(135deg, ${tier.color}, ${tier.color}bb)`, boxShadow: `0 3px 12px ${tier.glow}` }}
                        >
                          Subscribe · {tier.price}/mo
                        </button>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Exclusive Rewards */}
            <div className="rounded-2xl overflow-hidden" style={{ background: "#121826", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <h3 className="font-bold text-white text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>🏆 Exclusive Rewards</h3>
                <p className="text-xs text-white/40 mt-0.5">Earn XP to unlock</p>
              </div>
              <div className="p-3 flex flex-col gap-2">
                {exclusiveRewards.map((reward) => (
                  <div key={reward.title}
                    className="rounded-xl p-3 transition-all duration-200"
                    style={{ background: reward.locked ? "rgba(255,255,255,0.02)" : "rgba(79,70,229,0.06)", border: `1px solid ${reward.locked ? "rgba(255,255,255,0.05)" : "rgba(79,70,229,0.2)"}` }}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-base flex-shrink-0">{reward.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-semibold text-white truncate">{reward.title}</p>
                          {reward.locked ? <Lock className="w-3 h-3 text-white/25 flex-shrink-0" /> : <Unlock className="w-3 h-3 text-indigo-400 flex-shrink-0" />}
                        </div>
                        <p className="text-[10px] text-white/35 truncate">{reward.desc}</p>
                      </div>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: "rgba(79,70,229,0.1)", color: "#818CF8", border: "1px solid rgba(79,70,229,0.2)" }}>
                        {(reward.xp / 1000).toFixed(1)}K XP
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div
                        className="h-1 rounded-full progress-fill"
                        style={{
                          width: `${reward.progress}%`,
                          background: reward.locked ? "rgba(79,70,229,0.3)" : "linear-gradient(90deg,#4F46E5,#22C55E)"
                        }}
                      />
                    </div>
                    <p className="text-[9px] text-white/25 mt-1">{reward.progress}% — {Math.round(reward.xp * (1 - reward.progress / 100))} XP remaining</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Fan Leaderboard ───────────────────────────────────────────── */}
        <div
          ref={leaderReveal.ref}
          className="mx-6 mb-5 rounded-2xl overflow-hidden"
          style={leaderReveal.visible
            ? { animation: "revealUp 0.5s ease both", background: "#121826", border: "1px solid rgba(255,255,255,0.06)" }
            : { opacity: 0 }}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "linear-gradient(135deg,rgba(79,70,229,0.08) 0%,transparent 100%)" }}>
            <div>
              <h2 className="font-bold text-white" style={{ fontFamily: "Satoshi, sans-serif" }}>🏆 Fan Leaderboard</h2>
              <p className="text-xs text-white/40 mt-0.5">Top supporters by XP this month</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-indigo-400">You're #18 this month</p>
              <p className="text-[10px] text-white/35">Top 10 unlocks exclusive rewards</p>
            </div>
          </div>

          {/* You're close banner */}
          <div className="mx-4 mt-3 mb-1 px-3 py-2 rounded-xl flex items-center gap-2"
            style={{ background: "rgba(79,70,229,0.08)", border: "1px solid rgba(79,70,229,0.2)" }}>
            <TrendingUp className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
            <p className="text-xs text-white/70">
              <span className="text-white font-semibold">Only 5,430 XP</span> separates you from Top 10 — listen more, tip, or join Fan Club to climb!
            </p>
            <button className="ml-auto flex items-center gap-1 text-[10px] font-semibold text-indigo-400 hover:text-indigo-300 transition-colors whitespace-nowrap">
              Boost <ArrowUp className="w-3 h-3" />
            </button>
          </div>

          <div className="px-4 pb-4">
            <div className="grid grid-cols-2 gap-2 mt-2">
              {fanLeaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200"
                  style={{
                    background: (entry as any).isYou ? "rgba(79,70,229,0.1)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${(entry as any).isYou ? "rgba(79,70,229,0.3)" : "rgba(255,255,255,0.05)"}`,
                  }}
                >
                  <span className="w-6 text-center text-xs font-bold flex-shrink-0"
                    style={{ color: entry.rank === 1 ? "#F59E0B" : entry.rank === 2 ? "#94A3B8" : entry.rank === 3 ? "#CD7F32" : "rgba(255,255,255,0.3)" }}>
                    {entry.badge || `#${entry.rank}`}
                  </span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: `${entry.color}22`, color: entry.color, border: `1px solid ${entry.color}44` }}
                  >
                    {entry.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white truncate">{entry.name}</p>
                    <p className="text-[10px] text-white/35">{entry.xp}</p>
                  </div>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0"
                    style={{
                      background: entry.tier === "Diamond" ? "rgba(59,130,246,0.1)" : entry.tier === "Platinum" ? "rgba(168,85,247,0.1)" : "rgba(245,158,11,0.1)",
                      color: entry.tier === "Diamond" ? "#3B82F6" : entry.tier === "Platinum" ? "#A855F7" : "#F59E0B"
                    }}>
                    {entry.tier}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Related Artists ───────────────────────────────────────────── */}
        <div
          ref={relatedReveal.ref}
          className="mx-6 mb-8"
          style={relatedReveal.visible ? { animation: "revealUp 0.5s ease both" } : { opacity: 0 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-white" style={{ fontFamily: "Satoshi, sans-serif" }}>Fans also support</h2>
            <button className="text-xs text-indigo-400 flex items-center gap-1 hover:text-indigo-300 transition-colors">
              Browse all <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {relatedArtists.map((artist) => (
              <div
                key={artist.name}
                className="rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 cursor-pointer group"
                style={{ background: "#121826", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
              >
                <div className="relative mb-3">
                  <img src={artist.avatar} className="w-14 h-14 rounded-2xl object-cover group-hover:ring-2 transition-all" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.4)" } as React.CSSProperties} alt={artist.name} />
                  <span className="absolute -bottom-1 -right-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.12)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.2)" }}>
                    {artist.xpMulti}
                  </span>
                </div>
                <p className="text-xs font-semibold text-white mb-0.5 truncate w-full">{artist.name}</p>
                <p className="text-[10px] text-white/35 mb-2">{artist.genre}</p>
                <p className="text-[10px] text-white/25 mb-3">{artist.listeners} listeners</p>
                <button
                  className="w-full py-1.5 rounded-lg text-[10px] font-semibold transition-all duration-200 hover:scale-105"
                  style={{ background: "rgba(79,70,229,0.12)", border: "1px solid rgba(79,70,229,0.25)", color: "#818CF8" }}
                >
                  + Follow
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
