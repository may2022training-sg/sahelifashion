'use client'

import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { ArrowRight, MapPinned, MessageCircleMore, PhoneCall } from 'lucide-react'

const studioExperience = [
  'In-Person Trial & Styling',
  'On-Spot Custom Fitting',
  'Warm Hospitality',
  'Direct Studio Pricing',
]

const inquiryOptions = [
  'Navratri Special Garba Collection',
  'Bridal & Designer Lehengas',
  'Silk Sarees & Co-Ord Sets',
  'Custom Stitching & Fitting Inquiry',
]

export default function ContactPage() {
  return (
    <div className="bg-[#FAF6F0] pb-16 text-[#3A2D27]">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.5fr_1fr]">
          <div className="rounded-[32px] border border-[#D4AF37]/35 bg-[#FFFDF9] p-4 shadow-[0_18px_45px_rgba(58,45,39,0.08)]">
            <div className="overflow-hidden rounded-[28px] border border-[#D4AF37]/40 bg-[#FAF6F0]">
              <Image
                src="/images/namaste-left.png"
                alt="Model in maroon ethnic wear greeting with Namaste"
                width={900}
                height={900}
                className="h-[360px] w-full object-contain object-center md:h-[420px]"
              />
            </div>
          </div>

          <div className="text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#D4AF37]/45 bg-[#F7E7B8] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#7A5B1D] shadow-sm">
              સંપર્ક કરો | CONNECT WITH SAHELI
            </span>
            <h1 className="font-serif text-3xl text-[#3A2D27] md:text-5xl">
              પધારો! Step Into Our World of Ethnic Couture
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#4B4B4B] md:text-lg">
              Whether you need personal styling, bridal consultation, or custom fitting, Heena and Nisha welcome you to our studio.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#D4AF37]/35 bg-[#FFFDF9] p-4 shadow-[0_18px_45px_rgba(58,45,39,0.08)]">
            <div className="overflow-hidden rounded-[28px] border border-[#D4AF37]/40 bg-[#FAF6F0]">
              <Image
                src="/images/namaste-right.png"
                alt="Model in blue and gold ethnic wear greeting with Namaste"
                width={900}
                height={900}
                className="h-[360px] w-full object-contain object-center md:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[30px] border border-[#D4AF37]/35 bg-[#FFFDF9] p-6 shadow-[0_18px_40px_rgba(58,45,39,0.06)] md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-[#3A2D27] p-2.5 text-[#F2D78C]">
                <MapPinned className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#3A2D27]">
                AHMEDABAD STUDIO | અમદાવાદ સ્ટુડિયો
              </h2>
            </div>

            <div className="space-y-5 text-[#3A2D27]">
              <div className="rounded-[20px] bg-[#F7F0E2] p-4">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7A5B1D]">Address</p>
                <p className="mt-2 text-base leading-relaxed text-[#3A2D27]">
                  A504, Shantinagar Flat, Near Somiya Residency, Opp. JJ Parikh, Sarkhej, Ujala Circle, Ahmedabad - 382210
                </p>
              </div>

              <div className="rounded-[20px] bg-[#F7F0E2] p-4">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7A5B1D]">Hours</p>
                <p className="mt-2 text-base text-[#3A2D27]">
                  Mon – Sat: 10:30 AM – 8:00 PM | Sun: By Appointment
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hello Saheli Fashion, I would like to enquire about a studio appointment.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#1F8A5A] px-5 py-4 text-base font-semibold text-white shadow-[0_12px_24px_rgba(31,138,90,0.2)] transition-colors duration-200 hover:bg-[#187548]"
              >
                <MessageCircleMore className="h-5 w-5" />
                Chat with Heena and Nisha on WhatsApp
              </a>

              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#D4AF37] bg-transparent px-5 py-4 text-base font-semibold text-[#3A2D27] transition hover:bg-[#F7E7B8]"
              >
                <MapPinned className="h-5 w-5" />
                Get Directions on Google Maps | રસ્તો જુઓ
              </a>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#D4AF37]/40 bg-[#FFFDF9] p-6 shadow-[0_18px_40px_rgba(58,45,39,0.06)] md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-[#3A2D27] p-2.5 text-[#F2D78C]">
                <PhoneCall className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#3A2D27]">
                Fashion Inquiry Form
              </h2>
            </div>

            <form
              id="inquiry-form"
              className="space-y-5"
              style={{ scrollMarginTop: '18rem' }}
              onSubmit={(event) => event.preventDefault()}
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#3A2D27]">
                  Full Name <span className="text-[#7A5B1D]">(તમારું નામ)</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-[#D4AF37]/40 bg-[#FFFDF9] px-4 py-3 text-[#3A2D27] outline-none ring-0 transition focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#3A2D27]">
                  WhatsApp/Phone Number <span className="text-[#7A5B1D]">(ફોન નંબર)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-[#D4AF37]/40 bg-[#FFFDF9] px-4 py-3 text-[#3A2D27] outline-none transition focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label htmlFor="interest" className="mb-2 block text-sm font-medium text-[#3A2D27]">
                  Category Interest
                </label>
                <select
                  id="interest"
                  defaultValue=""
                  className="w-full rounded-xl border border-[#D4AF37]/40 bg-[#FFFDF9] px-4 py-3 text-[#3A2D27] outline-none transition focus:border-[#D4AF37]"
                >
                  <option value="" disabled>
                    Select an enquiry category
                  </option>
                  {inquiryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#3A2D27]">
                  Message / Requirements
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your occasion, size preferences, and styling needs..."
                  className="w-full resize-none rounded-xl border border-[#D4AF37]/40 bg-[#FFFDF9] px-4 py-3 text-[#3A2D27] outline-none transition focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3A2D27] px-6 py-4 text-base font-semibold text-[#F7E7B8] transition hover:bg-[#5B1826] hover:text-[#F2D78C]"
              >
                Send Inquiry | પૂછપરછ મોકલો
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="overflow-hidden rounded-[30px] border border-[#D4AF37]/40 bg-[#FFFDF9] p-2 shadow-[0_18px_40px_rgba(58,45,39,0.08)]">
          <iframe
            title="Saheli Fashion Studio Map"
            src="https://www.google.com/maps?q=A504%2C%20Shantinagar%20Flat%2C%20Near%20Somiya%20Residency%2C%20Opp.%20JJ%20Parikh%2C%20Sarkhej%2C%20Ujala%20Circle%2C%20Ahmedabad%20382210&z=14&output=embed"
            className="h-[320px] w-full rounded-[24px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {studioExperience.map((item) => (
            <div
              key={item}
              className="rounded-[22px] border border-[#D4AF37]/35 bg-[#FFFDF9] px-4 py-5 text-center font-medium text-[#3A2D27] shadow-[0_10px_22px_rgba(58,45,39,0.04)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}