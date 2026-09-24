'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Product } from '@/types'
import { FallbackImage } from '@/components/ui/FallbackImage'

interface CustomerReviewsProps {
  product: Product
}

const reviewCopy = [
  { name: 'Aarohi M.', title: 'The details are even more beautiful in person.', body: 'The finish and handwork feel incredibly considered. The styling guidance helped me choose the right silhouette for my celebration.' },
  { name: 'Kavya R.', title: 'A special piece with beautiful movement.', body: 'The fabric photographs beautifully but feels even better when worn. Saheli helped me feel confident about the fit before confirming.' },
  { name: 'Meera S.', title: 'Thoughtful from enquiry to delivery.', body: 'The team was patient with every question and the final piece felt personal, polished, and true to the heritage details.' },
]

export function CustomerReviews({ product }: CustomerReviewsProps) {
  const [activePhoto, setActivePhoto] = useState(0)
  const photos = product.images.slice(0, 3)
  const averageRating = '4.9'

  const showPrevious = () => setActivePhoto((current) => (current - 1 + photos.length) % photos.length)
  const showNext = () => setActivePhoto((current) => (current + 1) % photos.length)

  return (
    <section className="mt-16 border-t border-stone-200 pt-12" aria-labelledby="reviews-heading">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div><p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b8860b]">Shared by our clients</p><h2 id="reviews-heading" className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">Notes from the Saheli circle</h2><p className="mt-2 max-w-xl text-sm leading-6 text-stone-600">A closer look at how this design is loved, styled, and made part of meaningful occasions.</p></div>
        <div className="flex items-center gap-3 rounded-full border border-[#e5c158]/60 bg-[#fffaf1] px-4 py-2"><span className="font-serif text-2xl font-semibold text-[#800020]">{averageRating}</span><span className="flex gap-0.5 text-[#d4af37]" aria-label="Rated 4.9 out of 5"><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /></span><span className="text-xs text-stone-500">Client rating</span></div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid grid-cols-[1fr_auto] gap-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100"><FallbackImage src={photos[activePhoto]} alt={`${product.title} client styling gallery`} fill className="object-cover" sizes="(max-width: 1024px) 80vw, 35vw" /><div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-4 pt-12"><span className="text-xs font-medium uppercase tracking-[0.16em] text-white">Client style gallery</span><span className="text-xs text-white">{activePhoto + 1} / {photos.length}</span></div></div>
          <div className="flex flex-col justify-center gap-2"><button type="button" onClick={showPrevious} aria-label="Previous client photo" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37] text-[#800020] transition hover:bg-[#f7e7b8]"><ChevronLeft className="h-4 w-4" /></button><button type="button" onClick={showNext} aria-label="Next client photo" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37] text-[#800020] transition hover:bg-[#f7e7b8]"><ChevronRight className="h-4 w-4" /></button></div>
        </div>
        <div className="space-y-4">{reviewCopy.map((review) => <article key={review.name} className="border-b border-stone-200 pb-4 last:border-0"><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#800020] text-xs font-semibold text-white">{review.name.slice(0, 2)}</span><span className="text-sm font-semibold text-stone-900">{review.name}</span></div><span className="flex gap-0.5 text-[#d4af37]" aria-label="5 out of 5 stars"><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /></span></div><h3 className="mt-3 font-serif text-lg text-stone-900">{review.title}</h3><p className="mt-1 text-sm leading-6 text-stone-600">{review.body}</p></article>)}</div>
      </div>
    </section>
  )
}