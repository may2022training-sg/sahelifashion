import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { Instagram, Facebook, MapPin, Mail, Phone, Clock, UserRound } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-[#d4af37]/50 bg-[#fff5f7] text-[#2b2b2b] pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 border-b border-[#d4af37]/40">
          <div>
            <span className="font-serif text-2xl font-bold text-[#2b2b2b] block mb-3">
              {siteConfig.name}
            </span>
            <p className="text-sm leading-relaxed text-[#2b2b2b]/75 mb-6">
              Curated luxury sarees, designer lehengas, and bespoke Indian ethnic wear crafted with heritage charm and modern elegance.
            </p>
            <WhatsAppButton
              message="Hello Saheli Fashion! I am visiting your website and would like to get in touch."
              label="Instant WhatsApp Chat"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-[#c25975] hover:bg-[#a84562] text-white text-xs font-medium transition-colors shadow-sm"
            />

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af37] bg-white text-[#c25975] transition hover:bg-[#c25975] hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af37] bg-white text-[#c25975] transition hover:bg-[#c25975] hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-[#2b2b2b] mb-4 tracking-wide">
              Explore Collections
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#2b2b2b]/80 hover:text-[#c25975] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#2b2b2b]/80 hover:text-[#c25975] transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#2b2b2b]/80 hover:text-[#c25975] transition-colors">
                  Our Story & Brand
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#2b2b2b]/80 hover:text-[#c25975] transition-colors">
                  Contact & Enquiries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-[#2b2b2b] mb-4 tracking-wide">
              Client Support
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/faq" className="text-[#2b2b2b]/80 hover:text-[#c25975] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-[#2b2b2b]/80 hover:text-[#c25975] transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-[#2b2b2b]/80 hover:text-[#c25975] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#2b2b2b]/80 hover:text-[#c25975] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-[#2b2b2b] mb-4 tracking-wide">
              Studio Details
            </h3>
            <div className="space-y-3 text-sm text-[#2b2b2b]/80">
              <div className="flex items-start gap-3">
                <UserRound className="mt-0.5 h-4 w-4 text-[#c25975]" />
                <p className="leading-relaxed">{siteConfig.contactPersons}</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[#c25975]" />
                <p className="leading-relaxed">{siteConfig.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#c25975]" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#c25975] transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#c25975]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#c25975] transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[#c25975]" />
                <span>{siteConfig.hours}</span>
              </div>
              <div className="pt-1">
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-[#c25975] font-medium hover:text-[#a84562] transition-colors"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-[#2b2b2b]/70">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}