"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DecorativeIcons } from "@/components/ui/decorative-icons";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Our Customer",
    rating: 5,
    text: "Absolutely outstanding service! The team from JH Shoreline cleaned our gutters and solar panels. Every detail was perfect, and they were so professional."
  },
  {
    name: "Michael T.",
    role: "Our Customer",
    rating: 5,
    text: "We've been using JH Shoreline for our strata property for over a year now. Consistently reliable, thorough, and great value for money."
  },
  {
    name: "Emma W.",
    role: "Our Customer",
    rating: 5,
    text: "They cleaned our roof and gutters before the rainy season. Found some issues we didn't know about and fixed them. Highly recommend!"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      <DecorativeIcons />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/Photos/jh-founder.jpg"
                alt="JH Shoreline Team"
                width={709}
                height={1024}
                className="object-cover object-[center_15%] w-full h-[500px]"
              />
              
              {/* Google Review Badge - Top Left */}
              <div className="absolute left-2 top-8 bg-white rounded-3xl px-3 py-6 shadow-2xl flex flex-col items-center" style={{width: '60px', height: '320px'}}>
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex-1 flex items-center">
                  <div className="text-[10px] text-gray-600 font-bold tracking-wider" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)', textOrientation: 'mixed'}}>Google</div>
                </div>
                <div className="text-4xl font-bold text-[#0a1628] leading-none">4.8</div>
                <div className="flex flex-col gap-1 my-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFC107] text-[#FFC107]" />
                  ))}
                </div>
                <div className="flex-1 flex items-center">
                  <div className="text-[8px] text-gray-500 font-medium" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)', textOrientation: 'mixed'}}>From 75+ reviews</div>
                </div>
              </div>

              {/* Owner Badge - Bottom Center */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#0047AB] to-[#0066CC] rounded-full px-8 py-4 shadow-2xl border-2 border-white/30">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-base md:text-lg leading-tight tracking-wide">
                      Excellence You Can Trust
                    </p>
                    <p className="text-white/90 text-xs md:text-sm font-medium mt-0.5">
                      JH - Founder & Owner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="relative bg-[#f8f9fc] rounded-3xl p-8 md:p-12">
            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#0047AB] rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                </svg>
              </div>
              <span className="text-[#0047AB] text-sm font-semibold tracking-wider uppercase">OUT TESTIMONIAL</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-6">
              What Our Clients Say
            </h2>

            {/* Large Quote Mark */}
            <div className="text-[#0047AB] text-7xl font-serif leading-none mb-6">&ldquo;</div>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {currentTestimonial.text}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                  <Image
                    src="/Photos/testimonials.png"
                    alt={currentTestimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#0a1628]">{currentTestimonial.name}</p>
                  <p className="text-sm text-gray-500">{currentTestimonial.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#FFC107] text-[#FFC107]" />
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-12 h-12 flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <Image
                  src="/left.png"
                  alt="Previous"
                  width={48}
                  height={48}
                  className="object-contain pointer-events-none"
                />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="w-12 h-12 flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <Image
                  src="/right.png"
                  alt="Next"
                  width={48}
                  height={48}
                  className="object-contain pointer-events-none"
                />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
