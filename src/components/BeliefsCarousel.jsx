import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const beliefs = [
  {
    id: 1,
    text: "The best products are built by people who actually use them every day.",
    sub: "We aren't just building software; we're building the tools we desperately needed on our own rides.",
  },
  {
    id: 2,
    text: "Every rider deserves a community that gets them.",
    sub: "The road can be lonely. We believe technology should connect riders, not isolate them.",
  },
  {
    id: 3,
    text: "Real problems are solved by shipping.",
    sub: "Not by long-form plans and project reports. We build, we test, we ride, and we iterate.",
  },
  {
    id: 4,
    text: "Care is the most important ingredient in anything built by one human for another.",
    sub: "From the pixel-perfect borders to the roar of a perfectly tuned engine, details matter.",
  },
  {
    id: 5,
    text: "No product is complete until it is functional and beautiful.",
    sub: "Beauty is craft that goes beyond making something work. It has to feel right.",
  },
];

export default function BeliefsCarousel() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const section = sectionRef.current;
        const track = trackRef.current;

        if (!section || !track) return;

        const getScrollDistance = () =>
          Math.max(0, track.scrollWidth - section.clientWidth);

        if (getScrollDistance() <= 0) return;

        gsap.set(track, {
          force3D: true,
          willChange: "transform",
        });

        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            pinReparent: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="beliefs-carousel-wrapper relative isolate z-20 w-screen">
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-(--bg)"
      >
        <div
          ref={trackRef}
          className="beliefs-snap-scroll flex md:items-center items-start min-h-dvh md:min-h-screen w-full overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none gap-8 px-6 py-12 md:px-14 md:py-20 lg:px-24 pb-18 md:pb-18 hide-scrollbar"
        >
          {beliefs.map((belief) => (
            <div
              key={belief.id}
              style={{
                WebkitBackfaceVisibility: "hidden",
                WebkitTransform: "translate3d(0, 0, 0)",
              }}
              className="beliefs-snap-card snap-center group relative isolate motion-layer flex h-[clamp(430px,67vh,640px)] w-[86vw] md:w-[clamp(360px,34vw,460px)] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/8 bg-[#0d0d0d]/95 px-8 py-9 shadow-[0_20px_50px_rgba(0,0,0,0.32)] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#FF2D2D]/40 hover:shadow-[0_20px_40px_rgba(255,45,45,0.08)] md:px-11 md:py-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_38%)] opacity-80" />
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top: belief label */}
              <span className="text-[13px] font-mono text-white/40 tracking-widest uppercase relative z-10 group-hover:text-[#FF2D2D]/80 transition-colors duration-300">
                Belief {String(belief.id).padStart(2, "0")}.
              </span>

              {/* Bottom: belief statement */}
              <div className="relative z-10">
                <p className="ff-display font-medium leading-[1.3] text-[clamp(24px,2.2vw,30px)] text-white/90 group-hover:text-white transition-colors duration-300 tracking-tight">
                  {belief.text}
                </p>
                {belief.sub && (
                  <p className="mt-5 text-[13px] font-mono leading-relaxed text-white/44">
                    {belief.sub}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
