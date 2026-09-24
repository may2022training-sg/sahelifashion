import CategoryGrid from '@/components/CategoryGrid'

export default function ProductsPage() {
  return (
    <div className="bg-[#FAF6F0] px-4 py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
          Our Full Collection
        </h1>
        <p className="text-stone-600 text-base sm:text-lg">
          Browse through our complete catalogue of handpicked sarees, lehengas, suits, and designer wear.
        </p>
      </div>

      <section className="mx-auto mb-4 max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">
            Collection | કલેક્શન
          </h2>
        </div>
        <CategoryGrid />
      </section>
    </div>
  )
}