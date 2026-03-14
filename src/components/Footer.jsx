import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

const legalLinks = [
  { label: "About Us", to: "/about" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Refund Policy", to: "/refund" },
  { label: "Contact Us", to: "/contact" },
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
      className="relative mx-4 md:mx-6 bg-[var(--footer-bg)] rounded-t-3xl mt-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-[58%_42%] px-8 md:px-14 lg:px-16 pt-20 md:pt-28 pb-16">
        {/* Left column: Large links */}
        <div>
          <div className="flex flex-col gap-3 md:gap-4">
            {footerLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (linksRef.current[i] = el)}
                className="ff-display font-bold block leading-[1.15] text-[clamp(32px,4.5vw,56px)] text-white underline underline-offset-[6px] decoration-[#333] decoration-1 transition-all duration-200 hover:text-[var(--accent-red)] hover:translate-x-2.5 hover:decoration-[var(--accent-red)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Email pill */}
          <a
            href="mailto:hello@xride-labs.in"
            className="btn btn-dark mt-16 md:mt-20 inline-flex"
          >
            hello@xride-labs.in →
          </a>
        </div>

        {/* Right column: Decorative hatching */}
        <div
          ref={rightArtRef}
          className="hidden md:flex hatching rounded-xl items-center justify-center relative mt-8 md:mt-0 min-h-[320px]"
        >
          <FooterArtSVG />
        </div>
      </div>

      {/* Legal links row */}
      <div className="mx-8 md:mx-14 lg:mx-16 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-[rgba(255,255,255,0.07)]">
        {legalLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="ff-body text-[13px] text-(--text-muted) hover:text-white transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mx-8 md:mx-14 lg:mx-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.07)]">
        <span className="text-[13px] text-[var(--text-muted)]">
          © 2025, Xride Labs. Riders first.
        </span>
        <span className="text-[13px] underline text-[var(--text-muted)] underline-offset-4">
          Never Stop Riding
        </span>
      </div>
    </footer>
  );
}
