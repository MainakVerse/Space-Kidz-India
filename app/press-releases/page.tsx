"use client"

import type React from "react" // Added for type safety
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"

export function ContactModal() {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // State for success/error messages
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

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
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Success State
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent.'
        })
        
        // Clear form
        setFormData({ name: "", email: "", phone: "", organization: "", message: "" })
        
        // Auto-close modal after 2 seconds
        setTimeout(() => {
          setOpen(false)
          setSubmitStatus({ type: null, message: '' })
        }, 2000)

      } else {
        // API Error
        throw new Error(data.error || 'Failed to send message.')
      }
    } catch (error) {
      // Network/Other Error
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      })
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
          {/* Added Description for Accessibility (Screen Readers) */}
          <DialogDescription className="text-white/60">
            Fill out the form below and we will get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          
          {/* Status Message Area */}
          {submitStatus.type && (
            <div className={`p-3 rounded-md flex items-center gap-2 text-sm ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}>
              {submitStatus.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
              {submitStatus.message}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Full Name *</Label>
            <Input
              id="name"
              required
              disabled={isSubmitting}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#ff6b35]"
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              disabled={isSubmitting}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#ff6b35]"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              disabled={isSubmitting}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#ff6b35]"
              placeholder="+91 XXX XXX XXXX"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization" className="text-white">Organization/Institution</Label>
            <Input
              id="organization"
              disabled={isSubmitting}
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#ff6b35]"
              placeholder="Your school, college or organization"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">Message *</Label>
            <Textarea
              id="message"
              required
              rows={5}
              disabled={isSubmitting}
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
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}