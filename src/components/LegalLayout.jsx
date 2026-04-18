import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LegalLayout({ tag, title, lastUpdated, children }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start">
      <div className="page-shell max-w-4xl">
        {/* Back */}
        <Link
          to="/"
          className="group relative mb-12 inline-block text-[14px] text-white/50 transition-colors duration-200 hover:text-white ff-body"
        >
          <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>{" "}
          Back
        </Link>

        {/* Header */}
        <Motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="section-header mb-16"
        >
          <span className="section-kicker inline-flex w-fit rounded-full border border-[#FF2D2D]/20 bg-[#FF2D2D]/10 px-4 py-2 text-[#FF2D2D] shadow-[0_0_15px_rgba(255,45,45,0.15)]">
            {tag}
          </span>
          <h1 className="section-title mt-1 text-white/92">{title}</h1>
          {lastUpdated && (
            <p className="mt-1 font-mono text-[14px] text-white/40 ff-body">
              Last updated: {lastUpdated}
            </p>
          )}
        </Motion.div>

        {/* Body */}
        <Motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col gap-10"
        >
          {children}
        </Motion.div>
      </div>
    </div>
  );
}

/** Reusable section card */
export function LegalSection({ title, children }) {
  return (
    <div className="surface-panel mx-auto w-full max-w-reading rounded-[1.7rem] p-7 md:p-14 transition-colors duration-500 hover:border-[#FF2D2D]/30 hover:shadow-[0_10px_30px_rgba(255,45,45,0.05)]">
      {title && (
        <h2 className="ff-display font-bold text-[20px] md:text-[24px] text-white/90 mb-7 tracking-tight">
          {title}
        </h2>
      )}
      <div className="ff-body text-[15px] md:text-[16px] text-white/72 leading-[1.95] flex flex-col gap-6">
        {children}
      </div>
    </div>
  );
}

/** Bullet list helper */
export function LegalList({ items }) {
  return (
    <ul className="flex flex-col gap-2 pl-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-white/60">
          <span className="text-[#FF2D2D] mt-0.5 shrink-0 opacity-80">›</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
