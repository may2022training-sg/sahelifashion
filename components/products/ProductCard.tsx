import Link from 'next/link'
import { Product } from '@/types'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { FallbackImage } from '@/components/ui/FallbackImage'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = `Hello Saheli Fashion, I am interested in inquiring about ${product.title}.`

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#e5c158]/70 bg-[#fffdf5] shadow-[0_18px_40px_rgba(128,0,32,0.06)] transition-shadow hover:shadow-[0_22px_45px_rgba(128,0,32,0.1)]">
      <div className="jharokha-frame m-3 mb-0 rounded-[24px] p-2">
        <Link href={`/products/${product.slug}`} className="relative block aspect-[3/4] w-full overflow-hidden rounded-[18px] bg-stone-100">
          <FallbackImage
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="font-serif font-semibold text-stone-900 text-lg mb-2 line-clamp-1">
            <Link href={`/products/${product.slug}`} className="hover:text-amber-800 transition-colors">
              {product.title}
            </Link>
          </h3>
          <p className="text-stone-600 text-xs line-clamp-2 mb-4 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
          <WhatsAppButton
            message={whatsappMessage}
            label="Inquire on WhatsApp"
            className="w-full flex items-center justify-center py-2.5 px-3 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors"
          />
          <Link
            href={`/products/${product.slug}`}
            className="text-center text-xs font-medium text-stone-700 hover:text-amber-800 py-1 transition-colors"
          >
            View Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}