import { ReactNode } from 'react'

interface PolicyLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export function PolicyLayout({ title, subtitle, children }: PolicyLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="border-b border-stone-200 pb-8 mb-10 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-stone-600 text-sm sm:text-base">{subtitle}</p>
          )}
        </div>
        <div className="prose prose-stone max-w-none space-y-8 text-stone-700 leading-relaxed text-sm sm:text-base">
          {children}
        </div>
      </div>
    </div>
  )
}