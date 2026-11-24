import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DecorativeIcons } from "@/components/ui/decorative-icons";
import { Suspense } from "react";
import { MultiStepQuoteForm } from "@/components/ui/multi-step-quote-form";

const features = [
  "Professional Service",
  "Fully Insured",
  "5+ Years Experience",
  "Satisfaction Guaranteed",
  "Free Quotes",
  "Local Business"
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <DecorativeIcons />
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Quote form */}
          <div className="max-w-2xl mx-auto mb-20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#0a1628]">Get Your Free Quote</h3>
              <p className="text-sm text-gray-500 mt-1">Takes 30 seconds. No obligation — we&apos;ll call or text you back within one business day.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
              <Suspense fallback={null}>
                <MultiStepQuoteForm source="homepage-about" />
              </Suspense>
            </div>
          </div>

          {/* Bottom Section - About Content */}
          <div className="max-w-4xl mx-auto">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/Photos/About_Company.png"
                alt="About Our Company"
                width={180}
                height={30}
                className="object-contain"
              />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4 leading-tight">
              Our Stories Have<br />
              <span className="text-[#0047AB]">Experience</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              We are experienced in bringing quality cleaning services to homes and businesses, 
              with all outdoor and property maintenance as our specialties. Start your journey 
              to a cleaner property today!
            </p>

            {/* Quote */}
            <p className="text-[#0a1628] font-semibold text-lg mb-6 italic">
              "We are providing all types of cleaning solutions for every small & big business"
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Image 
                    src="/SVG.png" 
                    alt="check" 
                    width={20} 
                    height={20}
                    className="flex-shrink-0"
                  />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#services">
                <Button className="bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold px-8 py-3 rounded-lg text-base shadow-lg hover:shadow-xl transition-all">
                  Discover More
                </Button>
              </a>
              <a href="#contact">
                <Button className="bg-[#0a1628] hover:bg-[#1a2d4d] text-white font-semibold px-6 py-3 rounded-full">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
