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
          # contact
        </span>
        <h1 className="ff-display font-black leading-[1.08] text-[clamp(36px,5.5vw,64px)] text-white mt-6">
          Talk to us.
        </h1>
        <p className="ff-body mt-4 text-[18px] text-(--text-muted)">
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
            className="group opacity-0 rounded-2xl bg-(--bg-card) border border-(--border) p-8 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-(--accent-red) transition-colors duration-200"
          >
            <div className="flex-1">
              <p className="ff-body text-[12px] font-semibold text-(--text-muted) uppercase tracking-widest mb-1">
                {ch.label}
              </p>
              <p className="ff-display font-bold text-[20px] text-white group-hover:text-(--accent-red) transition-colors duration-200">
                {ch.value}
              </p>
              <p className="ff-body text-[14px] text-[#666] mt-1 leading-[1.7]">
                {ch.desc}
              </p>
            </div>
            <span className="text-(--accent-red) text-2xl font-black transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        ))}
      </div>

      {/* Response time note */}
      <div className="mt-12 rounded-2xl border border-(--border) bg-[rgba(255,45,45,0.04)] p-7">
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
