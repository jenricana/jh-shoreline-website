"use client";

import { useState } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const services = [
  "Gutter Cleaning",
  "Solar Panel Cleaning",
  "Windows Cleaning",
  "High Reach Windows",
  "End of Lease Cleaning",
  "Carpet Cleaning",
  "Oven Cleaning",
  "High Pressure Cleaning"
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    buildingType: "",
    service: "",
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          buildingType: formData.buildingType,
          service: formData.service,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", phone: "", address: "", buildingType: "", service: "", agreed: false });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        const data = await response.json();
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Photos/gold-marble-bg.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
              {/* Success Message */}
              {submitStatus === 'success' ? (
                <div className="text-center py-12 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-sm text-gray-600">Your request has been sent. We will contact you shortly.</p>
                </div>
              ) : submitStatus === 'error' ? (
                <div className="text-center py-12 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Failed to Send</h3>
                  <p className="text-sm text-gray-600">{errorMessage}</p>
                </div>
              ) : (
              <>
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#0047AB]"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#0047AB]"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#0047AB]"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#0047AB]"></div>

              {/* Sparkle decoration */}
              <div className="absolute top-8 right-16 text-[#0047AB] text-2xl">✦</div>

              {/* Header */}
              <div className="mb-4">
                <Image
                  src="/Photos/contact_us.png"
                  alt="Contact Us"
                  width={140}
                  height={30}
                  className="object-contain"
                />
              </div>

              <h2 className="text-3xl font-bold text-[#0a1628] mb-8">
                Get a Quote
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Your name*
                    </label>
                    <div className="relative">
                      <Image
                        src="/contact_forms.png"
                        alt=""
                        width={300}
                        height={50}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                      <Input
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="relative bg-transparent border-none focus:outline-none focus:ring-0"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Your email*
                    </label>
                    <div className="relative">
                      <Image
                        src="/contact_forms.png"
                        alt=""
                        width={300}
                        height={50}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                      <Input
                        type="email"
                        placeholder="smith@gmail.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="relative bg-transparent border-none focus:outline-none focus:ring-0"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Your Phone*
                    </label>
                    <div className="relative">
                      <Image
                        src="/contact_forms.png"
                        alt=""
                        width={300}
                        height={50}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                      <Input
                        type="tel"
                        placeholder="+61 413 213 689"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="relative bg-transparent border-none focus:outline-none focus:ring-0"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Property Type
                    </label>
                    <div className="relative">
                      <Image
                        src="/contact_forms.png"
                        alt=""
                        width={300}
                        height={50}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg pointer-events-none"
                      />
                      <select
                        value={formData.buildingType}
                        onChange={(e) =>
                          setFormData({ ...formData, buildingType: e.target.value })
                        }
                        className="relative w-full h-10 px-3 bg-transparent border-none rounded-lg text-sm focus:outline-none focus:ring-0"
                      >
                        <option value="" className="text-gray-900 bg-white">Select building type</option>
                        <option value="single-storey" className="text-gray-900 bg-white">Single-Storey</option>
                        <option value="double-storey" className="text-gray-900 bg-white">Double-Storey</option>
                        <option value="multi-level" className="text-gray-900 bg-white">Multi-Level</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Your Address*
                  </label>
                  <div className="relative">
                    <Image
                      src="/contact_forms.png"
                      alt=""
                      width={300}
                      height={50}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    <Input
                      type="text"
                      placeholder="123 Main Street, Rockingham WA 6168"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="relative bg-transparent border-none focus:outline-none focus:ring-0"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Your services*
                  </label>
                  <div className="relative">
                    <Image
                      src="/contact_forms.png"
                      alt=""
                      width={300}
                      height={50}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg pointer-events-none"
                    />
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="relative w-full h-10 px-3 bg-transparent border-none rounded-lg text-sm focus:outline-none focus:ring-0"
                      required
                    >
                      <option value="" className="text-gray-900 bg-white">Choose your services</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="text-gray-900 bg-white">{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={formData.agreed}
                    onChange={(e) =>
                      setFormData({ ...formData, agreed: e.target.checked })
                    }
                    className="mt-1"
                    required
                  />
                  <label htmlFor="agree" className="text-xs text-gray-500">
                    By submitting this form, you agree to the processing of your personal data in accordance with our Privacy Policy.
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="relative w-auto hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Image
                    src="/submmit.png"
                    alt={isSubmitting ? 'Sending...' : 'Submit Information'}
                    width={200}
                    height={50}
                    className="object-contain"
                  />
                </button>
              </form>
              </>
              )}
            </div>

            {/* Right side content - optional messaging */}
            <div className="hidden lg:flex flex-col justify-center space-y-6">
              <div className="text-white">
                <h3 className="text-4xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg text-white/90 mb-6">
                  Get your free quote today! Our team will respond within 24 hours with a competitive price for your cleaning needs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-medium">Professional Service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-medium">Fast Response Time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-medium">Competitive Pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
