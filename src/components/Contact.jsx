import { Fragment } from "react";
import { motion as Motion } from "framer-motion";

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/xridelabs" },
  { label: "Instagram", href: "https://instagram.com/xridelabs" },
  { label: "YouTube", href: "https://youtube.com/@xridelabs" },
  { label: "Zoomies", href: "https://zoomies.xride-labs.in" },
];

export default function Contact() {
  const headlineText =
    "If any of our beliefs resonated with you, reach out. We would love to talk.";

  return (
    <section className="section-shell section-space-lg relative flex min-h-[88vh] w-full flex-col items-center justify-center overflow-hidden border-y border-white/5 bg-[#080808] text-center">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-t from-[#FF2D2D]/10 to-transparent blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="section-inner flex flex-col items-center py-6">
        {/* Sketch illustration */}
        <Motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8 md:mb-10"
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
          <div className="absolute top-0.5 right-0.5 w-[22px] h-[22px] flex items-center justify-center rounded-full text-[10px] font-bold text-white ff-body bg-[#FF2D2D] shadow-[0_0_15px_rgba(255,45,45,0.6)]">
            1
          </div>
        </Motion.div>

        {/* Label */}
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-kicker mb-12 md:mb-14"
        >
          Cold reachouts encouraged
        </Motion.p>

        {/* Headline */}
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title w-full max-w-6xl text-white/95"
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
              <span key={i} className="inline-block mr-[0.28em]">
                {rendered}
              </span>
            );
          })}
        </Motion.h2>

        {/* Buttons */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-14 flex flex-wrap justify-center gap-4 md:mt-16"
        >
          <a
            href="https://twitter.com/xridelabs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] cursor-pointer transition-all duration-300 font-body text-white bg-transparent border border-white/20 hover:border-[#00FFD1]/60 hover:shadow-[0_0_24px_rgba(0,255,209,0.3)] hover:scale-105"
          >
            Follow on Twitter
          </a>
          <a
            href="mailto:hello@xride-labs.in"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-bold cursor-pointer transition-all duration-300 bg-white text-black hover:scale-105 hover:shadow-[0_0_24px_rgba(255,255,255,0.4)]"
          >
            hello@xride-labs.in →
          </a>
        </Motion.div>

        {/* Social links */}
        <div className="flex flex-wrap gap-1 mt-10 justify-center items-center text-[14px] text-[var(--text-muted)]">
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
      </div>
    </section>
  );
}
