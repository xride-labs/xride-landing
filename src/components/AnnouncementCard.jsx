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
      console.log("Announcement dismissed");
    }
  };

  return (
    <div className="section-shell relative z-20 -mt-12 mb-20 md:-mt-16 md:mb-28">
      <div className="section-inner flex justify-center">
        <div className="surface-panel group relative w-full max-w-[40rem] rounded-[1.5rem] px-8 py-8 transition-all duration-300 hover:border-[var(--accent-red)] md:px-10 md:py-10">
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
            <span className="text-[var(--accent-red)]">Zoomies</span> — the
            operating system for every rider on the road.
          </p>
        </div>
      </div>
    </div>
  );
}
