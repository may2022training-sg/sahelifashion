import Link from 'next/link'
import { Category } from '@/types'
import { FallbackImage } from '@/components/ui/FallbackImage'

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group flex h-full flex-col transition-all duration-300"
    >
      <div className="jharokha-frame p-2.5">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] bg-stone-200">
          <FallbackImage
            src={category.image}
            alt={category.name}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-stone-50">
            <h3 className="font-serif text-2xl font-bold mb-1 text-[#f8e4ae] group-hover:text-[#f3d57a] transition-colors">
              {category.name}
            </h3>
            <p className="text-xs text-stone-200 line-clamp-2 font-light leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}