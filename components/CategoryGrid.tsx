import Image from 'next/image'
import { CATEGORIES } from '@/data/categories'
import { ExternalLink, MessageCircle } from 'lucide-react'

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
      {CATEGORIES.map((category) => (
        <article
          key={category.id}
          className="group rounded-3xl border border-[#D4AF37]/40 bg-[#FFFDF9] p-2.5 shadow-[0_14px_30px_rgba(58,45,39,0.05)] transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl"
        >
          <a href={category.photoUrl} target="_blank" rel="noopener noreferrer">
            <div className="overflow-hidden rounded-[22px] border border-[#D4AF37]/20 bg-[#FAF6F0]">
              <Image
                src={category.image}
                alt={`${category.titleEn} | ${category.titleGu}`}
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="px-2 pb-2 pt-3 text-center">
              <h3 className="font-serif text-lg font-semibold text-[#3A2D27] md:text-xl">
                {category.titleEn} | {category.titleGu}
              </h3>
            </div>
          </a>
          <div className="flex flex-col sm:flex-row gap-2 w-full px-1 pb-1 pt-2">
            <a
              href={category.photoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full sm:w-auto flex-1 items-center justify-center gap-1.5 rounded-md border border-[#D4AF37]/60 px-3 py-2.5 text-center text-xs font-medium text-[#3A2D27] transition hover:bg-[#F7E7B8] sm:text-sm"
            >
              <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              View Collection
            </a>
            <a
              href={`https://wa.me/918469484356?text=${encodeURIComponent(`Hi, I am interested in the ${category.titleEn} collection`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full sm:w-auto flex-1 items-center justify-center gap-1.5 rounded-md bg-[#25D366] px-3 py-2.5 text-center text-xs font-medium text-[#12351f] transition hover:bg-[#1fbd5a] sm:text-sm"
            >
              <MessageCircle className="h-3.5 w-3.5 shrink-0" />
              WhatsApp Inquiry
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}