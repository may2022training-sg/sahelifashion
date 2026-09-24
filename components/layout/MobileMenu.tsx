'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NavItem } from '@/types'
import { Menu, X } from 'lucide-react'

interface MobileMenuProps {
  navItems: NavItem[]
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex min-h-11 min-w-11 items-center justify-center p-2 text-[#2a1b14] transition-colors duration-200 hover:text-[#800020] focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-24 z-50 flex flex-col gap-4 border-b border-[#e5c158]/70 bg-[#fffdf5] p-6 shadow-xl md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="py-1 text-lg font-medium text-[#2a1b14] transition hover:text-[#800020]"
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t border-[#e5c158]/50 pt-4">
            <Link
              href="/contact#inquiry-form"
              onClick={() => setIsOpen(false)}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-[#800020] px-5 py-3 text-center text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-[#5d001a]"
            >
              Studio Enquiry
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}