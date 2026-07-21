"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface CompactQuoteFormProps {
  variant?: "light" | "dark";
  defaultService?: string;
}

export function CompactQuoteForm({ variant = "dark", defaultService = "" }: CompactQuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    buildingType: "",
    service: defaultService,
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted! Data:', formData);
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Sending request to /api/contact...');
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

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        console.log('SUCCESS! Setting status to success');
        setSubmitStatus('success');
        setFormData({ name: "", email: "", phone: "", address: "", buildingType: "", service: defaultService, agreed: false });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        console.log('ERROR! Response not OK');
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('CATCH ERROR:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDark = variant === "dark";

  return (
    <div className={`rounded-2xl p-6 ${isDark ? 'bg-[#0a1628] text-white' : 'bg-white/80 backdrop-blur-sm shadow-xl border border-gray-200/50'}`}>
      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-[#0a1628]'}`}>
        Get a Free Quote
      </h3>
      <p className={`text-sm mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Ready to get started? Contact us today for a free, no-obligation quote.
      </p>

      {submitStatus === 'success' ? (
        <div className="text-center py-12 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Thank You!</h3>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Your request has been sent. We will contact you shortly.</p>
        </div>
      ) : submitStatus === 'error' ? (
        <div className="text-center py-12 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Failed to Send</h3>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{errorMessage}</p>
        </div>
      ) : (
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`h-11 ${isDark ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50' : 'border-gray-300'}`}
          required
        />

        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`h-11 ${isDark ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50' : 'border-gray-300'}`}
          required
        />

        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`h-11 ${isDark ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50' : 'border-gray-300'}`}
          required
        />

        <Input
          type="text"
          placeholder="Property Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className={`h-11 ${isDark ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50' : 'border-gray-300'}`}
          required
        />

        <select
          value={formData.buildingType}
          onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
          className={`w-full h-11 px-3 rounded-lg text-sm ${isDark ? 'bg-white/10 border border-white/20 text-white' : 'border border-gray-300 text-gray-900'}`}
        >
          <option value="" className="text-gray-900 bg-white">Select Property Type</option>
          <option value="single-storey" className="text-gray-900 bg-white">Single-Storey</option>
          <option value="double-storey" className="text-gray-900 bg-white">Double-Storey</option>
          <option value="multi-level" className="text-gray-900 bg-white">Multi-Level</option>
        </select>

        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className={`w-full h-11 px-3 rounded-lg text-sm ${isDark ? 'bg-white/10 border border-white/20 text-white' : 'border border-gray-300 text-gray-900'}`}
          required
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

        <div className="flex items-start gap-2 pt-2">
          <input
            type="checkbox"
            id={`agree-${variant}`}
            checked={formData.agreed}
            onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
            className="mt-1"
            required
          />
          <label htmlFor={`agree-${variant}`} className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            I agree to the processing of my personal data in accordance with the Privacy Policy.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'SENDING...' : 'REQUEST FREE ESTIMATE'}
        </button>
      </form>
      )}

      <div className={`mt-6 pt-4 border-t ${isDark ? 'border-white/20' : 'border-gray-200'}`}>
        <p className={`text-xs mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Service Areas</p>
        <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-[#0a1628]'}`}>
          Rockingham, Warnbro, Safety Bay & surrounding areas
        </p>
      </div>

      <div className={`mt-4 pt-4 border-t ${isDark ? 'border-white/20' : 'border-gray-200'}`}>
        <p className={`text-xs mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Or call us directly</p>
        <a 
          href="tel:0413213689" 
          className={`text-lg font-bold hover:text-[#FFC107] transition-colors ${isDark ? 'text-white' : 'text-[#0047AB]'}`}
        >
          0413 213 689
        </a>
      </div>
    </div>
  );
}
