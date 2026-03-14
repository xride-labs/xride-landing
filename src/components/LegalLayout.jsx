import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function LegalLayout({ tag, title, lastUpdated, children }) {
  const headerRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headerRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
    );
    tl.fromTo(
      bodyRef.current,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      0.3,
    );
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-32">
      {/* Back */}
      <Link
        to="/"
        className="ff-body text-[14px] inline-block mb-10 transition-colors duration-200 hover:text-white text-(--text-muted)"
      >
        ← Back
      </Link>

      {/* Header */}
      <div ref={headerRef} className="opacity-0 mb-14">
        <span className="text-[12px] ff-body font-medium px-4 py-1.5 rounded-full bg-(--accent-red) text-white">
          {tag}
        </span>
        <h1 className="ff-display font-black leading-[1.08] text-[clamp(36px,5.5vw,64px)] text-white mt-6">
          {title}
        </h1>
        {lastUpdated && (
          <p className="ff-body text-[14px] text-(--text-muted) mt-3 font-mono">
            Last updated: {lastUpdated}
          </p>
        )}
      </div>

      {/* Body */}
      <div ref={bodyRef} className="opacity-0 flex flex-col gap-8">
        {children}
      </div>
    </div>
  );
}

/** Reusable section card */
export function LegalSection({ title, children }) {
  return (
    <div className="rounded-2xl bg-(--bg-card) border border-(--border) p-8 hover:border-(--accent-red) transition-colors duration-200">
      {title && (
        <h2 className="ff-display font-bold text-[22px] text-white mb-4">
          {title}
        </h2>
      )}
      <div className="ff-body text-[15px] text-[#888] leading-[1.85] flex flex-col gap-3">
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
        <li key={i} className="flex gap-2">
          <span className="text-(--accent-red) mt-0.5 shrink-0">›</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
