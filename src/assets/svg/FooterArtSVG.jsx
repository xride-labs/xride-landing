import React from "react";

export function FooterArtSVG() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", maxWidth: "160px", opacity: 0.8 }}
      className="footer-art-svg"
    >
      <g stroke="#FF2D2D" strokeWidth="1.5" className="draw-group-footer">
        {/* Outer dashed ring */}
        <circle cx="100" cy="100" r="90" strokeDasharray="8 8" opacity="0.5" />
        {/* Inner solid ring */}
        <circle cx="100" cy="100" r="75" />
        {/* Center hub */}
        <circle cx="100" cy="100" r="20" />
        <circle cx="100" cy="100" r="8" fill="#FF2D2D" />

        {/* Spokes */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = i * 45 * (Math.PI / 180);
          const x1 = 100 + Math.cos(angle) * 20;
          const y1 = 100 + Math.sin(angle) * 20;
          const x2 = 100 + Math.cos(angle) * 75;
          const y2 = 100 + Math.sin(angle) * 75;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>

      <style>{`
        .draw-group-footer circle, .draw-group-footer line {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawFooter 3s ease-in-out infinite alternate;
        }
        .footer-art-svg {
          animation: spinFooter 20s linear infinite;
          transform-origin: 50% 50%;
        }
        @keyframes drawFooter {
          0% { stroke-dashoffset: 600; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes spinFooter {
          100% { transform: rotate(360deg); }
        }
        .draw-group-footer circle:nth-child(2) { animation-delay: 0.2s; }
        .draw-group-footer circle:nth-child(3) { animation-delay: 0.4s; }
      `}</style>
    </svg>
  );
}
