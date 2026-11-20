"use client";

import { useEffect, useRef } from "react"
import Script from "next/script"
import { ADS_ENABLED, ADS_GTAG_ID, ADS_GTAG_LABEL, ADS_PIXEL_ID, getUTMParams, trackAdsEvent } from "@/lib/ads"

const GTAG_SCRIPT = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', '${ADS_GTAG_ID}'${ADS_GTAG_LABEL ? `, { send_to: '${ADS_GTAG_ID}/${ADS_GTAG_LABEL}' }` : ""});
`

const META_PIXEL_SCRIPT = `
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '${ADS_PIXEL_ID}');
  fbq('track', 'PageView');
`

export function AdsTracking() {
  const sent = useRef(false)

  useEffect(() => {
    if (!ADS_ENABLED || sent.current || typeof window === "undefined") return
    sent.current = true
    trackAdsEvent("landing_page_view", {
      page_path: window.location.pathname,
      ...getUTMParams(),
    })
  }, [])

  if (!ADS_ENABLED) return null

  return (
    <>
      {ADS_GTAG_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ADS_GTAG_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-ads-gtag" strategy="afterInteractive">
            {GTAG_SCRIPT}
          </Script>
        </>
      )}
      {ADS_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {META_PIXEL_SCRIPT}
        </Script>
      )}
    </>
  )
}
