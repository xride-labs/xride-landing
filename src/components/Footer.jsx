import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FooterArtSVG } from "../assets/svg/FooterArtSVG";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  { label: "Twitter", href: "https://twitter.com/xridelabs" },
  { label: "Instagram", href: "https://instagram.com/xridelabs" },
  { label: "YouTube", href: "https://youtube.com/@xridelabs" },
  { label: "Zoomies", href: "https://zoomies.xride-labs.in" },
];

export default function Footer() {
  const footerRef = useRef(null);
  const linksRef = useRef([]);
  const rightArtRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger links
      gsap.fromTo(
        linksRef.current.filter(Boolean),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 85%" },
        },
      );

      // Right art slide in
      if (rightArtRef.current) {
        gsap.fromTo(
          rightArtRef.current,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: footerRef.current, start: "top 85%" },
          },
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative mx-4 md:mx-6"
      style={{
        background: "var(--footer-bg)",
        borderRadius: "24px 24px 0 0",
        marginTop: "-24px",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[58%_42%] px-10 md:px-16 pt-20 pb-10">
        {/* ─── Left column: Large links ─── */}
        <div>
          <div className="flex flex-col gap-2">
            {footerLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (linksRef.current[i] = el)}
                className="ff-display font-bold block leading-[1.2]"
                style={{
                  fontSize: "clamp(36px, 5vw, 62px)",
                  color: "#fff",
                  textDecoration: "underline",
                  textUnderlineOffset: "6px",
                  textDecorationColor: "#333",
                  textDecorationThickness: "1px",
                  transition: "all 0.2s ease",
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent-red)";
                  e.currentTarget.style.transform = "translateX(10px)";
                  e.currentTarget.style.textDecorationColor =
                    "var(--accent-red)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.textDecorationColor = "#333";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Email pill */}
          <a
            href="mailto:hello@xride-labs.in"
            className="btn btn-dark mt-14 inline-flex"
          >
            hello@xride-labs.in →
          </a>
        </div>

        {/* ─── Right column: Decorative hatching ─── */}
        <div
          ref={rightArtRef}
          className="hidden md:flex hatching rounded-xl items-center justify-center relative mt-8 md:mt-0"
          style={{ minHeight: 300, opacity: 0 }}
        >
          <FooterArtSVG />
        </div>
      </div>

      {/* ─── Bottom bar ─── */}
      <div
        className="mx-10 md:mx-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <span className="text-[13px]" style={{ color: "var(--text-muted)" }}>
          © 2025, Xride Labs. Riders first.
        </span>
        <span
          className="text-[13px] underline"
          style={{ color: "var(--text-muted)", textUnderlineOffset: "4px" }}
        >
          Never Stop Riding
        </span>
      </div>
    </footer>
  );
}
