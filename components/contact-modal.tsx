"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactModal() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [open, setOpen] = useState(false) // To control modal closing

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 1. Send data to your API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      // 2. Handle API errors
      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      // 3. Success Success
      console.log("✅ Message sent successfully:", data)
      alert("Message sent successfully!")
      
      // Reset form and close modal
      setFormData({ name: "", email: "", phone: "", organization: "", message: "" })
      setOpen(false) 

    } catch (error) {
      console.error("❌ Submission Error:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className="border-white/30 text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 bg-transparent font-semibold w-full sm:w-auto"
        >
          Get In Touch
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black border-[#ff6b35]/30 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#ff6b35]">Get In Touch</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Full Name *
            </Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#ff6b35]"
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#ff6b35]"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#ff6b35]"
              placeholder="+91 XXX XXX XXXX"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organization" className="text-white">
              Organization/Institution
            </Label>
            <Input
              id="organization"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#ff6b35]"
              placeholder="Your school, college or organization"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Message *
            </Label>
            <Textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#ff6b35] resize-none"
              placeholder="Tell us about your inquiry..."
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#ff6b35] hover:bg-[#ff8555] text-white font-semibold text-base py-6 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}