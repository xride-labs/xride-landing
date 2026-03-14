import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HoverEffect } from "./ui/card-hover-effect";

gsap.registerPlugin(ScrollTrigger);

export default function ProductSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        opacity: 0,
        y: 80,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.from(rightRef.current, {
        opacity: 0,
        y: 80,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const items = [
    {
      content: (
        <div className="flex flex-col h-full">
          {/* LEFT — ZOOMIES */}
          <p className="text-xs font-mono mb-6 text-[#666]">01.</p>
          <h2 className="ff-display font-black text-white leading-tight mb-8 text-[clamp(36px,4.5vw,64px)]">
            We are building the ultimate ride companion with{" "}
            <em className="letter text-[#FF2D2D]">Zoomies</em>.
          </h2>
          <p className="ff-body text-base mb-6 text-[#666]">
            Zoomies is the operating system for riders. Track rides. Find clans.
            Coordinate group rides. Earn reputation. Explore roads together.
          </p>
          <a
            href="https://zoomies.xride-labs.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost inline-block w-fit mt-auto text-[14px] hover:border-[#00FFD1] hover:shadow-[0_0_24px_rgba(0,255,209,0.5)]"
          >
            Explore Zoomies →
          </a>
          {/* Visual placeholder */}
          <div className="mt-8 w-full aspect-video flex items-center justify-center border border-[#FF2D2D] rounded-lg bg-[rgba(255,45,45,0.03)]">
            <span className="text-xs font-mono text-[rgba(255,45,45,0.4)]">
              [ RIDER VISUAL ]
            </span>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col h-full">
          {/* RIGHT — XRIDE SHOP */}
          <p className="text-xs font-mono mb-6 text-[#666]">02.</p>
          <h2 className="ff-display font-black text-white leading-tight mb-8 text-[clamp(36px,4.5vw,64px)]">
            We are gearing up riders everywhere with{" "}
            <em className="letter text-[#FF2D2D]">Xride Shop</em>.
          </h2>
          <p className="ff-body text-base mb-8 text-[#666]">
            Premium riding gear, custom merchandise, and community designed
            apparel. Everything a rider needs.
          </p>

          {/* COMING SOON card */}
          <div className="p-8 mt-auto bg-[#0f0f0f] border border-[#FF2D2D] shadow-[0_0_24px_rgba(255,45,45,0.5)] rounded-xl">
            <p className="text-xs font-mono tracking-[0.2em] uppercase mb-1 text-[#FF2D2D]">
              COMING SOON
            </p>
            <p className="ff-display font-bold text-white text-lg mb-4">
              XRIDE SHOP
            </p>

            {submitted ? (
              <p className="text-sm text-[#00FFD1]">
                You're on the list. We'll notify you.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none ff-body border border-[#1a1a1a] border-r-0"
                />
                <button
                  type="submit"
                  className="ff-display font-bold text-xs px-5 py-3 uppercase tracking-wide transition-colors bg-[#FF2D2D] text-white border border-[#FF2D2D]"
                >
                  Get notified →
                </button>
              </form>
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-pad border-t border-[#1a1a1a] py-[140px] px-[clamp(1.5rem,6vw,5rem)]"
    >
      <HoverEffect items={items} className="gap-0" />
    </section>
  );
}
