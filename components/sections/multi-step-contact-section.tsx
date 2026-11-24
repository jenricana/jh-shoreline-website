import { Suspense } from "react"
import Image from "next/image"
import { MultiStepQuoteForm } from "@/components/ui/multi-step-quote-form"

export function MultiStepContactSection() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/Photos/gold-marble-bg.jpg" alt="Contact Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* Multi-step form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative">
              {/* corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#0047AB]" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#0047AB]" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#0047AB]" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#0047AB]" />
              <div className="absolute top-8 right-16 text-[#0047AB] text-2xl">✦</div>

              <div className="mb-4">
                <Image src="/Photos/contact_us.png" alt="Contact Us" width={140} height={30} className="object-contain" />
              </div>

              <Suspense fallback={null}>
                <MultiStepQuoteForm source="homepage-contact" />
              </Suspense>
            </div>

            {/* Right side */}
            <div className="hidden lg:flex flex-col justify-center space-y-6">
              <div className="text-white">
                <h3 className="text-4xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-lg text-white/90 mb-6">
                  Get your free quote today! Our team will respond within 24 hours with a competitive price for your cleaning needs.
                </p>
                <div className="space-y-3">
                  {["Professional Service", "Fast Response Time", "Competitive Pricing"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg className="w-8 h-8 text-[#FFC107] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
