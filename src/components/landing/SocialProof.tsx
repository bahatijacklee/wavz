import { Music, Users, Mic2, DollarSign } from "lucide-react";

const stats = [
  { icon: Music, value: "1.2B+", label: "Streams tracked" },
  { icon: Users, value: "2.4M+", label: "Active fans" },
  { icon: Mic2, value: "18K+", label: "Artists onboard" },
  { icon: DollarSign, value: "$4.8M+", label: "Rewards paid out" },
];

export default function SocialProof() {
  return (
    <div className="border-y border-white/[0.06] bg-[#121826]/60 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col sm:flex-row items-center gap-3 py-7 px-6 sm:px-8 justify-center"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(79,70,229,0.15)] flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-indigo-400" strokeWidth={2} />
              </div>
              <div className="text-center sm:text-left">
                <div
                  className="text-white font-extrabold text-xl tracking-[-0.02em]"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  {value}
                </div>
                <div className="text-white/50 text-xs mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
