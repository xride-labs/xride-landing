import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { RiderVisualSVG } from "../assets/svg/RiderVisualSVG";

export default function Products() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
        },
      );

      gsap.fromTo(
        rightRef.current,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNotify = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ background: "var(--bg)", minHeight: "100vh" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        {/* Vertical divider */}
        <div
          className="hidden md:block absolute top-0 left-1/2 h-full w-px"
          style={{ background: "var(--border)" }}
        />

        {/* ─── LEFT: ZOOMIES ─── */}
        <div
          ref={leftRef}
          className="px-8 md:pl-20 md:pr-16 py-28"
          style={{ opacity: 0 }}
        >
          <span
            className="text-[14px] font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            01.
          </span>

          <h2
            className="ff-display font-black mt-6 leading-[1.1]"
            style={{ fontSize: "clamp(34px, 5vw, 62px)", color: "var(--text)" }}
          >
            We are building the ul<em className="letter">t</em>imate ride
            companion with{" "}
            <span style={{ color: "var(--accent-red)", fontStyle: "italic" }}>
              Zoomies.
            </span>
          </h2>

          <p
            className="ff-body mt-8"
            style={{
              fontSize: "16px",
              color: "var(--text-muted)",
              lineHeight: 1.7,
            }}
          >
            Zoomies is the operating system for riders. Track rides. Find clans.
            Coordinate group rides. Earn reputation. Explore roads together.
          </p>

          <a
            href="https://zoomies.xride-labs.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-white mt-8 ff-display"
          >
            Explore Zoomies →
          </a>

          {/* Rider visual SVG */}
          <div
            className="mt-10 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(255,45,45,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,45,45,0.2)]"
            style={{
              aspectRatio: "16 / 9",
              background: "#0d0d0d",
              border: "1px solid rgba(255,45,45,0.2)",
            }}
          >
            <RiderVisualSVG />
          </div>
        </div>

        {/* ─── RIGHT: XRIDE SHOP ─── */}
        <div
          ref={rightRef}
          className="px-8 md:pl-20 md:pr-16 py-28"
          style={{ opacity: 0 }}
        >
          <span
            className="text-[14px] font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            02.
          </span>

          <h2
            className="ff-display font-black mt-6 leading-[1.1]"
            style={{ fontSize: "clamp(34px, 5vw, 62px)", color: "var(--text)" }}
          >
            We are gearing up riders everywhere wi<em className="letter">t</em>h{" "}
            <span style={{ color: "var(--accent-red)", fontStyle: "italic" }}>
              Xride Shop.
            </span>
          </h2>

          <p
            className="ff-body mt-8"
            style={{
              fontSize: "16px",
              color: "var(--text-muted)",
              lineHeight: 1.7,
            }}
          >
            Premium riding gear, custom merchandise, and community designed
            apparel. Everything a rider needs.
          </p>

          {/* Coming Soon card */}
          <div
            className="mt-10 rounded-xl p-8"
            style={{
              background: "#0d0d0d",
              border: "1px solid rgba(255,45,45,0.3)",
              boxShadow: "0 0 40px rgba(255,45,45,0.08)",
            }}
          >
            <span
              className="text-[11px] font-mono uppercase tracking-widest block"
              style={{ color: "var(--text-muted)" }}
            >
              COMING SOON
            </span>

            <h3
              className="ff-display font-black mt-3"
              style={{ fontSize: "28px", color: "var(--text)" }}
            >
              XRIDE SHOP
            </h3>

            {submitted ? (
              <p
                className="ff-body mt-5 text-[15px]"
                style={{ color: "var(--accent-teal)" }}
              >
                We&apos;ll let you know when we launch!
              </p>
            ) : (
              <form onSubmit={handleNotify} className="flex gap-3 mt-5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="ff-body flex-1 rounded-full px-5 py-3 text-[14px] outline-none"
                  style={{
                    background: "#111",
                    border: "1px solid #2a2a2a",
                    color: "#fff",
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-solid text-[14px]"
                  style={{ padding: "12px 24px" }}
                >
                  Get notified
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
