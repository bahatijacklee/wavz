import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Mic2, TrendingUp, BarChart2, ArrowRight } from "lucide-react";

const benefits = [
  "Get detailed fan engagement analytics",
  "Build a loyal revenue-generating fan base",
  "Set custom challenges and reward your top fans",
  "Offer tiered memberships through the platform",
  "Connect directly with your most invested listeners",
];

export default function ArtistSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="for-artists" className="py-24 lg:py-32 relative">
      <div ref={sectionRef} className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div
            className={`scroll-reveal ${activated ? "revealed" : ""}`}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-500/20 rounded-full px-3 py-1.5 mb-5">
              <Mic2 className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-indigo-300 text-xs font-medium">For artists</span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] mb-5"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              Your fans deserve
              <br />
              to be{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                recognized
              </span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Wavr gives artists a direct line to their most dedicated fans. Build loyalty programs,
              reward engagement, and turn casual listeners into lifelong supporters.
            </p>
            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-white/70 text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <button className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(79,70,229,0.4)]">
              Join as an artist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right — artist dashboard card */}
          <div
            className={`scroll-reveal ${activated ? "revealed" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            <div
              className="glass-card rounded-3xl p-7"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
            >
              {/* Artist header */}
              <div className="flex items-center gap-4 mb-6 pb-5 border-b border-white/[0.06]">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=80&q=80"
                  alt="Artist"
                  className="w-14 h-14 rounded-xl object-cover border border-white/[0.08]"
                />
                <div className="flex-1">
                  <div
                    className="text-white font-bold text-base"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    Luna Voss
                  </div>
                  <div className="text-white/50 text-sm">Indie Electronic · Verified Artist</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-1.5 text-green-400 text-xs font-semibold">
                  ↑ 23% this week
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Total fans", value: "142K", icon: TrendingUp },
                  { label: "Avg XP/fan", value: "1,840", icon: BarChart2 },
                  { label: "Rewards sent", value: "$12.4K", icon: Mic2 },
                ].map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-3 text-center"
                  >
                    <Icon className="w-4 h-4 text-indigo-400 mx-auto mb-1.5" strokeWidth={2} />
                    <div
                      className="text-white font-bold text-sm"
                      style={{ fontFamily: "Satoshi, sans-serif" }}
                    >
                      {value}
                    </div>
                    <div className="text-white/40 text-xs">{label}</div>
                  </div>
                ))}
              </div>

              {/* Fan tier distribution */}
              <div className="mb-5">
                <div className="flex justify-between text-xs text-white/40 mb-2">
                  <span>Fan tier distribution</span>
                  <span>142,000 total</span>
                </div>
                {[
                  { tier: "Legend", count: "2.1K", width: "8%", color: "bg-purple-500" },
                  { tier: "Champion", count: "11.4K", width: "22%", color: "bg-indigo-500" },
                  { tier: "Supporter", count: "38.7K", width: "48%", color: "bg-blue-500" },
                  { tier: "Listener", count: "89.8K", width: "100%", color: "bg-white/20" },
                ].map(({ tier, count, width, color }) => (
                  <div key={tier} className="flex items-center gap-3 mb-2">
                    <span className="text-white/50 text-xs w-20 shrink-0">{tier}</span>
                    <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                      <div
                        className={`h-full ${color} rounded-full`}
                        style={{ width, transition: "width 1s ease-out" }}
                      />
                    </div>
                    <span className="text-white/60 text-xs w-10 text-right shrink-0">{count}</span>
                  </div>
                ))}
              </div>

              {/* Recent activity */}
              <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-4">
                <div className="text-indigo-300 text-xs font-semibold mb-2">Live activity</div>
                <div className="space-y-1.5">
                  {[
                    "jamie_k unlocked Champion tier",
                    "3 fans shared your latest track",
                    "sofia_m redeemed: Meet & Greet pass",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/50 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0 animate-pulse" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
