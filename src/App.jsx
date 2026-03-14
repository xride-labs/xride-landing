import { useEffect, useState, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { AnimatePresence, motion as Motion } from "framer-motion";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger);

// --- NEW GLOBAL LOADER COMPONENT ---
function InitialLoader({ onComplete }) {
  return (
    <Motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-[#030303] pointer-events-none"
    >
      <div className="flex flex-col items-center justify-center relative">
        <Motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF2D2D] animate-pulse" />
          <span className="ff-display text-white text-xl md:text-2xl font-black tracking-widest uppercase relative z-10">
            XRIDE LABS
          </span>
          <span className="w-2 h-2 rounded-full bg-[#00FFD1] animate-pulse" />
        </Motion.div>

        <Motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="ff-body text-[11px] text-white/40 mt-6 tracking-[0.3em] font-mono uppercase"
        >
          Initializing System
        </Motion.p>
      </div>
    </Motion.div>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef(null);

  // We no longer trigger scroll/refresh IMMEDIATELY on pathname change.
  // Instead, we wait for Framer Motion's AnimatePresence exit to finish.
  const handleExitComplete = () => {
    window.scrollTo(0, 0);
    // Give DOM a micro-tick to render the new route before refreshing GSAP
    setTimeout(() => {
      ScrollTrigger.refresh();
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    }, 50);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <div className="noise-overlay relative flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden bg-(--bg)">
      <AnimatePresence>
        {loading && (
          <InitialLoader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <Navbar />

      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        <Motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex-1 flex flex-col will-change-[opacity]"
        >
          <Outlet />
        </Motion.div>
      </AnimatePresence>
    </div>
  );
}
