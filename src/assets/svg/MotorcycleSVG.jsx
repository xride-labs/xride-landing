export function MotorcycleSVG() {
  return (
    <svg
      viewBox="0 0 460 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      <g className="draw-group">
        {/* â”€â”€ Rear wheel â”€â”€ */}
        <circle cx="100" cy="240" r="55" stroke="#FF2D2D" strokeWidth="1.2" />
        <circle cx="100" cy="240" r="48" stroke="#FF2D2D" strokeWidth="0.5" />
        <circle cx="100" cy="240" r="8" stroke="#FF2D2D" strokeWidth="0.8" />
        {/* Rear spokes */}
        <line
          x1="65"
          y1="205"
          x2="135"
          y2="275"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />
        <line
          x1="135"
          y1="205"
          x2="65"
          y2="275"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />
        <line
          x1="100"
          y1="185"
          x2="100"
          y2="295"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />
        <line
          x1="45"
          y1="240"
          x2="155"
          y2="240"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />

        {/* â”€â”€ Front wheel â”€â”€ */}
        <circle cx="365" cy="240" r="55" stroke="#FF2D2D" strokeWidth="1.2" />
        <circle cx="365" cy="240" r="48" stroke="#FF2D2D" strokeWidth="0.5" />
        <circle cx="365" cy="240" r="8" stroke="#FF2D2D" strokeWidth="0.8" />
        {/* Front spokes */}
        <line
          x1="330"
          y1="205"
          x2="400"
          y2="275"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />
        <line
          x1="400"
          y1="205"
          x2="330"
          y2="275"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />
        <line
          x1="365"
          y1="185"
          x2="365"
          y2="295"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />
        <line
          x1="310"
          y1="240"
          x2="420"
          y2="240"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />

        {/* â”€â”€ Swingarm â”€â”€ */}
        <line
          x1="100"
          y1="240"
          x2="210"
          y2="188"
          stroke="#FF2D2D"
          strokeWidth="1.2"
        />

        {/* â”€â”€ Main frame â”€â”€ */}
        <polyline
          points="210,188 255,130 305,128 335,148"
          stroke="#FF2D2D"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Down tube */}
        <line
          x1="255"
          y1="130"
          x2="225"
          y2="200"
          stroke="#FF2D2D"
          strokeWidth="1"
        />

        {/* Rear subframe */}
        <line
          x1="210"
          y1="188"
          x2="170"
          y2="148"
          stroke="#FF2D2D"
          strokeWidth="0.8"
        />
        <line
          x1="170"
          y1="148"
          x2="255"
          y2="130"
          stroke="#FF2D2D"
          strokeWidth="0.8"
        />

        {/* â”€â”€ Engine block â”€â”€ */}
        <rect
          x="200"
          y="188"
          width="55"
          height="42"
          rx="3"
          stroke="#FF2D2D"
          strokeWidth="1"
        />
        {/* Engine fins */}
        <line
          x1="208"
          y1="193"
          x2="208"
          y2="225"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />
        <line
          x1="218"
          y1="193"
          x2="218"
          y2="225"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />
        <line
          x1="228"
          y1="193"
          x2="228"
          y2="225"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />
        <line
          x1="238"
          y1="193"
          x2="238"
          y2="225"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />
        <line
          x1="248"
          y1="193"
          x2="248"
          y2="225"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />

        {/* â”€â”€ Fuel tank â”€â”€ */}
        <path
          d="M230 128 Q260 108 295 118 Q305 122 300 138 L242 140 Q225 136 230 128Z"
          stroke="#FF2D2D"
          strokeWidth="1"
          fill="none"
        />

        {/* â”€â”€ Seat â”€â”€ */}
        <path
          d="M175 146 Q195 132 235 136 L235 142 Q200 150 175 152Z"
          stroke="#FF2D2D"
          strokeWidth="0.8"
          fill="none"
        />

        {/* â”€â”€ Front fork â”€â”€ */}
        <line
          x1="335"
          y1="148"
          x2="365"
          y2="240"
          stroke="#FF2D2D"
          strokeWidth="1.2"
        />
        <line
          x1="340"
          y1="144"
          x2="370"
          y2="234"
          stroke="#FF2D2D"
          strokeWidth="0.5"
        />

        {/* â”€â”€ Handlebars â”€â”€ */}
        <path
          d="M290 112 L335 118 L348 108"
          stroke="#FF2D2D"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="290" cy="112" r="3" stroke="#FF2D2D" strokeWidth="0.5" />
        <circle cx="348" cy="108" r="3" stroke="#FF2D2D" strokeWidth="0.5" />

        {/* â”€â”€ Exhaust â”€â”€ */}
        <path
          d="M225 228 Q195 250 155 255 Q130 256 112 248"
          stroke="#FF2D2D"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="112"
          cy="248"
          rx="4"
          ry="6"
          stroke="#FF2D2D"
          strokeWidth="0.5"
        />

        {/* Fenders */}
        <path
          d="M85 190 Q100 178 125 184"
          stroke="#FF2D2D"
          strokeWidth="0.5"
          fill="none"
        />
        <path
          d="M345 192 Q365 180 385 192"
          stroke="#FF2D2D"
          strokeWidth="0.5"
          fill="none"
        />

        {/* Chain */}
        <line
          x1="100"
          y1="240"
          x2="215"
          y2="226"
          stroke="#FF2D2D"
          strokeWidth="0.4"
          strokeDasharray="3 2"
        />

        {/* Headlight */}
        <circle cx="358" cy="162" r="8" stroke="#FF2D2D" strokeWidth="0.6" />
        <circle cx="358" cy="162" r="4" stroke="#FF2D2D" strokeWidth="0.3" />

        {/* Tail light */}
        <rect
          x="155"
          y="144"
          width="12"
          height="6"
          rx="2"
          stroke="#FF2D2D"
          strokeWidth="0.5"
        />

        {/* â”€â”€ Dimension lines â”€â”€ */}
        {/* Width */}
        <line
          x1="45"
          y1="312"
          x2="420"
          y2="312"
          stroke="#FF2D2D"
          strokeWidth="0.4"
        />
        <line
          x1="45"
          y1="307"
          x2="45"
          y2="317"
          stroke="#FF2D2D"
          strokeWidth="0.4"
        />
        <line
          x1="420"
          y1="307"
          x2="420"
          y2="317"
          stroke="#FF2D2D"
          strokeWidth="0.4"
        />

        {/* Height */}
        <line
          x1="442"
          y1="108"
          x2="442"
          y2="295"
          stroke="#FF2D2D"
          strokeWidth="0.4"
        />
        <line
          x1="437"
          y1="108"
          x2="447"
          y2="108"
          stroke="#FF2D2D"
          strokeWidth="0.4"
        />
        <line
          x1="437"
          y1="295"
          x2="447"
          y2="295"
          stroke="#FF2D2D"
          strokeWidth="0.4"
        />

        {/* Pivot marker */}
        <circle
          cx="210"
          cy="188"
          r="3"
          stroke="#FF2D2D"
          strokeWidth="0.5"
          fill="none"
        />
        <line
          x1="214"
          y1="185"
          x2="245"
          y2="168"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />

        {/* Fork annotation line */}
        <line
          x1="350"
          y1="170"
          x2="395"
          y2="150"
          stroke="#FF2D2D"
          strokeWidth="0.3"
        />

        {/* Wheelbase dashed line */}
        <line
          x1="100"
          y1="302"
          x2="365"
          y2="302"
          stroke="#FF2D2D"
          strokeWidth="0.3"
          strokeDasharray="4 3"
        />
      </g>

      {/* â”€â”€ Annotation text (fades in) â”€â”€ */}
      <g className="anno-group">
        <text
          x="232"
          y="326"
          fill="#FF2D2D"
          fontSize="9"
          fontFamily="monospace"
          textAnchor="middle"
          opacity="0.7"
        >
          2100mm
        </text>
        <text
          x="450"
          y="206"
          fill="#FF2D2D"
          fontSize="9"
          fontFamily="monospace"
          opacity="0.7"
          transform="rotate(90, 450, 206)"
        >
          820mm
        </text>
        <text
          x="232"
          y="78"
          fill="#FF2D2D"
          fontSize="9"
          fontFamily="monospace"
          textAnchor="middle"
          opacity="0.5"
          letterSpacing="2"
        >
          ZOOMIES — MODEL 01
        </text>
        <text
          x="248"
          y="166"
          fill="#FF2D2D"
          fontSize="7"
          fontFamily="monospace"
          opacity="0.5"
        >
          pivot
        </text>
        <text
          x="398"
          y="148"
          fill="#FF2D2D"
          fontSize="7"
          fontFamily="monospace"
          opacity="0.5"
        >
          fork
        </text>
        <text
          x="232"
          y="300"
          fill="#FF2D2D"
          fontSize="7"
          fontFamily="monospace"
          textAnchor="middle"
          opacity="0.4"
        >
          WHEELBASE
        </text>
      </g>
    </svg>
  );
}
