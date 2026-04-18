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
    <div className="section-shell relative z-20 -mt-10 mb-24 md:-mt-14 md:mb-32">
      <div className="section-inner flex justify-center">
        <div className="surface-panel group relative w-full max-w-[46rem] rounded-[1.65rem] px-8 py-9 transition-all duration-500 hover:border-[var(--accent-red)] md:px-12 md:py-11">
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
          <div className="flex flex-wrap gap-2.5 mb-6">
            <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 rounded border border-[var(--accent-red)] text-[var(--accent-red)] bg-[var(--accent-red)]/5">
              New Note
            </span>
            <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 rounded border border-[#333] text-[#888]">
              #Zoomies
            </span>
          </div>

          {/* Body */}
          <p className="ff-display text-white text-[19px] md:text-[22px] font-medium leading-[1.5] pr-8 md:pr-10">
            We are building{" "}
            <span className="text-[var(--accent-red)]">Zoomies</span> — the
            operating system for every rider on the road.
          </p>
        </div>
      </div>
    </div>
  );
}
