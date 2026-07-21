import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DecorativeIcons } from "@/components/ui/decorative-icons";

const servicesDetail = [
  {
    id: "gutter",
    slug: "gutter-cleaning",
    title: "GUTTER CLEANING",
    image: "/Photos/gutter_cleaning.png",
    paragraphs: [
      "When your gutters or downpipes are clogged, water doesn't drain as it should. Instead, it overflows and seeps into the ceiling, foundations, walls, and window frames, leading to structural damage to your property. In Rockingham's rainy winters, blocked gutters can cause serious water damage to your home.",
      "Gutter cleaning extends the life of your gutters and downpipes, reduces potential for structural water damage, and eliminates breeding areas for insects, especially mosquitoes. Regular gutter cleaning services are essential for maintaining the safety and integrity of your home."
    ]
  },
  {
    id: "solar",
    slug: "solar-panel-cleaning",
    title: "SOLAR PANELS",
    image: "/Photos/solar_pannel_cleaning_2 (2).png",
    paragraphs: [
      "WA has plenty of sunny days to produce solar power, but this is wasted if your solar panels aren't operating at their maximum potential. When dirt and grime build up on your solar panels, they can block the sun's rays and prevent the panels from absorbing energy efficiently.",
      "We help your panels perform as they were designed to by thoroughly, but gently, cleaning each panel with expert equipment and a pure water system. This means we don't use any soaps, chemicals or detergents — just a gentle formula specifically designed for cleaning without causing damage to the panels."
    ]
  },
  {
    id: "windows",
    slug: "windows-cleaning",
    title: "WINDOWS CLEANING",
    image: "/Photos/windows_cleaning_5.png",
    paragraphs: [
      "Clean windows transform the appearance of your property and allow natural light to brighten your space. Perfect for ground floor and first floor residential properties.",
      "Our professional window cleaning service delivers crystal-clear, streak-free results. We use specialized equipment and eco-friendly cleaning solutions to ensure your windows sparkle, enhancing your property's curb appeal and allowing maximum light into your space."
    ]
  },
  {
    id: "windows-high",
    slug: "windows-cleaning-high-reach",
    title: "HIGH REACH WINDOWS",
    image: "/Photos/high_reach_windows_3.png",
    paragraphs: [
      "Multi-story buildings and hard-to-reach windows require specialized equipment and expertise to clean safely and effectively. Our high-reach window cleaning service handles windows that standard methods cannot reach.",
      "Using professional-grade extension poles and safety equipment, we deliver the same crystal-clear, streak-free results for upper floors and difficult access areas. Perfect for commercial buildings, apartments, and multi-story residential properties."
    ]
  },
  {
    id: "end-of-lease",
    slug: "end-of-lease-cleaning",
    title: "END OF LEASE CLEANING",
    image: "/Photos/end_of_lease cleaning.png",
    paragraphs: [
      "Moving out? Our comprehensive end of lease cleaning service ensures your rental property is spotless and ready for inspection. We follow real estate and property manager checklists to guarantee you get your full bond back.",
      "Our thorough cleaning covers every room, including kitchens, bathrooms, bedrooms, living areas, and all fixtures and fittings. We offer a bond back guarantee – if there are any issues, we'll come back and fix them at no extra cost."
    ]
  },
  {
    id: "carpet",
    slug: "carpet-cleaning",
    title: "CARPET CLEANING",
    image: "/Photos/carpet_cleaning_2.png",
    paragraphs: [
      "Over time, carpets accumulate dirt, dust, allergens, and stains that regular vacuuming can't remove. Our professional carpet cleaning service uses hot water extraction to deep clean your carpets and restore them to like-new condition.",
      "We remove stubborn stains, eliminate odors, and extract allergens that can affect your family's health. Our eco-friendly cleaning solutions are safe for children and pets while being tough on dirt and grime."
    ]
  },
  {
    id: "oven",
    slug: "oven-cleaning",
    title: "OVEN CLEANING",
    image: "/Photos/oven_cleaning.png",
    paragraphs: [
      "A dirty oven isn't just unsightly – it can affect the taste of your food, create smoke and odors, and even become a fire hazard. Our professional oven cleaning service removes all grease, grime, and burnt-on food to restore your oven to sparkling condition.",
      "We use safe, eco-friendly cleaning products that are tough on grease but gentle on your oven's surfaces. Our thorough cleaning includes the oven interior, door glass, racks, trays, and all removable parts."
    ]
  },
  {
    id: "high-pressure",
    slug: "high-pressure-cleaning",
    title: "HIGH PRESSURE CLEANING",
    image: "/Photos/high_pressure_3.png",
    paragraphs: [
      "Over time, outdoor surfaces accumulate dirt, grime, mold, algae, and stains that regular cleaning can't remove. Our professional high pressure cleaning service restores driveways, patios, decks, and exterior walls to their original condition.",
      "Using commercial-grade pressure washing equipment, we safely and effectively remove years of buildup without damaging your surfaces. Transform your outdoor areas and boost your property's curb appeal."
    ]
  }
];

export function ServicesDetail() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f0f7fc] via-white to-[#f0f7fc] relative overflow-hidden">
      <DecorativeIcons />
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#0047AB]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <Image
              src="/Photos/our_services.png"
              alt="Our Services"
              width={160}
              height={30}
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4">
            Expert Cleaning Services in{" "}
            <span className="text-[#0047AB]">Rockingham</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium italic max-w-2xl mx-auto">
            For a Safer, Cleaner Home
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {servicesDetail.map((service) => (
            <div 
              key={service.id}
              id={`detail-${service.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent group-hover:from-[#0047AB]/80 transition-all duration-500"></div>
                
                {/* Floating title on image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="h-3 w-16 bg-gradient-to-r from-[#FFC107] to-[#0047AB] rounded-full mb-5"></div>
                
                <div className="space-y-3.5 mb-7">
                  {service.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <Link href={`/services/${service.slug}`} className="block">
                  <Button className="w-full bg-gradient-to-r from-[#0047AB] to-[#0a1628] hover:from-[#0a1628] hover:to-[#0047AB] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl group-hover:scale-105">
                    <span>FIND OUT MORE</span>
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
