import { PolicyLayout } from '@/components/layout/PolicyLayout'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export default function FAQPage() {
  return (
    <PolicyLayout
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our collections, custom fitting, and order process."
    >
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-stone-900">
          General & Enquiry Process
        </h2>
        
        <div className="border-t border-stone-200 pt-4">
          <h3 className="font-semibold text-lg text-stone-800 mb-1">
            Why are prices not listed on the website?
          </h3>
          <p>
            Many of our garments feature handloom fabrics, custom embroidery options, and personalized stitching services. To provide accurate quotes based on your exact customization, delivery region, and finishing needs, we handle enquiries directly via WhatsApp.
          </p>
        </div>

        <div className="border-t border-stone-200 pt-4">
          <h3 className="font-semibold text-lg text-stone-800 mb-1">
            How do I initiate a purchase or enquiry?
          </h3>
          <p>
            Clicking &quot;Enquire on WhatsApp&quot; on any product page will redirect you with a pre-filled message specifying the design code. Our team will instantly respond with current availability, exact fabric specifications, and custom options.
          </p>
        </div>
      </section>

      <section className="space-y-4 pt-6">
        <h2 className="font-serif text-2xl font-semibold text-stone-900">
          Customization & Fitting
        </h2>

        <div className="border-t border-stone-200 pt-4">
          <h3 className="font-semibold text-lg text-stone-800 mb-1">
            Can I customize the color or fabric of an outfit?
          </h3>
          <p>
            Custom color dyeing and alternative blouse/dupatta fabric selections are available on select designer Lehengas and Sarees. Reach out to our consultants with your requirements.
          </p>
        </div>

        <div className="border-t border-stone-200 pt-4">
          <h3 className="font-semibold text-lg text-stone-800 mb-1">
            How do I share my custom measurements?
          </h3>
          <p>
            Upon order confirmation, our master tailoring assistant will send a simple step-by-step measurement form via WhatsApp to guide you through taking your sizes accurately.
          </p>
        </div>
      </section>

      <section className="bg-stone-50 border border-stone-200 rounded-xl p-6 text-center mt-10">
        <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
          Have a Question Not Listed Here?
        </h3>
        <p className="text-sm text-stone-600 mb-4">
          Our customer support team is available on WhatsApp to answer your specific queries.
        </p>
        <WhatsAppButton
          message="Hello Saheli Fashion! I have a question regarding your catalogue and ordering process."
          label="Ask Us directly on WhatsApp"
          className="inline-flex items-center justify-center py-2.5 px-6 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-colors"
        />
      </section>
    </PolicyLayout>
  )
}