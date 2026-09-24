import { categories } from '@/data/categories'
import { CategoryCard } from '@/components/categories/CategoryCard'

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-amber-700 font-medium tracking-widest uppercase text-xs sm:text-sm mb-2 block">
          Timeless Attire
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
          Explore Our Categories
        </h1>
        <p className="text-stone-600 text-base sm:text-lg">
          Immerse yourself in our distinct collections—crafted with artisan expertise for weddings, celebrations, and heritage occasions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}