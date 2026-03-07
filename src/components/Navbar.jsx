import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-6 md:px-12 py-5"
      style={{
        background: scrolled ? "rgba(10, 10, 10, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        transition: "all 0.35s ease",
      }}
    >
      {/* ─── Left: Logo badge ─── */}
      <div className="flex flex-col items-start">
        <div
          className="ff-display flex flex-col items-center justify-center rounded-md px-2.5 py-1.5 leading-none"
          style={{ background: "var(--accent-red)" }}
        >
          <span className="text-white font-black text-[12px] tracking-wider leading-[1.15]">
            XRIDE
          </span>
          <span className="text-white font-black text-[12px] tracking-wider leading-[1.15]">
            LABS
          </span>
        </div>
        <span
          className="text-[10px] mt-1"
          style={{ color: "var(--text-muted)" }}
        >
          xride-labs.in
        </span>
      </div>

      {/* ─── Centre: Navigation pill cluster ─── */}
      <div
        className="hidden sm:flex items-center gap-0.5 rounded-full px-1.5 py-1.5"
        style={{
          background: "rgba(17, 17, 17, 0.7)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Home */}
        <Link
          to="/"
          className="ff-display flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[13px] font-bold transition-colors duration-200"
          style={{
            background: isHome ? "var(--accent-red)" : "transparent",
            color: isHome ? "#fff" : "var(--text-muted)",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
          >
            <path d="M12 3l10 9h-3v9h-6v-6h-2v6H5v-9H2l10-9z" />
          </svg>
          home
        </Link>

        {/* Notes */}
        <Link
          to="/notes"
          className="ff-display flex items-center gap-1.5 px-4 py-1.5 text-[13px] font-bold transition-colors duration-200 hover:text-white"
          style={{
            color:
              location.pathname === "/notes" ? "#fff" : "var(--text-muted)",
          }}
        >
          notes
          <span
            className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full text-[10px] font-bold text-white"
            style={{ background: "var(--accent-red)" }}
          >
            1
          </span>
        </Link>

        {/* Zoomies */}
        <a
          href="https://zoomies.xride-labs.in"
          target="_blank"
          rel="noopener noreferrer"
          className="ff-display px-4 py-1.5 text-[13px] font-bold transition-colors duration-200"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--accent-teal)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-muted)")
          }
        >
          zoomies ↗
        </a>
      </div>

      {/* ─── Right: Email CTA ─── */}
      <a
        href="mailto:hello@xride-labs.in"
        className="hidden sm:inline-flex items-center ff-body text-[13px] text-white rounded-full px-5 py-2.5"
        style={{
          background: "#111",
          border: "1px solid #2a2a2a",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent-red)";
          e.currentTarget.style.boxShadow = "0 0 24px rgba(255,45,45,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#2a2a2a";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        hello@xride-labs.in →
      </a>
    </nav>
  );
}
