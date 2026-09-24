import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products } from '@/data/products'
import { categories } from '@/data/categories'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ImageGallery } from '@/components/products/ImageGallery'
import { ProductGrid } from '@/components/products/ProductGrid'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { Sparkles, ShieldCheck, Globe, Share2 } from 'lucide-react'

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductSlugPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const category = categories.find((c) => c.id === product.categoryId)
  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4)

  const whatsappEnquiryMessage = `Hello Saheli Fashion, I am interested in inquiring about ${product.title}.`
  const shareMessage = `Check out this gorgeous ethnic design from Saheli Fashion: ${product.title}`

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          ...(category ? [{ label: category.name, href: `/categories/${category.slug}` }] : []),
          { label: product.title, href: `/product/${product.slug}` },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 my-8">
        <div className="lg:col-span-7">
          <ImageGallery images={product.images} title={product.title} />
        </div>

        <div className="lg:col-span-5 flex flex-col justify-start">
          {category && (
            <Link
              href={`/categories/${category.slug}`}
              className="text-amber-700 hover:text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2 inline-block"
            >
              {category.name}
            </Link>
          )}

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            {product.title}
          </h1>

          <p className="text-stone-600 text-base leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5 mb-8 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              Garment Details
            </h3>
            {product.fabric && (
              <div className="flex justify-between text-sm py-1 border-b border-stone-200/60">
                <span className="text-stone-500">Fabric:</span>
                <span className="font-medium text-stone-800">{product.fabric}</span>
              </div>
            )}
            {product.technique && (
              <div className="flex justify-between text-sm py-1 border-b border-stone-200/60">
                <span className="text-stone-500">Craft / Technique:</span>
                <span className="font-medium text-stone-800">{product.technique}</span>
              </div>
            )}
            {product.fit && (
              <div className="flex justify-between text-sm py-1 border-b border-stone-200/60">
                <span className="text-stone-500">Fit / Silhouette:</span>
                <span className="font-medium text-stone-800">{product.fit}</span>
              </div>
            )}
            {product.care && (
              <div className="flex justify-between text-sm py-1">
                <span className="text-stone-500">Wash Care:</span>
                <span className="font-medium text-stone-800">{product.care}</span>
              </div>
            )}
          </div>

          <div className="space-y-3 mb-8">
            <WhatsAppButton
              message={whatsappEnquiryMessage}
              label="Inquire on WhatsApp"
              className="w-full flex items-center justify-center py-4 px-6 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base transition-colors shadow-md"
            />
            
            <WhatsAppButton
              message={shareMessage}
              label="Share via WhatsApp"
              className="w-full flex items-center justify-center py-2.5 px-6 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 text-sm font-medium transition-colors border border-stone-300"
              icon={<Share2 className="w-4 h-4 mr-2" />}
            />
          </div>

          <div className="grid grid-cols-3 gap-3 border-t border-stone-200 pt-6 text-center text-xs text-stone-600">
            <div className="flex flex-col items-center gap-1.5 p-2">
              <Sparkles className="w-5 h-5 text-amber-700" />
              <span>Custom Stitching</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 p-2">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
              <span>Quality Assured</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 p-2">
              <Globe className="w-5 h-5 text-amber-700" />
              <span>Worldwide Express</span>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="border-t border-stone-200 pt-16 mt-16">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-8 text-center">
            You May Also Like
          </h2>
          <ProductGrid products={relatedProducts} />
        </section>
      )}
    </div>
  )
}