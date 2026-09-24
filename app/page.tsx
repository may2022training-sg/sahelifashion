import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import CategoryGrid from '@/components/CategoryGrid'
import { NavratriOffer } from '@/components/NavratriOffer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { FallbackImage } from '@/components/ui/FallbackImage'


export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-16 md:gap-24">
      <section className="fade-up-section relative isolate w-full min-h-[80vh] overflow-hidden bg-[#180d0a] text-[#fdf8ee]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Saheli Fashion Ethnic Wear Collection"
          fill
          priority
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/55 via-black/35 to-black/20" />

        <div className="relative z-20 mx-auto flex min-h-[80vh] w-full max-w-7xl items-center px-4 py-16 sm:px-6 md:px-10 lg:px-12">
          <div className="max-w-2xl">
            <span className="mb-3 block text-sm font-medium uppercase tracking-[0.28rem] text-[#f0d99b]">
              Handcrafted Indian Heritage
            </span>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-stone-50 sm:text-5xl md:text-6xl">
              Elegance Woven in Every Thread
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg md:text-xl">
              Discover our curated collection of luxury Sarees, Designer Lehengas, and Bespoke Ethnic Couture crafted for your most cherished moments.
            </p>
            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-[#d4af37] px-8 py-3.5 text-center font-medium text-[#2a1b14] transition-colors duration-200 hover:bg-[#c9a632]"
              >
                Explore Collections
              </Link>
              <WhatsAppButton
                message="Namaste Saheli Fashion! I am exploring your homepage and would like to enquire about your latest ethnic wear collection."
                label="WhatsApp Enquiry"
                className="inline-flex items-center justify-center rounded-md border border-[#f0d99b] bg-[#2a1b14]/55 px-8 py-3.5 font-medium text-stone-50 transition-colors duration-200 hover:bg-[#2a1b14]/80"
              />
            </div>
          </div>
        </div>
      </section>

      <NavratriOffer />

      <section className="fade-up-section container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-stone-900 md:text-4xl">
            Collection | કલેક્શન
          </h2>
        </div>
        <CategoryGrid />
      </section>

      <section className="fade-up-section bg-[#FAF6F0] px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-[#FFFDF9] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-[#7a5b1d] shadow-sm">
              સાઠે મળીને | TOGETHER & EMPOWERED
            </span>
            <h2 className="mt-6 text-3xl font-serif leading-tight text-[#3A2D27] md:text-4xl">
              પરંપરાની ભવ્યતા, આધુનિક સૌંદર્ય અને સાહેલી જેવી લાગણી
            </h2>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1.4fr]">
            <div className="group relative h-[420px] overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-[#FFFDF9] shadow-[0_24px_60px_rgba(58,45,39,0.08)] transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl md:h-[500px]">
              <FallbackImage
                src="/images/homepage-featured-saree.jpg"
                alt="Saheli Fashion boutique studio story"
                fill
                className="h-auto w-full rounded-3xl object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <p className="text-base leading-relaxed text-[#4b4b4b] md:text-lg">
                Welcome to <span className="font-semibold text-[#3A2D27]">{siteConfig.name}</span> — where every outfit carries a story of tradition, elegance, and personal expression. From graceful sarees and designer lehengas to contemporary ethnic ensembles, we curate timeless creations that celebrate the beauty and confidence of every woman.
              </p>
              <p className="text-base leading-relaxed text-[#4b4b4b] md:text-lg">
                Founded by <span className="font-semibold text-[#3A2D27]">Heena Ghelani</span> and <span className="font-semibold text-[#3A2D27]">Nisha Devani</span> in Ahmedabad, Saheli Fashion is more than a boutique — it is a personalised styling destination where heritage craftsmanship meets modern elegance. Every fabric, embroidery detail, and silhouette is thoughtfully selected to create outfits that feel special, memorable, and uniquely yours.
              </p>
              <p className="text-base leading-relaxed text-[#4b4b4b] md:text-lg">
                Inspired by India&apos;s rich traditions and today&apos;s confident woman, Saheli Fashion celebrates celebrations, relationships, and beautiful moments through fashion. Because every woman deserves an outfit that feels as extraordinary as her story.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md border border-[#D4AF37]/50 bg-[#FFFDF9] px-6 py-3 text-sm font-medium text-[#3A2D27] transition-colors duration-200 hover:bg-[#f7e7b8] hover:shadow-md"
                >
                  Discover Our Journey
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hello Saheli Fashion, I would like to book a studio visit.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#D4AF37] px-6 py-3 text-sm font-medium text-[#2b2b2b] transition-colors duration-200 hover:bg-[#c79c2a]"
                >
                  Visit Our Ahmedabad Studio | સ્ટુડિયો મુલાકાત
                </a>
              </div>

              <p className="pt-1 text-sm font-medium italic text-[#7a5b1d]">
                Designed with love by Heena &amp; Nisha
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/25 shadow-md transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl">
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
              <Image
                src="/images/heritage-craftsmanship.jpg"
                alt="Heritage Craftsmanship"
                width={900}
                height={1200}
                className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="font-serif text-lg tracking-wide text-[#FFFDF9]">Heritage Craftsmanship</h3>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/25 shadow-md transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl">
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
              <Image
                src="/images/bespoke-perfection.jpg"
                alt="Bespoke Perfection"
                width={900}
                height={1200}
                className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="font-serif text-lg tracking-wide text-[#FFFDF9]">Bespoke Perfection</h3>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/25 shadow-md transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl">
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
              <Image
                src="/images/empowering-elegance.jpg"
                alt="Empowering Elegance"
                width={900}
                height={1200}
                className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="font-serif text-lg tracking-wide text-[#FFFDF9]">Empowering Elegance</h3>
              </div>
            </article>
          </div>

          <div className="mt-12 text-center">
            <p className="font-serif text-xl italic text-[#3A2D27] md:text-2xl">
              Where Gujarati Tradition Meets Timeless Royal Luxury.
            </p>
          </div>
        </div>
      </section>

      <section className="fade-up-section container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 border-y border-stone-200 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <article className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/25 shadow-md transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl">
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
            <Image
              src="/images/feature-premium-fabrics.jpg"
              alt="Premium Fabrics"
              width={900}
              height={1200}
              className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="font-serif text-lg tracking-wide text-[#FFFDF9]">Premium Fabrics</h3>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/25 shadow-md transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl">
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
            <Image
              src="/images/feature-custom-fitting-assistance.jpg"
              alt="Custom Fitting Assistance"
              width={900}
              height={1200}
              className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="font-serif text-lg tracking-wide text-[#FFFDF9]">Custom Fitting Assistance</h3>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/25 shadow-md transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl">
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
            <Image
              src="/images/feature-shipping-assistance.jpg"
              alt="Shipping Assistance"
              width={900}
              height={1200}
              className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="font-serif text-lg tracking-wide text-[#FFFDF9]">Shipping Assistance</h3>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/25 shadow-md transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl">
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
            <Image
              src="/images/feature-whatsapp-consultations.jpg"
              alt="WhatsApp Consultations"
              width={900}
              height={1200}
              className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="font-serif text-lg tracking-wide text-[#FFFDF9]">WhatsApp Consultations</h3>
            </div>
          </article>
        </div>
      </section>

      <section className="fade-up-section mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-center gap-8 rounded-2xl border border-[#D4AF37]/40 bg-[#3A2D27] p-8 shadow-[0_18px_45px_rgba(58,45,39,0.35)] md:flex-row md:gap-12 md:p-12">
          <div className="w-full text-left md:w-1/2">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37] sm:text-sm">
              BESPOKE STYLING SERVICE
            </span>
            <h2 className="mb-4 max-w-xl font-serif text-3xl font-bold leading-tight text-[#FFFFFF] sm:text-4xl md:text-5xl">
              Looking for Custom Color Options or Bridal Enquiries?
            </h2>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-[#F5F0E8]/90 sm:text-lg">
              Connect directly with our fashion consultants via WhatsApp for fabric video tours, customized size consultations, and worldwide shipping details.
            </p>
            <WhatsAppButton
              message="Namaste! I would like to initiate a personal styling and custom enquiry session."
              label="Start Instant WhatsApp Chat"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(37,211,102,0.28)] transition-colors duration-200 hover:bg-[#1dbb5a] focus:outline-none focus:ring-2 focus:ring-[#F5D77F] focus:ring-offset-2 focus:ring-offset-[#3A2D27] sm:px-8 sm:text-base"
            />
          </div>

          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-xl border border-[#D4AF37]/40 bg-[#F5EFE7] p-2 shadow-2xl">
              <Image
                src="/images/bespoke-bridal-model.jpg"
                alt="Bridal styling consultation with Saheli Fashion"
                width={900}
                height={1200}
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
