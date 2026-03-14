import { useEffect, useState } from "react";
import { stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "../../lib/utils";

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-10%" });
  const [hasAnimated, setHasAnimated] = useState(false);
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView && !hasAnimated) {
      animate(
        "span",
        { opacity: 1, filter: filter ? "blur(0px)" : "none" },
        { duration: duration, delay: stagger(0.08) },
      ).then(() => {
        setHasAnimated(true);
      });
    }
  }, [isInView, hasAnimated, animate, duration, filter]);

  const renderWords = () => (
    <div ref={scope}>
      {wordsArray.map((word, idx) => (
        <span
          key={word + idx}
          className="opacity-0"
          style={{ filter: filter ? "blur(10px)" : "none" }}
        >
          {word}{" "}
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
}
