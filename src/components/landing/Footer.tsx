import { useState } from "react";
import { Radio, Twitter, Instagram, Youtube, Send } from "lucide-react";

const cols = [
  {
    heading: "Product",
    links: ["Features", "How It Works", "Pricing", "Changelog"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Press Kit"],
  },
  {
    heading: "Support",
    links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#0A0D15]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_12px_rgba(79,70,229,0.4)]">
                <Radio className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span
                className="text-white font-bold text-lg tracking-tight"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                Wavr
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              The rewards platform that makes being a music fan worthwhile.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/40 transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {cols.map(({ heading, links }) => (
            <div key={heading}>
              <h4
                className="text-white/80 font-semibold text-sm mb-4"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white/80 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/[0.06] pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div
              className="text-white font-semibold text-sm mb-1"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              Stay in the loop
            </div>
            <div className="text-white/40 text-sm">New drops, platform updates, artist announcements.</div>
          </div>

          {submitted ? (
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              You're subscribed!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div
                className={`relative transition-all duration-300 ${focused ? "w-64" : "w-52"}`}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className={`w-full bg-white/[0.04] border rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 ${
                    focused
                      ? "border-indigo-500/60 shadow-[0_0_0_2px_rgba(79,70,229,0.15)]"
                      : "border-white/[0.08]"
                  }`}
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white p-2.5 rounded-xl transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_0_16px_rgba(79,70,229,0.35)] shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-sm">
            © {new Date().getFullYear()} Wavr Inc. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-white/25 hover:text-white/50 text-sm transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
