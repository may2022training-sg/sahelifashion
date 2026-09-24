import { notFound } from 'next/navigation'
import { categories } from '@/data/categories'
import { products } from '@/data/products'
import { ProductGrid } from '@/components/products/ProductGrid'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { FallbackImage } from '@/components/ui/FallbackImage'

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export default async function CategorySlugPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  const categoryProducts = products.filter((p) => p.categoryId === category.id)

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Categories', href: '/categories' },
          { label: category.name, href: `/categories/${category.slug}` },
        ]}
      />

      <div className="jharokha-frame my-8 p-3 md:p-4">
        <div className="relative min-h-[260px] overflow-hidden rounded-[26px] bg-stone-900 text-white md:min-h-[320px] flex items-center">
          {category.bannerImage && (
            <FallbackImage
              src={category.bannerImage}
              alt={category.name}
              fill
              className="object-cover opacity-45"
              priority
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a1b14]/80 via-[#2a1b14]/55 to-[#2a1b14]/30" />
          <div className="relative z-10 max-w-2xl p-6 md:p-12">
            <h1 className="mb-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
              {category.name}
            </h1>
            <p className="text-sm leading-relaxed text-stone-200 sm:text-base">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">
          Available Designs ({categoryProducts.length})
        </h2>
        {categoryProducts.length > 0 ? (
          <ProductGrid products={categoryProducts} />
        ) : (
          <p className="text-stone-500 py-12 text-center bg-stone-50 rounded-lg border border-stone-200">
            No items are currently listed under this category.
          </p>
        )}
      </div>
    </div>
  )
}