import LegalLayout, {
  LegalSection,
  LegalList,
} from "../components/LegalLayout";

export default function RefundPage() {
  return (
    <LegalLayout
      tag="# legal"
      title="Refund Policy"
      lastUpdated="January 1, 2025"
    >
      <LegalSection>
        <p>
          This Refund Policy applies to all paid features, subscriptions, and
          purchases made on the <strong className="text-white">Zoomies</strong>{" "}
          platform operated by{" "}
          <strong className="text-white">Xride Labs</strong>. We want you to be
          satisfied with your purchase and will handle refund requests fairly
          and transparently.
        </p>
      </LegalSection>

      <LegalSection title="1. Subscriptions">
        <p>
          Zoomies may offer monthly or annual subscription plans for premium
          features.
        </p>
        <LegalList
          items={[
            "You may cancel your subscription at any time from within the app or by contacting support.",
            "Cancellation takes effect at the end of the current billing period. You will not be charged again but will retain access until the period ends.",
            "Refunds for unused subscription time are not automatically issued unless required by applicable law.",
            "If you cancel within 7 days of your initial subscription purchase and have not significantly used the premium features, you are eligible for a full refund.",
          ]}
        />
      </LegalSection>

      <LegalSection title="2. In-App Purchases">
        <p>
          One-time purchases (such as premium theme packs or boosts) are
          generally non-refundable once redeemed or consumed. Exceptions may be
          made in the following situations:
        </p>
        <LegalList
          items={[
            "The purchase resulted in a technical error that prevented delivery.",
            "Duplicate charges occurred due to a payment processing error.",
            "You were charged incorrectly due to a pricing error on our end.",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. How to Request a Refund">
        <p>To request a refund:</p>
        <LegalList
          items={[
            "Email us at hello@xride-labs.in with the subject line 'Refund Request'.",
            "Include your registered email address and a description of the purchase.",
            "Include your reason for requesting a refund.",
            "Include the transaction reference or date of purchase if available.",
          ]}
        />
        <p>
          We will review your request and respond within{" "}
          <strong className="text-white">5–7 business days</strong>. Approved
          refunds will be credited to the original payment method within 7–10
          business days, depending on your bank.
        </p>
      </LegalSection>

      <LegalSection title="4. Chargebacks">
        <p>
          Please contact us before initiating a chargeback with your bank. We
          take chargebacks seriously and will work with you to resolve disputes
          directly. Unjustified chargebacks may result in account suspension.
        </p>
      </LegalSection>

      <LegalSection title="5. Free Trials">
        <p>
          If Zoomies offers a free trial period, you will not be charged until
          the trial ends. You may cancel before the trial period ends to avoid
          any charge. No refund is required for a free trial period as no
          payment has been collected.
        </p>
      </LegalSection>

      <LegalSection title="6. Governing Law">
        <p>
          Refunds are subject to applicable Indian consumer protection laws. For
          users in other jurisdictions, local consumer rights laws may apply in
          addition to this policy.
        </p>
      </LegalSection>

      <LegalSection title="7. Contact">
        <p>
          For refund-related queries, contact us at{" "}
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
