import { useEffect, useRef, useState } from "react";
import { useMotionTemplate, useMotionValue } from "framer-motion";

export function Spotlight({ className = "", fill = "white" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      return () => el.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${fill}06, transparent 80%)`,
        }}
      />
    </div>
  );
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(200,50,50,0.06)",
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}
