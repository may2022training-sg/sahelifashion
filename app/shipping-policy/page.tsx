import { PolicyLayout } from '@/components/layout/PolicyLayout'

export default function ShippingPolicyPage() {
  return (
    <PolicyLayout
      title="Shipping & Delivery Policy"
      subtitle="Information on processing times, international shipping, and delivery tracking."
    >
      <section className="space-y-3">
        <h2 className="font-serif text-xl font-semibold text-stone-900">
          1. Processing & Crafting Timelines
        </h2>
        <p>
          Since many of our designer creations involve hand embroidery, custom stitching, and quality inspection, delivery timelines depend on the level of customization requested:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Ready-to-Ship Outfits:</strong> Dispatched within 2–4 business days.</li>
          <li><strong>Custom Stitched Outfits:</strong> Dispatched within 10–14 business days following measurement confirmation.</li>
          <li><strong>Bridal & Couture Orders:</strong> Dispatched within 3–5 weeks depending on heavy embroidery work.</li>
        </ul>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="font-serif text-xl font-semibold text-stone-900">
          2. Domestic & Worldwide Delivery
        </h2>
        <p>
          We offer secure express shipping across India and to international destinations including the US, UK, Canada, UAE, Australia, and worldwide. All shipments are fully insured against transit damage.
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="font-serif text-xl font-semibold text-stone-900">
          3. Tracking & Order Updates
        </h2>
        <p>
          Once your order is handed over to our international logistics partner (DHL/FedEx/Aramex), a live tracking code will be sent to your WhatsApp contact and email address.
        </p>
      </section>
    </PolicyLayout>
  )
}