"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone, MessageSquare, Sparkles, Droplets, Sun, Home, Building2, Percent, X, Gift } from "lucide-react";

const windowCleaningPrices = [
  { type: "Small Home (2x1)", price: "$120–$150", description: "Perfect for units and small homes" },
  { type: "Standard (3x2)", price: "$180–$220", description: "Most popular for family homes" },
  { type: "Large (4x2)", price: "$220–$280", description: "Larger homes with more windows" },
  { type: "Internal + External", price: "+$60–$100", description: "Add-on for complete clean" },
];

const gutterCleaningPrices = [
  { type: "Single-Storey", price: "$150–$220", description: "Ground level homes" },
  { type: "Double-Storey", price: "$250–$350", description: "Two-storey properties" },
  { type: "Heavy Debris", price: "+$50–$100", description: "Add-on for excessive buildup" },
];

const solarPanelPrices = [
  { type: "Minimum Call-out", price: "$100", description: "For smaller systems" },
  { type: "Single-Storey", price: "$6–$8/panel", description: "Per panel pricing" },
  { type: "Double-Storey", price: "$8–$10/panel", description: "Per panel pricing" },
];

const bundleDeals = [
  { 
    name: "Windows + Gutters", 
    discount: "10–15% OFF", 
    description: "Complete exterior clean",
    color: "from-[#0047AB] to-[#0a1628]"
  },
  { 
    name: "Windows + Solar", 
    discount: "5–10% OFF", 
    description: "Maximize light & energy",
    color: "from-[#FFC107] to-[#ff9800]"
  },
  { 
    name: "Windows + Gutters + Solar", 
    discount: "15–20% OFF", 
    description: "Ultimate property care package",
    color: "from-[#0047AB] via-[#FFC107] to-[#0a1628]"
  },
];

export default function PricingLandingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownAuto, setHasShownAuto] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Auto-show popup after 15 seconds
  useEffect(() => {
    if (!hasShownAuto) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        setHasShownAuto(true);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [hasShownAuto]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          message: `Service: ${formData.service}\n\n${formData.message}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", phone: "", email: "", address: "", service: "", message: "" });
        setTimeout(() => {
          setShowPopup(false);
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  const openPopup = () => {
    setShowPopup(true);
    setHasShownAuto(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Quote Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Left - Image & Offer */}
              <div className="relative hidden md:block">
                <Image
                  src="/Photos/new_photos/solar_panel_new.jpg"
                  alt="Professional Cleaning"
                  fill
                  className="object-cover rounded-l-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/50 to-transparent rounded-l-3xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-[#FFC107] text-[#0a1628] inline-block px-4 py-2 rounded-full text-sm font-bold mb-4">
                    <Gift className="w-4 h-4 inline mr-2" />
                    LIMITED TIME OFFER
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Bundle & Save Up To 20%
                  </h3>
                  <p className="text-white/80 text-sm">
                    Combine services for exclusive discounts. Get a free quote now!
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Check className="w-4 h-4 text-[#FFC107]" /> Free no-obligation quote
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Check className="w-4 h-4 text-[#FFC107]" /> Response within 24 hours
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Check className="w-4 h-4 text-[#FFC107]" /> Local Rockingham business
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-2">
                    Get Your <span className="text-[#0047AB]">Free Quote</span>
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Fill in your details and we'll get back to you ASAP
                  </p>
                </div>

                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0a1628] mb-2">Thank You!</h3>
                    <p className="text-gray-600">We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="rounded-xl border-gray-200 focus:border-[#0047AB] focus:ring-[#0047AB]"
                      />
                      <Input
                        placeholder="Phone Number *"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="rounded-xl border-gray-200 focus:border-[#0047AB] focus:ring-[#0047AB]"
                      />
                    </div>
                    <Input
                      placeholder="Email Address *"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="rounded-xl border-gray-200 focus:border-[#0047AB] focus:ring-[#0047AB]"
                    />
                    <Input
                      placeholder="Property Address"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="rounded-xl border-gray-200 focus:border-[#0047AB] focus:ring-[#0047AB]"
                    />
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0047AB] focus:ring-[#0047AB] focus:outline-none text-gray-700"
                      required
                    >
                      <option value="">Select Service *</option>
                      <option value="Window Cleaning">Window Cleaning</option>
                      <option value="Gutter Cleaning">Gutter Cleaning</option>
                      <option value="Gutter Guards">Gutter Guards</option>
                      <option value="Solar Panel Cleaning">Solar Panel Cleaning</option>
                      <option value="Solar Bird Proofing">Solar Bird Proofing</option>
                      <option value="High Reach Windows">High Reach Windows</option>
                      <option value="End of Lease Cleaning">End of Lease Cleaning</option>
                      <option value="Carpet Cleaning">Carpet Cleaning</option>
                      <option value="Oven Cleaning">Oven Cleaning</option>
                      <option value="High Pressure Cleaning">High Pressure Cleaning</option>
                      <option value="Windows + Gutters Bundle">Windows + Gutters Bundle (10-15% OFF)</option>
                      <option value="Windows + Solar Bundle">Windows + Solar Bundle (5-10% OFF)</option>
                      <option value="Complete Bundle">Complete Bundle - All Services (15-20% OFF)</option>
                    </select>
                    <Textarea
                      placeholder="Additional details (property size, number of panels, etc.)"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={3}
                      className="rounded-xl border-gray-200 focus:border-[#0047AB] focus:ring-[#0047AB]"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#0047AB] to-[#0a1628] hover:from-[#0a1628] hover:to-[#0047AB] text-white font-bold py-4 rounded-xl text-lg transition-all duration-300"
                    >
                      {isSubmitting ? "Sending..." : "GET MY FREE QUOTE"}
                    </Button>
                    <p className="text-center text-xs text-gray-500">
                      🔒 Your information is secure and will never be shared
                    </p>
                  </form>
                )}

                {submitStatus === 'error' && (
                  <p className="text-red-500 text-center mt-4 text-sm">
                    Something went wrong. Please call us at 0413 213 689
                  </p>
                )}

                {/* Quick Call Option */}
                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <p className="text-gray-500 text-sm mb-3">Prefer to talk? Call us directly:</p>
                  <a href="tel:0413213689" className="inline-flex items-center gap-2 text-[#0047AB] font-bold text-lg hover:text-[#FFC107] transition-colors">
                    <Phone className="w-5 h-5" />
                    0413 213 689
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] bg-black pt-28">
        <div className="absolute inset-0">
          <Image
            src="/Photos/gold-marble-bg.jpg"
            alt="JH Shoreline Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/45"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <p className="text-[#FFC107] text-sm font-semibold tracking-widest uppercase mb-4">
            Professional Cleaning Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transparent Pricing,<br />
            <span className="text-[#FFC107]">Exceptional Results</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Quality cleaning services for your home in Rockingham, Warnbro & surrounding areas. 
            No hidden fees, just honest pricing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={openPopup}
              className="bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold py-4 px-8 rounded-lg text-lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              GET A FREE QUOTE
            </Button>
            <a href="tel:0413213689">
              <Button className="bg-white hover:bg-gray-100 text-[#0a1628] font-bold py-4 px-8 rounded-lg text-lg">
                <Phone className="w-5 h-5 mr-2" />
                CALL 0413 213 689
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Window Cleaning Section */}
      <section className="py-20 bg-white" id="window-cleaning">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#0047AB] rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#0047AB] font-semibold uppercase tracking-wider">Residential</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Window Cleaning
              </h2>
              <p className="text-gray-600 mb-8">
                Crystal clear windows that let the light shine through. Professional streak-free cleaning 
                for all your residential windows, inside and out.
              </p>
              
              <div className="space-y-4">
                {windowCleaningPrices.map((item) => (
                  <div key={item.type} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-[#0047AB]/5 transition-colors">
                    <div>
                      <h4 className="font-semibold text-[#0a1628]">{item.type}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <span className="text-xl font-bold text-[#0047AB]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Photos/new_photos/window_cleaning_new.png"
                  alt="Window Cleaning"
                  width={600}
                  height={450}
                  className="object-cover h-[450px] w-full"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#0047AB] rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gutter Cleaning Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="gutter-cleaning">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Photos/new_photos/gutter_cleaning_new.png"
                  alt="Gutter Cleaning"
                  width={600}
                  height={450}
                  className="object-cover h-[450px] w-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFC107] rounded-2xl -z-10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FFC107] rounded-xl flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-[#0a1628]" />
                </div>
                <span className="text-[#FFC107] font-semibold uppercase tracking-wider">Essential Maintenance</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Gutter Cleaning
              </h2>
              <p className="text-gray-600 mb-8">
                Prevent water damage and protect your home. We remove all leaves, debris, and blockages 
                to keep your gutters flowing freely.
              </p>
              
              <div className="space-y-4">
                {gutterCleaningPrices.map((item) => (
                  <div key={item.type} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div>
                      <h4 className="font-semibold text-[#0a1628]">{item.type}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <span className="text-xl font-bold text-[#FFC107]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Panel Cleaning Section */}
      <section className="py-20 bg-white" id="solar-cleaning">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#0047AB] rounded-xl flex items-center justify-center">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#0047AB] font-semibold uppercase tracking-wider">Energy Efficiency</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Solar Panel Cleaning
              </h2>
              <p className="text-gray-600 mb-8">
                Maximize your solar investment. Dirty panels can lose up to 25% efficiency. 
                Our gentle, pure water cleaning restores optimal performance.
              </p>
              
              <div className="space-y-4">
                {solarPanelPrices.map((item) => (
                  <div key={item.type} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-[#0047AB]/5 transition-colors">
                    <div>
                      <h4 className="font-semibold text-[#0a1628]">{item.type}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <span className="text-xl font-bold text-[#0047AB]">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-[#0047AB]/10 rounded-xl border border-[#0047AB]/20">
                <p className="text-sm text-[#0a1628]">
                  <strong>💡 Pro Tip:</strong> Regular cleaning every 6-12 months can increase your energy output by up to 25%!
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Photos/new_photos/solar_panel_new.jpg"
                  alt="Solar Panel Cleaning"
                  width={600}
                  height={450}
                  className="object-cover h-[450px] w-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFC107] rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Deals Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#1a2d4d] to-[#0a1628]" id="bundles">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Percent className="w-8 h-8 text-[#FFC107]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bundle & <span className="text-[#FFC107]">Save More</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Combine services and enjoy exclusive discounts. The more you bundle, the more you save!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {bundleDeals.map((bundle, index) => (
              <div 
                key={bundle.name}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 ${index === 2 ? 'md:scale-105 ring-2 ring-[#FFC107]' : ''}`}
              >
                {index === 2 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFC107] text-[#0a1628] text-xs font-bold px-4 py-1 rounded-full">
                    BEST VALUE
                  </div>
                )}
                <div className={`text-3xl font-bold bg-gradient-to-r ${bundle.color} bg-clip-text text-transparent mb-2`}>
                  {bundle.discount}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{bundle.name}</h3>
                <p className="text-white/60 text-sm">{bundle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Reach Windows Section */}
      <section className="py-20 bg-gray-50" id="high-reach">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Photos/new_photos/high_Reach_new.png"
                  alt="High Reach Window Cleaning"
                  width={600}
                  height={450}
                  className="object-cover h-[450px] w-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#0047AB] rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#0047AB] font-semibold uppercase tracking-wider">Commercial & Multi-Storey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                High Reach Windows
              </h2>
              <p className="text-gray-600 mb-6">
                Professional window cleaning for multi-storey buildings, commercial properties, and 
                hard-to-reach windows. We have the equipment and expertise to handle any height safely.
              </p>
              
              <ul className="space-y-3 mb-8">
                {["Multi-storey residential", "Commercial buildings", "Strata properties", "Specialized equipment", "Safety certified"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0047AB]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={openPopup}
                className="bg-[#0047AB] hover:bg-[#003d8f] text-white font-bold py-3 px-6 rounded-lg"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* End of Lease Cleaning Section */}
      <section className="py-20 bg-white" id="end-of-lease">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FFC107] rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-[#0a1628]" />
                </div>
                <span className="text-[#FFC107] font-semibold uppercase tracking-wider">Bond Back Guarantee</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                End of Lease Cleaning
              </h2>
              <p className="text-gray-600 mb-6">
                Moving out? Our comprehensive bond cleaning ensures your property is spotless and ready for inspection. 
                We follow real estate checklists to guarantee you get your full deposit back.
              </p>
              
              <ul className="space-y-3 mb-8">
                {["Full property deep clean", "Kitchen & oven included", "Bathroom sanitization", "Windows cleaned inside", "Carpets vacuumed", "Bond back guarantee"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FFC107]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={openPopup}
                className="bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold py-3 px-6 rounded-lg"
              >
                Get Custom Quote
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Photos/new_photos/end_of_lease_new.png"
                  alt="End of Lease Cleaning"
                  width={600}
                  height={450}
                  className="object-cover h-[450px] w-full"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#FFC107] rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Carpet Cleaning Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="carpet-cleaning">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Photos/new_photos/carpet_new.png"
                  alt="Carpet Cleaning"
                  width={600}
                  height={450}
                  className="object-cover h-[450px] w-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0047AB] rounded-2xl -z-10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#0047AB] rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#0047AB] font-semibold uppercase tracking-wider">Deep Clean</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Carpet Cleaning
              </h2>
              <p className="text-gray-600 mb-6">
                Professional deep carpet cleaning to remove stains, odors, and allergens. 
                Our hot water extraction method restores your carpets to like-new condition.
              </p>
              
              <ul className="space-y-3 mb-8">
                {["Deep stain removal", "Allergen extraction", "Odor elimination", "Quick drying time", "Safe for kids & pets", "Extends carpet life"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0047AB]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={openPopup}
                className="bg-[#0047AB] hover:bg-[#003d8f] text-white font-bold py-3 px-6 rounded-lg"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Oven Cleaning Section */}
      <section className="py-20 bg-white" id="oven-cleaning">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FFC107] rounded-xl flex items-center justify-center">
                  <Sun className="w-6 h-6 text-[#0a1628]" />
                </div>
                <span className="text-[#FFC107] font-semibold uppercase tracking-wider">Kitchen Essential</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Oven Cleaning
              </h2>
              <p className="text-gray-600 mb-6">
                Professional oven cleaning to remove grease, grime, and burnt-on food. 
                We use safe, eco-friendly products for a sparkling clean oven.
              </p>
              
              <ul className="space-y-3 mb-8">
                {["Deep degreasing", "Eco-friendly products", "Racks & trays included", "Door glass cleaned", "Same day service", "Improves cooking performance"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FFC107]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={openPopup}
                className="bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold py-3 px-6 rounded-lg"
              >
                Get Custom Quote
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Photos/new_photos/oven_new.png"
                  alt="Oven Cleaning"
                  width={600}
                  height={450}
                  className="object-cover h-[450px] w-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFC107] rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* High Pressure Cleaning Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="pressure-cleaning">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Photos/new_photos/High_PRessure_new.png"
                  alt="High Pressure Cleaning"
                  width={600}
                  height={450}
                  className="object-cover h-[450px] w-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0047AB] rounded-2xl -z-10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#0047AB] rounded-xl flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#0047AB] font-semibold uppercase tracking-wider">Exterior Restoration</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                High Pressure Cleaning
              </h2>
              <p className="text-gray-600 mb-6">
                Powerful pressure washing to restore driveways, patios, decks, and exterior surfaces. 
                Remove years of dirt, grime, mold, and stains.
              </p>
              
              <ul className="space-y-3 mb-8">
                {["Driveways & paths", "Patios & decks", "Exterior walls", "Oil stain removal", "Mold & algae removal", "Boosts curb appeal"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0047AB]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={openPopup}
                className="bg-[#0047AB] hover:bg-[#003d8f] text-white font-bold py-3 px-6 rounded-lg"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Why Choose <span className="text-[#0047AB]">JH Shoreline?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image src="/106.png" alt="Insured" width={64} height={64} />
              </div>
              <h3 className="font-semibold text-[#0a1628] mb-2">Fully Insured</h3>
              <p className="text-gray-500 text-sm">Complete peace of mind</p>
            </div>
            <div className="text-center p-6">
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image src="/107.png" alt="Eco" width={64} height={64} />
              </div>
              <h3 className="font-semibold text-[#0a1628] mb-2">Eco-Friendly</h3>
              <p className="text-gray-500 text-sm">Safe cleaning solutions</p>
            </div>
            <div className="text-center p-6">
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image src="/108.png" alt="Professional" width={64} height={64} />
              </div>
              <h3 className="font-semibold text-[#0a1628] mb-2">Professional</h3>
              <p className="text-gray-500 text-sm">Trained experts</p>
            </div>
            <div className="text-center p-6">
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image src="/everything.png" alt="Guaranteed" width={64} height={64} />
              </div>
              <h3 className="font-semibold text-[#0a1628] mb-2">Guaranteed</h3>
              <p className="text-gray-500 text-sm">100% satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0047AB] to-[#0a1628]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote. We service Rockingham, Warnbro, 
            Safety Bay, Baldivis, and surrounding areas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={openPopup}
              className="bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold py-4 px-8 rounded-lg text-lg"
            >
              Get Free Quote
            </Button>
            <a href="tel:0413213689">
              <Button className="bg-white hover:bg-gray-100 text-[#0a1628] font-bold py-4 px-8 rounded-lg text-lg">
                Call: 0413 213 689
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
