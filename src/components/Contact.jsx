import { useEffect, useRef, Fragment } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/xridelabs" },
  { label: "Instagram", href: "https://instagram.com/xridelabs" },
  { label: "YouTube", href: "https://youtube.com/@xridelabs" },
  { label: "Zoomies", href: "https://zoomies.xride-labs.in" },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const illustrationRef = useRef(null);
  const headlineRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        illustrationRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );

      const words = headlineRef.current.querySelectorAll(".word");
      gsap.fromTo(
        words,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        buttonsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: buttonsRef.current, start: "top 90%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headlineText =
    "If any of our beliefs resonated with you, reach out. We would love to talk.";

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center text-center bg-[var(--bg)] min-h-[80vh] py-24 md:py-32 px-6 md:px-12"
    >
      {/* Sketch illustration */}
      <div ref={illustrationRef} className="relative mb-8 md:mb-10">
        <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
          {/* Isometric cube */}
          <path
            d="M80 20 L140 55 L140 105 L80 140 L20 105 L20 55 Z"
            stroke="#FF2D2D"
            strokeWidth="0.8"
          />
          <line
            x1="80"
            y1="20"
            x2="80"
            y2="140"
            stroke="#FF2D2D"
            strokeWidth="0.4"
            opacity="0.5"
          />
          <line
            x1="20"
            y1="55"
            x2="140"
            y2="55"
            stroke="#FF2D2D"
            strokeWidth="0.4"
            opacity="0.3"
          />
          <line
            x1="20"
            y1="55"
            x2="80"
            y2="90"
            stroke="#FF2D2D"
            strokeWidth="0.3"
            opacity="0.3"
          />
          <line
            x1="140"
            y1="55"
            x2="80"
            y2="90"
            stroke="#FF2D2D"
            strokeWidth="0.3"
            opacity="0.3"
          />
          <line
            x1="80"
            y1="90"
            x2="80"
            y2="140"
            stroke="#FF2D2D"
            strokeWidth="0.3"
            opacity="0.3"
          />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line
              key={`lh${i}`}
              x1={25 + i * 8}
              y1={58 + i * 7}
              x2={25 + i * 8}
              y2={108 + i * 4.5}
              stroke="#FF2D2D"
              strokeWidth="0.2"
              opacity="0.2"
            />
          ))}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line
              key={`rh${i}`}
              x1={135 - i * 8}
              y1={58 + i * 7}
              x2={135 - i * 8}
              y2={108 + i * 4.5}
              stroke="#FF2D2D"
              strokeWidth="0.2"
              opacity="0.2"
            />
          ))}
        </svg>
        {/* Notification badge */}
        <div className="absolute top-0.5 right-0.5 w-[22px] h-[22px] flex items-center justify-center rounded-full text-[10px] font-bold text-white ff-body bg-[var(--accent-red)]">
          1
        </div>
      </div>

      {/* Label */}
      <p className="ff-body mb-12 md:mb-14 text-[13px] text-[var(--text-muted)] tracking-[0.08em] uppercase">
        Cold reachouts encouraged
      </p>

      {/* Headline */}
      <h2
        ref={headlineRef}
        className="ff-display font-black leading-[1.05] text-[clamp(38px,6.5vw,80px)] text-[var(--text)] tracking-[-0.02em] max-w-[1200px]"
      >
        {headlineText.split(" ").map((word, i) => {
          let rendered = word;
          if (word === "beliefs")
            rendered = (
              <span>
                belie<em className="letter">f</em>s
              </span>
            );
          else if (word === "resonated")
            rendered = (
              <span>
                resona<em className="letter">t</em>ed
              </span>
            );
          else if (word === "talk.")
            rendered = (
              <span>
                <em className="letter">t</em>alk.
              </span>
            );

          return (
            <span key={i} className="word inline-block mr-[0.28em]">
              {rendered}
            </span>
          );
        })}
      </h2>

      {/* Buttons */}
      <div
        ref={buttonsRef}
        className="flex flex-wrap gap-4 mt-12 md:mt-14 justify-center"
      >
        <a
          href="https://twitter.com/xridelabs"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          Follow on Twitter
        </a>
        <a href="mailto:hello@xride-labs.in" className="btn btn-dark">
          hello@xride-labs.in →
        </a>
      </div>

      {/* Social links */}
      <div className="flex flex-wrap gap-1 mt-8 justify-center items-center text-[14px] text-[var(--text-muted)]">
        {socialLinks.map((link, i) => (
          <Fragment key={link.label}>
            {i > 0 && <span className="mx-2">·</span>}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
