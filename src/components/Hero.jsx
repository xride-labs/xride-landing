import { MotorcycleSVG } from "../assets/svg/MotorcycleSVG";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const svgRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Parallax grid ── */
      gsap.to(gridRef.current, {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* ── SVG draw-in ── */
      const drawEls = svgRef.current.querySelectorAll(
        ".draw-group path, .draw-group circle, .draw-group line, .draw-group polyline, .draw-group rect, .draw-group ellipse",
      );
      drawEls.forEach((el) => {
        let len;
        try {
          len = el.getTotalLength();
        } catch {
          len = 200;
        }
        gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
      });

      const annoGroup = svgRef.current.querySelector(".anno-group");
      gsap.set(annoGroup, { opacity: 0 });

      const tl = gsap.timeline();

      // 1. Draw paths (0 → 1.8s)
      tl.to(drawEls, {
        strokeDashoffset: 0,
        duration: 0.6,
        stagger: 0.04,
        ease: "power2.inOut",
      });

      // Fade in annotation text
      tl.to(annoGroup, { opacity: 1, duration: 0.4 }, 1.4);

      // 2. Headline slides up (starts at 0.7s)
      tl.fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0.7,
      );

      // 3. Subtext (starts at 1.1s)
      tl.fromTo(
        subtextRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        1.1,
      );

      // 4. CTA (starts at 1.4s)
      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        1.4,
      );

      // 5. Floating loop (starts after draw-in at 1.8s)
      tl.to(
        svgRef.current,
        {
          y: -16,
          duration: 3.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        },
        1.8,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-shell section-space-lg relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh", background: "var(--bg)" }}
    >
      {/* Graph paper grid (parallax) */}
      <div
        ref={gridRef}
        className="hero-grid absolute inset-0"
        style={{ height: "140%", top: "-20%" }}
      />

      <div className="section-inner relative z-10 flex flex-col items-center py-10 text-center">
        {/* Motorcycle Blueprint SVG */}
        <div
          ref={svgRef}
          className="mb-12"
          style={{ width: 460, maxWidth: "90vw" }}
        >
          <MotorcycleSVG />
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="ff-display font-black leading-[1.05]"
          style={{
            fontSize: "clamp(48px, 8vw, 100px)",
            letterSpacing: "-0.03em",
            color: "var(--text)",
            opacity: 0,
          }}
        >
          Defini<em className="letter">t</em>ely no<em className="letter">t</em>{" "}
          a cul<em className="letter">t</em>.
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="section-copy mt-6 max-w-[34rem]"
          style={{ opacity: 0 }}
        >
          Xride Labs is the umbrella under which rider-first software and
          thriving two-wheel communities are built.
        </p>

        {/* CTA */}
        <a
          ref={ctaRef}
          href="mailto:hello@xride-labs.in"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-bold cursor-pointer transition-all duration-300 bg-white text-black hover:scale-105 hover:shadow-[0_0_24px_rgba(255,255,255,0.4)] mt-10"
          style={{ opacity: 0 }}
        >
          hello@xride-labs.in →
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Motorcycle engineering sketch — blueprint style
   ───────────────────────────────────────────── */
