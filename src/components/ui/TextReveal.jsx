import { useRef } from "react";
import { useInView } from "framer-motion";

export function TextReveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`text-reveal-clip ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  const offset = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={
        isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...offset }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
