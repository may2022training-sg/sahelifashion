import { PolicyLayout } from '@/components/layout/PolicyLayout'

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="How Saheli Fashion handles and protects your personal communication details."
    >
      <section className="space-y-3">
        <h2 className="font-serif text-xl font-semibold text-stone-900">
          1. Information We Collect
        </h2>
        <p>
          Saheli Fashion operates as a digital showcase catalogue. We do not store financial credit card data on our servers. When you communicate with us via WhatsApp, phone, or email, we only collect details necessary to process your consultation (e.g., name, phone number, shipping address, and sizing measurements).
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="font-serif text-xl font-semibold text-stone-900">
          2. Use of Communication Data
        </h2>
        <p>
          Your personal details are strictly used to fulfill custom styling consultations, provide order status updates, and organize global delivery logistics. We never sell or lease your contact information to third-party advertisers.
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="font-serif text-xl font-semibold text-stone-900">
          3. Data Security
        </h2>
        <p>
          All direct messaging interactions take place through encrypted channels (WhatsApp Business). Measurements and delivery addresses provided for dispatch are maintained securely within our internal atelier processing system.
        </p>
      </section>
    </PolicyLayout>
  )
}