'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FALLBACK_IMAGE } from '@/data/unsplashImages'

interface FallbackImageProps {
  src: string
  alt: string
  fill?: boolean
  priority?: boolean
  className?: string
  sizes?: string
  wrapperClassName?: string
}

export function FallbackImage({
  src,
  alt,
  fill = false,
  priority = false,
  className,
  sizes,
  wrapperClassName,
}: FallbackImageProps) {
  const [imageSrc, setImageSrc] = useState(src || FALLBACK_IMAGE)

  return (
    <div className={wrapperClassName}>
      <Image
        src={imageSrc || FALLBACK_IMAGE}
        alt={alt}
        fill={fill}
        priority={priority}
        className={className}
        sizes={sizes}
        onError={() => setImageSrc(FALLBACK_IMAGE)}
      />
    </div>
  )
}
