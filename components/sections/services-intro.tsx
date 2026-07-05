import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete peace of mind with full insurance coverage"
  },
  {
    icon: Clock,
    title: "Same Day Quotes",
    description: "Fast response and quick turnaround on all quotes"
  },
  {
    icon: Award,
    title: "5+ Years Experience",
    description: "Trusted expertise in solar and gutter cleaning"
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We're not happy until you're happy with our work"
  }
];

export function ServicesIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-14 h-14 bg-[#4a90c2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#4a90c2]" />
                </div>
                <h3 className="font-bold text-[#0a1628] mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Divider with text */}
        <div className="flex items-center justify-center gap-4 mt-16 mb-8">
          <div className="h-px bg-gray-200 flex-1 max-w-[100px]"></div>
          <p className="text-gray-400 text-sm uppercase tracking-wider">Our Services</p>
          <div className="h-px bg-gray-200 flex-1 max-w-[100px]"></div>
        </div>

        {/* Services description */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-4">
            Complete Property Cleaning Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            From solar panels to gutters, roofs to driveways — we provide comprehensive 
            cleaning services for residential and commercial properties across Rockingham, 
            Warnbro, and the greater Shoreline area.
          </p>
        </div>
      </div>
    </section>
  );
}
