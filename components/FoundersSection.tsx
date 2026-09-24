import Image from 'next/image'

const founders = [
  {
    name: 'Heena Ghelani',
    role: 'Founder and Director',
    eyebrow: 'The Guiding Vision',
    description:
      'Heena Ghelani is the founder and director of Saheli Fashion, bringing a warm, discerning eye to every client relationship and collection. Her journey has grown from a love of Indian textiles and the quiet confidence of a perfectly chosen outfit into an Ahmedabad boutique built on trust, personal attention, and enduring style.',
    achievement:
      'She has shaped Saheli into a destination where women can discover refined festive, bridal, and everyday ethnic wardrobes with thoughtful styling and a genuinely personal studio experience.',
    vision:
      'Heena believes luxury should feel welcoming: beautifully made, thoughtfully fitted, and always connected to the woman wearing it.',
    image: '/images/heena-ghelani-portrait.jpg',
    accent: 'bg-[#2F1D1A]',
    badge: 'bg-[#D4AF37] text-[#2A1B14]',
  },
  {
    name: 'Nisha Devani',
    role: 'Co-founder and Creative Director',
    eyebrow: 'The Creative Heart',
    description:
      'Nisha Devani is Saheli Fashion\'s co-founder and creative director, translating heritage, colour, and craftsmanship into a modern visual language. Her creative practice is rooted in the belief that traditional Gujarati and Indian design can feel both regal and wonderfully alive for today\'s woman.',
    achievement:
      'Through considered curation, silhouette, fabric, and detail, she has helped build collections that move effortlessly from celebrations and bridal moments to the everyday occasions that deserve their own elegance.',
    vision:
      'Nisha imagines Saheli as a living expression of heritage: expressive, generous, and made memorable through details that feel uniquely yours.',
    image: '/images/nisha-devani-portrait.jpg',
    accent: 'bg-[#5C1F2F]',
    badge: 'bg-[#F2D78C] text-[#2A1B14]',
  },
]

export default function FoundersSection() {
  return (
    <section className="space-y-8">
      <div className="mb-10 text-center md:mb-14">
        <span className="mb-3 inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-[#F8F0D9] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.24em] text-[#7A5B1D] shadow-sm">
          Vision • Craft • Grace
        </span>
        <h2 className="font-serif text-3xl text-[#3A2D27] md:text-4xl">
          Meet the Visionaries | વિઝનરીઓને મળો
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#4b4b4b] md:text-lg">
          Together, Heena and Nisha have shaped a boutique where heritage is felt in every thread and every woman is welcomed as part of the Saheli story.
        </p>
      </div>

      {founders.map((founder) => (
        <article
          key={founder.name}
          className="group relative overflow-hidden rounded-[30px] border border-[#D4AF37]/55 bg-[linear-gradient(135deg,#fffaf4_0%,#f7ead1_100%)] p-3 shadow-[0_24px_60px_rgba(58,45,39,0.1)] transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-[0_28px_70px_rgba(58,45,39,0.16)] md:p-4"
        >
          <div className="pointer-events-none absolute inset-2 rounded-[24px] border border-[#D4AF37]/35" />
          <div className="relative grid items-stretch gap-6 rounded-[22px] bg-[#FFFDF9]/80 p-5 md:grid-cols-[minmax(260px,0.8fr)_1.4fr] md:gap-10 md:p-8">
            <div className="relative min-h-[280px] overflow-hidden rounded-[18px] border-4 border-[#F2D78C] bg-[#F5E7C3] shadow-[0_18px_38px_rgba(58,45,39,0.16)] md:min-h-[360px]">
              <Image
                src={founder.image}
                alt={`${founder.name}, ${founder.role}`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2F1D1A]/85 to-transparent px-5 pb-5 pt-16">
                <p className="font-serif text-xl text-[#FFFDF9]">{founder.name}</p>
              </div>
            </div>

            <div className="flex flex-col justify-center py-2 text-left md:py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7A5B1D]">{founder.eyebrow}</p>
              <div className={`mt-4 inline-flex w-fit rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] shadow-sm ${founder.badge}`}>
                {founder.role}
              </div>
              <h3 className="mt-5 font-serif text-3xl font-bold text-[#3A2D27] md:text-4xl">{founder.name}</h3>
              <p className="mt-5 text-base leading-relaxed text-[#4b4b4b] md:text-lg">{founder.description}</p>
              <div className={`mt-6 rounded-[18px] p-5 ${founder.accent}`}>
                <p className="text-sm leading-relaxed text-white/90 md:text-base">{founder.achievement}</p>
                <p className="mt-3 border-t border-white/20 pt-3 text-sm font-medium leading-relaxed text-[#F7E7B8] md:text-base">{founder.vision}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
