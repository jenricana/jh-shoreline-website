import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";
import { CompactQuoteForm } from "@/components/ui/compact-quote-form";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  image: string;
  description: string[];
  benefits: string[];
  process: string[];
}> = {
  "gutter-cleaning": {
    title: "Gutter Cleaning",
    subtitle: "Professional Gutter Cleaning Services in Rockingham",
    image: "/Photos/gutter_cleaning.png",
    description: [
      "When your gutters or downpipes are clogged, water doesn't drain as it should. Instead, it overflows and seeps into the ceiling, foundations, walls, and window frames, leading to structural damage to your property. In Rockingham's rainy winters, blocked gutters can cause serious water damage to your home.",
      "Gutter cleaning extends the life of your gutters and downpipes, reduces potential for structural water damage, and eliminates breeding areas for insects, especially mosquitoes. Regular gutter cleaning services are essential for maintaining the safety and integrity of your home.",
      "At JH Shoreline, we provide thorough gutter cleaning services that remove all leaves, debris, and blockages. We also inspect your gutters for any damage or issues that need attention, giving you complete peace of mind."
    ],
    benefits: [
      "Prevent water damage to your home",
      "Extend the life of your gutters",
      "Eliminate pest breeding grounds",
      "Protect your foundations",
      "Maintain property value",
      "Reduce fire hazards from dry debris"
    ],
    process: [
      "Full inspection of gutters and downpipes",
      "Remove all leaves, debris and blockages",
      "Flush downpipes to ensure proper flow",
      "Check for damage or repairs needed",
      "Clean up all debris from your property"
    ]
  },
  "solar-panel-cleaning": {
    title: "Solar Panel Cleaning",
    subtitle: "Maximize Your Solar Energy Efficiency",
    image: "/Photos/solar_pannel_cleaning_2 (2).png",
    description: [
      "WA has plenty of sunny days to produce solar power, but this is wasted if your solar panels aren't operating at their maximum potential. When dirt and grime build up on your solar panels, they can block the sun's rays and prevent the panels from absorbing energy efficiently.",
      "Studies show that dirty solar panels can lose up to 25% of their efficiency. Regular cleaning ensures you're getting the maximum return on your solar investment and reducing your electricity bills.",
      "We help your panels perform as they were designed to by thoroughly, but gently, cleaning each panel with expert equipment and a pure water system. This means we don't use any soaps, chemicals or detergents — just a gentle formula specifically designed for cleaning without causing damage to the panels."
    ],
    benefits: [
      "Increase energy production by up to 25%",
      "Extend panel lifespan",
      "Maintain manufacturer warranty",
      "Reduce electricity bills",
      "Eco-friendly cleaning methods",
      "No chemicals or detergents used"
    ],
    process: [
      "Assess panel condition and accessibility",
      "Use purified water system for streak-free clean",
      "Gently remove dirt, bird droppings, and debris",
      "Check for any visible damage",
      "Provide efficiency report"
    ]
  },
  "windows-cleaning": {
    title: "Windows Cleaning",
    subtitle: "Crystal Clear Windows for Ground & First Floor",
    image: "/Photos/windows_cleaning_5.png",
    description: [
      "Clean windows transform the appearance of your property and allow natural light to brighten your space. Perfect for ground floor and first floor residential properties.",
      "Our professional window cleaning service delivers crystal-clear, streak-free results. We use specialized equipment and eco-friendly cleaning solutions to ensure your windows sparkle.",
      "Ideal for single-story homes and accessible first-floor windows, our expert window cleaning service will enhance your property's curb appeal and allow maximum natural light into your space."
    ],
    benefits: [
      "Crystal-clear, streak-free results",
      "Enhanced curb appeal",
      "Increased natural light",
      "Ground and first floor coverage",
      "Eco-friendly cleaning solutions",
      "Inside and outside cleaning"
    ],
    process: [
      "Inspect windows and identify problem areas",
      "Remove dirt and debris",
      "Apply eco-friendly cleaning solution",
      "Professional squeegee technique",
      "Final inspection for streak-free finish"
    ]
  },
  "windows-cleaning-high-reach": {
    title: "High Reach Windows Cleaning",
    subtitle: "Professional Multi-Story Window Cleaning",
    image: "/Photos/high_reach_windows_3.png",
    description: [
      "Multi-story buildings and hard-to-reach windows require specialized equipment and expertise to clean safely and effectively. Our high-reach window cleaning service handles windows that standard methods cannot reach.",
      "Using professional-grade extension poles, water-fed systems, and safety equipment, we deliver the same crystal-clear, streak-free results for upper floors and difficult access areas.",
      "Perfect for commercial buildings, apartments, multi-story residential properties, and any windows beyond standard ladder reach. Our certified technicians ensure safe, professional service every time."
    ],
    benefits: [
      "Specialized high-reach equipment",
      "Multi-story building expertise",
      "Safety certified technicians",
      "Commercial & residential service",
      "Eco-friendly cleaning solutions",
      "Fully insured operations"
    ],
    process: [
      "Site assessment and safety planning",
      "Set up specialized high-reach equipment",
      "Clean windows using water-fed pole system",
      "Apply eco-friendly cleaning solutions",
      "Final quality inspection and safety check"
    ]
  },
  "end-of-lease-cleaning": {
    title: "End of Lease Cleaning",
    subtitle: "Get Your Full Bond Back Guaranteed",
    image: "/Photos/end_of_lease cleaning.png",
    description: [
      "Moving out? Our comprehensive end of lease cleaning service ensures your rental property is spotless and ready for inspection. We follow real estate and property manager checklists to guarantee you get your full bond back.",
      "Our thorough cleaning covers every room, including kitchens, bathrooms, bedrooms, living areas, and all fixtures and fittings. We pay attention to the details that property managers look for during final inspections.",
      "With JH Shoreline's end of lease cleaning, you can focus on your move while we handle the deep cleaning. We offer a bond back guarantee – if there are any issues with the clean, we'll come back and fix them at no extra cost."
    ],
    benefits: [
      "Bond back guarantee",
      "Real estate checklist followed",
      "All rooms thoroughly cleaned",
      "Oven and appliances included",
      "Windows cleaned inside",
      "Carpets vacuumed throughout"
    ],
    process: [
      "Initial walkthrough and assessment",
      "Kitchen deep clean including oven",
      "Bathroom sanitization and descaling",
      "All rooms dusted and vacuumed",
      "Windows and fixtures cleaned",
      "Final inspection walkthrough"
    ]
  },
  "carpet-cleaning": {
    title: "Carpet Cleaning",
    subtitle: "Professional Deep Carpet Cleaning",
    image: "/Photos/carpet_cleaning_2.png",
    description: [
      "Over time, carpets accumulate dirt, dust, allergens, and stains that regular vacuuming can't remove. Our professional carpet cleaning service uses hot water extraction to deep clean your carpets and restore them to like-new condition.",
      "We remove stubborn stains, eliminate odors, and extract allergens that can affect your family's health. Our eco-friendly cleaning solutions are safe for children and pets while being tough on dirt and grime.",
      "Regular professional carpet cleaning extends the life of your carpets, improves indoor air quality, and keeps your home looking fresh and clean. We service residential and commercial properties throughout Rockingham."
    ],
    benefits: [
      "Deep stain removal",
      "Allergen extraction",
      "Odor elimination",
      "Extends carpet life",
      "Quick drying time",
      "Safe for kids and pets"
    ],
    process: [
      "Pre-inspection and stain identification",
      "Pre-treatment of high-traffic areas",
      "Hot water extraction cleaning",
      "Stain treatment and spot cleaning",
      "Deodorizing treatment",
      "Speed drying process"
    ]
  },
  "oven-cleaning": {
    title: "Oven Cleaning",
    subtitle: "Professional Oven Deep Cleaning",
    image: "/Photos/oven_cleaning.png",
    description: [
      "A dirty oven isn't just unsightly – it can affect the taste of your food, create smoke and odors, and even become a fire hazard. Our professional oven cleaning service removes all grease, grime, and burnt-on food to restore your oven to sparkling condition.",
      "We use safe, eco-friendly cleaning products that are tough on grease but gentle on your oven's surfaces. Our thorough cleaning includes the oven interior, door glass, racks, trays, and all removable parts.",
      "Whether you need a one-off deep clean or regular maintenance, our oven cleaning service will have your oven looking and performing like new. Perfect for end of lease cleaning or just keeping your kitchen in top shape."
    ],
    benefits: [
      "Removes burnt-on grease",
      "Eco-friendly products",
      "Improves cooking performance",
      "Eliminates smoke and odors",
      "Racks and trays included",
      "Same day service available"
    ],
    process: [
      "Remove racks and trays",
      "Apply eco-friendly degreaser",
      "Deep clean oven interior",
      "Clean door glass inside and out",
      "Scrub and clean all racks",
      "Reassemble and final polish"
    ]
  },
  "high-pressure-cleaning": {
    title: "High Pressure Cleaning",
    subtitle: "Professional Pressure Washing Services",
    image: "/Photos/high_pressure_3.png",
    description: [
      "Over time, outdoor surfaces accumulate dirt, grime, mold, algae, and stains that regular cleaning can't remove. Our professional high pressure cleaning service restores driveways, patios, decks, and exterior walls to their original condition.",
      "Using commercial-grade pressure washing equipment, we safely and effectively remove years of buildup without damaging your surfaces. We adjust pressure levels for different materials to ensure the best results.",
      "Whether it's oil stains on your driveway, mold on your patio, or dirt on your exterior walls, our high pressure cleaning service will transform your outdoor areas and boost your property's curb appeal."
    ],
    benefits: [
      "Restores original appearance",
      "Removes mold and algae",
      "Oil and stain removal",
      "Increases property value",
      "Prevents surface damage",
      "Eco-friendly cleaning"
    ],
    process: [
      "Assess surface type and condition",
      "Pre-treat stubborn stains",
      "Adjust pressure for surface type",
      "Systematic pressure washing",
      "Detail edges and corners",
      "Final rinse and inspection"
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-[#0a1628]/40"></div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <Link 
            href="/#services" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#d4a853]">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {service.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[#0a1628] mb-6">Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#4a90c2] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[#0a1628] mb-6">Our Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#FFC107] rounded-full flex items-center justify-center text-[#0a1628] font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <CompactQuoteForm variant="dark" defaultService={service.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f0f7fc]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact JH Shoreline today for professional {service.title.toLowerCase()} services in Rockingham and surrounding areas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0413213689">
              <Button size="lg" className="bg-[#0047AB] hover:bg-[#003d8f] text-white font-bold px-10 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
            <Link href="/#contact">
              <Button size="lg" className="bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold px-10 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
