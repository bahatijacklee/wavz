import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Music, Star, TrendingUp, Heart, Play } from "lucide-react";

const artists = [
  {
    name: "Luna Voss",
    genre: "Indie Electronic",
    fans: "142K",
    xp: 2840,
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&q=80",
    color: "from-indigo-600/20 to-purple-600/10",
  },
  {
    name: "Kai Rivers",
    genre: "Neo R&B",
    fans: "89K",
    xp: 1920,
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&q=80",
    color: "from-purple-600/20 to-pink-600/10",
  },
  {
    name: "Atlas Sound",
    genre: "Dream Pop",
    fans: "231K",
    xp: 4100,
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&q=80",
    color: "from-blue-600/20 to-indigo-600/10",
  },
];

function ArtistCard({
  artist,
  animClass,
  delay,
}: {
  artist: (typeof artists)[0];
  animClass: string;
  delay: string;
}) {
  return (
    <div
      className={`glass-card rounded-2xl p-4 w-64 cursor-pointer hover:scale-[1.04] hover:shadow-[0_0_0_1px_#4F46E5,0_8px_32px_rgba(79,70,229,0.25)] transition-all duration-300 ${animClass}`}
      style={{ animationDelay: delay }}
    >
      <div className={`rounded-xl bg-gradient-to-br ${artist.color} p-3 mb-3 flex items-center gap-3`}>
        <img
          src={artist.img}
          alt={artist.name}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div>
          <div className="text-white font-semibold text-sm" style={{ fontFamily: "Satoshi, sans-serif" }}>
            {artist.name}
          </div>
          <div className="text-white/50 text-xs">{artist.genre}</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-white/60 text-xs">
          <Heart className="w-3 h-3 text-pink-400" />
          <span>{artist.fans} fans</span>
        </div>
        <div className="flex items-center gap-1 bg-green-500/10 px-2 py-0.5 rounded-full">
          <Star className="w-3 h-3 text-green-400" />
          <span className="text-green-400 text-xs font-semibold">{artist.xp.toLocaleString()} XP</span>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            style={{ width: `${(artist.xp / 5000) * 100}%` }}
          />
        </div>
        <div className="flex items-center gap-1 text-white/40 text-xs">
          <Play className="w-3 h-3" />
          <span>Playing</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const navigate = useNavigate();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      { el: headlineRef.current, delay: 0 },
      { el: subtextRef.current, delay: 120 },
      { el: ctaRef.current, delay: 240 },
      { el: cardsRef.current, delay: 360 },
      { el: trustRef.current, delay: 480 },
    ];
    elements.forEach(({ el, delay }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden noise-bg">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
            <div
              ref={headlineRef}
              className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-500/20 rounded-full px-3 py-1.5 mb-6"
            >
              <Music className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-indigo-300 text-xs font-medium">Earn while you listen</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              Turn your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                passion
              </span>{" "}
              for music into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                rewards
              </span>
            </h1>

            <p
              ref={subtextRef}
              className="text-white/60 text-lg leading-relaxed mb-8"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Support the artists you love, earn XP for every stream, unlock exclusive perks, and
              become part of the fan community that actually matters.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-3 mb-10">
              <button onClick={() => navigate("/dashboard")} className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(79,70,229,0.4)] flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Start earning free
              </button>
              <button className="border border-white/15 hover:border-white/30 text-white/80 hover:text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-2">
                <Play className="w-4 h-4" />
                See how it works
              </button>
            </div>

            <div
              ref={trustRef}
              className="flex items-center gap-4 text-white/40 text-sm"
            >
              <div className="flex -space-x-2">
                {["https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&q=80","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&q=80","https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80"].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-7 h-7 rounded-full border-2 border-[#0B0F19] object-cover"
                  />
                ))}
              </div>
              <span>Join <strong className="text-white/70">2.4M+ fans</strong> already earning</span>
            </div>
          </div>

          {/* Right — floating artist cards */}
          <div ref={cardsRef} className="relative flex-1 flex justify-center lg:justify-end items-center h-[420px] lg:h-[480px]">
            <div className="relative w-full max-w-[340px]">
              {/* Card 1 — back */}
              <div className="absolute -left-4 top-16 animate-float-slow" style={{ zIndex: 1 }}>
                <ArtistCard artist={artists[2]} animClass="" delay="0ms" />
              </div>
              {/* Card 2 — middle */}
              <div className="absolute left-8 top-4 animate-float-medium" style={{ zIndex: 2, animationDelay: "1.2s" }}>
                <ArtistCard artist={artists[1]} animClass="" delay="0ms" />
              </div>
              {/* Card 3 — front */}
              <div className="absolute left-20 top-[90px] animate-float-fast" style={{ zIndex: 3, animationDelay: "0.6s" }}>
                <ArtistCard artist={artists[0]} animClass="" delay="0ms" />
              </div>
              {/* Floating XP badge */}
              <div className="absolute top-0 right-0 z-10 bg-green-500/90 text-white text-xs font-bold px-2.5 py-1 rounded-full animate-float-medium shadow-[0_0_12px_rgba(34,197,94,0.4)]" style={{ animationDelay: "0.8s" }}>
                +50 XP
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
