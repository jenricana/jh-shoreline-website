"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Loader2 } from "lucide-react"
import { getUTMParams, trackLead } from "@/lib/ads"

const WINDOW_COUNTS = ["10-15 windows", "16-25 windows", "26-40 windows", "40+ windows / unsure"]
const PROPERTY_TYPES = ["Single-storey", "Double-storey", "Townhouse / Unit", "Commercial / Strata"]
const SERVICE_LEVELS = [
  { value: "Outside only", label: "Outside only" },
  { value: "Inside + outside", label: "Inside + outside" },
  { value: "Not sure", label: "Not sure, please advise" },
]

const inputClass = "h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0047AB] focus:border-transparent"

export function LandingLeadForm() {
  const searchParams = useSearchParams()
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    windows: "",
    propertyType: "",
    serviceLevel: "",
    message: "",
  })
  const [agreed, setAgreed] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [error, setError] = useState("")

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [key]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setError("")

    const source = new URLSearchParams(searchParams.toString()).get("utm_source") || "landing-page"
    const utm = getUTMParams()

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          phone: form.phone,
          email: form.email,
          address: form.suburb,
          buildingType: form.propertyType,
          service: "Window Cleaning",
          message: [
            form.windows && `Windows: ${form.windows}`,
            form.serviceLevel && `Inside/outside: ${form.serviceLevel}`,
            form.message,
          ]
            .filter(Boolean)
            .join(" | "),
          source,
          sourceDetail: "windows-cleaning landing page",
          ...utm,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || "Something went wrong")

      trackLead()
      setStatus("success")
      setForm({ name: "", phone: "", email: "", suburb: "", windows: "", propertyType: "", serviceLevel: "", message: "" })
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Network error. Please call us instead.")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-[#0a1628] mb-2">Thanks, {form.name.split(" ")[0] || "there"}!</h3>
        <p className="text-gray-600 mb-4">Your window cleaning request is in. We'll call or text you within one business day with your free quote.</p>
        <p className="text-sm text-gray-500">Need it sooner? Call <a href="tel:0413213689" className="font-bold text-[#0047AB]">0413 213 689</a></p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 space-y-4">
      <div className="mb-2">
        <h3 className="text-2xl font-bold text-[#0a1628]">Get Your Free Quote</h3>
        <p className="text-sm text-gray-500">Takes 30 seconds. No obligation.</p>
      </div>

      <Input type="text" placeholder="Full name *" value={form.name} onChange={set("name")} className={inputClass} required />
      <Input type="tel" placeholder="Phone number *" value={form.phone} onChange={set("phone")} className={inputClass} required />
      <Input type="email" placeholder="Email (optional)" value={form.email} onChange={set("email")} className={inputClass} />
      <Input type="text" placeholder="Suburb (e.g. Warnbro)" value={form.suburb} onChange={set("suburb")} className={inputClass} />

      <select value={form.windows} onChange={set("windows")} className={`w-full ${inputClass} ${form.windows ? "text-gray-900" : "text-gray-400"}`}>
        <option value="">Approx. number of windows</option>
        {WINDOW_COUNTS.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>

      <select value={form.propertyType} onChange={set("propertyType")} className={`w-full ${inputClass} ${form.propertyType ? "text-gray-900" : "text-gray-400"}`}>
        <option value="">Property type</option>
        {PROPERTY_TYPES.map((p) => <option key={p} value={p}>{p}</option>)}
      </select>

      <select value={form.serviceLevel} onChange={set("serviceLevel")} className={`w-full ${inputClass} ${form.serviceLevel ? "text-gray-900" : "text-gray-400"}`}>
        <option value="">Inside + outside?</option>
        {SERVICE_LEVELS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
      </select>

      <textarea
        placeholder="Anything we should know? (e.g. second storey, hard to reach windows)"
        value={form.message}
        onChange={set("message")}
        rows={3}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0047AB] focus:border-transparent text-sm"
      />

      <label className="flex items-start gap-2 text-xs text-gray-500">
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required className="mt-0.5" />
        I agree to JH Shoreline contacting me about my enquiry. See our Privacy Policy.
      </label>

      {status === "error" && <p className="text-sm text-red-600">{error}</p>}

      <Button
        type="submit"
        disabled={status === "sending"}
        size="lg"
        className="w-full bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-60"
      >
        {status === "sending" ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> SENDING...</> : "GET MY FREE QUOTE"}
      </Button>

      <p className="text-center text-xs text-gray-400">Or call now: <a href="tel:0413213689" className="font-semibold text-[#0047AB]">0413 213 689</a></p>
    </form>
  )
}
