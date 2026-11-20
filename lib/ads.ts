export const ADS_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ""
export const ADS_GTAG_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? ""
export const ADS_GTAG_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? ""
export const ADS_ENABLED = Boolean(ADS_PIXEL_ID || ADS_GTAG_ID)

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const

export type UTMParams = Partial<Record<(typeof UTM_KEYS)[number], string>>

export function getUTMParams(search: string = typeof window === "undefined" ? "" : window.location.search): UTMParams {
  const params = new URLSearchParams(search)
  const utm: UTMParams = {}
  UTM_KEYS.forEach((key) => {
    const value = params.get(key)
    if (value) utm[key] = value.slice(0, 200)
  })
  return utm
}

export function trackAdsEvent(event: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return
  if (ADS_PIXEL_ID && typeof window.fbq === "function") {
    window.fbq("track", event, params)
  }
  if (ADS_GTAG_ID && typeof window.gtag === "function") {
    window.gtag("event", event, params)
  }
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

export function trackLead(params: { value?: number; currency?: string } = {}) {
  if (typeof window === "undefined") return

  if (ADS_PIXEL_ID && typeof window.fbq === "function") {
    window.fbq("track", "Lead", params)
  }

  if (ADS_GTAG_ID && typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", params)
    if (ADS_GTAG_LABEL) {
      window.gtag("event", "conversion", { send_to: `${ADS_GTAG_ID}/${ADS_GTAG_LABEL}` })
    }
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: "generate_lead", ...params })
}
