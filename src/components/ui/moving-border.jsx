import { useRef, useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as = "button",
  ...otherProps
}) {
  const Component = as;
  return (
    <Component
      className={cn(
        "relative h-12 overflow-hidden bg-transparent p-[1px] text-sm",
        containerClassName,
      )}
      style={{ borderRadius: "9999px" }}
      {...otherProps}
    >
      <div className="absolute inset-0" style={{ borderRadius: "9999px" }}>
        <MovingBorderSVG duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#FF2D2D_40%,transparent_60%)]",
              borderClassName,
            )}
          />
        </MovingBorderSVG>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center bg-[#0a0a0a] antialiased backdrop-blur-xl",
          className,
        )}
        style={{ borderRadius: "9999px" }}
      >
        {children}
      </div>
    </Component>
  );
}

function MovingBorderSVG({ children, duration = 2000, rx, ry }) {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute h-full w-full"
      width="100%"
      height="100%"
    >
      <rect
        fill="none"
        width="100%"
        height="100%"
        rx={rx}
        ry={ry}
        ref={pathRef}
      />
      {pathLength > 0 && (
        <motion.rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          initial={{ pathOffset: 0 }}
          animate={{ pathOffset: [0, 1] }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            pathLength: 1,
            strokeDasharray: "1 1",
          }}
        />
      )}
      <foreignObject x="0" y="0" width="100%" height="100%">
        <div className="flex h-full w-full items-center justify-center">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: duration / 1000,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {children}
          </motion.div>
        </div>
      </foreignObject>
    </svg>
  );
}
