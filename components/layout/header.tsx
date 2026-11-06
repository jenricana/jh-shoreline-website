"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { name: "Gutter Cleaning", href: "/services/gutter-cleaning" },
  { name: "Solar Panel Cleaning", href: "/services/solar-panel-cleaning" },
  { name: "Windows Cleaning", href: "/services/windows-cleaning" },
  { name: "High Reach Windows", href: "/services/windows-cleaning-high-reach" },
  { name: "End of Lease Cleaning", href: "/services/end-of-lease-cleaning" },
  { name: "Carpet Cleaning", href: "/services/carpet-cleaning" },
  { name: "Oven Cleaning", href: "/services/oven-cleaning" },
  { name: "High Pressure Cleaning", href: "/services/high-pressure-cleaning" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full absolute top-0 left-0 right-0 z-50">
      {/* Top Info Bar - Blue Background */}
      <div className="bg-[#0a1628] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2.5 text-xs">
            {/* Contact Info */}
            <div className="flex items-center gap-4 md:gap-6">
              <a href="mailto:jhshorelinecleaningservice@gmail.com" className="flex items-center gap-2 hover:text-[#FFC107] transition-colors">
                <Mail className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">jhshorelinecleaningservice@gmail.com</span>
              </a>
              
              <span className="hidden md:block text-white/30">|</span>
              
              <a href="tel:0413213689" className="hidden md:flex items-center gap-2 hover:text-[#FFC107] transition-colors">
                <Phone className="h-3.5 w-3.5" />
                <span>0413 213 689</span>
              </a>
            </div>

            {/* Right side - FAQs, Support, Social Icons */}
            <div className="flex items-center gap-4">
              <a href="/#about" className="hidden md:inline hover:text-[#FFC107] transition-colors">FAQs</a>
              <a href="/contact" className="hidden md:inline hover:text-[#FFC107] transition-colors">Support</a>
              
              {/* Social Icons */}
              <div className="flex items-center gap-2 ml-2">
                <a href="#" className="text-white hover:text-[#FFC107] transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="text-white hover:text-[#FFC107] transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="text-white hover:text-[#FFC107] transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Navigation Bar */}
      <div className="py-3">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl">
          <div className="flex h-16 items-center justify-between px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/Photos/jh-shoreline-logo-v2.png" 
                alt="JH Shoreline Cleaning Services" 
                width={60} 
                height={60}
                className="object-contain"
              />
              <div className="hidden sm:block">
                <p className="text-[#0a1628] font-bold text-lg leading-tight">JH SHORELINE</p>
                <p className="text-[#0047AB] text-xs font-medium tracking-wide">CLEANING SERVICES</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-[#0a1628] hover:text-[#0047AB] transition-colors"
              >
                HOME
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                    isServicesOpen 
                      ? 'text-[#0047AB]' 
                      : 'text-[#0a1628] hover:text-[#0047AB]'
                  }`}
                >
                  SERVICES
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </Link>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 w-72 bg-[#0a1628] rounded-lg shadow-2xl py-3 z-50 mt-1 transition-all duration-200 ${
                  isServicesOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {/* Header */}
                  <div className="px-4 py-2 mb-1 border-b border-white/10">
                    <p className="text-white text-sm font-medium">Professional Cleaning Services</p>
                  </div>
                  {/* Service Links */}
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center justify-between px-4 py-3 text-sm text-white/80 hover:text-[#FFC107] hover:bg-white/10 transition-colors"
                    >
                      <span>{service.name}</span>
                      <span className="text-[#FFC107]">›</span>
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/about"
                className="text-sm font-medium text-[#0a1628] hover:text-[#0047AB] transition-colors"
              >
                ABOUT
              </Link>
              <Link
                href="/reviews"
                className="text-sm font-medium text-[#0a1628] hover:text-[#0047AB] transition-colors"
              >
                CLIENT REVIEW
              </Link>
              {/* DVA and NDIS links hidden for now
              <Link
                href="/dva"
                className="text-sm font-medium text-[#0a1628] hover:text-[#0047AB] transition-colors"
              >
                DVA
              </Link>
              <Link
                href="/ndis"
                className="text-sm font-medium text-[#0a1628] hover:text-[#0047AB] transition-colors"
              >
                NDIS
              </Link>
              */}
              <Link
                href="/contact"
                className="text-sm font-medium text-[#0a1628] hover:text-[#0047AB] transition-colors"
              >
                CONTACT
              </Link>
            </nav>

            {/* CTA Button - Yellow */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl text-base"
              >
                Get A Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4">
            <div className="py-4">
              <nav className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="block py-3 text-sm font-medium text-gray-700 hover:text-[#0047AB] border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>

                {/* Services with sub-menu */}
                <div className="border-b border-gray-100">
                  <div className="flex items-center justify-between py-3">
                    <Link
                      href="/services"
                      className="text-sm font-medium text-gray-700 hover:text-[#0047AB]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      SERVICES
                    </Link>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="p-1"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {isServicesOpen && (
                    <div className="pl-4 pb-3 space-y-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block py-2 text-sm text-gray-600 hover:text-[#0047AB]"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="/about"
                  className="block py-3 text-sm font-medium text-gray-700 hover:text-[#0047AB] border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <Link
                  href="/reviews"
                  className="block py-3 text-sm font-medium text-gray-700 hover:text-[#0047AB] border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CLIENT REVIEW
                </Link>
                {/* DVA and NDIS links hidden for now
                <Link
                  href="/dva"
                  className="block py-3 text-sm font-medium text-gray-700 hover:text-[#0047AB] border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  DVA
                </Link>
                <Link
                  href="/ndis"
                  className="block py-3 text-sm font-medium text-gray-700 hover:text-[#0047AB] border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  NDIS
                </Link>
                */}
                <Link
                  href="/contact"
                  className="block py-3 text-sm font-medium text-gray-700 hover:text-[#0047AB] border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
                <Link
                  href="/contact"
                  className="block mt-4 bg-[#0047AB] hover:bg-[#003d8f] text-white font-bold py-3 px-6 rounded-lg text-center shadow-lg transition-all text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request a quote
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
