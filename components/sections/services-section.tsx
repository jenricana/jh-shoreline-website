"use client";

import { Sparkles, Sun, Wrench, Building2 } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "gutter",
    slug: "gutter-cleaning",
    icon: Wrench,
    title: "Gutter\nCleaning",
    description: "Remove leaves, debris and blockages to prevent water damage and keep gutters flowing freely.",
    image: "/Photos/gutter_cleaning (2).png"
  },
  {
    id: "solar",
    slug: "solar-panel-cleaning",
    icon: Sun,
    title: "Solar Panel\nCleaning",
    description: "Maximize energy efficiency with professional solar panel cleaning for optimal performance.",
    image: "/Photos/solar_pannel_cleaning.png"
  },
  {
    id: "windows",
    slug: "windows-cleaning",
    icon: Sparkles,
    title: "Windows\nCleaning",
    description: "Crystal clear windows for ground floor and first floor residential properties with streak-free results.",
    image: "/Photos/windows_cleaning_@.png"
  },
  {
    id: "windows-high",
    slug: "windows-cleaning-high-reach",
    icon: Building2,
    title: "High Reach\nWindows",
    description: "Professional window cleaning for multi-story buildings and hard-to-reach windows with specialized equipment.",
    image: "/Photos/high_reach_windows_3.png"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 overflow-hidden bg-gradient-to-b from-[#e8eef9] to-[#f0f4fb]">
      {/* Scattered Dotted Pattern Overlay - multiple layers for organic look */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle, #0047AB 1px, transparent 1px),
          radial-gradient(circle, #0047AB 1.5px, transparent 1.5px),
          radial-gradient(circle, #0047AB 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px, 80px 80px, 120px 120px',
        backgroundPosition: '0 0, 25px 25px, 40px 40px',
        opacity: 0.12
      }}></div>
      
      {/* Decorative Map Outline Elements */}
      <div className="absolute top-20 right-32 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="20" cy="30" r="2" fill="#0047AB"/>
          <circle cx="40" cy="25" r="2" fill="#0047AB"/>
          <circle cx="60" cy="35" r="2" fill="#0047AB"/>
          <circle cx="80" cy="30" r="2" fill="#0047AB"/>
          <circle cx="100" cy="40" r="2" fill="#0047AB"/>
          <circle cx="120" cy="35" r="2" fill="#0047AB"/>
          <circle cx="140" cy="45" r="2" fill="#0047AB"/>
          <circle cx="160" cy="50" r="2" fill="#0047AB"/>
          <circle cx="170" cy="70" r="2" fill="#0047AB"/>
          <circle cx="175" cy="90" r="2" fill="#0047AB"/>
          <circle cx="180" cy="110" r="2" fill="#0047AB"/>
          <circle cx="175" cy="130" r="2" fill="#0047AB"/>
          <circle cx="165" cy="145" r="2" fill="#0047AB"/>
          <circle cx="150" cy="155" r="2" fill="#0047AB"/>
          <circle cx="130" cy="165" r="2" fill="#0047AB"/>
          <circle cx="110" cy="170" r="2" fill="#0047AB"/>
          <circle cx="90" cy="175" r="2" fill="#0047AB"/>
          <circle cx="70" cy="170" r="2" fill="#0047AB"/>
          <circle cx="50" cy="160" r="2" fill="#0047AB"/>
          <circle cx="35" cy="145" r="2" fill="#0047AB"/>
          <circle cx="25" cy="125" r="2" fill="#0047AB"/>
          <circle cx="20" cy="105" r="2" fill="#0047AB"/>
          <circle cx="18" cy="85" r="2" fill="#0047AB"/>
          <circle cx="20" cy="65" r="2" fill="#0047AB"/>
          <circle cx="22" cy="50" r="2" fill="#0047AB"/>
        </svg>
      </div>
      
      <div className="absolute bottom-32 left-24 opacity-10">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
          <circle cx="25" cy="20" r="2" fill="#0047AB"/>
          <circle cx="45" cy="25" r="2" fill="#0047AB"/>
          <circle cx="65" cy="30" r="2" fill="#0047AB"/>
          <circle cx="85" cy="35" r="2" fill="#0047AB"/>
          <circle cx="105" cy="40" r="2" fill="#0047AB"/>
          <circle cx="120" cy="55" r="2" fill="#0047AB"/>
          <circle cx="125" cy="75" r="2" fill="#0047AB"/>
          <circle cx="120" cy="95" r="2" fill="#0047AB"/>
          <circle cx="105" cy="110" r="2" fill="#0047AB"/>
          <circle cx="85" cy="120" r="2" fill="#0047AB"/>
          <circle cx="65" cy="125" r="2" fill="#0047AB"/>
          <circle cx="45" cy="120" r="2" fill="#0047AB"/>
          <circle cx="30" cy="105" r="2" fill="#0047AB"/>
          <circle cx="20" cy="85" r="2" fill="#0047AB"/>
          <circle cx="18" cy="65" r="2" fill="#0047AB"/>
          <circle cx="20" cy="45" r="2" fill="#0047AB"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/Photos/What_we_provide.png"
              alt="What We Provide"
              width={200}
              height={30}
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4">
            We Work Cleaning Fields to{" "}
            <span className="text-[#0047AB]">Clean</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Roof and gutter cleaning for commercial and residential properties.
            Professional service with attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <div 
                  key={service.id}
                  id={`service-${service.id}`}
                  className="group"
                >
                  <a href={`/services/${service.slug}`} className="block">
                    <div className="relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                      {/* Card with image background */}
                      <div className="relative h-[380px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 border-2 border-transparent group-hover:border-[#0047AB]">
                        {/* Background Image */}
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent group-hover:from-[#0047AB]/95 group-hover:via-[#0047AB]/60 group-hover:to-[#0047AB]/30 transition-all duration-500"></div>
                        
                        {/* Icon */}
                        <div className="absolute top-6 left-6 z-10">
                          <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-[#FFC107] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            <Icon className="w-7 h-7 text-[#0047AB] group-hover:text-white transition-colors duration-500" />
                          </div>
                        </div>

                        {/* Description overlay - shows on hover */}
                        <div className="absolute inset-x-6 bottom-28 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <p className="text-white text-sm leading-relaxed font-medium drop-shadow-lg">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Title Card - Overlapping */}
                      <div className="absolute -bottom-8 left-6 right-6 bg-white rounded-2xl shadow-xl p-5 group-hover:shadow-2xl group-hover:-bottom-10 group-hover:bg-gradient-to-r group-hover:from-[#0047AB] group-hover:to-[#0a1628] transition-all duration-500">
                        <h3 className="text-base md:text-lg font-bold text-[#0a1628] group-hover:text-white whitespace-pre-line leading-tight transition-colors duration-500">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-sm text-[#0047AB] group-hover:text-white/90 font-semibold transition-colors duration-500">
                            Discover More
                          </span>
                          <span className="text-[#0047AB] group-hover:text-white transition-all duration-500 transform group-hover:translate-x-2">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
