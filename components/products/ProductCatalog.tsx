'use client'

import { useMemo, useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import { categories } from '@/data/categories'
import { Product } from '@/types'
import { ProductGrid } from './ProductGrid'

interface ProductCatalogProps {
  products: Product[]
}

const priceRanges = [
  { label: 'Any price', value: 'all' },
  { label: 'Under ₹10,000', value: 'under-10000' },
  { label: '₹10,000 - ₹20,000', value: '10000-20000' },
  { label: 'Above ₹20,000', value: 'over-20000' },
]

const complementaryCategories: Record<string, string[]> = {
  'cat-sarees': ['cat-suits', 'cat-designer'],
  'cat-lehengas': ['cat-sarees', 'cat-suits'],
  'cat-suits': ['cat-sarees', 'cat-designer'],
  'cat-designer': ['cat-sarees', 'cat-suits'],
}

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [fabricFilter, setFabricFilter] = useState('all')
  const [colorFilter, setColorFilter] = useState('all')
  const [priceFilter, setPriceFilter] = useState('all')

  const fabrics = Array.from(new Set(products.map((product) => product.fabric).filter(Boolean))) as string[]
  const colors = Array.from(new Set(products.map((product) => product.color)))

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = categoryFilter === 'all' || product.categoryId === categoryFilter
      const matchesFabric = fabricFilter === 'all' || product.fabric === fabricFilter
      const matchesColor = colorFilter === 'all' || product.color === colorFilter
      const matchesPrice =
        priceFilter === 'all' ||
        (priceFilter === 'under-10000' && product.price < 10000) ||
        (priceFilter === '10000-20000' && product.price >= 10000 && product.price <= 20000) ||
        (priceFilter === 'over-20000' && product.price > 20000)

      return matchesCategory && matchesFabric && matchesColor && matchesPrice
    })
  }, [categoryFilter, colorFilter, fabricFilter, priceFilter, products])

  const recommendations = useMemo(() => {
    const activeCategory = categoryFilter !== 'all' ? categoryFilter : products[0]?.categoryId
    const complementary = complementaryCategories[activeCategory] ?? []
    return products.filter((product) => complementary.includes(product.categoryId)).slice(0, 3)
  }, [categoryFilter, products])

  const activeFilterCount = [categoryFilter, fabricFilter, colorFilter, priceFilter].filter((value) => value !== 'all').length
  const clearFilters = () => {
    setCategoryFilter('all')
    setFabricFilter('all')
    setColorFilter('all')
    setPriceFilter('all')
  }

  const filterFields = (
    <>
      <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
        Category
        <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)} className="min-h-11 rounded border border-[#e5c158]/70 bg-[#fffdf5] px-3 text-sm font-normal normal-case tracking-normal text-stone-800 outline-none focus:border-[#800020]">
          <option value="all">All categories</option>
          {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
        Fabric
        <select value={fabricFilter} onChange={(event) => setFabricFilter(event.target.value)} className="min-h-11 rounded border border-[#e5c158]/70 bg-[#fffdf5] px-3 text-sm font-normal normal-case tracking-normal text-stone-800 outline-none focus:border-[#800020]">
          <option value="all">All fabrics</option>
          {fabrics.map((fabric) => <option key={fabric} value={fabric}>{fabric}</option>)}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
        Color palette
        <select value={colorFilter} onChange={(event) => setColorFilter(event.target.value)} className="min-h-11 rounded border border-[#e5c158]/70 bg-[#fffdf5] px-3 text-sm font-normal normal-case tracking-normal text-stone-800 outline-none focus:border-[#800020]">
          <option value="all">All colors</option>
          {colors.map((color) => <option key={color} value={color}>{color}</option>)}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
        Price range
        <select value={priceFilter} onChange={(event) => setPriceFilter(event.target.value)} className="min-h-11 rounded border border-[#e5c158]/70 bg-[#fffdf5] px-3 text-sm font-normal normal-case tracking-normal text-stone-800 outline-none focus:border-[#800020]">
          {priceRanges.map((range) => <option key={range.value} value={range.value}>{range.label}</option>)}
        </select>
      </label>
    </>
  )

  return (
    <section className="mx-auto max-w-7xl" aria-labelledby="catalog-heading">
      <div className="mb-6 flex flex-col gap-4 border-b border-[#e5c158]/50 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b8860b]">Curated edit</p>
          <h2 id="catalog-heading" className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">Shop the collection</h2>
        </div>
        <button type="button" onClick={() => setIsFilterOpen(true)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#800020] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(128,0,32,0.15)] transition hover:bg-[#5d001a]">
          <SlidersHorizontal className="h-4 w-4" /> Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
        </button>
      </div>

      <div>
        <div className="mb-5 flex items-center justify-between text-sm text-stone-600">
          <span><strong className="text-stone-900">{filteredProducts.length}</strong> designs</span>
          {activeFilterCount > 0 && <button type="button" onClick={clearFilters} className="text-xs font-semibold text-[#800020]">Reset filters</button>}
        </div>
        {filteredProducts.length > 0 ? <ProductGrid products={filteredProducts} /> : <div className="rounded-2xl border border-dashed border-[#d4af37] bg-[#fffdf5] px-6 py-16 text-center"><p className="font-serif text-2xl text-stone-900">A considered edit awaits</p><p className="mt-2 text-sm text-stone-600">Try widening your filters to discover more designs.</p><button type="button" onClick={clearFilters} className="mt-5 rounded bg-[#800020] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white">Clear filters</button></div>}
      </div>

      {recommendations.length > 0 && (
        <section className="mt-20 border-t border-[#e5c158]/50 pt-12" aria-labelledby="complete-look-heading">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b8860b]">Styled together</p>
            <h2 id="complete-look-heading" className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">Complete the Look</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">Thoughtful pairings chosen to bring your occasion edit together.</p>
          </div>
          <ProductGrid products={recommendations} />
        </section>
      )}

      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#2a1b14]/60 p-0 backdrop-blur-sm sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label="Collection filters" onClick={() => setIsFilterOpen(false)}>
          <div className="w-full max-w-2xl rounded-t-[28px] border border-[#e5c158] bg-[#fffdf5] p-6 shadow-2xl sm:rounded-[28px]" onClick={(event) => event.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between"><h3 className="font-serif text-2xl font-semibold text-stone-900">Refine your edit</h3><button type="button" onClick={() => setIsFilterOpen(false)} aria-label="Close filters" className="flex h-10 w-10 items-center justify-center rounded-full text-[#800020] hover:bg-[#f7e7b8]"><X className="h-5 w-5" /></button></div>
            <div className="grid gap-4 sm:grid-cols-2">{filterFields}</div>
            <div className="mt-6 flex gap-3"><button type="button" onClick={clearFilters} className="min-h-11 flex-1 rounded border border-[#800020] text-sm font-semibold text-[#800020]">Clear</button><button type="button" onClick={() => setIsFilterOpen(false)} className="min-h-11 flex-1 rounded bg-[#800020] text-sm font-semibold text-white">View {filteredProducts.length} designs</button></div>
          </div>
        </div>
      )}
    </section>
  )
}