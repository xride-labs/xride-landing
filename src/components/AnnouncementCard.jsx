import { useState } from "react";

export default function AnnouncementCard() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem("xride-announcement-dismissed") === "true";
    } catch {
      return false;
    }
  });

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("xride-announcement-dismissed", "true");
    } catch {
      /* noop */
    }
  };

  return (
    <div className="relative z-20 flex justify-center px-6 md:px-12 -mt-12 md:-mt-16 mb-20 md:mb-28">
      <div className="relative rounded-2xl px-8 md:px-10 py-8 md:py-10 w-full backdrop-blur-md bg-[#111]/80 border border-[#333] shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all hover:border-[var(--accent-red)] duration-300 max-w-[640px] group">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-red)] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-lg -z-10" />

        {/* Close / dismiss */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors text-white/40 hover:text-[var(--accent-red)] hover:bg-white/5"
          aria-label="Dismiss announcement"
        >
          ✕
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 rounded border border-[var(--accent-red)] text-[var(--accent-red)] bg-[var(--accent-red)]/5">
            New Note
          </span>
          <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 rounded border border-[#333] text-[#888]">
            #Zoomies
          </span>
        </div>

        {/* Body */}
        <p className="ff-display text-white text-[18px] md:text-[20px] font-medium leading-[1.4] pr-6">
          We are building{" "}
          <span className="text-(--accent-red)">Zoomies</span> — the
          operating system for every rider on the road.
        </p>
      </div>
    </div>
  );
}
