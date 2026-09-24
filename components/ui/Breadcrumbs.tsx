import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center text-xs text-stone-500 py-3 mb-4 overflow-x-auto">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <div key={item.href} className="flex items-center shrink-0">
            {index > 0 && <ChevronRight className="w-3.5 h-3.5 mx-2 text-stone-400" />}
            {isLast ? (
              <span className="font-medium text-stone-900 truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-amber-800 transition-colors">
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}