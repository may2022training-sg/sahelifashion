import Link from 'next/link'
import { CreditCard, RotateCcw, Truck } from 'lucide-react'

export function TrustSignals() {
  return (
    <div className="grid grid-cols-1 gap-3 border-y border-[#e5c158]/50 py-4 sm:grid-cols-3">
      <div className="flex items-start gap-3"><CreditCard className="mt-0.5 h-4 w-4 shrink-0 text-[#b8860b]" /><div><p className="text-xs font-semibold text-stone-800">Secure payment</p><p className="mt-0.5 text-[11px] leading-4 text-stone-500">Trusted payment links shared privately</p></div></div>
      <div className="flex items-start gap-3"><Truck className="mt-0.5 h-4 w-4 shrink-0 text-[#b8860b]" /><div><p className="text-xs font-semibold text-stone-800">Clear delivery timeline</p><p className="mt-0.5 text-[11px] leading-4 text-stone-500">Ready-to-ship in 2–4 working days</p></div></div>
      <div className="flex items-start gap-3"><RotateCcw className="mt-0.5 h-4 w-4 shrink-0 text-[#b8860b]" /><div><p className="text-xs font-semibold text-stone-800">Return guidance</p><p className="mt-0.5 text-[11px] leading-4 text-stone-500"><Link href="/shipping-policy" className="underline decoration-[#d4af37] underline-offset-2 hover:text-[#800020]">Eligibility shared before payment</Link></p></div></div>
    </div>
  )
}