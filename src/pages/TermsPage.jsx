import LegalLayout, {
  LegalSection,
  LegalList,
} from "../components/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout
      tag="# legal"
      title="Terms & Conditions"
      lastUpdated="January 1, 2025"
    >
      <LegalSection>
        <p>
          Welcome to <strong className="text-white">Zoomies</strong>, a product
          of <strong className="text-white">Xride Labs</strong>. By accessing or
          using our application, website, or any related services, you agree to
          be bound by these Terms &amp; Conditions. Please read them carefully
          before using our platform.
        </p>
      </LegalSection>

      <LegalSection title="1. Acceptance of Terms">
        <p>
          By creating an account or using Zoomies, you confirm that you are at
          least 18 years old (or have parental/guardian consent), have read and
          understood these Terms, and agree to comply with all applicable laws
          and regulations.
        </p>
      </LegalSection>

      <LegalSection title="2. Description of Service">
        <p>
          Zoomies is a rider-focused platform that allows users to track rides,
          discover rider communities, coordinate group rides, manage club
          memberships, buy and sell motorcycle gear, and earn reputation on the
          road. Features may evolve as the platform grows.
        </p>
      </LegalSection>

      <LegalSection title="3. User Accounts">
        <LegalList
          items={[
            "You are responsible for maintaining the confidentiality of your account credentials.",
            "You are responsible for all activity that occurs under your account.",
            "You must provide accurate and complete information when creating your account.",
            "Xride Labs reserves the right to suspend or terminate accounts that violate these Terms.",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. User Conduct">
        <p>You agree not to:</p>
        <LegalList
          items={[
            "Use the platform for any unlawful purpose or in violation of any regulations.",
            "Post content that is harmful, abusive, discriminatory, or harasses other users.",
            "Impersonate any person or entity or misrepresent your affiliation with any person or entity.",
            "Attempt to gain unauthorised access to any part of the platform or its infrastructure.",
            "Use the platform to promote or facilitate dangerous or reckless riding.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Content Ownership">
        <p>
          You retain ownership of content you post on Zoomies. By posting, you
          grant Xride Labs a non-exclusive, worldwide, royalty-free licence to
          display, distribute, and promote your content within the platform and
          in our marketing materials.
        </p>
        <p>
          Xride Labs owns all intellectual property related to the platform,
          including the name, logo, design, and codebase.
        </p>
      </LegalSection>

      <LegalSection title="6. Paid Features &amp; Subscriptions">
        <p>
          Zoomies may offer premium features, subscriptions, or in-app
          purchases. All payments are handled through our authorised payment
          processors. Pricing and billing details will be clearly displayed
          before any charge is made. Refer to our{" "}
          <a href="/refund" className="text-(--accent-red) hover:underline">
            Refund Policy
          </a>{" "}
          for cancellation and refund details.
        </p>
      </LegalSection>

      <LegalSection title="7. Disclaimers &amp; Limitation of Liability">
        <p>
          Zoomies and Xride Labs are not liable for any accidents, injuries, or
          damages that occur during or as a result of rides organised through
          the platform. Riding a motorcycle carries inherent risks; users are
          solely responsible for their safety and the safety of others.
        </p>
        <p>
          The platform is provided "as is" without warranties of any kind,
          express or implied.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to These Terms">
        <p>
          We may update these Terms at any time. Changes will be posted on this
          page with an updated date. Continued use of the platform after changes
          are posted constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact">
        <p>
          For questions about these Terms, contact us at{" "}
          <a
            href="mailto:hello@xride-labs.in"
            className="text-(--accent-red) hover:underline"
          >
            hello@xride-labs.in
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
