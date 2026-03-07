import { useState, useEffect, useCallback } from "react";
import { cn } from "../../lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = useCallback(
    (currentDirection) => {
      const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
      const currentIndex = directions.indexOf(currentDirection);
      const nextIndex = clockwise
        ? (currentIndex - 1 + directions.length) % directions.length
        : (currentIndex + 1) % directions.length;
      return directions[nextIndex];
    },
    [clockwise],
  );

  const movingMap = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #FF2D2D 0%, rgba(255,45,45,0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #FF2D2D 0%, rgba(255,45,45,0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, #00FFD1 0%, rgba(0,255,209,0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, #00FFD1 0%, rgba(0,255,209,0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.2% at 50% 50%, #FF2D2D 0%, rgba(255,45,45,0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, rotateDirection]);

  const Component = as;
  return (
    <Component
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex h-min w-fit flex-col flex-nowrap content-center items-center justify-center gap-10 overflow-visible rounded-full p-px decoration-clone transition duration-500 hover:bg-black/10",
        containerClassName,
      )}
      {...props}
    >
      <div
        className={cn(
          "z-10 w-auto rounded-[inherit] bg-[#0a0a0a] px-6 py-3",
          className,
        )}
      >
        {children}
      </div>
      <motion.div
        className="absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]"
        style={{ filter: "blur(2px)", width: "100%", height: "100%" }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="absolute inset-[2px] z-[1] flex-none rounded-[inherit] bg-[#0a0a0a]" />
    </Component>
  );
}
