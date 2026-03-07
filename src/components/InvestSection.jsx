import { useState } from "react";
import { FadeIn } from "./ui/TextReveal";
import { SpotlightCard } from "./ui/Spotlight";

export default function InvestSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative section-pad py-32 md:py-48">
      <div className="section-divider mb-20 md:mb-28" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* Left — Text */}
        <div>
          <FadeIn>
            <p className="ff-heading text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8">
              03
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="ff-heading text-[clamp(2rem,4.5vw,4.5rem)] font-black leading-[1.02] tracking-[-0.03em] text-primary mb-10">
              Invest in the
              <br />
              <span className="text-accent">future of riding.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="ff-body text-white/30 text-sm leading-relaxed max-w-md mb-3">
              We are building the infrastructure for two-wheel communities
              worldwide.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="ff-body text-white/45 text-sm leading-relaxed max-w-md mb-10">
              If you believe in rider-first technology and want to be part of
              this journey, we&apos;d love to hear from you.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <a
              href="mailto:hello@xride-labs.in"
              className="text-accent text-sm font-medium link-hover"
            >
              hello@xride-labs.in
            </a>
          </FadeIn>
        </div>

        {/* Right — Form card */}
        <FadeIn delay={0.2} direction="right">
          <SpotlightCard
            className="border border-border bg-surface-card p-8 md:p-10"
            spotlightColor="rgba(255,77,0,0.06)"
          >
            <div className="w-10 h-px bg-accent/40 mb-8" />

            <p className="ff-heading text-base font-bold text-primary mb-1">
              Connect with us
            </p>
            <p className="text-white/25 text-xs mb-8 ff-body">
              For investors, partners, and collaborators.
            </p>

            {submitted ? (
              <div className="py-8 text-center">
                <p className="text-accent text-sm font-medium mb-2">
                  Message received.
                </p>
                <p className="text-white/25 text-xs">
                  We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Your name"
                  required
                  className="w-full bg-transparent border border-border text-white/80 px-4 py-3 text-sm outline-none focus:border-accent/50 transition-colors placeholder:text-white/15 ff-body"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                  required
                  className="w-full bg-transparent border border-border text-white/80 px-4 py-3 text-sm outline-none focus:border-accent/50 transition-colors placeholder:text-white/15 ff-body"
                />
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Tell us about yourself and your interest..."
                  rows={4}
                  className="w-full bg-transparent border border-border text-white/80 px-4 py-3 text-sm outline-none focus:border-accent/50 transition-colors placeholder:text-white/15 ff-body resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-accent text-white ff-heading font-bold text-[10px] px-5 py-3.5 tracking-wide uppercase hover:bg-accent/80 transition-colors mt-2"
                >
                  Get in Touch
                </button>
              </form>
            )}
          </SpotlightCard>
        </FadeIn>
      </div>
    </section>
  );
}
