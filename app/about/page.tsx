import { Heart, Scissors, Sparkles } from 'lucide-react'
import FoundersSection from '@/components/FoundersSection'
import { siteConfig } from '@/config/site'

const valueCards = [
  {
    title: 'Heritage Craftsmanship',
    description:
      'Kutchi & Bandhani embroideries, rich royal fabrics, and intricate handwork that celebrate Indian tradition with elevated elegance.',
    icon: Sparkles,
  },
  {
    title: 'Bespoke Perfection',
    description:
      'Custom fitting, direct studio experience, and personal styling that ensure every silhouette feels truly yours.',
    icon: Scissors,
  },
  {
    title: 'Empowering Elegance',
    description:
      'Celebrating women, confidence, and graceful self-expression through authentic ethnic luxury for every occasion.',
    icon: Heart,
  },
]

export default function AboutPage() {
  return (
    <div className="bg-[#FAF6F0] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-[#FFFDF9] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-[#7a5b1d] shadow-sm">
            સાઠે મળીને | TOGETHER & EMPOWERED
          </span>
          <h1 className="mt-6 text-3xl font-serif leading-tight text-[#3A2D27] md:text-5xl">
            The Women Behind Saheli Fashion
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#4b4b4b] md:text-lg">
            Meet the founders whose shared love for Indian design, Ahmedabad&apos;s living heritage, and meaningful dressing became a boutique built for confidence and celebration.
          </p>
        </div>

        <FoundersSection />

        <section className="my-14 rounded-[30px] border border-[#D4AF37]/55 bg-[linear-gradient(135deg,#3A1D24_0%,#5C1F2F_48%,#2F1D1A_100%)] p-1 shadow-[0_24px_60px_rgba(58,45,39,0.18)]">
          <div className="rounded-[26px] border border-[#F2D78C]/35 px-6 py-10 text-center md:px-12 md:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F2D78C]">Saheli Fashion | Ahmedabad</p>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#FFFDF9] md:text-5xl">
              પરંપરાની શોભા, સંસ્કૃતિની ભવ્યતા અને પરંપરાગત સુંદરતા
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#F8EEDB] md:text-lg">
              Saheli Fashion is an Ahmedabad-based designer boutique where Gujarati warmth meets the grandeur of Indian couture. Our studio brings together bespoke sarees, expressive lehengas, elegant kurtis, co-ord sets, and traditional silhouettes selected for women who want their clothing to carry memory, meaning, and unmistakable presence.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-[#F8EEDB] md:text-lg">
              Every visit is shaped by personal conversation, careful styling, and a respect for the craft behind each fabric and detail. From festive gatherings and bridal milestones to the beautiful occasions in between, Saheli honours Ahmedabad&apos;s heritage while creating a modern, welcoming expression of luxury.
            </p>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-3">
          {valueCards.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-[24px] border border-[#D4AF37]/30 bg-[#FFFDF9] p-6 shadow-[0_16px_36px_rgba(58,45,39,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(58,45,39,0.08)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5E7C3] text-[#7a5b1d] shadow-inner">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mb-3 font-serif text-2xl text-[#3A2D27]">{title}</h2>
              <p className="text-sm leading-relaxed text-[#4b4b4b] md:text-base">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] border border-[#D4AF37]/30 bg-[#FFFDF9] p-8 text-center shadow-[0_16px_36px_rgba(58,45,39,0.04)] md:p-10">
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#4b4b4b] md:text-xl">
            “We don&apos;t just craft attire; we curate confidence, heritage, and unforgettable moments for every celebration.”
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hello Saheli Fashion, I would like to book a studio visit.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#D4AF37] px-6 py-3 text-sm font-medium text-[#2b2b2b] transition-colors duration-200 hover:bg-[#c79b2a]"
            >
              Book Studio Visit | સ્ટુડિયો મુલાકાત
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-serif text-xl italic text-[#3A2D27] md:text-2xl">
            Where Gujarati Tradition Meets Timeless Royal Luxury.
          </p>
        </div>
      </div>
    </div>
  )
}
