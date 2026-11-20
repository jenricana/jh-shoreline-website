"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"

export function LandingHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Promo bar */}
      <div className="bg-[#0a1628] text-white text-center text-xs sm:text-sm font-medium py-2 px-4">
        FREE QUOTES &middot; NO OBLIGATION &middot; CALL <a href="tel:0413213689" className="text-[#FFC107] font-bold">0413 213 689</a>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/Photos/jh-shoreline-logo-v4.png" alt="JH Shoreline Cleaning Services" width={52} height={52} className="object-contain" />
            <div className="leading-tight">
              <p className="text-[#0047AB] font-extrabold text-lg tracking-tight">JH SHORELINE</p>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-gray-500 uppercase">Window Cleaning</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#0a1628]">
            <a href="#quote" className="hover:text-[#0047AB]">Get a Quote</a>
            <Link href="/pricing" className="hover:text-[#0047AB]">Pricing</Link>
            <Link href="/services/windows-cleaning" className="hover:text-[#0047AB]">Our Services</Link>
            <Link href="/reviews" className="hover:text-[#0047AB]">Reviews</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:0413213689"
              className="hidden sm:inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#0047AB] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" /> 0413 213 689
            </a>
            <button
              className="md:hidden p-2 text-[#0a1628]"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-1 text-sm font-semibold text-[#0a1628] border-t border-gray-100">
            <a href="#quote" onClick={() => setOpen(false)} className="py-3 border-b border-gray-100">Get a Quote</a>
            <Link href="/pricing" onClick={() => setOpen(false)} className="py-3 border-b border-gray-100">Pricing</Link>
            <Link href="/services/windows-cleaning" onClick={() => setOpen(false)} className="py-3 border-b border-gray-100">Our Services</Link>
            <Link href="/reviews" onClick={() => setOpen(false)} className="py-3">Reviews</Link>
          </nav>
        )}
      </div>
    </header>
  )
}
