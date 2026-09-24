'use client'

import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { MobileMenu } from './MobileMenu'
import { HeaderSearch } from './HeaderSearch'
import { useLanguage } from '@/components/providers/LanguageProvider'

export function Header() {
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { label: t('home'), href: '/' },
    { label: t('collections'), href: '/products' },
    { label: t('about'), href: '/about' },
    { label: t('contact'), href: '/contact' },
  ]

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Saheli Fashion, I am interested in inquiring about your collection.'
  )}`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5c158]/70 bg-[#fffdf5]/95 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'gu' : 'en')}
              className="rounded-full border border-[#d4af37] bg-white/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#800020] transition hover:bg-[#fff5d9]"
            >
              {t('languageToggle')}
            </button>
          </div>

          <Link href="/" className="flex flex-col items-start justify-center">
            <span className="font-serif text-2xl font-bold tracking-[0.08em] text-[#800020] md:text-3xl">
              {siteConfig.logoText}
            </span>
            <span className="text-[10px] font-medium tracking-[0.24em] text-[#b8860b] uppercase md:text-[11px]">
              {siteConfig.tagline}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#2a1b14] transition hover:text-[#800020]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <HeaderSearch />
            <div className="flex flex-col items-center gap-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-[#d4af37] bg-[#fffaf1] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#800020] transition-colors duration-200 hover:bg-[#fdf1d4]"
              >
                {t('whatsapp')}
              </a>
              <a
                href="tel:+918469484356"
                className="text-[10px] font-medium tracking-[0.04em] text-[#7a4d1e] transition-colors hover:text-[#800020]"
              >
                +91 8469484356
              </a>
            </div>
            <Link
              href="/contact#inquiry-form"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md bg-[#800020] px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition-colors duration-200 hover:bg-[#5d001a]"
            >
              {t('studioEnquiry')}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <HeaderSearch />
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'gu' : 'en')}
              className="rounded-full border border-[#d4af37] bg-white/80 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#800020]"
            >
              {t('languageToggle')}
            </button>
            <MobileMenu navItems={navItems} />
          </div>
        </div>
      </div>

      <div className="border-t border-[#e5c158]/60 bg-[#fff7de]">
        <div className="overflow-hidden whitespace-nowrap py-2.5 text-sm text-[#7a4d1e]">
          <div className="ticker-track flex min-w-max items-center gap-8 px-4 font-medium tracking-[0.04em]">
            {[siteConfig.translations[language].categoryTicker, siteConfig.translations[language].categoryTicker].map(
              (text, index) => (
                <span key={index} className="flex items-center gap-8">
                  {text.split('•').map((item, itemIndex) => (
                    <span key={itemIndex} className="inline-flex items-center gap-8">
                      {item.trim()}
                      {itemIndex < text.split('•').length - 1 && <span className="text-[#d4af37]">•</span>}
                    </span>
                  ))}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  )
}