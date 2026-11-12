"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Droplets, Sun, Sparkles, Building2, Home, Brush, Flame, Waves, ShieldCheck, Bird } from "lucide-react";

const services = [
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    description: "Professional gutter cleaning to prevent water damage and maintain your property. We remove leaves, debris, and blockages to ensure proper drainage.",
    image: "/Photos/new_photos/gutter_cleaning_new.png",
    icon: Droplets,
    features: ["Debris removal", "Downpipe clearing", "Gutter inspection", "Before/after photos"]
  },
  {
    id: "gutter-guards",
    title: "Gutter Guards",
    description: "Supply and installation of gutter guard mesh to keep leaves and debris out. Fewer blockages, less overflow and far fewer gutter cleans.",
    image: "/Photos/new_photos/gutter_guards_new.jpg",
    icon: ShieldCheck,
    features: ["Leaf & debris protection", "Keeps birds & pests out", "Fewer gutter cleans", "Tailored to your roof"]
  },
  {
    id: "solar-panel-cleaning",
    title: "Solar Panel Cleaning",
    description: "Maximize your solar panel efficiency with our professional cleaning service. Dirty panels can lose up to 25% of their energy output.",
    image: "/Photos/new_photos/solar_panel_new.jpg",
    icon: Sun,
    features: ["Increased efficiency", "Soft wash technique", "No harsh chemicals", "Regular maintenance plans"]
  },
  {
    id: "solar-bird-proofing",
    title: "Solar Bird Proofing",
    description: "Stop pigeons and birds nesting under your solar panels. We install durable mesh barriers that protect your panels, wiring and roof.",
    image: "/Photos/new_photos/solar_bird_proofing_new.jpg",
    icon: Bird,
    features: ["Stops birds nesting", "Protects wiring", "No drilling into panels", "Nest & debris removal"]
  },
  {
    id: "windows-cleaning",
    title: "Windows Cleaning",
    description: "Professional window cleaning for crystal-clear, streak-free results. Perfect for ground floor and first floor residential properties.",
    image: "/Photos/new_photos/window_cleaning_new.png",
    icon: Sparkles,
    features: ["Ground floor windows", "First floor access", "Streak-free finish", "Inside & outside"]
  },
  {
    id: "windows-cleaning-high-reach",
    title: "High Reach Windows",
    description: "Specialized window cleaning for multi-story buildings and hard-to-reach windows using professional equipment.",
    image: "/Photos/new_photos/high_Reach_new.png",
    icon: Building2,
    features: ["Multi-story buildings", "Commercial properties", "Specialized equipment", "Safety certified"]
  },
  {
    id: "end-of-lease-cleaning",
    title: "End of Lease Cleaning",
    description: "Comprehensive bond cleaning service to ensure you get your full deposit back. We cover every room and detail required by property managers.",
    image: "/Photos/new_photos/end_of_lease_new.png",
    icon: Home,
    features: ["Full property clean", "Bond back guarantee", "Checklist provided", "All rooms included"]
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    description: "Deep carpet cleaning to remove stains, odors, and allergens. Our professional equipment restores your carpets to like-new condition.",
    image: "/Photos/new_photos/carpet_new.png",
    icon: Brush,
    features: ["Deep extraction", "Stain removal", "Odor elimination", "Quick drying"]
  },
  {
    id: "oven-cleaning",
    title: "Oven Cleaning",
    description: "Professional oven cleaning to remove grease, grime, and burnt-on food. We use safe, eco-friendly products for a sparkling clean oven.",
    image: "/Photos/new_photos/oven_new.png",
    icon: Flame,
    features: ["Deep degreasing", "Eco-friendly products", "Racks included", "Same day service"]
  },
  {
    id: "high-pressure-cleaning",
    title: "High Pressure Cleaning",
    description: "Powerful pressure washing to restore driveways, patios, decks, and exterior surfaces. Remove dirt, grime, mold, and stains.",
    image: "/Photos/new_photos/High_PRessure_new.png",
    icon: Waves,
    features: ["Driveways & paths", "Patios & decks", "Exterior walls", "Oil stain removal"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[250px] bg-black pt-28">
        <div className="absolute inset-0">
          <Image
            src="/Photos/gold-marble-bg.jpg"
            alt="Services Banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Our Services</h1>
          <div className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-[#FFC107]">Services</span>
          </div>
        </div>
      </section>

      {/* Services Intro */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-6">
            <Image
              src="/WHAT_WE_OFFER.png"
              alt="What We Offer"
              width={200}
              height={40}
              className="object-contain mx-auto"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Professional Cleaning <span className="text-[#FFC107]">Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From solar panels to gutters, roofs to driveways — we provide comprehensive cleaning 
            services for residential and commercial properties across Rockingham and surrounding areas.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0a1628] mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <Image src="/SVG.png" alt="check" width={16} height={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href={`/services/${service.id}`}>
                      <Button className="w-full bg-gradient-to-r from-[#0047AB] to-[#0a1628] hover:from-[#0a1628] hover:to-[#0047AB] text-white font-semibold rounded-full transition-all duration-300">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-[#0a1628] via-[#1a2d4d] to-[#0a1628] relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#0047AB]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FFC107]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-[#FFC107]">JH Shoreline?</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We're committed to delivering exceptional results with every job.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image src="/106.png" alt="Insured" width={64} height={64} />
              </div>
              <h3 className="text-white font-semibold mb-2">Fully Insured</h3>
              <p className="text-white/60 text-sm">Complete peace of mind with full insurance coverage</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image src="/107.png" alt="Eco" width={64} height={64} />
              </div>
              <h3 className="text-white font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-white/60 text-sm">Safe, environmentally conscious cleaning solutions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image src="/108.png" alt="Professional" width={64} height={64} />
              </div>
              <h3 className="text-white font-semibold mb-2">Professional</h3>
              <p className="text-white/60 text-sm">Trained experts with professional equipment</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image src="/everything.png" alt="Guaranteed" width={64} height={64} />
              </div>
              <h3 className="text-white font-semibold mb-2">Guaranteed</h3>
              <p className="text-white/60 text-sm">100% satisfaction guaranteed on every job</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0047AB] to-[#0a1628] rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Contact us today for a free, no-obligation quote. We'll assess your needs and 
              provide a competitive price for our professional cleaning services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[#FFC107] hover:bg-[#c49a42] text-[#0a1628] font-semibold px-8 py-3 rounded-full">
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:0413213689">
                <Button className="bg-white hover:bg-gray-100 text-[#0a1628] font-semibold px-8 py-3 rounded-full">
                  Call: 0413 213 689
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
