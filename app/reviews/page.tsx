"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DecorativeIcons } from "@/components/ui/decorative-icons";

const allReviews = [
  {
    name: "Sarah M.",
    location: "Rockingham",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely outstanding service! The team from JH Shoreline cleaned our gutters and solar panels. Every detail was perfect, and they were so professional. They even took before and after photos to show the difference. Highly recommend!",
    service: "Gutter & Solar Panel Cleaning"
  },
  {
    name: "Michael T.",
    location: "Warnbro",
    rating: 5,
    date: "1 month ago",
    text: "We've been using JH Shoreline for our strata property for over a year now. Consistently reliable, thorough, and great value for money. The team is always punctual and respectful of our residents.",
    service: "Strata Property Maintenance"
  },
  {
    name: "Emma W.",
    location: "Safety Bay",
    rating: 5,
    date: "3 weeks ago",
    text: "They cleaned our roof and gutters before the rainy season. Found some issues we didn't know about and fixed them. Highly recommend! Great communication throughout the process.",
    service: "Roof & Gutter Cleaning"
  },
  {
    name: "David L.",
    location: "Rockingham",
    rating: 5,
    date: "2 months ago",
    text: "Professional window cleaning service. They cleaned all our windows inside and out, and they look crystal clear. The team was friendly and efficient. Will definitely use them again.",
    service: "Windows Cleaning"
  },
  {
    name: "Lisa K.",
    location: "Baldivis",
    rating: 5,
    date: "1 week ago",
    text: "Excellent solar panel cleaning service! Our energy output has noticeably improved. The team used purified water and were very careful with the panels. Very happy with the results.",
    service: "Solar Panel Cleaning"
  },
  {
    name: "James R.",
    location: "Warnbro",
    rating: 5,
    date: "3 weeks ago",
    text: "Quick response and great service. They cleaned our gutters and removed all the debris. The team was professional and left everything clean and tidy. Would recommend to anyone.",
    service: "Gutter Cleaning"
  },
  {
    name: "Amanda P.",
    location: "Secret Harbour",
    rating: 5,
    date: "2 weeks ago",
    text: "Very impressed with the high reach window cleaning for our two-story home. They have the right equipment and expertise. The windows have never looked better!",
    service: "High Reach Windows"
  },
  {
    name: "Robert M.",
    location: "Rockingham",
    rating: 5,
    date: "1 month ago",
    text: "JH Shoreline cleaned our commercial property's gutters and windows. Professional service from start to finish. They worked around our business hours and caused no disruption.",
    service: "Commercial Cleaning"
  },
  {
    name: "Karen S.",
    location: "Safety Bay",
    rating: 5,
    date: "4 weeks ago",
    text: "Great experience! The team arrived on time, did a thorough job on our solar panels and gutters, and cleaned up afterwards. Price was very reasonable too.",
    service: "Solar Panel & Gutter Cleaning"
  }
];

export default function ReviewsPage() {
  const averageRating = (allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length).toFixed(1);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[250px] bg-[#0a1628] pt-28">
        <div className="absolute inset-0">
          <Image
            src="/Photos/car_new.png"
            alt="Reviews Banner"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 to-[#0a1628]/60"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Client Reviews</h1>
          <div className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-[#FFC107]">Reviews</span>
          </div>
        </div>
      </section>

      {/* Reviews Stats */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <DecorativeIcons />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Google Review */}
                <div className="flex items-center gap-4">
                  <svg className="w-12 h-12" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <div>
                    <div className="text-xs text-gray-600 uppercase">Google Reviews</div>
                    <div className="text-3xl font-bold text-[#0a1628]">4.8</div>
                  </div>
                </div>

                <div className="h-16 w-px bg-gray-300 hidden md:block"></div>

                {/* Overall Rating */}
                <div className="text-center">
                  <div className="flex gap-1 mb-2 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-[#FFC107] text-[#FFC107]" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-[#0a1628]">{averageRating} out of 5</div>
                  <div className="text-sm text-gray-600">{allReviews.length} reviews</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 mb-8">
              Real feedback from our valued customers across Rockingham and surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white relative overflow-hidden">
        <DecorativeIcons />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {allReviews.map((review, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#0047AB] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0a1628]">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FFC107] text-[#FFC107]" />
                    ))}
                  </div>
                </div>

                {/* Service Tag */}
                <div className="mb-3">
                  <span className="inline-block bg-[#f0f7fc] text-[#0047AB] text-xs font-semibold px-3 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  "{review.text}"
                </p>

                {/* Date */}
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0047AB] to-[#0a1628]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Professional Cleaning?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join our satisfied customers and get your free quote today
          </p>
          <Link href="/contact">
            <button className="bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold px-10 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg">
              Get Free Quote
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
