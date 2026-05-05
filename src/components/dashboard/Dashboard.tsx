import { useState, useEffect } from "react";
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
  Search,
  Bell,
  Mail,
  ChevronDown,
  Play,
  SkipBack,
  SkipForward,
  Heart,
  MoreHorizontal,
  Share2,
  MessageSquare,
  Flame,
  Zap,
  Crown,
  Sparkles,
  ChevronRight,
  Radio,
  Headphones,
  Check,
  ArrowUp,
} from "lucide-react";

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

const topArtists = [
  { slug: "luna-lane", name: "Luna Lane", xp: "3.2K XP", multiplier: "2.0x", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80", isOnline: true },
  { slug: "the-weekenders", name: "The Weekenders", xp: "2.1K XP", multiplier: "1.8x", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80", isOnline: false },
  { slug: "jaylon", name: "Jaylon", xp: "1.8K XP", multiplier: "1.5x", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&q=80", isOnline: true },
  { slug: "northline", name: "Northline", xp: "1.2K XP", multiplier: "1.2x", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80", isOnline: false },
  { slug: "aria-mae", name: "Aria Mae", xp: "980 XP", multiplier: "1.0x", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&q=80", isOnline: false },
];

const xpChallenges = [
  { icon: Headphones, label: "Listen to 10 tracks", progress: 7, total: 10, reward: "+50 XP", color: "#4F46E5", nearComplete: true },
  { icon: Heart, label: "Support an artist", progress: 1, total: 2, reward: "+100 XP", color: "#8B5CF6", nearComplete: false },
  { icon: MessageSquare, label: "Comment on 3 posts", progress: 2, total: 3, reward: "+30 XP", color: "#06B6D4", nearComplete: true },
];

const recentTracks = [
  { title: "Midnight Drive", artist: "The Weekenders", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&q=80", progress: 42, duration: "3:52" },
  { title: "Falling Stars", artist: "Luna Lane", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&q=80", progress: 0, duration: "3:24" },
  { title: "Better Days", artist: "Jaylon", img: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=120&q=80", progress: 0, duration: "4:10" },
  { title: "Echoes", artist: "Northline", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&q=80", progress: 0, duration: "3:38" },
  { title: "Lost in Mind", artist: "Aria Mae", img: "https://images.unsplash.com/photo-1484876065684-b1cf1b0d50d7?w=120&q=80", progress: 0, duration: "5:01" },
];

const leaderboard = [
  { rank: 1, name: "Maya", xp: "2,890 XP", avatar: "M", color: "#F59E0B" },
  { rank: 2, name: "Jordan", xp: "2,680 XP", avatar: "J", color: "#6B7280" },
  { rank: 3, name: "Sam", xp: "2,540 XP", avatar: "S", color: "#CD7C2F" },
  { rank: 4, name: "Taylor", xp: "2,480 XP", avatar: "T", color: "#4B5563" },
  { rank: 5, name: "Riley", xp: "2,460 XP", avatar: "R", color: "#4B5563" },
  { rank: 12, name: "You (Alex)", xp: "2,450 XP", avatar: "A", isYou: true, color: "#4F46E5" },
];

const rewards = [
  {
    title: "VIP Backstage Pass",
    artist: "Luna Lane",
    img: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=200&q=80",
    xpRequired: 3000,
    xpCurrent: 2450,
    tag: "🎤 Meet & Greet",
    exclusive: true,
  },
  {
    title: "Early Album Access",
    artist: "The Weekenders",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&q=80",
    xpRequired: 2800,
    xpCurrent: 2450,
    tag: "🎵 Music Drop",
    exclusive: false,
  },
];

const feedItems = [
  {
    id: 1,
    artist: "Luna Lane",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80",
    action: "dropped a new track",
    time: "2h ago",
    trackTitle: "Falling Stars",
    trackArtist: "Luna Lane",
    trackImg: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=60&q=80",
    duration: "3:24",
    likes: "1.2K",
    comments: 320,
    shares: 85,
    xpEarned: "+10 XP",
    verified: true,
    isLive: false,
    isActivity: false,
    isCommunity: false,
    friendAvatars: [] as string[],
  },
  {
    id: 2,
    isActivity: true,
    isLive: false,
    isCommunity: false,
    action: "You supported Jaylon",
    time: "3h ago",
    trackTitle: "Better Days",
    trackArtist: "Jaylon",
    trackImg: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=60&q=80",
    xpEarned: "+20 XP",
    artist: "",
    avatar: "",
    duration: "",
    likes: "",
    comments: 0,
    shares: 0,
    verified: false,
    friendAvatars: [] as string[],
  },
  {
    id: 3,
    artist: "The Weekenders",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80",
    action: "went live",
    time: "5h ago",
    isLive: true,
    isActivity: false,
    isCommunity: false,
    verified: true,
    trackTitle: "",
    trackArtist: "",
    trackImg: "",
    duration: "",
    likes: "",
    comments: 0,
    shares: 0,
    xpEarned: "",
    friendAvatars: [] as string[],
  },
  {
    id: 4,
    isCommunity: true,
    isActivity: false,
    isLive: false,
    action: "3 friends liked",
    trackTitle: "Neon Lights",
    trackArtist: "Aria Mae",
    trackImg: "https://images.unsplash.com/photo-1484876065684-b1cf1b0d50d7?w=60&q=80",
    time: "6h ago",
    friendAvatars: [
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80",
    ],
    artist: "",
    avatar: "",
    duration: "",
    likes: "",
    comments: 0,
    shares: 0,
    xpEarned: "",
    verified: false,
  },
];

const communityActivity = [
  { icon: "🎵", text: "Luna Lane just dropped", highlight: "\"City Lights\" EP", time: "just now", color: "#4F46E5" },
  { icon: "💜", text: "Maya supported", highlight: "The Weekenders", time: "4m ago", color: "#8B5CF6" },
  { icon: "🔥", text: "Trending challenge:", highlight: "#MidnightChallenge", time: "12m ago", color: "#F59E0B" },
  { icon: "🎤", text: "Jaylon going live in", highlight: "30 minutes", time: "18m ago", color: "#22C55E" },
];

// ─── XP Floating Badge ───────────────────────────────────────────────────────
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

const followingArtists = [
  {
    slug: "luna-lane",
    name: "Luna Lane",
    genre: "Indie Pop · Dream Folk",
    listeners: "4.8M monthly listeners",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    xpMulti: "2.0x",
    supporters: "128K",
    isNew: true,
    latestRelease: "City Lights",
    tier: "Super Fan",
    tierColor: "#A855F7",
  },
  {
    slug: "the-weekenders",
    name: "The Weekenders",
    genre: "Indie Pop",
    listeners: "2.1M monthly listeners",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    xpMulti: "1.8x",
    supporters: "44K",
    isNew: false,
    latestRelease: "Midnight Drive",
    tier: "Fan",
    tierColor: "#4F46E5",
  },
  {
    slug: "jaylon",
    name: "Jaylon",
    genre: "R&B Soul",
    listeners: "3.2M monthly listeners",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    cover: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80",
    xpMulti: "1.5x",
    supporters: "91K",
    isNew: true,
    latestRelease: "Better Days",
    tier: "Fan",
    tierColor: "#4F46E5",
  },
  {
    slug: "northline",
    name: "Northline",
    genre: "Shoegaze",
    listeners: "890K monthly listeners",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    xpMulti: "1.2x",
    supporters: "18K",
    isNew: false,
    latestRelease: "Echoes",
    tier: null,
    tierColor: "",
  },
  {
    slug: "aria-mae",
    name: "Aria Mae",
    genre: "Dream Pop",
    listeners: "1.4M monthly listeners",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    cover: "https://images.unsplash.com/photo-1484876065684-b1cf1b0d50d7?w=800&q=80",
    xpMulti: "1.0x",
    supporters: "32K",
    isNew: false,
    latestRelease: "Lost in Mind",
    tier: null,
    tierColor: "",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Home");
  const [isPlaying, setIsPlaying] = useState(true);
  const [feedTab, setFeedTab] = useState("All");
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set(["Falling Stars", "Lost in Mind"]));
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);
  const [claimedChallenge, setClaimedChallenge] = useState<string | null>(null);

  const toggleLike = (title: string) => {
    setLikedTracks((prev) => {
      const next = new Set(prev);
      next.has(title) ? next.delete(title) : next.add(title);
      return next;
    });
  };

  const circleR = 42;
  const circleC = 2 * Math.PI * circleR;
  const circleProgress = circleC * (1 - 0.74);

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
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(79,70,229,0); }
          50% { box-shadow: 0 0 0 6px rgba(79,70,229,0.14); }
        }
        @keyframes streakFlicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes slideInUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes progressFill {
          from { width: 0%; }
        }
        @keyframes livePulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        .progress-animate { animation: progressFill 1.2s cubic-bezier(.4,0,.2,1) both; }
      `}</style>

      {/* ── Sidebar ─────────────────────────────────────────────────────── */}
      <aside
        className="w-56 flex-shrink-0 flex flex-col py-5 px-3 border-r"
        style={{ backgroundColor: "#0D1120", borderColor: "rgba(255,255,255,0.05)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-3 mb-7">
          <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center" style={{ boxShadow: "0 0 16px rgba(79,70,229,0.6)" }}>
            <Activity className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-white font-bold text-base tracking-tight" style={{ fontFamily: "Satoshi, sans-serif" }}>SoundBridge</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 flex flex-col gap-0.5">
          {navItems.map(({ icon: Icon, label }) => {
            const isActive = activeNav === label;
            return (
              <button
                key={label}
                onClick={() => {
                  setActiveNav(label);
                  if (label === "Rewards") navigate("/rewards");
                }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 w-full text-left group ${
                  isActive ? "text-white" : "text-white/45 hover:text-white/80 hover:bg-white/[0.04]"
                }`}
                style={isActive ? { background: "linear-gradient(90deg,rgba(79,70,229,0.22) 0%,rgba(79,70,229,0.05) 100%)", boxShadow: "inset 2px 0 0 #4F46E5" } : {}}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 transition-colors duration-200 ${isActive ? "text-indigo-400" : "group-hover:text-white/60"}`} strokeWidth={isActive ? 2.5 : 2} />
                {label}
                {label === "Rewards" && <span className="ml-auto w-1.5 h-1.5 bg-green-400 rounded-full" style={{ animation: "livePulse 2s infinite" }} />}
              </button>
            );
          })}
        </nav>

        {/* User identity */}
        <div className="mt-4 rounded-xl p-3 border mb-3" style={{ backgroundColor: "#111827", borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&q=80" className="w-9 h-9 rounded-full object-cover border-2 border-indigo-500/60" alt="user" />
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
            <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=40&q=80" className="w-9 h-9 rounded-lg object-cover" alt="track" />
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-semibold truncate">Falling Stars</p>
              <p className="text-white/40 text-xs truncate">Luna Lane</p>
            </div>
            <button onClick={() => toggleLike("Falling Stars")} style={{ color: likedTracks.has("Falling Stars") ? "#F43F5E" : "rgba(255,255,255,0.3)" }}>
              <Heart className="w-3.5 h-3.5" fill={likedTracks.has("Falling Stars") ? "currentColor" : "none"} />
            </button>
          </div>
          <div className="relative h-1 bg-white/10 rounded-full mb-2 cursor-pointer group">
            <div className="absolute left-0 top-0 h-full bg-indigo-500 rounded-full group-hover:bg-indigo-400 transition-colors" style={{ width: "42%" }} />
            <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ left: "calc(42% - 5px)" }} />
          </div>
          <div className="flex items-center justify-between text-white/30 text-[10px] mb-2"><span>1:24</span><span>3:24</span></div>
          <div className="flex items-center justify-center gap-4">
            <button className="text-white/40 hover:text-white/70 transition-colors"><SkipBack className="w-3.5 h-3.5" /></button>
            <button onClick={() => setIsPlaying(!isPlaying)} className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-indigo-100 transition-colors" style={{ boxShadow: "0 0 12px rgba(255,255,255,0.2)" }}>
              {isPlaying ? <span className="flex gap-0.5"><span className="w-0.5 h-2.5 bg-[#0B0F19] rounded-sm" /><span className="w-0.5 h-2.5 bg-[#0B0F19] rounded-sm" /></span> : <Play className="w-3 h-3 text-[#0B0F19] ml-0.5" fill="#0B0F19" />}
            </button>
            <button className="text-white/40 hover:text-white/70 transition-colors"><SkipForward className="w-3.5 h-3.5" /></button>
          </div>
        </div>
      </aside>

      {/* ── Main ────────────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center gap-4 px-6 py-3 border-b flex-shrink-0" style={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "rgba(11,15,25,0.85)", backdropFilter: "blur(12px)" }}>
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
            <input type="text" placeholder="Search artists, songs, albums..." className="w-full bg-white/[0.04] border border-white/[0.07] rounded-xl pl-9 pr-4 py-2 text-sm text-white/70 placeholder:text-white/25 outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all" />
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer hover:border-green-500/40 transition-colors" style={{ backgroundColor: "rgba(34,197,94,0.08)", borderColor: "rgba(34,197,94,0.2)" }}>
              <Zap className="w-3.5 h-3.5 text-green-400" fill="currentColor" />
              <span className="text-green-400 text-sm font-bold">2,450 XP</span>
              <ChevronDown className="w-3 h-3 text-white/30" />
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border" style={{ backgroundColor: "rgba(249,115,22,0.1)", borderColor: "rgba(249,115,22,0.25)", animation: "streakFlicker 2.5s ease-in-out infinite" }}>
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-orange-400 text-xs font-bold">7</span>
            </div>
            <button className="relative w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 bg-red-500 rounded-full text-[9px] font-bold text-white flex items-center justify-center px-0.5">8</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors"><Mail className="w-4 h-4" /></button>
            <button className="flex items-center gap-1.5 group">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&q=80" className="w-8 h-8 rounded-full object-cover border-2 border-indigo-500/50 group-hover:border-indigo-400 transition-colors" alt="user" />
              <ChevronDown className="w-3.5 h-3.5 text-white/30" />
            </button>
          </div>
        </header>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">

          {/* ── Following Page ─────────────────────────────────────────── */}
          {activeNav === "Following" && (
            <div className="p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "Satoshi, sans-serif", letterSpacing: "-0.02em" }}>Following</h1>
                <p className="text-white/40 text-sm">Artists you support — click any to visit their profile</p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {followingArtists.map((artist) => (
                  <div
                    key={artist.slug}
                    className="relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "#121826", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
                    onClick={() => navigate(`/artist/${artist.slug}`)}
                  >
                    {/* Cover strip */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                      <img src={artist.cover} className="w-full h-full object-cover" alt="" style={{ filter: "blur(2px)" }} />
                    </div>
                    <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(18,24,38,0.97) 40%, rgba(18,24,38,0.6) 100%)" }} />

                    {/* Content */}
                    <div className="relative flex items-center gap-4 px-5 py-4">
                      <img
                        src={artist.avatar}
                        className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                        alt={artist.name}
                        style={{ border: "2px solid rgba(79,70,229,0.3)", boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-base font-bold text-white" style={{ fontFamily: "Satoshi, sans-serif" }}>{artist.name}</span>
                          {artist.isNew && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.12)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.25)" }}>NEW DROP</span>
                          )}
                          {artist.tier && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: `${artist.tierColor}18`, color: artist.tierColor, border: `1px solid ${artist.tierColor}40` }}>
                              {artist.tier}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-white/40 mb-1">{artist.genre} · {artist.listeners}</p>
                        <p className="text-xs text-white/30">Latest: <span className="text-white/60 font-medium">{artist.latestRelease}</span></p>
                      </div>

                      <div className="flex items-center gap-5 flex-shrink-0">
                        <div className="text-center hidden sm:block">
                          <p className="text-[10px] text-white/30 uppercase tracking-wider">Supporters</p>
                          <p className="text-sm font-bold text-white">{artist.supporters}</p>
                        </div>
                        <div className="text-center hidden sm:block">
                          <p className="text-[10px] text-white/30 uppercase tracking-wider">XP Multi</p>
                          <p className="text-sm font-bold" style={{ color: "#22C55E" }}>{artist.xpMulti}</p>
                        </div>
                        <button
                          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 group-hover:scale-105"
                          style={{ background: "linear-gradient(135deg,#4F46E5,#7C3AED)", boxShadow: "0 4px 16px rgba(79,70,229,0.35)" }}
                          onClick={(e) => { e.stopPropagation(); navigate(`/artist/${artist.slug}`); }}
                        >
                          View Profile
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeNav !== "Following" ? (
            <div className="flex gap-5 p-5">

            {/* ── Center Column ──────────────────────────────────────────── */}
            <div className="flex-1 flex flex-col gap-5 min-w-0">

              {/* Hero / Progress Card */}
              <div
                className="relative rounded-2xl p-6 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #111827 0%, #1e1b4b 35%, #2d1b69 65%, #1a1040 100%)",
                  border: "1px solid rgba(79,70,229,0.25)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 78% 50%, rgba(79,70,229,0.28) 0%, transparent 65%)" }} />
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <XpBadge value="+10 XP" delay={0} x={68} />
                  <XpBadge value="+25 XP" delay={1700} x={79} />
                  <XpBadge value="+5 XP" delay={900} x={74} />
                </div>
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white/40 text-xs font-medium uppercase tracking-widest">Welcome back</span>
                      <span className="px-1.5 py-0.5 rounded bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 text-[10px] font-semibold">Day 7 Streak 🔥</span>
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "Satoshi, sans-serif", letterSpacing: "-0.02em" }}>Good morning, Alex!</h1>
                    <p className="text-white/55 text-sm mb-4">
                      🎁 Only <span className="text-white font-semibold">550 XP</span> until your <span className="text-indigo-300 font-semibold">VIP Early Access</span> unlock
                    </p>
                    <div className="flex items-center gap-5">
                      <div>
                        <p className="text-white/35 text-[10px] uppercase tracking-wider mb-0.5">XP Balance</p>
                        <p className="text-white text-2xl font-bold leading-none" style={{ fontFamily: "Satoshi, sans-serif" }}>2,450</p>
                        <div className="flex items-center gap-1 mt-0.5"><ArrowUp className="w-2.5 h-2.5 text-green-400" /><p className="text-green-400 text-[11px] font-semibold">+120 today</p></div>
                      </div>
                      <div className="w-px h-10 bg-white/10" />
                      <div>
                        <p className="text-white/35 text-[10px] uppercase tracking-wider mb-0.5">Level</p>
                        <div className="flex items-baseline gap-1">
                          <p className="text-white text-2xl font-bold leading-none" style={{ fontFamily: "Satoshi, sans-serif" }}>12</p>
                          <span className="text-white/40 text-xs">Super Fan</span>
                        </div>
                      </div>
                      <div className="w-px h-10 bg-white/10" />
                      <div>
                        <p className="text-white/35 text-[10px] uppercase tracking-wider mb-0.5">Next Reward</p>
                        <div className="flex items-center gap-1.5"><Gift className="w-3.5 h-3.5 text-yellow-400" /><p className="text-white font-bold text-base">550</p><span className="text-white/40 text-xs">XP away</span></div>
                        <p className="text-white/35 text-[10px] mt-0.5">VIP Early Access</p>
                      </div>
                      <div className="w-px h-10 bg-white/10" />
                      <div>
                        <p className="text-white/35 text-[10px] uppercase tracking-wider mb-0.5">Streak</p>
                        <div className="flex items-center gap-1.5">
                          <Flame className="w-4 h-4 text-orange-400" style={{ animation: "streakFlicker 2s ease-in-out infinite" }} />
                          <p className="text-white text-2xl font-bold leading-none" style={{ fontFamily: "Satoshi, sans-serif" }}>7</p>
                          <span className="text-white/40 text-xs">days</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-white/35 text-[10px] uppercase tracking-wider">Progress to Level 13</span>
                        <span className="text-white/45 text-[10px]">3,550 / 4,100 XP</span>
                      </div>
                      <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="absolute left-0 top-0 h-full rounded-full progress-animate" style={{ width: "74%", background: "linear-gradient(90deg,#4F46E5 0%,#7C3AED 50%,#22C55E 100%)", boxShadow: "0 0 8px rgba(79,70,229,0.6)" }} />
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-shrink-0">
                    <svg width="96" height="96" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r={circleR} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="6" />
                      <circle cx="50" cy="50" r={circleR} fill="none" stroke="url(#lvlG)" strokeWidth="6" strokeDasharray={circleC} strokeDashoffset={circleProgress} strokeLinecap="round" transform="rotate(-90 50 50)" />
                      <defs><linearGradient id="lvlG" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#4F46E5" /><stop offset="100%" stopColor="#22C55E" /></linearGradient></defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Crown className="w-3 h-3 text-yellow-400 mb-0.5" />
                      <p className="text-white text-2xl font-bold leading-none" style={{ fontFamily: "Satoshi, sans-serif" }}>12</p>
                      <p className="text-white/35 text-[9px] mt-0.5">LEVEL</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: "🎵", label: "Discover Music", sub: "New drops today", bg: "#0f2820", border: "rgba(34,197,94,0.15)", subColor: "#22C55E" },
                  { icon: "💜", label: "Support Artists", sub: "Earn 2x XP now", bg: "#1a1040", border: "rgba(139,92,246,0.2)", subColor: "#8B5CF6" },
                  { icon: "⭐", label: "Earn XP", sub: "3 challenges live", bg: "#111b38", border: "rgba(79,70,229,0.2)", subColor: "#4F46E5" },
                  { icon: "🎁", label: "Redeem Rewards", sub: "2 unlockable", bg: "#2a1a0a", border: "rgba(245,158,11,0.2)", subColor: "#F59E0B" },
                ].map((item) => (
                  <button key={item.label} className="flex items-center gap-2.5 p-3 rounded-xl text-left border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" style={{ backgroundColor: item.bg, borderColor: item.border }}>
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-white text-xs font-semibold">{item.label}</p>
                      <p className="text-[10px]" style={{ color: item.subColor + "aa" }}>{item.sub}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Continue Listening */}
              <div className="rounded-2xl p-4 border" style={{ backgroundColor: "#0E1524", borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <h2 className="text-white font-bold text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>Continue Listening</h2>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium text-indigo-300 bg-indigo-500/15 border border-indigo-500/20">+5 XP per track</span>
                  </div>
                  <button className="text-indigo-400 text-xs hover:text-indigo-300 transition-colors flex items-center gap-0.5">View all <ChevronRight className="w-3 h-3" /></button>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {recentTracks.map((track) => (
                    <div key={track.title} className="flex-shrink-0 w-28 group cursor-pointer" onMouseEnter={() => setHoveredTrack(track.title)} onMouseLeave={() => setHoveredTrack(null)}>
                      <div className="relative rounded-xl overflow-hidden mb-2 transition-all duration-200" style={{ boxShadow: hoveredTrack === track.title ? "0 0 0 1px #4F46E5,0 8px 24px rgba(79,70,229,0.3)" : "0 4px 12px rgba(0,0,0,0.4)" }}>
                        <img src={track.img} alt={track.title} className="w-28 h-28 object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-200" style={{ boxShadow: "0 0 16px rgba(255,255,255,0.3)" }}>
                            <Play className="w-4 h-4 text-[#0B0F19] ml-0.5" fill="#0B0F19" />
                          </div>
                        </div>
                        <button onClick={(e) => { e.stopPropagation(); toggleLike(track.title); }} className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-6 h-6 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center" style={{ color: likedTracks.has(track.title) ? "#F43F5E" : "rgba(255,255,255,0.7)" }}>
                          <Heart className="w-3 h-3" fill={likedTracks.has(track.title) ? "currentColor" : "none"} />
                        </button>
                        <div className="absolute bottom-1.5 left-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <span className="text-[9px] font-bold text-green-400 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full">+5 XP</span>
                        </div>
                        {track.progress > 0 && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
                            <div className="h-full rounded-full" style={{ width: `${track.progress}%`, background: "linear-gradient(90deg,#4F46E5,#22C55E)" }} />
                          </div>
                        )}
                      </div>
                      <p className="text-white text-xs font-semibold truncate group-hover:text-indigo-300 transition-colors">{track.title}</p>
                      <p className="text-white/40 text-xs truncate">{track.artist}</p>
                      <p className="text-white/25 text-[10px]">{track.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Your Next Reward */}
              <div className="rounded-2xl p-4 border" style={{ backgroundColor: "#0E1524", borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-yellow-400" />
                    <h2 className="text-white font-bold text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>Your Next Reward</h2>
                  </div>
                  <button className="text-indigo-400 text-xs hover:text-indigo-300 transition-colors flex items-center gap-0.5">All rewards <ChevronRight className="w-3 h-3" /></button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {rewards.map((reward) => {
                    const pct = Math.round((reward.xpCurrent / reward.xpRequired) * 100);
                    const remaining = reward.xpRequired - reward.xpCurrent;
                    return (
                      <div key={reward.title} className="relative rounded-xl overflow-hidden border group cursor-pointer transition-all duration-200 hover:-translate-y-0.5" style={{ borderColor: "rgba(255,255,255,0.07)", boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}>
                        <div className="relative h-24 overflow-hidden">
                          <img src={reward.img} alt={reward.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                          {reward.exclusive && (
                            <div className="absolute top-2 right-2">
                              <span className="px-1.5 py-0.5 bg-yellow-500/20 border border-yellow-500/40 rounded text-[9px] font-bold text-yellow-400 flex items-center gap-1"><Crown className="w-2.5 h-2.5" /> EXCLUSIVE</span>
                            </div>
                          )}
                          <div className="absolute bottom-2 left-2"><span className="text-xs font-medium text-white/70">{reward.tag}</span></div>
                        </div>
                        <div className="p-3" style={{ backgroundColor: "#111827" }}>
                          <p className="text-white text-xs font-bold truncate mb-0.5">{reward.title}</p>
                          <p className="text-white/40 text-[10px] mb-2">by {reward.artist}</p>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-white/45 text-[10px]">{reward.xpCurrent} / {reward.xpRequired} XP</span>
                            <span className="text-white/35 text-[10px]">{pct}%</span>
                          </div>
                          <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
                            <div className="absolute left-0 top-0 h-full rounded-full progress-animate" style={{ width: `${pct}%`, background: pct >= 90 ? "linear-gradient(90deg,#22C55E,#4ade80)" : "linear-gradient(90deg,#4F46E5,#7C3AED)", boxShadow: pct >= 90 ? "0 0 8px rgba(34,197,94,0.5)" : "0 0 8px rgba(79,70,229,0.4)" }} />
                          </div>
                          <button className="w-full py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-[1.02]" style={{ background: pct >= 90 ? "linear-gradient(90deg,#22C55E,#16a34a)" : "rgba(79,70,229,0.2)", color: pct >= 90 ? "#fff" : "#a5b4fc", border: pct >= 90 ? "1px solid rgba(34,197,94,0.4)" : "1px solid rgba(79,70,229,0.25)" }}>
                            {pct >= 90 ? "🎉 Claim Reward" : `Keep Earning — ${remaining} XP to go`}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Community Activity */}
              <div className="rounded-2xl p-4 border" style={{ backgroundColor: "#0E1524", borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-indigo-400" />
                    <h2 className="text-white font-bold text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>Community Activity</h2>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-green-400">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" style={{ animation: "livePulse 2s infinite" }} />
                    Live
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {communityActivity.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 px-3 rounded-xl border transition-all duration-200 hover:border-white/10 cursor-pointer" style={{ backgroundColor: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.04)" }}>
                      <span className="text-base flex-shrink-0">{item.icon}</span>
                      <p className="flex-1 text-white/60 text-xs min-w-0">{item.text} <span className="font-semibold" style={{ color: item.color }}>{item.highlight}</span></p>
                      <span className="text-white/25 text-[10px] flex-shrink-0">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feed */}
              <div className="rounded-2xl p-4 border" style={{ backgroundColor: "#0E1524", borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-white font-bold text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>Feed</h2>
                  <div className="flex gap-1 p-0.5 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                    {["All", "Following", "For You"].map((tab) => (
                      <button key={tab} onClick={() => setFeedTab(tab)} className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 ${feedTab === tab ? "bg-indigo-600 text-white" : "text-white/45 hover:text-white/70"}`}>{tab}</button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {feedItems.map((item, idx) => (
                    <div key={item.id} className="flex flex-col gap-2" style={{ animation: `slideInUp 0.35s ease both ${idx * 70}ms` }}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {item.avatar && (
                            <div className="relative">
                              <img src={item.avatar} className="w-7 h-7 rounded-full object-cover" alt={item.artist} />
                              {item.isLive && <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0E1524]" />}
                            </div>
                          )}
                          {item.isCommunity && (
                            <div className="flex -space-x-1.5">
                              {item.friendAvatars.map((av, i) => <img key={i} src={av} className="w-6 h-6 rounded-full object-cover border border-[#0E1524]" alt="" />)}
                            </div>
                          )}
                          <span className="text-white text-xs font-semibold">
                            {item.isActivity ? item.action : item.isCommunity ? item.action : item.artist}
                            {item.verified && !item.isActivity && <span className="inline-flex items-center justify-center w-3.5 h-3.5 bg-indigo-500 rounded-full ml-1 text-[7px] text-white">✓</span>}
                          </span>
                          {!item.isActivity && !item.isCommunity && <span className="text-white/40 text-xs">{item.action}</span>}
                          {item.isCommunity && <span className="text-white/40 text-xs">{item.trackTitle}</span>}
                          <span className="text-white/25 text-xs">{item.time}</span>
                        </div>
                        {!item.isActivity && !item.isCommunity && <MoreHorizontal className="w-4 h-4 text-white/25 cursor-pointer hover:text-white/60 transition-colors" />}
                      </div>
                      {item.isLive ? (
                        <div className="rounded-xl p-3 flex items-center gap-3 border group cursor-pointer hover:border-red-500/30 transition-colors" style={{ backgroundColor: "rgba(239,68,68,0.05)", borderColor: "rgba(239,68,68,0.15)" }}>
                          <div className="relative">
                            <img src={item.avatar} className="w-10 h-10 rounded-lg object-cover" alt="" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" style={{ animation: "livePulse 1.5s ease-in-out infinite" }} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-white text-xs font-semibold">{item.artist}</span>
                              <span className="px-1.5 py-0.5 bg-red-500/20 border border-red-500/30 rounded text-[9px] font-bold text-red-400">● LIVE</span>
                            </div>
                            <p className="text-white/40 text-xs">streaming live now</p>
                          </div>
                          <button className="bg-red-500 hover:bg-red-400 text-white text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors">Join • +15 XP</button>
                        </div>
                      ) : item.trackTitle ? (
                        <div className="rounded-xl p-3 flex items-center gap-3 border hover:border-white/10 transition-colors cursor-pointer group" style={{ backgroundColor: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}>
                          <div className="relative">
                            <img src={item.trackImg} className="w-10 h-10 rounded-lg object-cover" alt={item.trackTitle} />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                              <Play className="w-3 h-3 text-white" fill="white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-white text-xs font-semibold">{item.trackTitle}</p>
                            <p className="text-white/40 text-xs">{item.trackArtist}</p>
                          </div>
                          {item.duration && (
                            <div className="flex items-center gap-2 flex-1">
                              <div className="flex-1 h-4 flex items-center gap-[1.5px]">
                                {Array.from({ length: 36 }).map((_, i) => (
                                  <div key={i} className="w-0.5 rounded-full flex-shrink-0" style={{ height: `${Math.sin(i * 0.5) * 6 + 8}px`, backgroundColor: i < 16 ? "rgba(79,70,229,0.9)" : "rgba(255,255,255,0.12)" }} />
                                ))}
                              </div>
                              <span className="text-white/35 text-xs flex-shrink-0">{item.duration}</span>
                            </div>
                          )}
                          {item.xpEarned && <span className="text-green-400 text-xs font-bold flex-shrink-0 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20">{item.xpEarned}</span>}
                        </div>
                      ) : null}
                      {item.likes && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-white/35 text-xs">
                            <button className="flex items-center gap-1.5 hover:text-red-400 transition-colors"><Heart className="w-3.5 h-3.5" />{item.likes}</button>
                            <button className="flex items-center gap-1.5 hover:text-white/70 transition-colors"><MessageSquare className="w-3.5 h-3.5" />{item.comments}</button>
                            <button className="flex items-center gap-1.5 hover:text-white/70 transition-colors"><Share2 className="w-3.5 h-3.5" />{item.shares}</button>
                          </div>
                          <span className="text-green-400 text-[11px] font-semibold bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/15">You earned {item.xpEarned}</span>
                        </div>
                      )}
                      {idx < feedItems.length - 1 && <div className="h-px" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right Sidebar ──────────────────────────────────────── */}
            <div className="w-64 flex-shrink-0 flex flex-col gap-4">
              {/* Your Artists */}
              <div className="rounded-2xl p-4 border" style={{ backgroundColor: "#0E1524", borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-white font-bold text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>Your Artists</h2>
                  <button className="text-indigo-400 text-xs hover:text-indigo-300 transition-colors" onClick={() => setActiveNav("Following")}>View all</button>
                </div>
                <div className="flex flex-col gap-1.5">
                  {topArtists.map((artist) => (
                    <div key={artist.name} onClick={() => navigate(`/artist/${artist.slug}`)} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/[0.04] transition-all cursor-pointer group border border-transparent hover:border-white/[0.06]">
                      <div className="relative flex-shrink-0">
                        <img src={artist.avatar} className="w-8 h-8 rounded-full object-cover border border-white/10" alt={artist.name} />
                        {artist.isOnline && <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#0E1524]" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-semibold truncate group-hover:text-indigo-300 transition-colors">{artist.name}</p>
                        <p className="text-white/35 text-[10px]">{artist.xp}</p>
                      </div>
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-bold" style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.2)" }}>{artist.multiplier}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Challenges */}
              <div className="rounded-2xl p-4 border" style={{ backgroundColor: "#0E1524", borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-white font-bold text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>Daily Challenges</h2>
                  <button className="text-indigo-400 text-xs hover:text-indigo-300 transition-colors">View all</button>
                </div>
                <div className="flex items-center gap-1.5 mb-3 px-2.5 py-1.5 rounded-lg" style={{ backgroundColor: "rgba(79,70,229,0.1)", border: "1px solid rgba(79,70,229,0.2)" }}>
                  <Sparkles className="w-3 h-3 text-indigo-400 flex-shrink-0" />
                  <p className="text-indigo-300 text-[10px] font-medium">1 more action → Bonus <span className="text-green-400 font-bold">+25 XP</span></p>
                </div>
                <div className="flex flex-col gap-3">
                  {xpChallenges.map((challenge) => {
                    const Icon = challenge.icon;
                    const pct = (challenge.progress / challenge.total) * 100;
                    const isClaimed = claimedChallenge === challenge.label;
                    const isComplete = challenge.progress >= challenge.total;
                    return (
                      <div key={challenge.label}>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: challenge.color + "20", border: `1px solid ${challenge.color}30` }}>
                              <Icon className="w-3 h-3" style={{ color: challenge.color }} />
                            </div>
                            <span className="text-white/65 text-[11px]">{challenge.label}</span>
                          </div>
                          {isComplete || isClaimed ? (
                            <button onClick={() => setClaimedChallenge(challenge.label)} className="text-[10px] font-bold px-2 py-0.5 rounded-md transition-all" style={{ background: isClaimed ? "rgba(34,197,94,0.2)" : "rgba(34,197,94,0.15)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.3)" }}>
                              {isClaimed ? <span className="flex items-center gap-1"><Check className="w-2.5 h-2.5" /> Claimed!</span> : "Claim →"}
                            </button>
                          ) : (
                            <span className="text-green-400 text-[10px] font-bold">{challenge.reward}</span>
                          )}
                        </div>
                        <div className="relative h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                          <div className="absolute left-0 top-0 h-full rounded-full progress-animate" style={{ width: `${pct}%`, backgroundColor: challenge.color, boxShadow: `0 0 6px ${challenge.color}60` }} />
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-white/25 text-[10px]">{challenge.progress} / {challenge.total}</p>
                          {challenge.nearComplete && challenge.progress < challenge.total && (
                            <p className="text-[10px] font-medium" style={{ color: challenge.color }}>{challenge.total - challenge.progress} more! 🔥</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center gap-1.5 mt-3 pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  <Flame className="w-3 h-3 text-orange-400" />
                  <span className="text-white/35 text-[10px]">Resets in</span>
                  <span className="text-orange-400 text-[10px] font-bold">12h 45m</span>
                </div>
              </div>

              {/* Leaderboard */}
              <div className="rounded-2xl p-4 border" style={{ backgroundColor: "#0E1524", borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-white font-bold text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>Leaderboard</h2>
                  <div className="flex items-center gap-1 text-white/40 text-xs cursor-pointer hover:text-white/60 transition-colors">Weekly <ChevronDown className="w-3 h-3" /></div>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-2 rounded-xl mb-3" style={{ background: "linear-gradient(90deg,rgba(79,70,229,0.15),rgba(79,70,229,0.05))", border: "1px solid rgba(79,70,229,0.2)" }}>
                  <Trophy className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                  <div>
                    <p className="text-white text-[11px] font-bold">You're #12 this week</p>
                    <p className="text-white/40 text-[10px]">Only <span className="text-indigo-300 font-semibold">440 XP</span> to reach Top 10 🎯</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  {leaderboard.map((entry) => (
                    <div key={entry.name} className={`flex items-center gap-2.5 p-2 rounded-xl transition-all ${entry.isYou ? "border" : "hover:bg-white/[0.03]"}`} style={entry.isYou ? { background: "linear-gradient(90deg,rgba(79,70,229,0.15),rgba(79,70,229,0.05))", borderColor: "rgba(79,70,229,0.25)" } : {}}>
                      <span className="text-[11px] font-bold w-5 text-center flex-shrink-0" style={{ color: entry.rank === 1 ? "#F59E0B" : entry.rank === 2 ? "#9CA3AF" : entry.rank === 3 ? "#CD7C2F" : "rgba(255,255,255,0.3)" }}>
                        {entry.rank <= 3 ? ["🥇","🥈","🥉"][entry.rank - 1] : `#${entry.rank}`}
                      </span>
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ backgroundColor: entry.isYou ? "#4F46E5" : "rgba(255,255,255,0.08)", color: "#fff" }}>{entry.avatar}</div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-semibold truncate ${entry.isYou ? "text-white" : "text-white/65"}`}>{entry.name}</p>
                      </div>
                      <span className="text-white/40 text-[10px] flex-shrink-0">{entry.xp}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-3 py-2 rounded-lg text-xs font-semibold text-indigo-400 hover:text-indigo-300 border border-indigo-500/20 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all">
                  View Full Leaderboard →
                </button>
              </div>
            </div>
          </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
