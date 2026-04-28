import { useState } from "react";
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
  Star,
  MoreHorizontal,
  Share2,
  MessageSquare,
  Flame,
  Zap,
  BarChart2,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", active: true },
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
  { name: "Luna Lane", xp: "3.2K XP", multiplier: "2.0x", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80" },
  { name: "The Weekenders", xp: "2.1K XP", multiplier: "1.8x", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80" },
  { name: "Jaylon", xp: "1.8K XP", multiplier: "1.5x", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&q=80" },
  { name: "Northline", xp: "1.2K XP", multiplier: "1.2x", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80" },
  { name: "Aria Mae", xp: "980 XP", multiplier: "1.0x", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&q=80" },
];

const xpChallenges = [
  { icon: Heart, label: "Listen to 10 tracks", progress: 7, total: 10, reward: "+50 XP", color: "#4F46E5" },
  { icon: Star, label: "Support an artist", progress: 1, total: 2, reward: "+100 XP", color: "#8B5CF6" },
  { icon: MessageSquare, label: "Comment on 3 posts", progress: 2, total: 3, reward: "+30 XP", color: "#06B6D4" },
];

const recentTracks = [
  { title: "Midnight Drive", artist: "The Weekenders", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&q=80" },
  { title: "Falling Stars", artist: "Luna Lane", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&q=80" },
  { title: "Better Days", artist: "Jaylon", img: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=120&q=80" },
  { title: "Echoes", artist: "Northline", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&q=80" },
  { title: "Lost in Mind", artist: "Aria Mae", img: "https://images.unsplash.com/photo-1484876065684-b1cf1b0d50d7?w=120&q=80" },
];

const leaderboard = [
  { rank: 1, name: "Alex (You)", xp: "2,450 XP", isYou: true },
  { rank: 2, name: "Maya", xp: "2,220 XP" },
  { rank: 3, name: "Jordan", xp: "1,980 XP" },
  { rank: 4, name: "Sam", xp: "1,650 XP" },
  { rank: 5, name: "Taylor", xp: "1,420 XP" },
];

const feedItems = [
  {
    id: 1,
    artist: "Luna Lane",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80",
    action: "posted a new track",
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
  },
  {
    id: 2,
    isActivity: true,
    action: "You supported Jaylon",
    time: "3h ago",
    trackTitle: "Better Days",
    trackArtist: "Jaylon",
    trackImg: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=60&q=80",
    xpEarned: "+20 XP",
    verified: true,
  },
  {
    id: 3,
    artist: "The Weekenders",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80",
    action: "went live",
    time: "5h ago",
    isLive: true,
    verified: true,
  },
];

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Home");
  const [isPlaying, setIsPlaying] = useState(true);
  const [feedTab, setFeedTab] = useState("All");

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: "#0B0F19", color: "#fff", fontFamily: "DM Sans, sans-serif" }}
    >
      {/* Sidebar */}
      <aside
        className="w-56 flex-shrink-0 flex flex-col py-5 px-3 border-r"
        style={{ backgroundColor: "#0F1422", borderColor: "rgba(255,255,255,0.06)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-3 mb-7">
          <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_12px_rgba(79,70,229,0.5)]">
            <Activity className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-white font-bold text-base tracking-tight" style={{ fontFamily: "Satoshi, sans-serif" }}>
            SoundBridge
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 flex flex-col gap-0.5">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => setActiveNav(label)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 w-full text-left ${
                activeNav === label
                  ? "bg-indigo-600/20 text-white"
                  : "text-white/50 hover:text-white/80 hover:bg-white/[0.04]"
              }`}
            >
              <Icon
                className={`w-4 h-4 flex-shrink-0 ${activeNav === label ? "text-indigo-400" : ""}`}
                strokeWidth={2}
              />
              {label}
            </button>
          ))}
        </nav>

        {/* Bottom player */}
        <div
          className="mt-4 rounded-xl p-3 border"
          style={{ backgroundColor: "#121826", borderColor: "rgba(255,255,255,0.06)" }}
        >
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
            <button className="text-white/40 hover:text-white/70">
              <Heart className="w-3.5 h-3.5" />
            </button>
          </div>
          {/* Progress bar */}
          <div className="relative h-0.5 bg-white/10 rounded-full mb-2">
            <div className="absolute left-0 top-0 h-full bg-indigo-500 rounded-full" style={{ width: "42%" }} />
          </div>
          <div className="flex items-center justify-between text-white/30 text-[10px] mb-2">
            <span>1:24</span>
            <span>3:24</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="text-white/40 hover:text-white/70">
              <SkipBack className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-white/90"
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
            <button className="text-white/40 hover:text-white/70">
              <SkipForward className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header
          className="flex items-center gap-4 px-6 py-3 border-b flex-shrink-0"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Search for artists, songs, or albums..."
              className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl pl-9 pr-4 py-2 text-sm text-white/70 placeholder:text-white/30 outline-none focus:border-indigo-500/50 transition-colors"
            />
          </div>
          <div className="flex items-center gap-3 ml-auto">
            {/* XP Badge */}
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer"
              style={{ backgroundColor: "#121826", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <Star className="w-3.5 h-3.5 text-green-400" fill="currentColor" />
              <span className="text-white text-sm font-semibold">2,450 XP</span>
              <ChevronDown className="w-3 h-3 text-white/40" />
            </div>
            {/* Notification */}
            <button className="relative w-8 h-8 flex items-center justify-center text-white/50 hover:text-white">
              <Bell className="w-4.5 h-4.5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full text-[8px] flex items-center justify-center">8</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white">
              <Mail className="w-4 h-4" />
            </button>
            {/* Avatar */}
            <button className="flex items-center gap-1.5">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&q=80"
                className="w-8 h-8 rounded-full object-cover border-2 border-indigo-500/50"
                alt="user"
              />
              <ChevronDown className="w-3.5 h-3.5 text-white/40" />
            </button>
          </div>
        </header>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex gap-5 p-5 min-h-0">
            {/* Center column */}
            <div className="flex-1 flex flex-col gap-5 min-w-0">
              {/* Welcome Card */}
              <div
                className="relative rounded-2xl p-6 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4c1d95 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: "radial-gradient(circle at 80% 50%, #4F46E5 0%, transparent 60%)",
                  }}
                />
                <div className="relative flex items-start justify-between">
                  <div>
                    <h1 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "Satoshi, sans-serif" }}>
                      Good morning, Alex! 👋
                    </h1>
                    <p className="text-white/60 text-sm">Keep listening, keep supporting, keep earning.</p>

                    <div className="flex items-center gap-6 mt-4">
                      <div>
                        <p className="text-white/40 text-xs mb-0.5">XP Balance</p>
                        <p className="text-white text-2xl font-bold" style={{ fontFamily: "Satoshi, sans-serif" }}>2,450</p>
                        <p className="text-green-400 text-xs font-medium mt-0.5">+120 today</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-0.5">Level</p>
                        <p className="text-white text-2xl font-bold" style={{ fontFamily: "Satoshi, sans-serif" }}>12</p>
                        <p className="text-white/40 text-xs mt-0.5">Super Fan</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-0.5">Next Reward</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <p className="text-white text-lg font-bold">550</p>
                          <span className="text-white/60 text-xs">XP away</span>
                          <Gift className="w-4 h-4 text-yellow-400 ml-1" />
                        </div>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-0.5">Streak</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <p className="text-white text-2xl font-bold">7</p>
                          <span className="text-white/60 text-xs">days</span>
                          <Flame className="w-4 h-4 text-orange-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Level circle */}
                  <div className="relative flex-shrink-0">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                      <circle
                        cx="50" cy="50" r="44"
                        fill="none"
                        stroke="#22C55E"
                        strokeWidth="6"
                        strokeDasharray="276.5"
                        strokeDashoffset="69"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <p className="text-white/50 text-[10px]">Level</p>
                      <p className="text-white text-2xl font-bold leading-none" style={{ fontFamily: "Satoshi, sans-serif" }}>12</p>
                      <p className="text-white/40 text-[9px] mt-0.5">3,550 / 4,100 XP</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action Cards */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: "🎵", label: "Discover Music", color: "#1e3a2f" },
                  { icon: "💜", label: "Support Artists", color: "#2d1b4e" },
                  { icon: "⭐", label: "Earn XP", color: "#1e2a4a" },
                  { icon: "🎁", label: "Redeem Rewards", color: "#3a2a1a" },
                ].map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center gap-2.5 p-3 rounded-xl text-left border transition-all hover:border-white/20 hover:-translate-y-0.5"
                    style={{ backgroundColor: item.color, borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-white text-xs font-semibold">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Continue Listening */}
              <div
                className="rounded-2xl p-4 border"
                style={{ backgroundColor: "#121826", borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-white font-bold text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>Continue Listening</h2>
                  <button className="text-indigo-400 text-xs hover:text-indigo-300">View all</button>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
                  {recentTracks.map((track, i) => (
                    <div key={track.title} className="flex-shrink-0 w-28 group cursor-pointer">
                      <div className="relative rounded-lg overflow-hidden mb-2">
                        <img src={track.img} alt={track.title} className="w-28 h-28 object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <Play className="w-3.5 h-3.5 text-[#0B0F19] ml-0.5" fill="#0B0F19" />
                          </div>
                        </div>
                        {i === 0 && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
                            <div className="h-full bg-green-400 rounded-full" style={{ width: "42%" }} />
                          </div>
                        )}
                      </div>
                      <p className="text-white text-xs font-medium truncate">{track.title}</p>
                      <p className="text-white/40 text-xs truncate">{track.artist}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feed */}
              <div
                className="rounded-2xl p-4 border"
                style={{ backgroundColor: "#121826", borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-white font-bold text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>Feed</h2>
                  <div className="flex gap-1 p-0.5 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                    {["All", "Following", "For You"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setFeedTab(tab)}
                        className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                          feedTab === tab ? "bg-indigo-600 text-white" : "text-white/50 hover:text-white"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {feedItems.map((item) => (
                    <div key={item.id} className="flex flex-col gap-2">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {item.avatar && (
                            <img src={item.avatar} className="w-7 h-7 rounded-full object-cover" alt={item.artist} />
                          )}
                          <span className="text-white text-xs font-semibold">
                            {item.isActivity ? item.action : item.artist}
                            {item.verified && !item.isActivity && (
                              <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full ml-1 text-[8px] text-white text-center leading-3">✓</span>
                            )}
                          </span>
                          {!item.isActivity && (
                            <span className="text-white/40 text-xs">{item.action}</span>
                          )}
                          <span className="text-white/30 text-xs">{item.time}</span>
                        </div>
                        {!item.isActivity && <MoreHorizontal className="w-4 h-4 text-white/30 cursor-pointer hover:text-white/60" />}
                      </div>

                      {/* Track card or live badge */}
                      {item.isLive ? (
                        <div
                          className="rounded-xl p-3 flex items-center gap-3 border"
                          style={{ backgroundColor: "#0B0F19", borderColor: "rgba(255,255,255,0.06)" }}
                        >
                          <img src={item.avatar} className="w-10 h-10 rounded-lg object-cover" alt="" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-white text-xs font-semibold">{item.artist}</span>
                              <span className="px-1.5 py-0.5 bg-red-500 rounded text-[9px] font-bold text-white tracking-wide">● LIVE</span>
                            </div>
                            <p className="text-white/40 text-xs">is streaming live</p>
                          </div>
                          <button className="bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-indigo-500 transition-colors">
                            Join
                          </button>
                        </div>
                      ) : item.trackTitle ? (
                        <div
                          className="rounded-xl p-3 flex items-center gap-3 border"
                          style={{ backgroundColor: "#0B0F19", borderColor: "rgba(255,255,255,0.06)" }}
                        >
                          <img src={item.trackImg} className="w-10 h-10 rounded-lg object-cover" alt={item.trackTitle} />
                          <div className="flex-1">
                            <p className="text-white text-xs font-semibold">{item.trackTitle}</p>
                            <p className="text-white/40 text-xs">{item.trackArtist}</p>
                          </div>
                          {item.duration && (
                            <div className="flex items-center gap-3 flex-1">
                              <div className="flex-1 h-4 flex items-center gap-0.5">
                                {Array.from({ length: 40 }).map((_, i) => (
                                  <div
                                    key={i}
                                    className="w-0.5 rounded-full"
                                    style={{
                                      height: `${Math.random() * 12 + 4}px`,
                                      backgroundColor: i < 18 ? "rgba(79,70,229,0.8)" : "rgba(255,255,255,0.15)",
                                    }}
                                  />
                                ))}
                              </div>
                              <span className="text-white/40 text-xs flex-shrink-0">{item.duration}</span>
                            </div>
                          )}
                          {item.xpEarned && (
                            <span className="text-green-400 text-xs font-semibold flex-shrink-0">{item.xpEarned}</span>
                          )}
                        </div>
                      ) : null}

                      {/* Reactions */}
                      {item.likes && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-white/40 text-xs">
                            <button className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
                              <Heart className="w-3.5 h-3.5" />
                              {item.likes}
                            </button>
                            <button className="flex items-center gap-1.5 hover:text-white/70 transition-colors">
                              <MessageSquare className="w-3.5 h-3.5" />
                              {item.comments}
                            </button>
                            <button className="flex items-center gap-1.5 hover:text-white/70 transition-colors">
                              <Share2 className="w-3.5 h-3.5" />
                              {item.shares}
                            </button>
                          </div>
                          <span className="text-green-400 text-xs font-semibold">You earned {item.xpEarned}</span>
                        </div>
                      )}
                      {item.id < feedItems.length && (
                        <div className="h-px mt-1" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-64 flex-shrink-0 flex flex-col gap-4">
              {/* Top Artists */}
              <div
                className="rounded-2xl p-4 border"
                style={{ backgroundColor: "#121826", borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-white font-bold text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>Top Artists You Support</h2>
                  <button className="text-indigo-400 text-xs hover:text-indigo-300">View all</button>
                </div>
                <div className="flex flex-col gap-2.5">
                  {topArtists.map((artist) => (
                    <div key={artist.name} className="flex items-center gap-2.5">
                      <img src={artist.avatar} className="w-8 h-8 rounded-full object-cover" alt={artist.name} />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-medium truncate">{artist.name}</p>
                        <p className="text-white/40 text-[10px]">{artist.xp}</p>
                      </div>
                      <span
                        className="px-1.5 py-0.5 rounded text-[10px] font-bold text-green-400"
                        style={{ backgroundColor: "rgba(34,197,94,0.12)" }}
                      >
                        {artist.multiplier}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* XP Challenges */}
              <div
                className="rounded-2xl p-4 border"
                style={{ backgroundColor: "#121826", borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-white font-bold text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>XP Challenges</h2>
                  <button className="text-indigo-400 text-xs hover:text-indigo-300">View all</button>
                </div>
                <div className="flex flex-col gap-3">
                  {xpChallenges.map((challenge) => {
                    const Icon = challenge.icon;
                    return (
                      <div key={challenge.label}>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <Icon className="w-3.5 h-3.5" style={{ color: challenge.color }} />
                            <span className="text-white/70 text-xs">{challenge.label}</span>
                          </div>
                          <span className="text-green-400 text-xs font-semibold">{challenge.reward}</span>
                        </div>
                        <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="absolute left-0 top-0 h-full rounded-full transition-all"
                            style={{
                              width: `${(challenge.progress / challenge.total) * 100}%`,
                              backgroundColor: challenge.color,
                            }}
                          />
                        </div>
                        <p className="text-white/30 text-[10px] mt-1">{challenge.progress} / {challenge.total}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center gap-1 mt-2 pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <Zap className="w-3 h-3 text-white/30" />
                  <span className="text-white/30 text-[10px]">Resets in 12h 45m</span>
                </div>
              </div>

              {/* Leaderboard */}
              <div
                className="rounded-2xl p-4 border"
                style={{ backgroundColor: "#121826", borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-white font-bold text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>Leaderboard</h2>
                  <div className="flex items-center gap-1 text-white/50 text-xs cursor-pointer hover:text-white/70">
                    Weekly <ChevronDown className="w-3 h-3" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {leaderboard.map((entry) => (
                    <div
                      key={entry.name}
                      className={`flex items-center gap-2.5 p-2 rounded-lg ${entry.isYou ? "bg-indigo-600/15" : ""}`}
                    >
                      <span
                        className={`text-xs font-bold w-4 text-center ${entry.rank === 1 ? "text-yellow-400" : "text-white/40"}`}
                      >
                        {entry.rank}
                      </span>
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ backgroundColor: entry.isYou ? "#4F46E5" : "rgba(255,255,255,0.08)" }}
                      >
                        {entry.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-medium truncate ${entry.isYou ? "text-white" : "text-white/70"}`}>{entry.name}</p>
                      </div>
                      <span className="text-white/50 text-[10px]">{entry.xp}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-3 py-2 rounded-lg text-xs font-medium text-white/50 hover:text-white border border-white/[0.08] hover:border-white/20 transition-all">
                  View Full Leaderboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
