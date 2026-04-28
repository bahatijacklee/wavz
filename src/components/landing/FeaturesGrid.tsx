import { useEffect, useRef, useState } from "react";
import { Zap, Shield, Trophy, Radio, Star, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time XP engine",
    desc: "Earn points instantly as you stream, share, and engage. Every action contributes to your fan score.",
  },
  {
    icon: Trophy,
    title: "Fan tier system",
    desc: "Rise through Listener, Supporter, Champion, and Legend tiers — each with escalating perks.",
  },
  {
    icon: Radio,
    title: "Exclusive streams",
    desc: "Top-tier fans get early access to unreleased tracks, live sessions, and virtual backstage passes.",
  },
  {
    icon: Shield,
    title: "Verified fan badges",
    desc: "Display your dedication with artist-specific badges that signal your superfan status.",
  },
  {
    icon: Star,
    title: "Artist challenges",
    desc: "Complete listening missions set by artists to earn bonus XP and limited-edition collectibles.",
  },
  {
    icon: Globe,
    title: "Global leaderboards",
    desc: "Compete with fans worldwide for top spots and win monthly prizes directly from artists.",
  },
];

export default function FeaturesGrid() {
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
    <section id="features" className="py-24 lg:py-32 relative">
      <div ref={sectionRef} className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 scroll-reveal ${activated ? "revealed" : ""}`}>
          <div className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-500/20 rounded-full px-3 py-1.5 mb-4">
            <Star className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-indigo-300 text-xs font-medium">What you get</span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] mb-4"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Every feature fans deserve
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            A complete engagement platform built around rewarding authentic music fandom.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-7 indigo-glow-hover cursor-default scroll-reveal ${
                activated ? "revealed" : ""
              }`}
              style={{
                transitionDelay: `${0.05 + idx * 0.07}s`,
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(79,70,229,0.15)] flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-indigo-400" strokeWidth={2} />
              </div>
              <h3
                className="text-white font-bold text-base mb-2"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
