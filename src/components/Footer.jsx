import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FooterArtSVG } from "../assets/svg/FooterArtSVG";

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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <Motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative w-full bg-[#030303] border-t border-white/5 shadow-[0_-20px_40px_rgba(0,0,0,0.8)] mt-0 overflow-hidden"
    >
      <div className="section-shell">
        <div className="section-inner-wide relative z-10 grid w-full grid-cols-1 pb-16 pt-20 md:grid-cols-[58%_42%] md:pt-28">
          {/* Left column: Large links */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-3 md:gap-4">
              {footerLinks.map((link) => (
                <Motion.a
                  variants={itemVariants}
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ff-display font-medium block leading-[1.15] text-[clamp(32px,4.5vw,56px)] text-white/90 hover:text-white transition-all duration-300 hover:translate-x-3"
                >
                  {link.label}
                </Motion.a>
              ))}
            </div>

            {/* Email pill */}
            <Motion.a
              variants={itemVariants}
              href="mailto:hello@xride-labs.in"
              className="mt-16 md:mt-20 inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-bold self-start transition-all duration-300 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              hello@xride-labs.in →
            </Motion.a>
          </div>

          {/* Right column: Decorative hatching */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden md:flex hatching rounded-2xl items-center justify-center relative mt-8 md:mt-0 min-h-[320px] border border-white/5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FF2D2D]/5 to-transparent pointer-events-none" />
            <FooterArtSVG />
          </Motion.div>
        </div>
      </div>

      {/* Legal links row */}
      <div className="section-shell border-t border-[rgba(255,255,255,0.07)]">
        <div className="section-inner-wide flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6 lg:justify-start">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="ff-body text-[13px] text-[var(--text-muted)] transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="section-shell relative z-10 border-t border-white/10">
        <div className="section-inner-wide flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <span className="text-[13px] text-white/40">
            © 2026, Xride Labs. Riders first.
          </span>
          <span className="text-[13px] uppercase tracking-widest text-white/40">
            Never Stop Riding
          </span>
        </div>
      </div>
    </Motion.footer>
  );
}
