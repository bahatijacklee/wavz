import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Radio, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Features", "How It Works", "For Artists", "Pricing"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_12px_rgba(79,70,229,0.5)]">
            <Radio className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span
            className="text-white font-bold text-lg tracking-tight"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Wavr
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-white/70 hover:text-white text-sm font-medium px-4 py-2 transition-colors duration-200" onClick={() => navigate("/dashboard")}>
            Log in
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_16px_rgba(79,70,229,0.4)]" onClick={() => navigate("/dashboard")}>
            Sign up free
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/[0.06] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-white/[0.06]">
            <button className="text-white/70 text-sm font-medium py-2 text-left" onClick={() => navigate("/dashboard")}>Log in</button>
            <button className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg" onClick={() => navigate("/dashboard")}>
              Sign up free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
