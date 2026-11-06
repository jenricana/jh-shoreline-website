"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RecentProjects } from "@/components/sections/recent-projects";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const features = [
  "Professional Service",
  "Fully Insured",
  "5+ Years Experience",
  "Satisfaction Guaranteed",
  "Free Quotes",
  "Local Business"
];

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "1300+", label: "Clients in 5 Years" },
  { number: "100%", label: "Satisfaction Promised" }
];

const values = [
  {
    title: "Quality Service",
    description: "We deliver exceptional cleaning results every time, using professional-grade equipment and techniques.",
    icon: "/108.png"
  },
  {
    title: "Reliability",
    description: "Count on us to show up on time and complete every job to the highest standards.",
    icon: "/107.png"
  },
  {
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen to your needs and exceed expectations.",
    icon: "/106.png"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[250px] bg-black pt-28">
        <div className="absolute inset-0">
          <Image
            src="/Photos/gold-marble-bg.jpg"
            alt="About Banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">About Us</h1>
          <div className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-[#d4a853]">About</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Images */}
            <div className="relative">
              <div className="relative">
                {/* Years Badge */}
                <div className="absolute -left-4 bottom-16 z-10 bg-white rounded-xl shadow-2xl p-6 text-center">
                  <div className="text-[#FFC107] text-5xl font-bold">5+</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wider mt-1">
                    Years<br />Experience
                  </div>
                </div>

                {/* Main Image */}
                <div className="relative ml-8 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/Photos/about_page_3.png"
                    alt="Professional Cleaning Services"
                    width={500}
                    height={550}
                    className="object-contain w-full"
                    unoptimized
                  />
                </div>

                {/* Secondary Image */}
                <div className="absolute -bottom-8 right-0 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/Photos/about_photo_2.png"
                    alt="Quality Work"
                    width={192}
                    height={144}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:pl-8">
              <div className="mb-6">
                <Image
                  src="/Photos/About_Company.png"
                  alt="About Our Company"
                  width={250}
                  height={50}
                  className="object-contain"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4 leading-tight">
                Professional Cleaning<br />
                <span className="text-[#4a90c2]">Services You Can Trust</span>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                JH Shoreline Cleaning Services is a Rockingham-based team with over 5 years of 
                experience in professional cleaning services. We specialize in solar panel cleaning, 
                gutter cleaning, roof cleaning, pressure washing, and more for both residential and 
                commercial properties.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Our commitment to quality and customer satisfaction has made us a trusted name in 
                the Perth Western Australia area. We use professional-grade equipment and eco-friendly 
                cleaning solutions to deliver exceptional results every time.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Image src="/SVG.png" alt="check" width={20} height={20} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/#services">
                  <Button className="bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all text-base">
                    Our Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-[#0047AB] hover:bg-[#003d8f] text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all text-base">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0047AB] to-[#1a2d4d]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC107]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0047AB]/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Decorative shapes */}
        <div className="absolute top-10 right-1/4 text-[#FFC107]/20 text-8xl animate-bounce" style={{animationDuration: '3s'}}>✦</div>
        <div className="absolute bottom-10 left-1/4 text-white/10 text-6xl animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>○</div>
        <div className="absolute top-1/3 right-10 text-[#FFC107]/10 text-4xl animate-spin" style={{animationDuration: '10s'}}>◇</div>
        <div className="absolute bottom-1/3 left-10 text-white/10 text-5xl animate-pulse">△</div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                  <div className="text-5xl md:text-6xl font-bold text-[#FFC107] mb-3 group-hover:scale-110 transition-transform">{stat.number}</div>
                  <div className="text-white text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-gray-300 w-12"></div>
              <span className="text-[#4a90c2] text-sm font-medium uppercase tracking-wider">
                Why Choose Us
              </span>
              <div className="h-px bg-gray-300 w-12"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">
              Our Core <span className="text-[#FFC107]">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div 
                key={value.title} 
                className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#4a90c2]"
              >
                <div className="flex items-center justify-center mx-auto mb-6">
                  <Image src={value.icon} alt={value.title} width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="mb-6">
                <Image
                  src="/OUR_MISSION.png"
                  alt="Our Mission"
                  width={200}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
                Delivering Excellence in<br />
                <span className="text-[#FFC107]">Every Clean</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our mission is to provide the highest quality cleaning services while maintaining 
                the trust and satisfaction of our clients. We believe in honest work, fair pricing, 
                and exceptional results.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether it's a residential home or a commercial property, we treat every job with 
                the same level of care and professionalism. Our team is fully trained, insured, and 
                committed to delivering results that exceed expectations.
              </p>
              <Link href="/contact">
                <Button className="bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Photos/solar_pannel_cleaning_2 (2).png"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="object-cover h-[400px] w-full"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#d4a853] rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#4a90c2] rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0047AB] via-[#0a1628] to-[#1a2d4d] overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#FFC107]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0047AB]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-20 right-20 text-white/5 text-6xl">✦</div>
          <div className="absolute bottom-32 left-32 text-white/5 text-4xl">✦</div>
          <div className="absolute top-40 left-1/4 text-white/5 text-3xl">○</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Professional Cleaning?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and discover why we're the trusted choice for 
            cleaning services in Rockingham and surrounding areas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:0413213689">
              <Button className="bg-white hover:bg-gray-100 text-[#0a1628] font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg">
                Call: 0413 213 689
              </Button>
            </a>
          </div>
        </div>
      </section>

      <RecentProjects />

      <Footer />
    </div>
  );
}
