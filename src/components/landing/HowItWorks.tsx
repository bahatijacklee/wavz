import { useEffect, useRef, useState } from "react";
import { UserPlus, Headphones, Zap, Gift } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create your account",
    desc: "Sign up free in seconds. No credit card needed.",
  },
  {
    icon: Headphones,
    title: "Stream & engage",
    desc: "Listen, share, comment — every action earns XP.",
  },
  {
    icon: Zap,
    title: "Level up fast",
    desc: "Climb fan tiers and unlock exclusive benefits.",
  },
  {
    icon: Gift,
    title: "Claim rewards",
    desc: "Redeem XP for merch, tickets, meet & greets and more.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
    <section id="how-it-works" className="py-24 lg:py-32 relative">
      <div ref={sectionRef} className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 scroll-reveal ${activated ? "revealed" : ""}`}
        >
          <div className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-500/20 rounded-full px-3 py-1.5 mb-4">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-indigo-300 text-xs font-medium">Simple process</span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] mb-4"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            How it works
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            Four simple steps from fan to super-fan.
          </p>
        </div>

        {/* Steps */}
        <div
          className={`relative scroll-reveal ${activated ? "revealed" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[44px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-white/[0.08] z-0">
            {/* Traveling dot */}
            {activated && (
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(79,70,229,0.8)] animate-traveling-dot"
                style={{ animationDelay: "0.4s" }}
              />
            )}
            {/* Dashed overlay */}
            <div className="absolute inset-0 border-t border-dashed border-white/[0.12]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group cursor-default"
                style={{ transitionDelay: `${idx * 0.08}s` }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Icon node */}
                <div
                  className={`w-[88px] h-[88px] rounded-2xl flex items-center justify-center mb-5 border transition-all duration-250 ${
                    hoveredIdx === idx
                      ? "bg-indigo-600 border-indigo-500 scale-110 shadow-[0_0_24px_rgba(79,70,229,0.5)]"
                      : "bg-[#121826] border-white/[0.06]"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 transition-colors duration-250 ${
                      hoveredIdx === idx ? "text-white" : "text-indigo-400"
                    }`}
                    strokeWidth={1.8}
                  />
                </div>
                {/* Step number */}
                <div className="text-indigo-500/60 text-xs font-semibold mb-1 tracking-widest uppercase">
                  Step {idx + 1}
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
      </div>
    </section>
  );
}
