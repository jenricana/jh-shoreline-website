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
    state: "",
    city: "",
    message: "",
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
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          address: "",
          state: "",
          city: "",
          message: "",
          agreed: false,
        });
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[250px] bg-[#0a1628] pt-28">
        <div className="absolute inset-0">
          <Image
            src="/Photos/car_new.png"
            alt="Contact Banner"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 to-[#0a1628]/60"></div>
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
              <div className="w-16 h-16 bg-[#0047AB] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Image src="/mail.png" alt="Email" width={32} height={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">Mail Us 24/7</h3>
              <a 
                href="mailto:jhshorelineservices@gmail.com" 
                className="text-[#0047AB] hover:text-[#FFC107] font-medium text-sm transition-colors"
              >
                jhshorelineservices@gmail.com
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-[#FFC107] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#FFC107] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Image src="/location.png" alt="Location" width={32} height={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">Our Location</h3>
              <p className="text-gray-600 text-sm font-medium">
                Rockingham, Perth<br />Western Australia
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-[#0047AB] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#0047AB] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Image src="/call.png" alt="Phone" width={32} height={32} />
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
                  <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center shadow-lg">
                    <Image src="/call.png" alt="Phone" width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call us anytime</p>
                    <a href="tel:0413213689" className="text-white font-semibold hover:text-[#FFC107] transition-colors">0413 213 689</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0047AB] rounded-full flex items-center justify-center shadow-lg">
                    <Image src="/mail.png" alt="Email" width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email us</p>
                    <a href="mailto:jhshorelineservices@gmail.com" className="text-white font-semibold hover:text-[#FFC107] text-sm transition-colors">jhshorelineservices@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-white mb-4">Our Social Media</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFC107] transition-all hover:scale-110">
                    <Image src="/facebook_link.png" alt="Facebook" width={24} height={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFC107] transition-all hover:scale-110">
                    <Image src="/youtube_link.png" alt="YouTube" width={24} height={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFC107] transition-all hover:scale-110">
                    <Image src="/linked_in_link.png" alt="LinkedIn" width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-[#FFC107]">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-green-800">Message Sent Successfully!</p>
                      <p className="text-sm text-green-700">We'll contact you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <p className="font-semibold text-red-800">Failed to Send</p>
                      <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                  </div>
                </div>
              )}

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

                <div className="grid md:grid-cols-2 gap-4">
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
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="h-12 border-gray-200"
                  />
                  <Input
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="h-12 border-gray-200"
                  />
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107693.95649788!2d115.69831!3d-32.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a14a4f7e5a5d%3A0x504f0b535df4d30!2sRockingham%20WA%2C%20Australia!5e0!3m2!1sen!2sus!4v1234567890"
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
