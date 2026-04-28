import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Zap } from "lucide-react";

const benefits = [
  "Earn XP for every stream, share, and comment",
  "Unlock exclusive content as you level up",
  "Get notified before anyone else about new releases",
  "Convert XP into real rewards — merch, tickets, cash",
  "Compete on artist leaderboards and win prizes",
];

function XpBadge({
  value,
  x,
  delay,
  color,
}: {
  value: string;
  x: string;
  delay: string;
  color: string;
}) {
  return (
    <div
      className="absolute text-xs font-bold px-2.5 py-1 rounded-full animate-xp-rise"
      style={{
        left: x,
        bottom: "40%",
        animationDelay: delay,
        background: color === "green" ? "rgba(34,197,94,0.9)" : "rgba(79,70,229,0.9)",
        color: "#fff",
        boxShadow:
          color === "green"
            ? "0 0 12px rgba(34,197,94,0.4)"
            : "0 0 12px rgba(79,70,229,0.4)",
      }}
    >
      {value}
    </div>
  );
}

export default function Gamification() {
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
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px]" />
      </div>

      <div ref={sectionRef} className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — XP UI mock */}
          <div
            className={`scroll-reveal ${activated ? "revealed" : ""}`}
          >
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>
              {/* XP floating badges */}
              <XpBadge value="+10 XP" x="20%" delay="0s" color="green" />
              <XpBadge value="+25 XP" x="55%" delay="1.2s" color="indigo" />
              <XpBadge value="+5 XP" x="75%" delay="2.1s" color="green" />

              {/* User avatar */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80"
                  alt="User"
                  className="w-14 h-14 rounded-full border-2 border-indigo-500/50 object-cover"
                />
                <div>
                  <div
                    className="text-white font-bold text-base"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    Sophie M.
                  </div>
                  <div className="text-white/50 text-sm">Champion · Level 24</div>
                </div>
                <div className="ml-auto bg-indigo-600/20 border border-indigo-500/30 rounded-xl px-3 py-1.5 text-indigo-300 text-sm font-semibold">
                  <Zap className="w-3.5 h-3.5 inline-block mr-1 mb-0.5 text-indigo-400" />
                  8,420 XP
                </div>
              </div>

              {/* XP bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-white/40 mb-2">
                  <span>Progress to Level 25</span>
                  <span>8,420 / 10,000 XP</span>
                </div>
                <div className="h-3 bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000"
                    style={{ width: activated ? "84%" : "0%" }}
                  />
                </div>
              </div>

              {/* Recent activity */}
              <div className="space-y-2">
                {[
                  { label: "Streamed Luna Voss — Midnight Drive", xp: "+15", time: "2m ago" },
                  { label: "Shared track to Instagram", xp: "+25", time: "1h ago" },
                  { label: "Left a comment on new release", xp: "+10", time: "3h ago" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-white/[0.03] rounded-xl px-4 py-3 border border-white/[0.04]"
                  >
                    <span className="text-white/60 text-xs truncate flex-1 mr-2">{item.label}</span>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-green-400 text-xs font-semibold">{item.xp} XP</span>
                      <span className="text-white/30 text-xs">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tier badges */}
              <div className="mt-5 flex gap-2 flex-wrap">
                {["Listener", "Supporter", "Champion"].map((tier, i) => (
                  <span
                    key={tier}
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      i === 2
                        ? "bg-indigo-600/30 border border-indigo-500/50 text-indigo-300"
                        : "bg-white/[0.05] border border-white/[0.08] text-white/40"
                    }`}
                  >
                    {tier}
                  </span>
                ))}
                <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-white/[0.03] border border-white/[0.06] text-white/20">
                  Legend (locked)
                </span>
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div
            className={`scroll-reveal ${activated ? "revealed" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-500/20 rounded-full px-3 py-1.5 mb-5">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-indigo-300 text-xs font-medium">Gamification</span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] mb-5"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              The more you listen,
              <br />
              the more you{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                earn
              </span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Wavr's XP engine turns your listening habits into tangible value. Stream, engage, and
              champion your favorite artists — every interaction moves you up.
            </p>
            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-white/70 text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(79,70,229,0.4)]">
              Start earning XP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
