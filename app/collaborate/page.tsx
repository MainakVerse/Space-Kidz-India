"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Users, Rocket, Lightbulb } from "lucide-react"
import { useState } from "react"

export default function CollaboratePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    collaborationType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Let's <span className="text-[#ff6b35]">Collaborate</span> & Build the Future
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed text-balance">
            Partner with Space Kidz India to inspire the next generation of space explorers and innovators
          </p>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ff6b35]">
            Collaboration Opportunities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#ff6b35]/50 transition-all">
              <Users className="w-12 h-12 text-[#ff6b35] mb-4" />
              <h3 className="text-xl font-bold mb-3">Corporate Partnerships</h3>
              <p className="text-white/70 leading-relaxed">
                Join hands with us to support space education programs, workshops, and satellite missions through CSR
                initiatives
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#ff6b35]/50 transition-all">
              <Rocket className="w-12 h-12 text-[#ff6b35] mb-4" />
              <h3 className="text-xl font-bold mb-3">Research Collaboration</h3>
              <p className="text-white/70 leading-relaxed">
                Collaborate on cutting-edge aerospace research, satellite technology, and space science projects
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#ff6b35]/50 transition-all">
              <Lightbulb className="w-12 h-12 text-[#ff6b35] mb-4" />
              <h3 className="text-xl font-bold mb-3">Educational Institutions</h3>
              <p className="text-white/70 leading-relaxed">
                Partner with us to bring space education programs, workshops, and hands-on learning to your students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-[#ff6b35]">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#ff6b35] transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#ff6b35] transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#ff6b35] transition-colors text-white"
                    placeholder="Your Company/Institution"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#ff6b35] transition-colors text-white"
                    placeholder="+91 1234567890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="collaborationType" className="block text-sm font-medium mb-2">
                  Type of Collaboration *
                </label>
                <select
                  id="collaborationType"
                  name="collaborationType"
                  required
                  value={formData.collaborationType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#ff6b35] transition-colors text-white"
                >
                  <option value="" className="bg-[#1f1f1f] text-gray-400">Select collaboration type</option>
                  <option value="corporate" className="bg-[#1f1f1f] text-gray-400">Corporate Partnership</option>
                  <option value="research" className="bg-[#1f1f1f] text-gray-400">Research Collaboration</option>
                  <option value="education" className="bg-[#1f1f1f] text-gray-400">Educational Institution</option>
                  <option value="sponsorship" className="bg-[#1f1f1f] text-gray-400">Sponsorship</option>
                  <option value="other" className="bg-[#1f1f1f] text-gray-400">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#ff6b35] transition-colors text-white resize-none"
                  placeholder="Tell us about your collaboration ideas..."
                />
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto bg-[#ff6b35] hover:bg-[#ff8555] text-white font-semibold px-8 py-6 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#ff6b35]">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <Mail className="w-8 h-8 text-[#ff6b35] flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:support@spacekidzindia.com"
                  className="text-white/70 hover:text-[#ff6b35] transition-colors"
                >
                  support@spacekidzindia.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-8 h-8 text-[#ff6b35] flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+911234567890" className="text-white/70 hover:text-[#ff6b35] transition-colors">
                  +91 81224 12261
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-[#ff6b35] flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-white/70">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
