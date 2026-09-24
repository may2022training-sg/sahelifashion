import type { Metadata } from 'next'
import { Inter, Noto_Sans_Gujarati, Playfair_Display } from 'next/font/google'
import { siteConfig } from '@/config/site'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LanguageProvider } from '@/components/providers/LanguageProvider'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const gujarati = Noto_Sans_Gujarati({
  subsets: ['gujarati'],
  variable: '--font-noto-gujarati',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Saheli Fashion | Heritage Designer Boutique in Ahmedabad',
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Discover exquisite bespoke sarees, lehengas, kurtis, and traditional Gujarati ethnic wear by Heena Ghelani & Nisha Devani in Ahmedabad.',
  keywords: [
    'Saheli Fashion',
    'Ahmedabad boutique',
    'Gujarati traditional wear',
    'designer sarees',
    'bespoke lehengas',
    'kurtis',
    'co-ord sets',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'Saheli Fashion | Heritage Designer Boutique in Ahmedabad',
    description:
      'Discover exquisite bespoke sarees, lehengas, kurtis, and traditional Gujarati ethnic wear by Heena Ghelani & Nisha Devani in Ahmedabad.',
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Saheli Fashion heritage designer boutique in Ahmedabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saheli Fashion | Heritage Designer Boutique in Ahmedabad',
    description:
      'Discover exquisite bespoke sarees, lehengas, kurtis, and traditional Gujarati ethnic wear by Heena Ghelani & Nisha Devani in Ahmedabad.',
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${gujarati.variable}`}
    >
      <body className="font-sans antialiased bg-background text-charcoal min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1 bg-background">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}