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
      // Illustration fade up
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

      // Word-by-word headline
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

      // Buttons
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
      className="relative flex flex-col items-center text-center"
      style={{ background: "var(--bg)", padding: "160px 24px" }}
    >
      {/* Sketch illustration */}
      <div
        ref={illustrationRef}
        className="relative mb-6"
        style={{ opacity: 0 }}
      >
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
          {/* Left face hatching */}
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
          {/* Right face hatching */}
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
        <div
          className="absolute flex items-center justify-center rounded-full text-[10px] font-bold text-white ff-body"
          style={{
            top: 2,
            right: 2,
            width: 22,
            height: 22,
            background: "var(--accent-red)",
          }}
        >
          1
        </div>
      </div>

      {/* Label */}
      <p
        className="ff-body mb-10"
        style={{
          fontSize: "14px",
          color: "var(--text-muted)",
          letterSpacing: "0.06em",
        }}
      >
        Cold reachouts encouraged
      </p>

      {/* Headline — word-by-word stagger */}
      <h2
        ref={headlineRef}
        className="ff-display font-black leading-[1.05]"
        style={{
          fontSize: "clamp(40px, 7vw, 90px)",
          color: "var(--text)",
          letterSpacing: "-0.02em",
          maxWidth: 1200,
        }}
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
            <span
              key={i}
              className="word inline-block"
              style={{ opacity: 0, marginRight: "0.28em" }}
            >
              {rendered}
            </span>
          );
        })}
      </h2>

      {/* Buttons */}
      <div
        ref={buttonsRef}
        className="flex flex-wrap gap-4 mt-12 justify-center"
        style={{ opacity: 0 }}
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
      <div
        className="flex flex-wrap gap-1 mt-8 justify-center items-center"
        style={{ fontSize: "14px", color: "var(--text-muted)" }}
      >
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
