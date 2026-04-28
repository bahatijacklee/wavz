import { useEffect, useRef, useState } from "react";
import { TrendingUp, Play } from "lucide-react";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActivated(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Mesh gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0B0F19]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/12 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-purple-600/8 rounded-full blur-[80px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <div
          className={`scroll-reveal ${activated ? "revealed" : ""}`}
        >
          <div className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-500/20 rounded-full px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-indigo-300 text-xs font-medium">2.4M+ fans already earning</span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-white tracking-[-0.03em] leading-[1.05] mb-6"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Your next favorite artist
            <br />
            is waiting for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              you
            </span>
          </h2>

          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">
            Join Wavr today — free forever for fans. Start earning XP on your very first stream.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="group bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(79,70,229,0.45)] flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Start earning free
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-8 py-4 rounded-xl text-base transition-all duration-200 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch a demo
            </button>
          </div>

          <p className="text-white/30 text-sm mt-6">
            No credit card required · Free to get started · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
