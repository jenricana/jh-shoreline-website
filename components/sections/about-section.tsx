import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DecorativeIcons } from "@/components/ui/decorative-icons";
import { CompactQuoteForm } from "@/components/ui/compact-quote-form";

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
          {/* Top Row - Video & Form Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Left - Video Section */}
            <div className="relative pb-12">
              {/* Years of Experience Badge */}
              <div className="absolute -left-4 top-1/4 z-10 bg-white rounded-lg shadow-xl p-4 text-center">
                <div className="text-[#FFC107] text-4xl font-bold">5+</div>
                <div className="text-gray-600 text-xs uppercase tracking-wider">
                  Years<br />of<br />Experience
                </div>
                <div className="mt-2 text-[#FFC107]">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                  </svg>
                </div>
              </div>

              {/* Main video */}
              <div className="relative ml-8 rounded-2xl overflow-hidden shadow-xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover h-[500px] w-full"
                >
                  <source src="/Photos/about-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Secondary image */}
              <div className="absolute -bottom-12 right-0 w-44 h-36 md:w-48 md:h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/Photos/about_photo_2.png"
                  alt="Quality Work"
                  width={192}
                  height={128}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>

            {/* Right - Quote Form */}
            <div className="h-[500px] flex items-stretch">
              <div className="w-full">
                <CompactQuoteForm variant="light" />
              </div>
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
