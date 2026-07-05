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
                src="/Photos/logo_jhshoreline.png" 
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
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-[#FFC107] transition-colors group">
                <Image src="/facebook_link.png" alt="Facebook" width={18} height={18} className="group-hover:brightness-0" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-[#FFC107] transition-colors group">
                <Image src="/twiter_link.png" alt="Twitter" width={18} height={18} className="group-hover:brightness-0" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-[#FFC107] transition-colors group">
                <Image src="/youtube_link.png" alt="YouTube" width={18} height={18} className="group-hover:brightness-0" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-[#FFC107] transition-colors group">
                <Image src="/linked_in_link.png" alt="LinkedIn" width={18} height={18} className="group-hover:brightness-0" />
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
              <li><Link href="/contact" className="text-gray-300 hover:text-[#FFC107] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-bold mb-6 text-white text-xl">Our Services</h4>
            <ul className="space-y-3.5 text-base">
              <li><a href="/services/gutter-cleaning" className="text-gray-300 hover:text-[#FFC107] transition-colors">Gutter Cleaning</a></li>
              <li><a href="/services/solar-panel-cleaning" className="text-gray-300 hover:text-[#FFC107] transition-colors">Solar Panel Cleaning</a></li>
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
                <span className="text-gray-300 font-medium">Closed</span>
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
                <span className="text-[#FFC107] font-medium">Open 24 hours</span>
              </li>
            </ul>
          </div>

          {/* Contact - Without Newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-white text-xl">Contact Us</h4>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#0047AB] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image src="/call.png" alt="Call" width={20} height={20} />
                </div>
                <div>
                  <p className="text-white font-semibold text-base">Call Us</p>
                  <a href="tel:0413213689" className="text-gray-300 hover:text-[#FFC107] transition-colors text-base">0413 213 689</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#0047AB] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image src="/mail.png" alt="Mail" width={20} height={20} />
                </div>
                <div>
                  <p className="text-white font-semibold text-base">Mail Us</p>
                  <a href="mailto:jhshorelineservices@gmail.com" className="text-gray-300 hover:text-[#FFC107] transition-colors text-sm break-all">jhshorelineservices@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#0047AB] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image src="/location.png" alt="Location" width={20} height={20} />
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
