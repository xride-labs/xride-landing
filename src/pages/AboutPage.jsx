import LegalLayout, { LegalSection } from "../components/LegalLayout";

export default function AboutPage() {
  return (
    <LegalLayout tag="# about" title="About Us">
      <LegalSection>
        <p>
          <strong className="text-white">Xride Labs</strong> is a rider-first
          technology company building software for the motorcycling community.
          We started with a simple frustration: coordinating group rides was
          harder than it should be. From that friction, Xride Labs was born.
        </p>
      </LegalSection>

      <LegalSection title="Our Mission">
        <p>
          To build the operating system for riders — tools that make riding
          together more organised, more connected, and more memorable. We
          believe every kilometre ridden together is better than one ridden
          alone.
        </p>
      </LegalSection>

      <LegalSection title="Zoomies — Our First Product">
        <p>
          <strong className="text-white">Zoomies</strong> is the first product
          under the Xride Labs umbrella. It is a platform where riders can:
        </p>
        <ul className="flex flex-col gap-2 pl-4 mt-2">
          {[
            "Track and log rides with GPS routes, stats, and galleries.",
            "Form and manage rider clubs with role-based leadership.",
            "Coordinate group rides with real-time location and route sharing.",
            "Discover other riders, groups, and events nearby.",
            "Buy and sell motorcycle gear through the integrated marketplace.",
            "Build reputation through verified ride history and community contributions.",
          ].map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-(--accent-red) mt-0.5 shrink-0">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="Where We Are">
        <p>
          We are in early development, building from the ground up with a small
          and focused team. Zoomies is currently available via early access.
          Everything we build is informed by the riding community — if you have
          feedback, we genuinely want to hear it.
        </p>
      </LegalSection>

      <LegalSection title="Get in Touch">
        <p>
          We are always open to conversations with riders, investors, and
          collaborators who believe in what we are building. Reach out at{" "}
          <a
            href="mailto:hello@xride-labs.in"
            className="text-(--accent-red) hover:underline"
          >
            hello@xride-labs.in
          </a>{" "}
          or visit{" "}
          <a
            href="https://zoomies.xride-labs.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--accent-teal) hover:underline"
          >
            zoomies.xride-labs.in
          </a>{" "}
          to see the app.
        </p>
      </LegalSection>

      <LegalSection title="Registered Business">
        <p>
          Xride Labs is a registered business operating out of India.
          <br />
          Email:{" "}
          <a
            href="mailto:hello@xride-labs.in"
            className="text-(--accent-red) hover:underline"
          >
            hello@xride-labs.in
          </a>
          <br />
          Website:{" "}
          <a
            href="https://xride-labs.in"
            className="text-(--accent-red) hover:underline"
          >
            xride-labs.in
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
