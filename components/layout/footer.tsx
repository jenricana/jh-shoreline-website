"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {

  return (
    <footer className="bg-[#1a2d4d] text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Photos/cover_footer.png"
          alt="Footer Background"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[#1a2d4d]/85"></div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 right-20 text-white/5 text-4xl z-10">+</div>
      <div className="absolute top-40 right-40 text-white/5 text-2xl z-10">+</div>
      <div className="absolute bottom-32 left-20 text-white/5 text-3xl z-10">○</div>
      <div className="absolute top-32 left-32 text-white/5 text-2xl z-10">○</div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/Photos/jh-shoreline-logo-v4.png" 
                alt="JH Shoreline" 
                width={45} 
                height={45}
                className="object-contain"
              />
              <span className="text-lg font-bold text-[#FFC107]">JH Shoreline</span>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-xs">
              We are experienced in bringing quality cleaning services to your property, 
              with all outdoor and property maintenance as our specialties.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1DFRbvRMdZ/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-[#FFC107] transition-colors group">
                <Image src="/facebook_link.png" alt="Facebook" width={18} height={18} className="group-hover:brightness-0" />
              </a>
              <a href="https://www.instagram.com/jhshorelinecleaningservice/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-[#FFC107] transition-colors group">
                <svg className="w-[18px] h-[18px] text-white group-hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold mb-6 text-white text-xl">Useful Links</h4>
            <ul className="space-y-3.5 text-base">
              <li><a href="/#services" className="text-gray-300 hover:text-[#FFC107] transition-colors">All Services</a></li>
              <li><a href="/#about" className="text-gray-300 hover:text-[#FFC107] transition-colors">About Us</a></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#FFC107] transition-colors">Our Services</Link></li>
              <li><a href="/#testimonials" className="text-gray-300 hover:text-[#FFC107] transition-colors">Reviews</a></li>
              {/* DVA and NDIS links hidden for now
              <li><Link href="/dva" className="text-gray-300 hover:text-[#FFC107] transition-colors">DVA Services</Link></li>
              <li><Link href="/ndis" className="text-gray-300 hover:text-[#FFC107] transition-colors">NDIS Services</Link></li>
              */}
              <li><Link href="/contact" className="text-gray-300 hover:text-[#FFC107] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-bold mb-6 text-white text-xl">Our Services</h4>
            <ul className="space-y-3.5 text-base">
              <li><a href="/services/gutter-cleaning" className="text-gray-300 hover:text-[#FFC107] transition-colors">Gutter Cleaning</a></li>
              <li><a href="/services/gutter-guards" className="text-gray-300 hover:text-[#FFC107] transition-colors">Gutter Guards</a></li>
              <li><a href="/services/solar-panel-cleaning" className="text-gray-300 hover:text-[#FFC107] transition-colors">Solar Panel Cleaning</a></li>
              <li><a href="/services/solar-bird-proofing" className="text-gray-300 hover:text-[#FFC107] transition-colors">Solar Bird Proofing</a></li>
              <li><a href="/services/windows-cleaning" className="text-gray-300 hover:text-[#FFC107] transition-colors">Windows Cleaning</a></li>
              <li><a href="/services/windows-cleaning-high-reach" className="text-gray-300 hover:text-[#FFC107] transition-colors">High Reach Windows</a></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-bold mb-6 text-white text-xl">Business Hours</h4>
            <ul className="space-y-3.5 text-base">
              <li className="flex justify-between gap-4">
                <span className="text-gray-300">Sunday</span>
                <span className="text-gray-300 font-medium">8AM-5PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-gray-300">Monday</span>
                <span className="text-gray-300 font-medium">8AM-5PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-gray-300">Tuesday</span>
                <span className="text-gray-300 font-medium">8AM-5PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-gray-300">Wednesday</span>
                <span className="text-gray-300 font-medium">8AM-5PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-gray-300">Thursday</span>
                <span className="text-gray-300 font-medium">8AM-5PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-gray-300">Friday</span>
                <span className="text-gray-300 font-medium">8AM-5PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-gray-300">Saturday</span>
                <span className="text-gray-300 font-medium">8AM-5PM</span>
              </li>
            </ul>
          </div>

          {/* Contact - Without Newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-white text-xl">Contact Us</h4>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center flex-shrink-0">
                  <Image src="/call.png" alt="Call" width={40} height={40} />
                </div>
                <div>
                  <p className="text-white font-semibold text-base">Call Us</p>
                  <a href="tel:0413213689" className="text-gray-300 hover:text-[#FFC107] transition-colors text-base">0413 213 689</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center flex-shrink-0">
                  <Image src="/mail.png" alt="Mail" width={40} height={40} />
                </div>
                <div>
                  <p className="text-white font-semibold text-base">Mail Us</p>
                  <a href="mailto:jhshorelinecleaningservice@gmail.com" className="text-gray-300 hover:text-[#FFC107] transition-colors text-sm break-all">jhshorelinecleaningservice@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center flex-shrink-0">
                  <Image src="/location.png" alt="Location" width={40} height={40} />
                </div>
                <div>
                  <p className="text-white font-semibold text-base">Our Location</p>
                  <p className="text-gray-300 text-sm">Rockingham, Warnbro & Surrounding Areas, WA</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Yellow */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#FFC107] py-4 z-20">
          <div className="container mx-auto px-4">
            <p className="text-sm text-[#0a1628] text-center font-medium">
              © {new Date().getFullYear()} JH Shoreline Cleaning Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
