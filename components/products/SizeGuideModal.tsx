'use client'

import { useState } from 'react'
import { Ruler, X } from 'lucide-react'
import { Product } from '@/types'

interface SizeGuideModalProps {
  product: Product
}

const sizeRows = [
  { size: 'S', bust: '34–35 in', waist: '28–29 in', hip: '36–37 in' },
  { size: 'M', bust: '36–37 in', waist: '30–31 in', hip: '38–39 in' },
  { size: 'L', bust: '38–39 in', waist: '32–33 in', hip: '40–41 in' },
  { size: 'XL', bust: '40–42 in', waist: '34–36 in', hip: '42–44 in' },
]

export function SizeGuideModal({ product }: SizeGuideModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'chart' | 'fit'>('chart')

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#d4af37]/70 bg-[#fffdf5] px-4 py-2.5 text-sm font-medium text-[#800020] transition-colors hover:bg-[#fff5d9]"
      >
        <Ruler className="h-4 w-4" />
        Size &amp; Fit Guide
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-[#2a1b14]/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="size-guide-title"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-[28px] border border-[#e5c158] bg-[#fffdf5] p-6 shadow-2xl sm:rounded-[28px] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close size and fit guide"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[#800020] transition hover:bg-[#f7e7b8]"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b8860b]">Personalised fit support</p>
            <h2 id="size-guide-title" className="pr-10 font-serif text-3xl font-semibold text-stone-900">Size &amp; Fit Guide</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-stone-600">Use your body measurements rather than your usual label. For bespoke pieces, our stylists confirm every measurement before stitching.</p>

            <div className="mt-6 flex border-b border-stone-200">
              <button type="button" onClick={() => setActiveTab('chart')} className={`border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] ${activeTab === 'chart' ? 'border-[#800020] text-[#800020]' : 'border-transparent text-stone-500'}`}>Measurement chart</button>
              <button type="button" onClick={() => setActiveTab('fit')} className={`border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] ${activeTab === 'fit' ? 'border-[#800020] text-[#800020]' : 'border-transparent text-stone-500'}`}>Fit guidance</button>
            </div>

            {activeTab === 'chart' ? (
              <div className="mt-6">
                <div className="overflow-hidden rounded-xl border border-[#e5c158]/60">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#f7e7b8]/45 text-[10px] uppercase tracking-[0.14em] text-stone-600">
                      <tr><th className="px-3 py-3 font-semibold">Size</th><th className="px-3 py-3 font-semibold">Bust</th><th className="px-3 py-3 font-semibold">Waist</th><th className="px-3 py-3 font-semibold">Hip</th></tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200/80 text-stone-700">
                      {sizeRows.map((row) => <tr key={row.size} className={product.sizes.includes(row.size) ? 'bg-[#fffaf1] font-medium' : ''}><td className="px-3 py-3 font-semibold text-[#800020]">{row.size}</td><td className="px-3 py-3">{row.bust}</td><td className="px-3 py-3">{row.waist}</td><td className="px-3 py-3">{row.hip}</td></tr>)}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-stone-500">Highlighted rows are available for this design. Sarees and unstitched pieces are listed as Free Size.</p>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-[#e5c158]/60 bg-[#fffaf1] p-4"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#800020]">This design</p><p className="mt-2 text-sm leading-6 text-stone-700">{product.fit ?? 'Designed for a graceful, easy movement fit.'}</p></div>
                <ol className="space-y-4 text-sm leading-6 text-stone-700"><li><strong className="text-stone-900">1. Bust:</strong> Measure around the fullest point, keeping the tape parallel to the floor.</li><li><strong className="text-stone-900">2. Waist:</strong> Measure the natural waist without pulling the tape tight.</li><li><strong className="text-stone-900">3. Hip:</strong> Measure around the fullest point of the hip and seat.</li></ol>
                <p className="border-l-2 border-[#d4af37] pl-4 text-sm italic text-stone-600">Between sizes? Choose the larger size and share your measurements with our styling team for a more comfortable alteration.</p>
              </div>
            )}

            <div className="mt-7 rounded-xl bg-[#800020] p-4 text-sm leading-6 text-[#fffaf0]">Need a second opinion? Send your measurements on WhatsApp and our stylists will guide you before you enquire.</div>
          </div>
        </div>
      )}
    </>
  )
}