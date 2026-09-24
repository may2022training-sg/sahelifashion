'use client'

import { useState } from 'react'
import { FALLBACK_IMAGE } from '@/data/unsplashImages'
import { FallbackImage } from '@/components/ui/FallbackImage'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

interface ImageGalleryProps {
  images: string[]
  title: string
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number>(0)
  const displayImages = images.length > 0 ? images : [FALLBACK_IMAGE]
  const whatsappMessage = `Hello Saheli Fashion, I am interested in inquiring about ${title}.`

  return (
    <div className="flex flex-col gap-4">
      <div className="jharokha-frame">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[18px] bg-stone-100">
          <FallbackImage
            src={displayImages[selectedImage] || FALLBACK_IMAGE}
            alt={title}
            fill
            priority
            className="object-cover object-center transition-all duration-300"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {displayImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`relative aspect-square w-20 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                selectedImage === idx
                  ? 'border-amber-700 ring-2 ring-amber-700/20'
                  : 'border-stone-200 opacity-70 hover:opacity-100'
              }`}
            >
              <FallbackImage
                src={img || FALLBACK_IMAGE}
                alt={`${title} view ${idx + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}

      <WhatsAppButton
        message={whatsappMessage}
        label="Inquire on WhatsApp"
        className="w-full flex items-center justify-center py-3 px-4 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-colors"
      />
    </div>
  )
}