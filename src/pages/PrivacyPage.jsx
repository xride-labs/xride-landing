import LegalLayout, {
  LegalSection,
  LegalList,
} from "../components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout
      tag="# legal"
      title="Privacy Policy"
      lastUpdated="January 1, 2025"
    >
      <LegalSection>
        <p>
          Xride Labs ("<strong className="text-white">we</strong>", "
          <strong className="text-white">our</strong>", "
          <strong className="text-white">us</strong>") operates the Zoomies
          platform. This Privacy Policy explains how we collect, use, store, and
          protect your personal information when you use our app and website.
        </p>
      </LegalSection>

      <LegalSection title="1. Information We Collect">
        <p>We may collect the following types of information:</p>
        <LegalList
          items={[
            "Account information: name, email address, phone number, and profile photo.",
            "Ride data: GPS coordinates, routes, distance, duration, and ride history.",
            "Device information: device type, operating system, and app version.",
            "Usage data: features used, pages visited, and interactions within the app.",
            "Payment information: processed securely by our payment provider; we do not store card details.",
            "Communications: messages sent via in-app chat or to our support team.",
          ]}
        />
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <LegalList
          items={[
            "To provide, operate, and improve the Zoomies platform.",
            "To personalise your experience and show relevant content.",
            "To enable social features such as clubs, group rides, and friend groups.",
            "To process payments and manage subscriptions.",
            "To send service notifications, updates, and support responses.",
            "To ensure platform safety and prevent fraud or misuse.",
            "To comply with legal obligations.",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Information Sharing">
        <p>
          We do not sell your personal information. We may share data in the
          following circumstances:
        </p>
        <LegalList
          items={[
            "With other users, as part of social features you opted into (e.g., ride visibility, club membership).",
            "With service providers who process data on our behalf (e.g., cloud hosting, payment processors, analytics).",
            "When required by law, court order, or to protect the rights and safety of our users.",
            "In connection with a merger, acquisition, or sale of assets, with appropriate safeguards.",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Location Data">
        <p>
          Zoomies may request access to your device&apos;s location to enable
          ride tracking, live map features, and nearby discovery. Location data
          is collected only when you actively use these features, and you can
          revoke location permissions at any time through your device settings.
        </p>
      </LegalSection>

      <LegalSection title="5. Data Retention">
        <p>
          We retain your personal data for as long as your account is active or
          as needed to provide services. You may request deletion of your
          account and associated data by contacting us at{" "}
          <a
            href="mailto:hello@xride-labs.in"
            className="text-[#FF2D2D] hover:underline"
          >
            hello@xride-labs.in
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Security">
        <p>
          We implement industry-standard security measures including encryption
          in transit (HTTPS/TLS), hashed credentials, and access controls to
          protect your data. No system is 100% secure, and we encourage you to
          use a strong, unique password.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-Party Services">
        <p>
          Our platform may use third-party services such as Google Maps,
          Cloudinary (media storage), and analytics tools. These services have
          their own privacy policies and we encourage you to review them.
        </p>
      </LegalSection>

      <LegalSection title="8. Your Rights">
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <LegalList
          items={[
            "Access the personal data we hold about you.",
            "Request correction of inaccurate data.",
            "Request deletion of your data.",
            "Withdraw consent for processing where consent is the legal basis.",
            "Lodge a complaint with a relevant data protection authority.",
          ]}
        />
        <p>
          To exercise any of these rights, contact us at{" "}
          <a
            href="mailto:hello@xride-labs.in"
            className="text-[#FF2D2D] hover:underline"
          >
            hello@xride-labs.in
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          posted here with a revised date. Your continued use of the platform
          constitutes acceptance of the updated policy.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
