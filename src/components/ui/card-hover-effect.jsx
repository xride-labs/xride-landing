import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export function HoverEffect({ items, className }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-white/[0.03]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <HoverCard>{item.content}</HoverCard>
        </div>
      ))}
    </div>
  );
}

function HoverCard({ children, className }) {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-[#1a1a1a] bg-[#111111] p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
