import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AnimatePresence,
  motion as Motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    // 50% height of heroin approximate ~ 300px
    if (typeof current === "number") {
      if (current > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  });

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-6 md:px-12 lg:px-24 py-8 md:py-11 transition-all duration-500 pointer-events-none">
        {/* ─── Left: Logo badge (always fixed) ─── */}
        <div className="flex pointer-events-auto">
          <Link
            to="/"
            className="flex flex-col items-start hover:opacity-80 transition-opacity"
          >
            <div className="ff-display flex flex-col items-center justify-center rounded-md px-3 py-2 leading-none bg-[var(--accent-red)]">
              <span className="text-white font-black text-[13px] tracking-wider leading-[1.1]">
                XRIDE
              </span>
              <span className="text-white font-black text-[13px] tracking-wider leading-[1.1]">
                LABS
              </span>
            </div>
            <span className="text-[10px] mt-1.5 font-medium text-[var(--text-muted)]">
              xride-labs.in
            </span>
          </Link>
        </div>

        {/* ─── Unscrolled Default Navbar (links & CTA on sides) ─── */}
        <div
          className={cn(
            "flex items-center w-full justify-between pl-8 md:pl-16 pointer-events-auto transition-all duration-500",
            scrolled
              ? "opacity-0 -translate-y-4 pointer-events-none"
              : "opacity-100 translate-y-0",
          )}
        >
          <div className="flex-1 flex justify-center h-full">
            {/* ─── Centre: Navigation pill cluster ─── */}
            <div className="hidden sm:flex items-center gap-7 md:gap-12 rounded-full px-7 py-4.5 bg-[rgba(17,17,17,0.7)] border border-[rgba(255,255,255,0.06)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[10px]">
              {/* Home */}
              <Link
                to="/"
                className={cn(
                  "ff-display flex items-center gap-2 rounded-full px-5 md:px-6 py-2.5 text-[14px] font-bold transition-all duration-400 ease-out hover:scale-105",
                  isHome
                    ? "text-white bg-[var(--accent-red)]"
                    : "text-[var(--text-muted)] hover:text-white",
                )}
              >
                <svg
                  width="14"
                  height="14"
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
                className={cn(
                  "ff-display flex items-center gap-2 rounded-full px-5 md:px-6 py-2.5 text-[14px] font-bold transition-all duration-400 ease-out hover:text-white hover:scale-105",
                  location.pathname === "/notes"
                    ? "text-white bg-white/5"
                    : "text-[var(--text-muted)]",
                )}
              >
                notes
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-bold text-white shadow-sm shadow-red-500/20 bg-[var(--accent-red)]">
                  1
                </span>
              </Link>

              {/* Zoomies */}
              <a
                href="https://zoomies.xride-labs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="ff-display px-5 md:px-6 py-2.5 text-[14px] font-bold transition-all duration-400 ease-out hover:scale-105 rounded-full text-[var(--text-muted)] hover:text-[var(--accent-teal)] hover:bg-[rgba(0,255,204,0.05)]"
              >
                zoomies ↗
              </a>
            </div>
          </div>

          <div className="flex justify-end">
            <a
              href="mailto:hello@xride-labs.in"
              className="hidden sm:inline-flex items-center ff-body text-[14px] font-semibold text-white rounded-full px-6 py-3 bg-[#111] border border-[#333] transition-all duration-300 hover:border-[var(--accent-red)] hover:shadow-[0_8px_30px_rgba(255,45,45,0.4)] hover:-translate-y-px"
            >
              hello@xride-labs.in{" "}
              <span className="ml-2 font-black text-red-500">→</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Floating Centered Navbar (Aceternity style) ─── */}
      <AnimatePresence mode="wait">
        {scrolled && (
          <Motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
            className="fixed top-6 inset-x-0 mx-auto z-8888 flex items-center justify-center pointer-events-none"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-10 rounded-full px-4 sm:px-7 py-2.5 sm:py-3.5 pointer-events-auto backdrop-blur-xl bg-[rgba(10,10,10,0.85)] border border-[rgba(255,255,255,0.1)] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2 sm:gap-8">
                <Link
                  to="/"
                  className={cn(
                    "flex items-center gap-1 sm:gap-2 rounded-full px-3 py-2 text-[12px] sm:text-[14px] font-bold transition-all duration-200 hover:bg-white/10 hover:text-white",
                    isHome ? "text-white bg-white/5" : "text-neutral-400",
                  )}
                >
                  home
                </Link>
                <Link
                  to="/notes"
                  className={cn(
                    "flex items-center gap-1 sm:gap-2 rounded-full px-3 py-2 text-[12px] sm:text-[14px] font-bold transition-all duration-200 hover:bg-white/10 hover:text-white",
                    location.pathname === "/notes"
                      ? "text-white bg-white/5"
                      : "text-neutral-400",
                  )}
                >
                  notes
                </Link>
                <a
                  href="https://zoomies.xride-labs.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 rounded-full px-3 py-2 text-[12px] sm:text-[14px] font-bold text-neutral-400 transition-all duration-200 hover:bg-[rgba(0,255,204,0.1)] hover:text-[var(--accent-teal)]"
                >
                  zoomies ↗
                </a>
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-white/10 hidden sm:block" />

              {/* Glowing CTA Button */}
              <a
                href="mailto:hello@xride-labs.in"
                className="hidden sm:inline-flex relative rounded-full px-5 py-2 text-[14px] font-bold text-white transition-all overflow-hidden group bg-[var(--accent-red)] shadow-[0_0_20px_rgba(255,45,45,0.5)] border border-[rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  hello@xride-labs.in{" "}
                  <span className="text-white group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </a>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
