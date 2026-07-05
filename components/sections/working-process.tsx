import Image from "next/image";
import { DecorativeIcons } from "@/components/ui/decorative-icons";

const steps = [
  {
    number: "01",
    icon: "/provide_details.png",
    title: "Provide Your Details and Apply",
    description: "Fill out our simple contact form with your property details and cleaning requirements."
  },
  {
    number: "02",
    icon: "/pick_time.png",
    title: "Pick Suitable Plan for Cleaning",
    description: "Choose from our range of professional cleaning services that best suit your needs."
  },
  {
    number: "03",
    icon: "/set_date_time.png",
    title: "Set Your Time and Fix Date",
    description: "Select a convenient date and time that works best for your schedule."
  },
  {
    number: "04",
    icon: "/everything.png",
    title: "Get Everything Done for You",
    description: "Sit back and relax while our professional team delivers exceptional cleaning results."
  }
];

export function WorkingProcess() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <DecorativeIcons />
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Logo Header */}
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/Photos/working_in_progress.png"
              alt="Our Working Process"
              width={240}
              height={30}
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            How We <span className="text-[#FFC107]">Work</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We are experienced in bringing quality cleaning services to your property, with all outdoor 
            and property maintenance as our specialties. Start your journey to a cleaner space now!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center group">
              {/* Number and Icon */}
              <div className="flex items-start justify-center gap-3 mb-6">
                <span className="text-gray-300 text-2xl font-bold">{step.number}</span>
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={56}
                    height={56}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#0a1628] mb-3 leading-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
