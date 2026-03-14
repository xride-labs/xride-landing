import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { RiderVisualSVG } from "../assets/svg/RiderVisualSVG";
import { EquipmentVisualSVG } from "../assets/svg/EquipmentVisualSVG";

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
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );

      gsap.fromTo(
        rightRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
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
      className="relative w-full min-h-screen flex items-center py-24 md:py-32 lg:py-40 bg-[var(--bg)]"
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-stretch relative">
        {/* LEFT: ZOOMIES */}
        <div ref={leftRef} className="flex flex-col flex-1">
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-3xl p-10 md:p-12 lg:p-14 shadow-2xl flex-1 flex flex-col justify-between transition-all hover:border-[rgba(255,45,45,0.4)] hover:shadow-[0_0_40px_rgba(255,45,45,0.1)] duration-500 min-h-[500px]">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(255,45,45,0.1)] text-[#ff2d2d] font-mono text-[12px] font-bold">
                  01
                </span>
                <span className="text-[13px] font-medium tracking-widest uppercase text-[var(--accent-red)]">
                  Ride Tech
                </span>
              </div>

              <h2 className="ff-display font-black leading-[1.15] text-white text-[clamp(28px,3.5vw,42px)]">
                We are building the ul<em className="letter">t</em>imate ride
                companion with{" "}
                <span className="text-[var(--accent-red)] italic">
                  Zoomies.
                </span>
              </h2>

              <p className="ff-body mt-6 text-[16px] text-[var(--text-muted)] leading-[1.75]">
                Zoomies is the operating system for riders. Track rides. Find
                clans. Coordinate group rides. Earn reputation. Explore roads
                together.
              </p>

              <a
                href="https://zoomies.xride-labs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white mt-10 ff-display self-start inline-flex"
              >
                Explore Zoomies →
              </a>
            </div>

            {/* Rider visual SVG */}
            <div className="mt-10 md:mt-12 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(255,45,45,0.1)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,45,45,0.2)] aspect-video bg-[#050505] border border-[rgba(255,45,45,0.15)]">
              <RiderVisualSVG />
            </div>
          </div>
        </div>

        {/* RIGHT: XRIDE SHOP */}
        <div ref={rightRef} className="flex flex-col flex-1">
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-3xl p-10 md:p-12 lg:p-14 shadow-2xl flex-1 flex flex-col justify-between transition-all hover:border-[rgba(0,255,209,0.3)] hover:shadow-[0_0_40px_rgba(0,255,209,0.08)] duration-500 min-h-[500px]">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(0,255,209,0.1)] text-[#00FFD1] font-mono text-[12px] font-bold">
                  02
                </span>
                <span className="text-[13px] font-medium tracking-widest uppercase text-[#00FFD1]">
                  Travel & Gear
                </span>
              </div>

              <h2 className="ff-display font-black leading-[1.15] text-white text-[clamp(28px,3.5vw,42px)]">
                We are gearing up riders everywhere wi
                <em className="letter">t</em>h{" "}
                <span className="text-[var(--accent-teal)] italic">
                  Xride Shop.
                </span>
              </h2>

              <p className="ff-body mt-6 text-[16px] text-[var(--text-muted)] leading-[1.75]">
                Premium riding gear, custom merchandise, and community designed.
                Everything a rider needs.
              </p>

              {/* Coming Soon / Form */}
              <div className="mt-8">
                {submitted ? (
                  <div className="px-5 py-4 rounded-xl border border-[rgba(0,255,209,0.3)] bg-[rgba(0,255,209,0.05)]">
                    <p className="ff-body text-[15px] text-[#00FFD1] font-medium m-0">
                      You are on the list! We&apos;ll notify you when we launch.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleNotify}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="ff-body flex-1 rounded-xl px-5 py-3.5 text-[15px] outline-none transition-colors focus:border-[#00FFD1] bg-[#111] border border-[#2a2a2a] text-white"
                    />
                    <button
                      type="submit"
                      className="btn btn-solid text-[15px] px-6 py-3.5 whitespace-nowrap rounded-xl transition-all bg-[var(--accent-teal)] text-black font-bold"
                    >
                      Get Notified
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Gear visual SVG */}
            <div className="mt-10 md:mt-12 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,255,209,0.1)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,255,209,0.2)] aspect-video bg-[#050505] border border-[rgba(0,255,209,0.15)]">
              <EquipmentVisualSVG />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
