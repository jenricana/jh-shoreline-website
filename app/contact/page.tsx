"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    buildingType: "",
    service: "",
    message: "",
    agreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('CONTACT PAGE: Form submitted! Data:', formData);
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('CONTACT PAGE: Sending request to /api/contact...');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('CONTACT PAGE: Response status:', response.status);
      const data = await response.json();
      console.log('CONTACT PAGE: Response data:', data);

      if (response.ok) {
        console.log('CONTACT PAGE: SUCCESS! Setting status to success');
        setSubmitStatus('success');
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          address: "",
          buildingType: "",
          service: "",
          message: "",
          agreed: false,
        });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        console.log('CONTACT PAGE: ERROR! Response not OK');
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('CONTACT PAGE: CATCH ERROR:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[250px] bg-black pt-28">
        <div className="absolute inset-0">
          <Image
            src="/Photos/gold-marble-bg.jpg"
            alt="Contact Banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Contact</h1>
          <div className="flex items-center gap-2 text-white/80">
            <a href="/" className="hover:text-white">Home</a>
            <span>/</span>
            <span className="text-[#FFC107]">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-[#0047AB] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Image src="/mail.png" alt="Email" width={64} height={64} />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">Mail Us 24/7</h3>
              <a 
                href="mailto:jhshorelinecleaningservice@gmail.com" 
                className="text-[#0047AB] hover:text-[#FFC107] font-medium text-sm transition-colors"
              >
                jhshorelinecleaningservice@gmail.com
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-[#FFC107] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Image src="/location.png" alt="Location" width={64} height={64} />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">Our Location</h3>
              <p className="text-gray-600 text-sm font-medium">
                Rockingham, Perth<br />Western Australia
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-[#0047AB] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Image src="/call.png" alt="Phone" width={64} height={64} />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">Call Us 24/7</h3>
              <a 
                href="tel:0413213689" 
                className="text-[#0047AB] hover:text-[#FFC107] font-medium text-sm transition-colors"
              >
                0413 213 689
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-[#0047AB] via-[#0a1628] to-[#1a2d4d] relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC107]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0047AB]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/4 text-white/5 text-8xl">✦</div>
        <div className="absolute bottom-20 left-1/4 text-white/5 text-6xl">○</div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left - Info */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Request A<br />
                <span className="text-[#FFC107]">Free Estimate</span>
              </h2>
              <p className="text-white/70 mb-8">
                For any questions and queries feel free to contact us by filling the form, one of 
                our team members will be in touch with you shortly.
              </p>

              {/* Quick Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center">
                    <Image src="/call.png" alt="Phone" width={48} height={48} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call us anytime</p>
                    <a href="tel:0413213689" className="text-white font-semibold hover:text-[#FFC107] transition-colors">0413 213 689</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center">
                    <Image src="/mail.png" alt="Email" width={48} height={48} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email us</p>
                    <a href="mailto:jhshorelinecleaningservice@gmail.com" className="text-white font-semibold hover:text-[#FFC107] text-sm transition-colors">jhshorelinecleaningservice@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-white mb-4">Our Social Media</h3>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/share/1DFRbvRMdZ/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFC107] transition-all hover:scale-110">
                    <Image src="/facebook_link.png" alt="Facebook" width={24} height={24} />
                  </a>
                  <a href="https://www.instagram.com/jhshorelinecleaningservice/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFC107] transition-all hover:scale-110 group">
                    <svg className="w-6 h-6 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-[#FFC107]">
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

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="h-12 border-gray-200"
                    required
                  />
                  <Input
                    placeholder="Phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 border-gray-200"
                    required
                  />
                </div>

                <Input
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 border-gray-200"
                  required
                />

                <Input
                  placeholder="Enter Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="h-12 border-gray-200"
                  required
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <select
                    value={formData.buildingType}
                    onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                    className="h-12 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0047AB]"
                  >
                    <option value="" className="text-gray-900 bg-white">Select Property Type</option>
                    <option value="single-storey" className="text-gray-900 bg-white">Single-Storey</option>
                    <option value="double-storey" className="text-gray-900 bg-white">Double-Storey</option>
                    <option value="multi-level" className="text-gray-900 bg-white">Multi-Level</option>
                  </select>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="h-12 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0047AB]"
                  >
                    <option value="" className="text-gray-900 bg-white">Select Service</option>
                    <option value="Gutter Cleaning" className="text-gray-900 bg-white">Gutter Cleaning</option>
                    <option value="Solar Panel Cleaning" className="text-gray-900 bg-white">Solar Panel Cleaning</option>
                    <option value="Windows Cleaning" className="text-gray-900 bg-white">Windows Cleaning</option>
                    <option value="High Reach Windows" className="text-gray-900 bg-white">High Reach Windows</option>
                    <option value="End of Lease Cleaning" className="text-gray-900 bg-white">End of Lease Cleaning</option>
                    <option value="Carpet Cleaning" className="text-gray-900 bg-white">Carpet Cleaning</option>
                    <option value="Oven Cleaning" className="text-gray-900 bg-white">Oven Cleaning</option>
                    <option value="High Pressure Cleaning" className="text-gray-900 bg-white">High Pressure Cleaning</option>
                  </select>
                </div>

                <Textarea
                  placeholder="Are you looking for a cleaning service? If yes, please provide more information below."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="border-gray-200"
                />

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="mt-1"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold py-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'REQUEST FREE ESTIMATE'}
                </Button>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps?q=Rockingham,+WA,+Australia&z=12&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
}
