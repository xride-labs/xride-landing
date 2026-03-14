import React from "react";

export function EquipmentVisualSVG() {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", borderRadius: "inherit" }}
      className="equipment-visual-svg"
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

      {/* Center Gear Piece (Helmet abstraction) */}
      <g className="gear-spin" transform="translate(400, 225)">
        <circle
          cx="0"
          cy="0"
          r="100"
          stroke="#FF2D2D"
          strokeWidth="1.5"
          strokeDasharray="10 10"
        />
        <circle
          cx="0"
          cy="0"
          r="80"
          fill="#111111"
          stroke="#333333"
          strokeWidth="2"
        />
        <path
          d="M-60 -20 Q0 -60 60 -20 L70 40 Q0 80 -70 40 Z"
          fill="url(#gradient-visor)"
          stroke="#00FFD1"
          strokeWidth="2"
        />
      </g>

      {/* Connecting tech lines */}
      <path
        className="tech-line"
        d="M 400 225 L 200 100 L 100 100"
        stroke="#606060"
        fill="none"
      />
      <circle
        cx="100"
        cy="100"
        r="4"
        fill="#00FFD1"
        className="ping-pulse-tech"
      />

      <path
        className="tech-line"
        d="M 400 225 L 600 350 L 700 350"
        stroke="#606060"
        fill="none"
      />
      <circle
        cx="700"
        cy="350"
        r="4"
        fill="#FF2D2D"
        className="ping-pulse-tech"
      />

      {/* Floating UI cards */}
      <g className="dashboard-card" transform="translate(50, 150)">
        <rect width="140" height="60" rx="8" fill="#111111" stroke="#1E1E1E" />
        <rect x="15" y="15" width="40" height="8" rx="4" fill="#FF2D2D" />
        <rect
          x="15"
          y="35"
          width="90"
          height="8"
          rx="4"
          fill="#606060"
          opacity="0.5"
        />
      </g>

      <g className="dashboard-card" transform="translate(580, 80)">
        <rect width="160" height="80" rx="8" fill="#111111" stroke="#1E1E1E" />
        <rect x="20" y="20" width="70" height="8" rx="4" fill="#00FFD1" />
        <rect x="20" y="42" width="110" height="8" rx="4" fill="#606060" />
      </g>

      <defs>
        <linearGradient id="gradient-visor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#2A2A2A" />
        </linearGradient>
      </defs>

      <style>{`
        .equipment-visual-svg {
          overflow: hidden;
        }
        @keyframes spinSlow {
          0% { transform: translate(400px, 225px) rotate(0deg); }
          100% { transform: translate(400px, 225px) rotate(360deg); }
        }
        .gear-spin {
          animation: spinSlow 30s linear infinite;
        }
        @keyframes drawTechLine {
          0% { stroke-dasharray: 500; stroke-dashoffset: 500; }
          100% { stroke-dasharray: 500; stroke-dashoffset: 0; }
        }
        .tech-line {
          animation: drawTechLine 2s ease-out forwards;
        }
        @keyframes pingPulseTech {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(3); opacity: 0; }
        }
        .ping-pulse-tech {
          transform-origin: center;
          animation: pingPulseTech 2s infinite;
        }
        @keyframes floatUp {
          0% { transform: translate(var(--tx), var(--ty)) translateY(10px); opacity: 0; }
          100% { transform: translate(var(--tx), var(--ty)) translateY(0); opacity: 1; }
        }
        .dashboard-card {
          animation: 1s ease-out 0.5s both;
        }
        .dashboard-card:nth-of-type(1) { --tx: 50px; --ty: 150px; animation-name: floatUp; }
        .dashboard-card:nth-of-type(2) { --tx: 580px; --ty: 80px; animation-name: floatUp; animation-delay: 1s; }
      `}</style>
    </svg>
  );
}
