"use client";

import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Photos/car_new.png"
          alt="Shoreline view"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/85 via-[#0a1628]/70 to-[#0a1628]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tag */}
          <p className="text-[#FFC107] text-sm font-semibold tracking-widest uppercase mb-6">
            Solar Panel, Gutter & Windows Cleaning Specialists
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Professional{" "}
            <span className="text-[#0047AB]">Solar Panel, Gutter & Windows Cleaning</span>{" "}
            Across The Shoreline.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Keep your solar panels efficient and gutters flowing. Trusted by homeowners 
            and businesses in Rockingham, Warnbro & surrounding areas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact">
              <Button 
                size="lg" 
                className="bg-[#0047AB] hover:bg-[#003d8f] text-white font-bold py-6 px-10 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                GET A FREE QUOTE
              </Button>
            </a>
            <a href="tel:0413213689">
              <Button 
                size="lg" 
                className="bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold py-6 px-10 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                CALL NOW
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
