'use client'

import { useEffect, useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { CATEGORIES } from '@/data/categories'
import { FallbackImage } from '@/components/ui/FallbackImage'

interface HeaderSearchProps {
  className?: string
}

export function HeaderSearch({ className = '' }: HeaderSearchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return CATEGORIES.filter((category) => {
      const searchableText = [category.id, category.titleEn, category.titleGu]
        .join(' ')
        .toLowerCase()

      return !normalizedQuery || searchableText.includes(normalizedQuery)
    })
  }, [query])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeSearch = () => {
    setIsOpen(false)
    setQuery('')
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Search products"
        title="Search products"
        className={`inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-[#d4af37]/70 bg-[#fffaf1] text-[#800020] transition hover:bg-[#fff5d9] ${className}`}
      >
        <Search className="h-4 w-4" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-[#2a1b14]/65 px-4 pt-20 backdrop-blur-sm transition-opacity duration-300 sm:pt-28"
          role="dialog"
          aria-modal="true"
          aria-label="Search Saheli products"
          onClick={closeSearch}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-[24px] border border-[#e5c158] bg-[#fffdf5] shadow-[0_24px_80px_rgba(42,27,20,0.24)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-[#e5c158]/50 px-5 py-4 sm:px-6">
              <Search className="h-5 w-5 shrink-0 text-[#b8860b]" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name, silk, organza, crimson..."
                aria-label="Search by product name, fabric, or color"
                className="min-w-0 flex-1 bg-transparent font-serif text-lg text-[#2a1b14] outline-none placeholder:text-stone-400"
              />
              <button
                type="button"
                onClick={closeSearch}
                aria-label="Close search"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#800020] transition hover:bg-[#f7e7b8]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-3 sm:p-4">
              <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b8860b]">
                {query.trim() ? `${results.length} matching designs` : 'Explore the edit'}
              </p>
              {results.length > 0 ? (
                <div className="space-y-1">
                  {results.map((category) => (
                    <a
                      key={category.id}
                      href={category.photoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeSearch}
                      className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-[#fff5d9]"
                    >
                      <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-lg bg-stone-100">
                        <FallbackImage
                          src={category.image}
                          alt={`${category.titleEn} | ${category.titleGu}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="56px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="truncate font-serif text-base font-semibold text-[#2a1b14] group-hover:text-[#800020]">
                          {category.titleEn} | {category.titleGu}
                        </h2>
                        <p className="mt-1 truncate text-xs text-stone-500">View the {category.titleEn} collection</p>
                      </div>
                      <span className="pr-2 text-xs font-semibold uppercase tracking-wider text-[#800020]">View</span>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="px-3 py-10 text-center">
                  <p className="font-serif text-xl text-[#2a1b14]">No designs found</p>
                  <p className="mt-2 text-sm text-stone-500">Try a fabric, color, or a shorter phrase.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}