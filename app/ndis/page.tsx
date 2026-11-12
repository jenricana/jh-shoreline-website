"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Check, Phone, ThumbsUp, Star, ShieldCheck, Home } from "lucide-react";
import { useState } from "react";

const services = [
  "Window Cleaning",
  "Gutter Cleaning",
  "Solar Panel Cleaning",
  "High Reach Windows",
  "End of Lease Cleaning",
  "Carpet Cleaning",
  "Oven Cleaning",
  "High Pressure Cleaning"
];

const features = [
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We have a proven record of satisfying customers and delivering top-notch cleaning services for NDIS participants."
  },
  {
    icon: Star,
    title: "5-Star Rated Cleaning Services",
    description: "We're committed to providing our customers with the highest quality cleaning services, ensuring exceptional results every time."
  },
  {
    icon: ShieldCheck,
    title: "Licensed And Insured",
    description: "We are fully licensed and insured for professional cleaning services in Perth, Australia, and nearby areas."
  }
];

const includedServices = [
  "Regular home cleaning assistance",
  "Window cleaning (inside & outside)",
  "Gutter cleaning & maintenance",
  "Solar panel cleaning",
  "High pressure cleaning",
  "Property maintenance support"
];

const ndisCategories = [
  {
    title: "Assistance with Daily Living",
    description: "Help with household tasks to maintain a clean and safe living environment."
  },
  {
    title: "Home Maintenance",
    description: "Regular property upkeep including gutters, windows, and outdoor areas."
  },
  {
    title: "Improved Daily Living",
    description: "Support to help you live more independently in your own home."
  }
];

export default function NDISPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ndisNumber: "",
    address: "",
    planManager: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'NDIS Page'
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Clean Side by Side Layout */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Photos/new_photos/solar_panel_new.jpg"
                  alt="NDIS Cleaning Services"
                  width={700}
                  height={500}
                  className="object-cover w-full h-[500px]"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <p className="text-[#FFC107] font-semibold mb-3">JH Shoreline</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4 leading-tight">
                Professional <span className="text-[#0047AB]">NDIS Cleaning</span> Services
              </h1>
              <p className="text-gray-600 mb-8 leading-relaxed">
                JH Shoreline Is A Registered NDIS Provider Offering Professional Cleaning And Property Maintenance 
                Services In Perth. Our Experienced Team Helps You Maintain A Clean, Safe, And Comfortable Home 
                With Services Covered Under Your NDIS Plan.
              </p>

              {/* Features List */}
              <div className="space-y-6 mb-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <feature.icon className="w-7 h-7 text-[#0a1628]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a1628] mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="#contact-form">
                  <Button className="bg-[#0047AB] hover:bg-[#003d8f] text-white font-bold py-4 px-8 rounded-lg text-base">
                    GET AN ESTIMATE
                  </Button>
                </a>
                <a href="tel:0413213689">
                  <Button className="bg-[#0a1628] hover:bg-[#1a2d4d] text-white font-bold py-4 px-8 rounded-lg text-base">
                    CALL NOW 0413 213 689
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NDIS Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              NDIS Support <span className="text-[#FFC107]">Categories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our services may be funded under various NDIS support categories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ndisCategories.map((category) => (
              <div key={category.title} className="bg-gradient-to-br from-[#0047AB] to-[#0a1628] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#FFC107] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-[#0a1628]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-gray-300">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Covered Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Photos/new_photos/carpet_new.png"
                  alt="NDIS Services"
                  width={600}
                  height={450}
                  className="object-cover w-full h-[400px]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0047AB] rounded-2xl -z-10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#FFC107] font-semibold mb-3">NDIS Registered Provider</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
                Services Available for <span className="text-[#0047AB]">NDIS Participants</span>
              </h2>
              <p className="text-gray-600 mb-8">
                We offer a comprehensive range of cleaning and property maintenance services 
                that can be included in your NDIS plan. Our team works with you and your support 
                coordinator to ensure you receive the services you need.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {includedServices.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#FFC107] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#0a1628]" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#FFC107] font-semibold mb-3">Simple Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Getting Started with NDIS Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We make it easy to access our services through your NDIS plan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Contact Us", desc: "Reach out with your NDIS details and requirements" },
              { step: "2", title: "Plan Review", desc: "We work with you or your plan manager to confirm funding" },
              { step: "3", title: "Service Agreement", desc: "We create a tailored service agreement" },
              { step: "4", title: "Regular Service", desc: "Enjoy reliable, quality cleaning services" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-[#FFC107] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#0a1628]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Request <span className="text-[#0047AB]">NDIS Service</span>
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl shadow-xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a1628] mb-2">Thank You!</h3>
                  <p className="text-gray-600">We've received your request and will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0047AB] focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">NDIS Number</label>
                      <input
                        type="text"
                        value={formData.ndisNumber}
                        onChange={(e) => setFormData({...formData, ndisNumber: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0047AB] focus:border-transparent"
                        placeholder="Your NDIS participant number"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0047AB] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0047AB] focus:border-transparent"
                        placeholder="0400 000 000"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Property Address *</label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0047AB] focus:border-transparent"
                        placeholder="Your property address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Plan Manager (if applicable)</label>
                      <input
                        type="text"
                        value={formData.planManager}
                        onChange={(e) => setFormData({...formData, planManager: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0047AB] focus:border-transparent"
                        placeholder="Plan manager name or company"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0047AB] focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0047AB] focus:border-transparent"
                      placeholder="Tell us about your specific needs, preferred schedule, or any other requirements..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0047AB] hover:bg-[#003d8f] text-white font-bold py-4 rounded-lg text-lg"
                  >
                    {isSubmitting ? "Submitting..." : "Submit NDIS Request"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0047AB]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions About NDIS Services?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our friendly team is here to help you understand how we can support you through the NDIS.
          </p>
          <a href="tel:0413213689">
            <Button className="bg-[#FFC107] hover:bg-[#ffb300] text-[#0a1628] font-bold py-4 px-8 rounded-lg text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Us: 0413 213 689
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
