import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const contactChannels = [
  {
    label: "General Enquiries",
    value: "hello@xride-labs.in",
    href: "mailto:hello@xride-labs.in",
    desc: "Anything from feedback, partnerships, or a simple hello.",
  },
  {
    label: "Support",
    value: "hello@xride-labs.in",
    href: "mailto:hello@xride-labs.in?subject=Support Request",
    desc: "Having trouble with the app or your account? We'll get back to you within 1–2 business days.",
  },
  {
    label: "Refund Requests",
    value: "hello@xride-labs.in",
    href: "mailto:hello@xride-labs.in?subject=Refund Request",
    desc: "Include your registered email and order/transaction details.",
  },
  {
    label: "Press & Media",
    value: "hello@xride-labs.in",
    href: "mailto:hello@xride-labs.in?subject=Press Enquiry",
    desc: "For press kits, interviews, and collaboration inquiries.",
  },
];

export default function ContactPage() {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headerRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
    );
    cardsRef.current.filter(Boolean).forEach((card, i) => {
      tl.fromTo(
        card,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" },
        0.3 + i * 0.1,
      );
    });
  }, []);

  return (
    <div className="page-shell max-w-4xl">
      {/* Back */}
      <Link
        to="/"
        className="ff-body mb-10 inline-block text-[14px] text-[var(--text-muted)] transition-colors duration-200 hover:text-white"
      >
        ← Back
      </Link>

      {/* Header */}
      <div ref={headerRef} className="section-header mb-14 opacity-0">
        <span className="section-kicker inline-flex w-fit rounded-full bg-[var(--accent-red)] px-4 py-2 text-white">
          # contact
        </span>
        <h1 className="section-title text-white">Talk to us.</h1>
        <p className="section-copy max-w-[32rem] text-[var(--text-muted)]">
          We are a small team. We read every message.
        </p>
      </div>

      {/* Contact cards */}
      <div className="flex flex-col gap-5">
        {contactChannels.map((ch, i) => (
          <a
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            href={ch.href}
            className="surface-panel group flex flex-col gap-4 rounded-[1.5rem] p-8 opacity-0 transition-colors duration-200 hover:border-[var(--accent-red)] sm:flex-row sm:items-center"
          >
            <div className="flex-1">
              <p className="ff-body mb-1 text-[12px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                {ch.label}
              </p>
              <p className="ff-display text-[20px] font-bold text-white transition-colors duration-200 group-hover:text-[var(--accent-red)]">
                {ch.value}
              </p>
              <p className="ff-body text-[14px] text-[#666] mt-1 leading-[1.7]">
                {ch.desc}
              </p>
            </div>
            <span className="text-2xl font-black text-[var(--accent-red)] transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        ))}
      </div>

      {/* Response time note */}
      <div className="mt-12 rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,45,45,0.04)] p-7">
        <p className="ff-body text-[15px] text-[#777] leading-[1.8]">
          <strong className="text-white">Response time:</strong> We aim to
          respond to all enquiries within{" "}
          <strong className="text-white">1–2 business days</strong>. For urgent
          matters, please include "URGENT" in the subject line.
        </p>
        <p className="ff-body text-[15px] text-[#777] leading-[1.8] mt-3">
          <strong className="text-white">Business hours:</strong> Monday –
          Friday, 10 AM – 7 PM IST.
        </p>
      </div>
    </div>
  );
}
