import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const beliefs = [
  {
    id: 1,
    text: "The best products are built by people who actually use them every day.",
  },
  {
    id: 2,
    text: "Every rider deserves a community that gets them.",
  },
  {
    id: 3,
    text: "Real problems are solved by shipping.",
    sub: "Not by long form plans and project reports.",
  },
  {
    id: 4,
    text: "Care is the most important ingredient in anything built by one human for another.",
  },
  {
    id: 5,
    text: "No product is complete until it is functional and beautiful.",
    sub: "Beauty is craft that goes beyond making something work.",
  },
];

export default function BeliefsCarousel() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const track = trackRef.current;
      if (!track) return;

      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div
        ref={trackRef}
        className="flex gap-4 beliefs-snap-scroll"
        style={{
          padding: "0 80px",
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        {beliefs.map((belief) => (
          <div
            key={belief.id}
            className="beliefs-snap-card flex-shrink-0 flex flex-col justify-between rounded-[20px]"
            style={{
              width: "clamp(360px, 33vw, 480px)",
              height: "clamp(560px, 80vh, 800px)",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              padding: "36px 40px",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent-red)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          >
            {/* Top: belief label */}
            <span className="text-[13px] font-mono" style={{ color: "#444" }}>
              Belief {String(belief.id).padStart(2, "0")}.
            </span>

            {/* Bottom: belief statement */}
            <div>
              <p
                className="ff-display font-bold leading-[1.3]"
                style={{
                  fontSize: "clamp(22px, 2.2vw, 28px)",
                  color: "var(--text)",
                }}
              >
                {belief.text}
              </p>
              {belief.sub && (
                <p
                  className="mt-3 text-[12px] font-mono"
                  style={{ color: "#444" }}
                >
                  {belief.sub}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
