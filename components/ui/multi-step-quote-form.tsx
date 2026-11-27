"use client"

import { useState } from "react"
import { CheckCircle, ChevronRight, Home, Loader2, Sun, Wind, Droplets, Flame, Layers, Bug, Zap } from "lucide-react"

export const ALL_SERVICES = [
  { id: "Windows Cleaning",       label: "Windows Cleaning",       icon: <Droplets className="w-5 h-5" /> },
  { id: "High Reach Windows",     label: "High Reach Windows",     icon: <Layers className="w-5 h-5" /> },
  { id: "Gutter Cleaning",        label: "Gutter Cleaning",        icon: <Wind className="w-5 h-5" /> },
  { id: "Gutter Guards",          label: "Gutter Guards",          icon: <Layers className="w-5 h-5" /> },
  { id: "Solar Panel Cleaning",   label: "Solar Panel Cleaning",   icon: <Sun className="w-5 h-5" /> },
  { id: "Solar Bird Proofing",    label: "Solar Bird Proofing",    icon: <Bug className="w-5 h-5" /> },
  { id: "End of Lease Cleaning",  label: "End of Lease Cleaning",  icon: <Home className="w-5 h-5" /> },
  { id: "Carpet Cleaning",        label: "Carpet Cleaning",        icon: <Zap className="w-5 h-5" /> },
  { id: "Oven Cleaning",          label: "Oven Cleaning",          icon: <Flame className="w-5 h-5" /> },
  { id: "High Pressure Cleaning", label: "High Pressure Cleaning", icon: <Droplets className="w-5 h-5" /> },
]

const SIZES = [
  { id: "small",      label: "1–2 Bed",               sub: "Studio, unit or small home",     hint: "from $150" },
  { id: "medium",     label: "3–4 Bed Single Storey",  sub: "Most common family home",        hint: "from $250" },
  { id: "large",      label: "Double Storey",           sub: "Two-storey or large property",   hint: "from $350" },
  { id: "commercial", label: "Commercial / Strata",     sub: "Office, complex or unit block",  hint: "Custom quote" },
]

// ─── single row option ────────────────────────────────────────────────────────
function OptionRow({
  icon, label, sub, hint, selected, onClick,
}: {
  icon?: React.ReactNode
  label: string
  sub?: string
  hint?: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-left transition-all hover:border-[#0047AB] hover:bg-blue-50/60 ${
        selected ? "border-[#0047AB] bg-blue-50" : "border-gray-200 bg-white"
      }`}
    >
      {/* icon box */}
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
        selected ? "bg-[#0047AB] text-white" : "bg-gray-100 text-gray-500"
      }`}>
        {icon ?? <Home className="w-5 h-5" />}
      </div>

      {/* label */}
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-sm leading-tight ${selected ? "text-[#0047AB]" : "text-[#0a1628]"}`}>{label}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>

      {/* hint / price */}
      {hint && (
        <span className={`text-sm font-bold whitespace-nowrap shrink-0 ${selected ? "text-[#0047AB]" : "text-[#FFC107]"}`}>
          {hint}
        </span>
      )}
    </button>
  )
}

// ─── main component ───────────────────────────────────────────────────────────
interface Props { source?: string }

export function MultiStepQuoteForm({ source = "homepage" }: Props) {
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
          source,
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
      <div className="text-center py-8">
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
      <div className="h-1 bg-gray-100 rounded-full mb-4">
        <div className="h-full bg-[#FFC107] rounded-full transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }} />
      </div>

      {/* step label */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold tracking-widest uppercase text-[#0047AB]">
          Step {step} of 3 — {step === 1 ? "Choose Service" : step === 2 ? "Property Size" : "Your Details"}
        </span>
        <span className="text-xs text-gray-400 font-semibold">{step} / 3</span>
      </div>

      {/* ── STEP 1: service ───────────────────────────────────── */}
      {step === 1 && (
        <>
          <h3 className="text-xl font-bold text-[#0a1628] mb-0.5">What service do you need?</h3>
          <p className="text-sm text-gray-500 mb-4">Select one to get a free quote.</p>
          <div className="space-y-2">
            {ALL_SERVICES.map((s) => (
              <OptionRow
                key={s.id}
                icon={s.icon}
                label={s.label}
                selected={serviceId === s.id}
                onClick={() => { setServiceId(s.id); setStep(2) }}
              />
            ))}
          </div>
        </>
      )}

      {/* ── STEP 2: property size ─────────────────────────────── */}
      {step === 2 && (
        <>
          <h3 className="text-xl font-bold text-[#0a1628] mb-0.5">What size is your property?</h3>
          <p className="text-sm text-gray-500 mb-4">Select your property type for a price estimate.</p>
          <div className="space-y-2">
            {SIZES.map((s) => (
              <OptionRow
                key={s.id}
                label={s.label}
                sub={s.sub}
                hint={s.hint}
                selected={sizeId === s.id}
                onClick={() => { setSizeId(s.id); setStep(3) }}
              />
            ))}
          </div>
          <button type="button" onClick={() => setStep(1)} className="mt-3 text-sm text-gray-400 hover:text-[#0047AB]">← Back</button>
        </>
      )}

      {/* ── STEP 3: contact details ───────────────────────────── */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-bold text-[#0a1628] mb-1">Almost done!</h3>
          <div className="flex flex-wrap gap-2 mb-4 text-sm">
            <span className="bg-blue-50 text-[#0047AB] rounded-lg px-3 py-1 font-semibold">{serviceId}</span>
            <span className="bg-[#FFC107]/15 text-[#0a1628] rounded-lg px-3 py-1 font-semibold">{SIZES.find((s) => s.id === sizeId)?.label}</span>
          </div>
          <div className="space-y-3">
            <input type="text" placeholder="Your name *" value={contact.name} onChange={setC("name")} required
              className="w-full h-11 px-4 rounded-xl border-2 border-gray-200 focus:border-[#0047AB] focus:outline-none text-sm" />
            <input type="tel" placeholder="Phone number *" value={contact.phone} onChange={setC("phone")} required
              className="w-full h-11 px-4 rounded-xl border-2 border-gray-200 focus:border-[#0047AB] focus:outline-none text-sm" />
            <input type="email" placeholder="Email (optional)" value={contact.email} onChange={setC("email")}
              className="w-full h-11 px-4 rounded-xl border-2 border-gray-200 focus:border-[#0047AB] focus:outline-none text-sm" />
            <input type="text" placeholder="Suburb *" value={contact.address} onChange={setC("address")} required
              className="w-full h-11 px-4 rounded-xl border-2 border-gray-200 focus:border-[#0047AB] focus:outline-none text-sm" />
          </div>
          {status === "error" && <p className="text-sm text-red-600 mt-3">{errorMsg}</p>}
          <button type="submit" disabled={status === "sending"}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-extrabold text-base rounded-xl py-3.5 shadow-lg transition-all disabled:opacity-60">
            {status === "sending"
              ? <><Loader2 className="w-5 h-5 animate-spin" /> SENDING...</>
              : <><CheckCircle className="w-5 h-5" /> REQUEST FREE QUOTE <ChevronRight className="w-5 h-5" /></>}
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">
            Or call: <a href="tel:0413213689" className="font-semibold text-[#0047AB]">0413 213 689</a>
          </p>
          <button type="button" onClick={() => setStep(2)} className="mt-2 w-full text-sm text-gray-400 hover:text-[#0047AB]">← Back</button>
        </form>
      )}
    </div>
  )
}
