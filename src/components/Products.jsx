import { useState } from "react";
import { motion as Motion } from "framer-motion";

import { RiderVisualSVG } from "../assets/svg/RiderVisualSVG";
import { EquipmentVisualSVG } from "../assets/svg/EquipmentVisualSVG";

export default function Products() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="section-shell section-space-lg relative w-full overflow-hidden border-t border-white/5 bg-[#030303] text-white">
      {/* Subtle top subtle flare */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-100 w-full -translate-x-1/2 rounded-full bg-white/2 blur-[120px]" />

      {/* Header Area directly inside w-full */}
      <div className="section-inner relative z-10">
        {/* Header Area */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="section-header mb-20 md:mb-28 lg:mb-32"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="section-kicker">Current Focus</span>
          </div>
          <h2 className="section-title max-w-5xl text-white/95">
            Building software and things for{" "}
            <em className="letter font-light text-white/50">r</em>iders.
          </h2>
        </Motion.div>
      </div>

      <div className="section-inner-wide overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#050505]">
        <div className="grid min-h-[84vh] grid-cols-1 items-stretch border-b border-white/10 lg:grid-cols-2">
          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center bg-[#080808]/50 px-7 py-18 md:px-14 md:py-24 lg:px-22 lg:py-28"
          >
            <span className="section-kicker mb-6 self-start rounded-full border border-white/10 bg-white/2 px-4 py-2">
              01 / Software
            </span>

            <h3 className="ff-display mb-7 max-w-[19ch] text-[clamp(2rem,4vw,4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white/96">
              Zoomies is the operating system for riders.
            </h3>

            <p className="section-copy mb-12 max-w-[38rem]">
              Track rides. Find clans. Coordinate group rides. Earn reputation.
              Explore roads together. We are building the ultimate digital
              companion for the open road.
            </p>

            <a
              href="https://zoomies.xride-labs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group self-start text-[13px] font-bold uppercase tracking-[0.2em] text-white transition-colors flex items-center gap-4"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                  →
                </span>
              </div>
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                  Explore Zoomies
                </span>
                <span className="inline-block absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-white/80">
                  Explore Zoomies
                </span>
              </span>
            </a>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="group relative flex min-h-125 w-full items-center justify-center overflow-hidden border-t border-white/10 bg-linear-to-tr from-[#FF2D2D]/10 to-[#080808] p-10 md:p-14 lg:min-h-full lg:border-l lg:border-t-0 lg:p-24"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            {/* The SVG wrapper */}
            <div className="relative z-10 w-full max-w-150 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-[1.03]">
              <RiderVisualSVG />
            </div>
          </Motion.div>
        </div>

        <div className="grid min-h-[84vh] grid-cols-1 items-stretch lg:grid-cols-2">
          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="group order-2 relative flex min-h-125 w-full items-center justify-center overflow-hidden border-t border-white/10 bg-linear-to-tr from-[#00FFD1]/10 to-[#080808] p-10 md:p-14 lg:order-1 lg:min-h-full lg:border-r lg:border-t-0 lg:p-24"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            {/* The SVG wrapper */}
            <div className="relative z-10 w-full max-w-150 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-[1.03]">
              <EquipmentVisualSVG />
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 flex flex-col justify-center bg-[#080808]/50 px-7 py-18 md:px-14 md:py-24 lg:order-2 lg:px-22 lg:py-28"
          >
            <span className="section-kicker mb-6 self-start rounded-full border border-white/10 bg-white/2 px-4 py-2">
              02 / Physical
            </span>

            <h3 className="ff-display mb-7 max-w-[19ch] text-[clamp(2rem,4vw,4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white/96">
              Gearing up riders everywhere with Xride Shop.
            </h3>

            <p className="section-copy mb-12 max-w-[38rem]">
              Premium riding gear, custom merchandise, and community designed
              apparel. Form follows function. Everything a modern rider needs.
            </p>

            <div className="w-full max-w-[34rem]">
              {submitted ? (
                <div className="rounded-2xl border border-white/10 bg-white/2 px-6 py-5">
                  <p className="ff-body text-[15px] md:text-[16px] text-white/90 font-medium m-0 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#00FFD1] animate-pulse" />
                    You are on the list. We'll be in touch.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleNotify}
                  className="flex flex-col sm:flex-row gap-3 w-full"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="ff-body flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-[15px] text-white outline-none transition-all placeholder-white/30 focus:border-white/40"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-white px-8 py-4 text-[14px] font-bold uppercase tracking-[0.18em] whitespace-nowrap text-black transition-all duration-300 hover:scale-105 hover:bg-white/90"
                  >
                    Notify Me
                  </button>
                </form>
              )}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
