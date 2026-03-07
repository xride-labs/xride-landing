import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextGenerateEffect } from "./ui/text-generate-effect";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { label: "Twitter", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Zoomies", href: "https://zoomies.xride-labs.in" },
];

export default function ContactSection() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.from(buttonsRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.from(socialsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pad"
      style={{
        background: "#0a0a0a",
        padding: "160px clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      {/* Label */}
      <p
        ref={labelRef}
        className="ff-body mb-8"
        style={{ fontSize: 13, letterSpacing: "0.15em", color: "#666" }}
      >
        Cold reachouts encouraged
      </p>

      {/* Headline — TextGenerateEffect */}
      <div style={{ maxWidth: 1100 }}>
        <TextGenerateEffect
          words="If any of our beliefs resonated with you, reach out. We would love to talk."
          className="ff-display font-black text-white"
          duration={0.5}
          filter={true}
        />
      </div>

      {/* Buttons */}
      <div ref={buttonsRef} className="flex flex-wrap gap-4 mt-12">
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          Follow us on Twitter
        </a>
        <a href="mailto:hello@xride-labs.in" className="btn btn-solid">
          hello@xride-labs.in →
        </a>
      </div>

      {/* Social links */}
      <div ref={socialsRef} className="flex flex-wrap gap-6 mt-8">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover text-sm ff-body transition-colors duration-200"
            style={{ color: "#666" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
