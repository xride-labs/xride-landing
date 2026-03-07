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
    <div className="relative z-20 flex justify-center px-6 -mt-16 mb-10">
      <div
        className="relative rounded-2xl px-8 py-8 w-full"
        style={{ maxWidth: 500, background: "var(--accent-red)" }}
      >
        {/* Close / dismiss */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
          style={{ color: "rgba(255,255,255,0.6)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.6)";
            e.currentTarget.style.background = "transparent";
          }}
          aria-label="Dismiss announcement"
        >
          ✕
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["new note", "# zoomies", "# announcement"].map((tag) => (
            <span
              key={tag}
              className="text-[11px] ff-body font-medium px-3 py-1 rounded-full"
              style={{
                background: "rgba(0,0,0,0.2)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Body */}
        <p
          className="ff-body text-white text-[18px] font-medium"
          style={{ lineHeight: 1.55 }}
        >
          We are building Zoomies — the operating system for every rider on the
          road.
        </p>
      </div>
    </div>
  );
}
