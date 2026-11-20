import { Suspense } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ChevronRight, Phone, ShieldCheck, Star } from "lucide-react"
import { LandingHeader } from "@/components/ads/landing-header"
import { AdsTracking } from "@/components/ads/ads-tracking"
import { LandingLeadForm } from "@/components/ads/landing-lead-form"
import { Footer } from "@/components/layout/footer"

const TITLE = "Window Cleaning Rockingham & Warnbro | From $120 | JH Shoreline"
const DESCRIPTION =
  "Streak-free window cleaning for homes in Rockingham, Warnbro, Safety Bay & Baldivis. Inside & outside, ground to high reach. Free quotes. Call 0413 213 689."
const URL = "https://www.jhshoreline.com.au/windows-cleaning"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "window cleaning rockingham", "window cleaner warnbro", "window cleaning safety bay",
    "house window cleaning baldivis", "professional window cleaning perth", "window cleaning prices rockingham",
  ],
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "JH Shoreline Cleaning Services",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/og-windows-cleaning.jpg", width: 1200, height: 630, alt: "Professional window cleaning by JH Shoreline" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-windows-cleaning.jpg"],
  },
}

const prices = [
  {
    name: "Bronze",
    tag: "Exterior glass only",
    desc: "Great for a quick refresh and street appeal.",
    from: "from $120",
  },
  {
    name: "Silver",
    tag: "Inside & outside glass + frames",
    desc: "Our classic full-glass clean for bright, streak-free rooms.",
    from: "from $180",
  },
  {
    name: "Gold",
    tag: "Inside & outside + tracks & flyscreens",
    desc: "Full detail clean removing built-up dirt, cobwebs and track debris.",
    popular: true,
    from: "from $240",
  },
  {
    name: "Platinum",
    tag: "The Works — Gold + mirrors, balustrades & extra detailing",
    desc: "Complete top-to-bottom shine for maximum presentation or pre-sale prep.",
    custom: true,
    from: "Custom quote",
  },
]

const services: { title: string; text: string; image: string; video?: string }[] = [
  {
    title: "Inside & Outside",
    text: "Crystal-clear glass, tracks and frames for ground floor and first floor homes. Streak-free finish, every time.",
    image: "/Photos/new_photos/inside_outside_video_poster.jpg",
    video: "/Photos/new_photos/inside_outside_video.mp4",
  },
  {
    title: "High Reach",
    text: "Two-storey homes, townhouses and units. Water-fed poles and safety equipment — no ladders needed at height.",
    image: "/Photos/new_photos/high_reach_video_poster.jpg",
    video: "/Photos/new_photos/high_reach_video.mp4",
  },
]

const included = [
  "Glass cleaned inside & outside (your choice)",
  "Window tracks & frames wiped down",
  "Screens removed & cleaned on request",
  "Streak-free squeegee finish",
  "Hard water spot removal",
  "Property left tidy",
]

const steps = [
  { title: "Book or call", text: "Tell us your suburb and roughly how many windows. We confirm a time that suits you." },
  { title: "We clean", text: "Inside and/or outside with professional equipment. Fully insured." },
  { title: "Enjoy the view", text: "Crystal-clear windows, more natural light, a home that looks cared for." },
]

const reviews = [
  { name: "Sarah M.", rating: 5, text: "Absolutely outstanding service! The team from JH Shoreline cleaned our gutters and solar panels. Every detail was perfect, and they were so professional." },
  { name: "Michael T.", rating: 5, text: "We've been using JH Shoreline for our strata property for over a year now. Consistently reliable, thorough, and great value for money." },
  { name: "Emma W.", rating: 5, text: "They cleaned our roof and gutters before the rainy season. Found some issues we didn't know about and fixed them. Highly recommend!" },
]

const faqs = [
  {
    q: "How much does window cleaning cost?",
    a: "It depends on the package and home size. Bronze (exterior only) starts from $120, Silver (inside & outside) from $180, and Gold (full detail with tracks & flyscreens) from $240. Larger and double-storey homes cost more. Platinum is custom quoted. You'll get a free, fixed quote before we start — no obligation.",
  },
  {
    q: "Do you clean inside windows too?",
    a: "Yes. Choose outside only for a quick refresh, or inside + outside for a complete clean including tracks and frames. Inside cleaning is popular before selling or moving in.",
  },
  {
    q: "Can you reach second-storey windows?",
    a: "Yes. We use water-fed poles and safety equipment for high-reach windows on two-storey homes, townhouses, units and commercial buildings.",
  },
  {
    q: "Which areas do you service?",
    a: "Rockingham, Warnbro, Safety Bay, Baldivis, Port Kennedy, Secret Harbour and surrounding suburbs in Perth's southern corridor.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Window Cleaning",
  serviceType: "Window Cleaning",
  description: DESCRIPTION,
  url: URL,
  provider: {
    "@type": "LocalBusiness",
    name: "JH Shoreline Cleaning Services",
    telephone: "+61413213689",
    email: "jhshorelinecleaningservice@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Rockingham", addressRegion: "WA", addressCountry: "AU" },
  },
  areaServed: ["Rockingham", "Warnbro", "Safety Bay", "Baldivis", "Port Kennedy", "Secret Harbour"],
  offers: { "@type": "AggregateOffer", lowPrice: "120", highPrice: "280", priceCurrency: "AUD" },
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {eyebrow && <p className="text-[#0047AB] text-sm font-bold tracking-widest uppercase mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">{title}</h2>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  )
}

export default function WindowsCleaningLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <AdsTracking />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <LandingHeader />

      {/* Hero */}
      <section className="bg-white px-4 sm:px-6 py-6 sm:py-8">
        <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden min-h-[480px] md:min-h-[540px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/Photos/landingpage-cover-v1.png)" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/75 to-[#0a1628]/45" />
          <div className="absolute inset-0 bg-[#0a1628]/30" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center px-6 sm:px-10 py-12 md:py-16">
            <div className="text-white">
              <p className="text-[#FFC107] font-semibold tracking-[0.2em] uppercase text-sm mb-4">
                Rockingham &middot; Warnbro &middot; Safety Bay &middot; Baldivis
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.12] mb-5">
                Sparkling Windows,<br />
                <span className="text-[#FFC107]">Zero Streaks.</span>
              </h1>
              <p className="text-white/85 text-base md:text-lg mb-6 max-w-md">
                Professional window cleaning for homes across the southern corridor. Inside &amp; outside, ground floor to high reach — from $120.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm text-white/90">
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#FFC107]" /> Fully insured</span>
                <span className="flex items-center gap-2"><Star className="w-4 h-4 text-[#FFC107]" /> Streak-free results</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FFC107]" /> Free quotes</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#quote" className="inline-flex items-center gap-2 bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold px-7 py-3.5 rounded-full text-base transition-all hover:-translate-y-0.5">
                  GET A FREE QUOTE
                </a>
                <a href="tel:0413213689" className="inline-flex items-center gap-2 bg-white text-[#0047AB] hover:bg-gray-100 font-bold px-7 py-3.5 rounded-full text-base transition-all hover:-translate-y-0.5">
                  <Phone className="w-4 h-4" /> 0413 213 689
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden border-4 border-white/25 shadow-2xl">
                <Image
                  src="/Photos/JH.png"
                  alt="JH Shoreline owner"
                  width={800}
                  height={600}
                  className="w-full h-[420px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="bg-[#f8fafc] py-16" id="quote">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#0a1628]">Get Your Free Window Cleaning Quote</h2>
              <p className="text-gray-600 mt-2">Takes 30 seconds. No obligation — we&apos;ll call or text you back within one business day.</p>
            </div>
            <Suspense fallback={null}>
              <LandingLeadForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader eyebrow="Transparent pricing" title="Choose your clean" subtitle="Fixed quotes before we start. No hidden fees." />
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {prices.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl border p-6 flex flex-col ${
                  p.popular
                    ? "border-[#FFC107] bg-[#0a1628] text-white shadow-xl ring-2 ring-[#FFC107]/50"
                    : "border-gray-200 bg-white text-[#0a1628] hover:border-[#0047AB] hover:shadow-lg"
                } transition-all`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFC107] text-[#0a1628] text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wide">
                    Most popular
                  </span>
                )}
                <p className={`text-xs font-bold tracking-widest uppercase ${p.popular ? "text-[#FFC107]" : "text-[#0047AB]"}`}>{p.name}</p>
                <h3 className={`font-bold text-lg mt-1 mb-1 ${p.popular ? "text-white" : ""}`}>{p.tag}</h3>
                <p className={`text-sm mb-5 flex-1 ${p.popular ? "text-white/70" : "text-gray-500"}`}>{p.desc}</p>
                <p className={`text-3xl font-extrabold ${p.popular ? "text-[#FFC107]" : "text-[#0047AB]"}`}>{p.from}</p>
                <p className={`text-xs mt-1 ${p.popular ? "text-white/60" : "text-gray-400"}`}>
                  {p.custom ? "Sized & quoted on site — no obligation." : "Exact price depends on home size & window count."}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Prices are estimates — your exact quote depends on window count, access and condition. <Link href="/pricing" className="font-semibold text-[#0047AB] underline">See all service pricing</Link>.
          </p>
        </div>
      </section>

      {/* What we clean */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader eyebrow="What we clean" title="Inside, outside & every floor" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-52 bg-[#0a1628]">
                  {s.video ? (
                    <video
                      src={s.video}
                      poster={s.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }} />
                  )}
                  <span className="absolute bottom-3 left-3 bg-[#0a1628]/85 text-white text-xs font-bold px-3 py-1.5 rounded-full">{s.title}</span>
                </div>
                <p className="p-6 text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included + process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0a1628] mb-6">Every clean includes</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                    <CheckCircle className="w-5 h-5 text-[#0047AB] mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0a1628] mb-6">How it works</h2>
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={s.title} className="flex gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-full bg-[#FFC107] text-[#0a1628] font-bold flex items-center justify-center text-lg">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-[#0a1628] text-lg mb-1">{s.title}</h3>
                      <p className="text-gray-600 text-sm">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader eyebrow="Reviews" title="What our customers say" subtitle="Trusted local service across the southern corridor." />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">&ldquo;{r.text}&rdquo;</p>
                <p className="font-bold text-[#0a1628] text-sm">{r.name}</p>
                <p className="text-gray-400 text-xs">JH Shoreline customer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeader eyebrow="FAQ" title="Window cleaning questions" />
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-gray-200 bg-gray-50 open:bg-white open:shadow-md transition-all">
                <summary className="cursor-pointer list-none flex items-center justify-between p-5 font-semibold text-[#0a1628]">
                  {f.q}
                  <ChevronRight className="w-5 h-5 text-[#0047AB] transition-transform group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-[#0047AB] to-[#0a1628] py-14">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready for windows you can actually see through?</h2>
          <p className="text-white/80 mb-8">Free quote in under a minute. We&apos;ll call or text you back within one business day.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#quote" className="inline-flex items-center gap-2 bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold px-9 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5">
              Get My Free Quote
            </a>
            <a href="tel:0413213689" className="inline-flex items-center gap-2 border-2 border-white/40 hover:bg-white/10 text-white font-bold px-9 py-4 rounded-full text-lg transition-all">
              <Phone className="w-5 h-5" /> 0413 213 689
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
