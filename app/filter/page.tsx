import CategoryGrid from '@/components/CategoryGrid'
import { ProductCatalog } from '@/components/products/ProductCatalog'
import { products } from '@/data/products'

export default function FilterPage() {
  return (
    <div className="bg-[#FAF6F0] px-4 py-12 md:py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b8860b]">Find your expression</p>
        <h1 className="mb-4 font-serif text-4xl font-bold text-stone-900 sm:text-5xl">
          Filter the Collection
        </h1>
        <p className="text-base text-stone-600 sm:text-lg">
          Explore by category, then refine by fabric, color, and price to find a piece that feels distinctly yours.
        </p>
      </div>

      <section className="mx-auto mb-16 max-w-7xl" aria-labelledby="category-selection-heading">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 id="category-selection-heading" className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">
            Categories | કેટેગરીઝ
          </h2>
        </div>
        <CategoryGrid />
      </section>

      <ProductCatalog products={products} />
    </div>
  )
}