import { FadeIn, TextReveal } from "./ui/TextReveal";

const beliefs = [
  {
    id: "01",
    text: "The best products are built by people who actually use them every day.",
  },
  {
    id: "02",
    text: "Every rider deserves a community that gets them.",
  },
  {
    id: "03",
    text: "Real problems are solved by shipping.",
  },
  {
    id: "04",
    text: "Care is the most important ingredient in anything built by one human for another.",
  },
  {
    id: "05",
    text: "No product is complete until it is functional and beautiful.",
  },
];

export default function BeliefsSection() {
  return (
    <section className="relative section-pad py-32 md:py-48">
      <div className="section-divider mb-20 md:mb-28" />

      <TextReveal>
        <h2 className="ff-heading text-[clamp(2rem,4.5vw,4.5rem)] font-black leading-[1.02] tracking-[-0.03em] text-primary max-w-4xl mb-24">
          Why do we build
          <br />
          what we build?
        </h2>
      </TextReveal>

      <div className="space-y-0 relative z-10 w-full overflow-hidden">
        {beliefs.map((b, i) => (
          <FadeIn key={b.id} delay={i * 0.06}>
            <div className="belief-row border-t border-border py-8 md:py-14 flex flex-col md:grid md:grid-cols-[80px_1fr] gap-2 md:gap-10 group cursor-default">
              <p className="ff-heading text-accent/40 text-xs font-bold tracking-[0.15em] group-hover:text-accent transition-colors duration-300 mb-2 md:mb-0">
                {b.id}
              </p>
              <h3 className="ff-heading text-xl md:text-xl lg:text-2xl font-bold text-white/50 leading-tight md:leading-snug max-w-3xl group-hover:text-primary transition-colors duration-300">
                {b.text}
              </h3>
            </div>
          </FadeIn>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
