"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle, ChevronRight, Loader2, Home } from "lucide-react"
import { getUTMParams, trackLead } from "@/lib/ads"

// ─── pricing matrix ──────────────────────────────────────────────────────────
const SIZES = [
  { id: "small",   label: "1–2 Bed",              sub: "Studio, unit or small home",        prices: { Bronze: 120, Silver: 180, Gold: 240 } },
  { id: "medium",  label: "3–4 Bed Single Storey", sub: "Most common family home",           prices: { Bronze: 180, Silver: 280, Gold: 360 } },
  { id: "large",   label: "Double Storey",          sub: "Two-storey home or large property", prices: { Bronze: 300, Silver: 450, Gold: 550 } },
  { id: "custom",  label: "Commercial / Strata",    sub: "Office, complex or unit block",     prices: null },
]

const PACKAGES = [
  { id: "Bronze",   tag: "Exterior glass only",                      desc: "Quick refresh, great street appeal" },
  { id: "Silver",   tag: "Inside & outside glass + frames",          desc: "Classic full-glass clean — streak-free rooms" },
  { id: "Gold",     tag: "Inside & outside + tracks & flyscreens",   desc: "Full detail — removes dirt, cobwebs & track debris", popular: true },
  { id: "Platinum", tag: "The Works — mirrors, balustrades & more",  desc: "Top-to-bottom shine for pre-sale or max presentation", custom: true },
]

function priceLabel(sizeId: string, pkgId: string) {
  const s = SIZES.find((x) => x.id === sizeId)
  if (!s || !s.prices) return "Custom quote"
  if (pkgId === "Platinum") return "Custom quote"
  const p = s.prices[pkgId as keyof typeof s.prices]
  return p ? `from $${p}` : "Custom quote"
}

// ─── success screen ───────────────────────────────────────────────────────────
function SuccessScreen({ name }: { name: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-[#0a1628] mb-2">Thanks{name ? `, ${name.split(" ")[0]}` : ""}!</h3>
      <p className="text-gray-600 mb-4">Your window cleaning quote request is in. We&apos;ll call or text you within one business day.</p>
      <p className="text-sm text-gray-500">Need it sooner? Call <a href="tel:0413213689" className="font-bold text-[#0047AB]">0413 213 689</a></p>
    </div>
  )
}

// ─── main component ───────────────────────────────────────────────────────────
export function LandingLeadForm() {
  const searchParams = useSearchParams()
  const [step, setStep]       = useState(1)
  const [sizeId, setSizeId]   = useState("")
  const [pkgId, setPkgId]     = useState("")
  const [contact, setContact] = useState({ name: "", phone: "", email: "", suburb: "" })
  const [status, setStatus]   = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const setC = (k: keyof typeof contact) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setContact({ ...contact, [k]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")
    const source = new URLSearchParams(searchParams.toString()).get("utm_source") || "landing-page"
    const utm = getUTMParams()
    const selectedSize = SIZES.find((s) => s.id === sizeId)
    const price = priceLabel(sizeId, pkgId)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: contact.name,
          phone: contact.phone,
          email: contact.email,
          address: contact.suburb,
          service: "Window Cleaning",
          message: [
            selectedSize && `Property: ${selectedSize.label}`,
            pkgId && `Package: ${pkgId} — ${price}`,
          ].filter(Boolean).join(" | "),
          source,
          sourceDetail: "windows-cleaning landing page",
          ...utm,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || "Something went wrong")
      trackLead()
      setStatus("success")
    } catch (err) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Network error. Please call us instead.")
    }
  }

  if (status === "success") return <SuccessScreen name={contact.name} />

  const totalSteps = 3

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* progress bar */}
      <div className="h-1.5 bg-gray-100">
        <div
          className="h-full bg-[#FFC107] transition-all duration-500"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      <div className="p-6 md:p-8">
        {/* step label */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-bold tracking-widest uppercase text-[#0047AB]">
            Step {step} of {totalSteps} —&nbsp;
            {step === 1 ? "Property Size" : step === 2 ? "Choose Package" : "Your Details"}
          </span>
          <span className="text-xs text-gray-400 font-medium">{step} / {totalSteps}</span>
        </div>

        {/* ── STEP 1: property size ─────────────────────────────── */}
        {step === 1 && (
          <>
            <h3 className="text-2xl font-bold text-[#0a1628] mb-1">What size is your property?</h3>
            <p className="text-sm text-gray-500 mb-5">Select your property type for a price estimate.</p>
            <div className="space-y-3">
              {SIZES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => { setSizeId(s.id); setStep(2) }}
                  className={`w-full flex items-center justify-between gap-4 rounded-xl border-2 px-4 py-3.5 text-left transition-all hover:border-[#0047AB] hover:bg-blue-50 ${
                    sizeId === s.id ? "border-[#0047AB] bg-blue-50" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${sizeId === s.id ? "bg-[#0047AB]" : "bg-gray-100"}`}>
                      <Home className={`w-5 h-5 ${sizeId === s.id ? "text-white" : "text-gray-500"}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0a1628] text-sm">{s.label}</p>
                      <p className="text-xs text-gray-400">{s.sub}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-bold whitespace-nowrap ${sizeId === s.id ? "text-[#0047AB]" : "text-[#FFC107]"}`}>
                    {s.prices ? `from $${s.prices.Bronze}` : "Custom quote"}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* ── STEP 2: package ───────────────────────────────────── */}
        {step === 2 && (
          <>
            <h3 className="text-2xl font-bold text-[#0a1628] mb-1">Which clean do you need?</h3>
            <p className="text-sm text-gray-500 mb-5">Prices shown for your selected property size.</p>
            <div className="space-y-3">
              {PACKAGES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => { setPkgId(p.id); setStep(3) }}
                  className={`w-full flex items-center justify-between gap-4 rounded-xl border-2 px-4 py-3.5 text-left transition-all hover:border-[#0047AB] hover:bg-blue-50 relative ${
                    pkgId === p.id ? "border-[#0047AB] bg-blue-50" : "border-gray-200"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-bold text-[#0a1628] text-sm">{p.id}</p>
                      {p.popular && (
                        <span className="bg-[#FFC107] text-[#0a1628] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wide">
                          Most popular
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{p.tag}</p>
                    <p className="text-xs text-gray-400">{p.desc}</p>
                  </div>
                  <span className={`text-sm font-bold whitespace-nowrap shrink-0 ${pkgId === p.id ? "text-[#0047AB]" : "text-[#FFC107]"}`}>
                    {priceLabel(sizeId, p.id)}
                  </span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-4 text-sm text-gray-400 hover:text-[#0047AB] flex items-center gap-1"
            >
              ← Back
            </button>
          </>
        )}

        {/* ── STEP 3: contact details ───────────────────────────── */}
        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <h3 className="text-2xl font-bold text-[#0a1628] mb-1">Almost done!</h3>
            <div className="text-sm text-gray-500 mb-5 flex flex-wrap gap-2">
              <span className="bg-blue-50 text-[#0047AB] rounded-lg px-3 py-1 font-semibold">
                {SIZES.find((s) => s.id === sizeId)?.label}
              </span>
              <span className="bg-[#FFC107]/15 text-[#0a1628] rounded-lg px-3 py-1 font-semibold">
                {pkgId} — {priceLabel(sizeId, pkgId)}
              </span>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Your name *"
                value={contact.name}
                onChange={setC("name")}
                required
                className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-[#0047AB] focus:outline-none text-sm"
              />
              <input
                type="tel"
                placeholder="Phone number *"
                value={contact.phone}
                onChange={setC("phone")}
                required
                className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-[#0047AB] focus:outline-none text-sm"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                value={contact.email}
                onChange={setC("email")}
                className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-[#0047AB] focus:outline-none text-sm"
              />
              <input
                type="text"
                placeholder="Suburb (e.g. Warnbro) *"
                value={contact.suburb}
                onChange={setC("suburb")}
                required
                className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-[#0047AB] focus:outline-none text-sm"
              />
            </div>

            {status === "error" && <p className="text-sm text-red-600 mt-3">{errorMsg}</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 w-full flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-extrabold text-lg rounded-xl py-4 shadow-lg transition-all disabled:opacity-60"
            >
              {status === "sending"
                ? <><Loader2 className="w-5 h-5 animate-spin" /> SENDING...</>
                : <><CheckCircle className="w-5 h-5" /> GET MY FREE QUOTE <ChevronRight className="w-5 h-5" /></>}
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">
              Or call us: <a href="tel:0413213689" className="font-semibold text-[#0047AB]">0413 213 689</a>
            </p>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="mt-3 w-full text-sm text-gray-400 hover:text-[#0047AB]"
            >
              ← Back
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
