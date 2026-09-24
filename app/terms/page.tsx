import { PolicyLayout } from '@/components/layout/PolicyLayout'

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms of Service"
      subtitle="General guidelines and conditions governing the use of our digital catalogue."
    >
      <section className="space-y-3">
        <h2 className="font-serif text-xl font-semibold text-stone-900">
          1. Catalogue Representation
        </h2>
        <p>
          We make every effort to display the colors, weaves, and embroidery details of our ethnic garments accurately. However, slight variations in shade may occur due to screen resolutions or the inherent nature of handcrafted handloom textiles.
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="font-serif text-xl font-semibold text-stone-900">
          2. Custom Alterations & Orders
        </h2>
        <p>
          Custom stitched garments are crafted based on the specific dimensions provided by the buyer during WhatsApp consultation. Please ensure measurements are taken accurately according to our guided chart.
        </p>
      </section>

      <section className="space-y-3 pt-4">
        <h2 className="font-serif text-xl font-semibold text-stone-900">
          3. Intellectual Property
        </h2>
        <p>
          All imagery, brand logos, copy, and product photography on this website belong to Saheli Fashion. Unauthorized reproduction or commercial use without written permission is prohibited.
        </p>
      </section>
    </PolicyLayout>
  )
}