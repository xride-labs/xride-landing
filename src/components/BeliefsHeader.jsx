import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BeliefsHeader() {
  const sectionRef = useRef(null);
  const leftArtRef = useRef(null);
  const rightArtRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        leftArtRef.current,
        { x: -260, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.3, ease: "power3.out" },
        0,
      );

      tl.fromTo(
        rightArtRef.current,
        { x: 260, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.3, ease: "power3.out" },
        0,
      );

      tl.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0.3,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden flex items-center justify-center bg-[var(--bg)] min-h-[80vh] py-24 md:py-32 px-6 md:px-12"
    >
      {/* Left side illustration */}
      <div
        ref={leftArtRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
      >
        <svg
          width="300"
          height="400"
          viewBox="0 0 300 400"
          fill="none"
          className="opacity-[0.22]"
        >
          {/* Wheel with spokes */}
          <circle
            cx="150"
            cy="200"
            r="120"
            stroke="#FF2D2D"
            strokeWidth="0.8"
          />
          <circle cx="150" cy="200" r="80" stroke="#FF2D2D" strokeWidth="0.5" />
          <circle cx="150" cy="200" r="40" stroke="#FF2D2D" strokeWidth="0.5" />
          <circle cx="150" cy="200" r="10" stroke="#FF2D2D" strokeWidth="0.8" />
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <line
              key={angle}
              x1={150 + 10 * Math.cos((angle * Math.PI) / 180)}
              y1={200 + 10 * Math.sin((angle * Math.PI) / 180)}
              x2={150 + 120 * Math.cos((angle * Math.PI) / 180)}
              y2={200 + 120 * Math.sin((angle * Math.PI) / 180)}
              stroke="#FF2D2D"
              strokeWidth="0.3"
            />
          ))}
          {/* Abstract rider */}
          <path
            d="M120 100 Q130 60 160 50 Q180 45 190 70 L200 120 Q195 150 170 160"
            stroke="#FF2D2D"
            strokeWidth="0.6"
            fill="none"
          />
          <path
            d="M170 160 L180 200 Q175 230 160 240"
            stroke="#FF2D2D"
            strokeWidth="0.6"
            fill="none"
          />
        </svg>
      </div>

      {/* Right side illustration */}
      <div
        ref={rightArtRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
      >
        <svg
          width="300"
          height="400"
          viewBox="0 0 300 400"
          fill="none"
          className="opacity-[0.22]"
        >
          {/* Gear */}
          <circle
            cx="150"
            cy="200"
            r="110"
            stroke="#FF2D2D"
            strokeWidth="0.8"
          />
          <circle cx="150" cy="200" r="70" stroke="#FF2D2D" strokeWidth="0.5" />
          <circle cx="150" cy="200" r="25" stroke="#FF2D2D" strokeWidth="0.8" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <rect
              key={angle}
              x={150 + 105 * Math.cos((angle * Math.PI) / 180) - 6}
              y={200 + 105 * Math.sin((angle * Math.PI) / 180) - 6}
              width="12"
              height="12"
              stroke="#FF2D2D"
              strokeWidth="0.5"
              fill="none"
              transform={`rotate(${angle}, ${150 + 105 * Math.cos((angle * Math.PI) / 180)}, ${200 + 105 * Math.sin((angle * Math.PI) / 180)})`}
            />
          ))}
          <line
            x1="150"
            y1="90"
            x2="150"
            y2="310"
            stroke="#FF2D2D"
            strokeWidth="0.3"
          />
          <line
            x1="40"
            y1="200"
            x2="260"
            y2="200"
            stroke="#FF2D2D"
            strokeWidth="0.3"
          />
          <path
            d="M100 130 A80 80 0 0 1 200 130"
            stroke="#FF2D2D"
            strokeWidth="0.4"
            fill="none"
          />
        </svg>
      </div>

      {/* Centre content */}
      <div ref={textRef} className="relative z-10 text-center max-w-3xl">
        {/* Sparkle / asterisk */}
        <div className="mb-8 flex justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#606060"
            strokeWidth="1.5"
          >
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="4.9" y1="4.9" x2="19.1" y2="19.1" />
            <line x1="19.1" y1="4.9" x2="4.9" y2="19.1" />
          </svg>
        </div>

        <h2 className="ff-display font-black leading-[1.08] text-[clamp(42px,7vw,80px)] text-[var(--text)] tracking-[-0.02em]">
          Why do we bui<em className="letter">l</em>d
          <br />
          what we bui<em className="letter">l</em>d?
        </h2>

        <p className="ff-body mt-8 md:mt-10 mx-auto text-[clamp(16px,2vw,18px)] text-[var(--text-muted)] max-w-[560px] leading-[1.7]">
          We build because we ride. Every product we ship is born from a real
          problem we faced on the road. We do what we do because of the beliefs
          everyone at Xride Labs shares.
        </p>
      </div>
    </section>
  );
}
