import { useState } from "react";
import { FadeIn } from "./ui/TextReveal";
import { SpotlightCard } from "./ui/Spotlight";

export default function ComingSoonSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative section-pad py-32 md:py-48">
      <div className="section-divider mb-20 md:mb-28" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* Left — Text */}
        <div className="flex flex-col">
          <FadeIn>
            <p className="ff-heading text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8">
              02
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="ff-heading text-[clamp(2rem,4.5vw,4.5rem)] font-black leading-[1.02] tracking-[-0.03em] text-primary mb-10">
              We are gearing up riders everywhere with{" "}
              <span className="text-accent">Xride Shop.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="ff-body text-white/30 text-sm leading-relaxed max-w-md mb-3">
              Premium riding gear, custom merchandise, and community designed
              apparel.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="ff-body text-white/45 text-sm leading-relaxed max-w-md">
              Everything a rider needs.
            </p>
          </FadeIn>
        </div>

        {/* Right — Card */}
        <FadeIn delay={0.2} direction="right">
          <SpotlightCard
            className="border border-border bg-surface-card p-10 md:p-14 flex flex-col items-center text-center"
            spotlightColor="rgba(255,77,0,0.06)"
          >
            <div className="w-12 h-px bg-accent/40 mb-10" />

            <p className="text-accent/50 text-[10px] uppercase tracking-[0.35em] mb-3 ff-body">
              Coming Soon
            </p>
            <p className="ff-heading text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
              Xride Shop
            </p>
            <p className="text-white/20 text-xs mb-10">Gear Up. Ride Out.</p>

            <div className="w-full">
              {submitted ? (
                <p className="text-accent text-sm font-medium">
                  You&apos;re on the list. We&apos;ll notify you.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <p className="text-white/25 text-[10px] uppercase tracking-[0.2em] mb-1">
                    Get notified
                  </p>
                  <div className="flex gap-0">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 bg-transparent border border-border text-white/80 px-4 py-3 text-sm outline-none focus:border-accent/50 transition-colors placeholder:text-white/15 ff-body"
                    />
                    <button
                      type="submit"
                      className="bg-accent text-white ff-heading font-bold text-[10px] px-5 py-3 tracking-wide uppercase hover:bg-accent/80 transition-colors"
                    >
                      Notify
                    </button>
                  </div>
                </form>
              )}
            </div>
          </SpotlightCard>
        </FadeIn>
      </div>
    </section>
  );
}
