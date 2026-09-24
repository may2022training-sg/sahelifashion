'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import { siteConfig, type Language } from '@/config/site'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: keyof typeof siteConfig.translations.en) => string
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  setLanguage: () => undefined,
  t: (key) => siteConfig.translations.en[key],
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: keyof typeof siteConfig.translations.en) =>
        siteConfig.translations[language][key],
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
