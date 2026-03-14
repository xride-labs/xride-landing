import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const notes = [
  {
    tag: "announcement",
    date: "March 2025",
    title: "We are building Zoomies.",
    body: "Zoomies is the first product under Xride Labs. The operating system for riders — track rides, find your clan, coordinate group rides, earn reputation on the road. We are in early development. If you want early access, reach out at hello@xride-labs.in",
  },
  {
    tag: "from the founder",
    date: "January 2025",
    title: "Why Xride Labs exists.",
    body: "Every time I went on a group ride I wished there was better software for it. So I decided to build it. Xride Labs is the umbrella for everything rider-first that we ship. This is day one.",
  },
];

export default function NotesPage() {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headerRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    );

    cardsRef.current.filter(Boolean).forEach((card, i) => {
      tl.fromTo(
        card,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        0.4 + i * 0.15,
      );
    });
  }, []);

  return (
    <div className="max-w-215 mx-auto px-6 pt-28 pb-20">
      {/* Back link */}
      <Link
        to="/"
        className="ff-body text-[14px] inline-block mb-10 transition-colors duration-200 hover:text-white text-[var(--text-muted)]"
      >
        ← Back
      </Link>

      {/* Header */}
      <div ref={headerRef} className="opacity-0">
        {/* Tag pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["# announcement", "# from the founder"].map((tag) => (
            <span
              key={tag}
              className="text-[12px] ff-body font-medium px-4 py-1.5 rounded-full bg-[var(--accent-red)] text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="ff-display font-black leading-[1.08] text-[clamp(40px,7vw,80px)] text-[var(--text)]">
          No<em className="letter">t</em>es from <em className="letter">t</em>he
          road.
        </h1>

        <p className="ff-body mt-4 mb-14 text-[18px] text-[var(--text-muted)]">
          Things worth saying out loud.
        </p>
      </div>

      {/* Note cards */}
      <div className="flex flex-col gap-6">
        {notes.map((note, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="rounded-2xl transition-colors duration-200 bg-[var(--bg-card)] border border-[var(--border)] p-10 opacity-0 hover:border-[var(--accent-red)]"
          >
            {/* Top row */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[12px] ff-body font-medium px-3 py-1 rounded-full bg-[var(--accent-red)] text-white">
                {note.tag}
              </span>
              <span className="text-[12px] font-mono text-[var(--text-muted)]">
                {note.date}
              </span>
            </div>

            {/* Title */}
            <h3 className="ff-display font-bold mb-4 text-[28px] text-[var(--text)]">
              {note.title}
            </h3>

            {/* Body */}
            <p className="ff-body text-[16px] text-[#888] leading-[1.8]">
              {note.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
