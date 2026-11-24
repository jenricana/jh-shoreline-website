"use client"

import { useState, Suspense } from "react"
import Image from "next/image"
import { CheckCircle, ChevronRight, Home, Loader2, Sun, Wind, Droplets, Flame, Layers, Bug, Zap } from "lucide-react"

const SERVICES = [
  { id: "Windows Cleaning",          label: "Windows Cleaning",        icon: <Droplets className="w-5 h-5" /> },
  { id: "High Reach Windows",        label: "High Reach Windows",      icon: <Layers className="w-5 h-5" /> },
  { id: "Gutter Cleaning",           label: "Gutter Cleaning",         icon: <Wind className="w-5 h-5" /> },
  { id: "Gutter Guards",             label: "Gutter Guards",           icon: <Layers className="w-5 h-5" /> },
  { id: "Solar Panel Cleaning",      label: "Solar Panel Cleaning",    icon: <Sun className="w-5 h-5" /> },
  { id: "Solar Bird Proofing",       label: "Solar Bird Proofing",     icon: <Bug className="w-5 h-5" /> },
  { id: "End of Lease Cleaning",     label: "End of Lease Cleaning",   icon: <Home className="w-5 h-5" /> },
  { id: "Carpet Cleaning",           label: "Carpet Cleaning",         icon: <Zap className="w-5 h-5" /> },
  { id: "Oven Cleaning",             label: "Oven Cleaning",           icon: <Flame className="w-5 h-5" /> },
  { id: "High Pressure Cleaning",    label: "High Pressure Cleaning",  icon: <Droplets className="w-5 h-5" /> },
]

const SIZES = [
  { id: "small",      label: "1–2 Bed",               sub: "Studio, unit or small home" },
  { id: "medium",     label: "3–4 Bed Single Storey",  sub: "Most common family home" },
  { id: "large",      label: "Double Storey",           sub: "Two-storey or large property" },
  { id: "commercial", label: "Commercial / Strata",     sub: "Office, complex or unit block" },
]

function MultiStepForm() {
  const [step, setStep]           = useState(1)
  const [serviceId, setServiceId] = useState("")
  const [sizeId, setSizeId]       = useState("")
  const [contact, setContact]     = useState({ name: "", email: "", phone: "", address: "" })
  const [status, setStatus]       = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg]   = useState("")

  const setC = (k: keyof typeof contact) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setContact({ ...contact, [k]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")
    const selectedSize = SIZES.find((s) => s.id === sizeId)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: contact.name,
          email: contact.email,
          phone: contact.phone,
          address: contact.address,
          service: serviceId,
          buildingType: selectedSize?.label || "",
          message: `Property: ${selectedSize?.label || "Not specified"}`,
          source: "homepage",
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || "Something went wrong")
      setStatus("success")
    } catch (err) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Network error. Please call us instead.")
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-[#0a1628] mb-2">
          Thanks{contact.name ? `, ${contact.name.split(" ")[0]}` : ""}!
        </h3>
        <p className="text-gray-600 mb-4">Your request is in. We&apos;ll call or text you within one business day.</p>
        <p className="text-sm text-gray-500">
          Need it sooner? Call{" "}
          <a href="tel:0413213689" className="font-bold text-[#0047AB]">0413 213 689</a>
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* progress bar */}
      <div className="h-1.5 bg-gray-100 rounded-full mb-6">
        <div
          className="h-full bg-[#FFC107] rounded-full transition-all duration-500"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      {/* step label */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-bold tracking-widest uppercase text-[#0047AB]">
          Step {step} of 3 —&nbsp;
          {step === 1 ? "Choose Service" : step === 2 ? "Property Size" : "Your Details"}
        </span>
        <span className="text-xs text-gray-400 font-medium">{step} / 3</span>
      </div>

      {/* ── STEP 1: service ───────────────────────────────────── */}
      {step === 1 && (
        <>
          <h3 className="text-2xl font-bold text-[#0a1628] mb-1">What service do you need?</h3>
          <p className="text-sm text-gray-500 mb-5">Select one to get a free quote.</p>
          <div className="grid grid-cols-2 gap-2.5">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => { setServiceId(s.id); setStep(2) }}
                className={`flex items-center gap-2.5 rounded-xl border-2 px-3 py-3 text-left transition-all hover:border-[#0047AB] hover:bg-blue-50 text-sm font-semibold ${
                  serviceId === s.id ? "border-[#0047AB] bg-blue-50 text-[#0047AB]" : "border-gray-200 text-[#0a1628]"
                }`}
              >
                <span className={`shrink-0 ${serviceId === s.id ? "text-[#0047AB]" : "text-gray-400"}`}>{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── STEP 2: property size ─────────────────────────────── */}
      {step === 2 && (
        <>
          <h3 className="text-2xl font-bold text-[#0a1628] mb-1">What size is your property?</h3>
          <p className="text-sm text-gray-500 mb-5">Helps us give you an accurate quote.</p>
          <div className="space-y-2.5">
            {SIZES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => { setSizeId(s.id); setStep(3) }}
                className={`w-full flex items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-left transition-all hover:border-[#0047AB] hover:bg-blue-50 ${
                  sizeId === s.id ? "border-[#0047AB] bg-blue-50" : "border-gray-200"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${sizeId === s.id ? "bg-[#0047AB]" : "bg-gray-100"}`}>
                  <Home className={`w-5 h-5 ${sizeId === s.id ? "text-white" : "text-gray-500"}`} />
                </div>
                <div>
                  <p className="font-semibold text-[#0a1628] text-sm">{s.label}</p>
                  <p className="text-xs text-gray-400">{s.sub}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 ml-auto" />
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setStep(1)} className="mt-4 text-sm text-gray-400 hover:text-[#0047AB]">
            ← Back
          </button>
        </>
      )}

      {/* ── STEP 3: contact details ───────────────────────────── */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold text-[#0a1628] mb-1">Almost done!</h3>
          <div className="flex flex-wrap gap-2 mb-5 text-sm">
            <span className="bg-blue-50 text-[#0047AB] rounded-lg px-3 py-1 font-semibold">{serviceId}</span>
            <span className="bg-[#FFC107]/15 text-[#0a1628] rounded-lg px-3 py-1 font-semibold">
              {SIZES.find((s) => s.id === sizeId)?.label}
            </span>
          </div>
          <div className="space-y-3">
            <input type="text" placeholder="Your name *" value={contact.name} onChange={setC("name")} required
              className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-[#0047AB] focus:outline-none text-sm" />
            <input type="tel" placeholder="Phone number *" value={contact.phone} onChange={setC("phone")} required
              className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-[#0047AB] focus:outline-none text-sm" />
            <input type="email" placeholder="Email (optional)" value={contact.email} onChange={setC("email")}
              className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-[#0047AB] focus:outline-none text-sm" />
            <input type="text" placeholder="Suburb (e.g. Rockingham) *" value={contact.address} onChange={setC("address")} required
              className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-[#0047AB] focus:outline-none text-sm" />
          </div>
          {status === "error" && <p className="text-sm text-red-600 mt-3">{errorMsg}</p>}
          <button type="submit" disabled={status === "sending"}
            className="mt-5 w-full flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-extrabold text-lg rounded-xl py-4 shadow-lg transition-all disabled:opacity-60">
            {status === "sending"
              ? <><Loader2 className="w-5 h-5 animate-spin" /> SENDING...</>
              : <><CheckCircle className="w-5 h-5" /> REQUEST FREE QUOTE <ChevronRight className="w-5 h-5" /></>}
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">
            Or call: <a href="tel:0413213689" className="font-semibold text-[#0047AB]">0413 213 689</a>
          </p>
          <button type="button" onClick={() => setStep(2)} className="mt-3 w-full text-sm text-gray-400 hover:text-[#0047AB]">
            ← Back
          </button>
        </form>
      )}
    </div>
  )
}

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
                <MultiStepForm />
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
