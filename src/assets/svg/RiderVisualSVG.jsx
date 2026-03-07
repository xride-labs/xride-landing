import React from "react";
// We removed external import to just use inline styles

export function RiderVisualSVG() {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", borderRadius: "inherit" }}
      className="rider-visual-svg"
    >
      <rect width="800" height="450" fill="#0A0A0A" />
      {/* Background Grid */}
      <g stroke="#1E1E1E" strokeWidth="1">
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="450" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} />
        ))}
      </g>

      {/* Map route path (animated) */}
      <path
        className="draw-route"
        d="M 100 350 L 250 200 L 400 250 L 550 100 L 700 150"
        stroke="#FF2D2D"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Starting point */}
      <circle
        className="draw-element"
        cx="100"
        cy="350"
        r="8"
        fill="#0A0A0A"
        stroke="#00FFD1"
        strokeWidth="2"
      />
      {/* Ending point (Rider) */}
      <circle
        className="draw-element"
        cx="700"
        cy="150"
        r="10"
        fill="#FF2D2D"
      />
      <circle
        className="ping-pulse"
        cx="700"
        cy="150"
        r="20"
        fill="none"
        stroke="#FF2D2D"
        strokeWidth="2"
      />

      {/* Floating UI cards */}
      <g className="dashboard-card" transform="translate(150, 50)">
        <rect width="180" height="70" rx="8" fill="#111111" stroke="#1E1E1E" />
        <rect x="20" y="20" width="80" height="8" rx="4" fill="#606060" />
        <rect
          x="20"
          y="40"
          width="120"
          height="8"
          rx="4"
          fill="#606060"
          opacity="0.5"
        />
      </g>

      <g className="dashboard-card" transform="translate(450, 300)">
        <rect width="180" height="90" rx="8" fill="#111111" stroke="#1E1E1E" />
        <rect x="20" y="20" width="60" height="8" rx="4" fill="#00FFD1" />
        <rect x="20" y="42" width="100" height="8" rx="4" fill="#606060" />
        <rect
          x="20"
          y="62"
          width="140"
          height="8"
          rx="4"
          fill="#606060"
          opacity="0.5"
        />
      </g>

      <style>{`
        .rider-visual-svg {
          overflow: hidden;
        }
        @keyframes drawRoute {
          0% { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          100% { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        .draw-route {
          animation: drawRoute 3s ease-in-out forwards infinite alternate;
        }
        @keyframes pingPulse {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        .ping-pulse {
          transform-origin: 700px 150px;
          animation: pingPulse 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes floatUp {
          0% { transform: translate(var(--tx), var(--ty)) translateY(10px); opacity: 0; }
          100% { transform: translate(var(--tx), var(--ty)) translateY(0); opacity: 1; }
        }
        .dashboard-card {
          animation: 1s ease-out 0.5s both;
        }
        .dashboard-card:nth-of-type(1) { --tx: 150px; --ty: 50px; animation-name: floatUp; }
        .dashboard-card:nth-of-type(2) { --tx: 450px; --ty: 300px; animation-name: floatUp; animation-delay: 1s; }
      `}</style>
    </svg>
  );
}
