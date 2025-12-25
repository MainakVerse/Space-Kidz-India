"use client"

import { useState } from "react"
import { X, CheckCircle2, XCircle, Loader2 } from "lucide-react"

export function ContactModal() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    console.log('=== FORM SUBMISSION STARTED ===')
    console.log('Form data:', formData)
    
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      console.log('Fetching /api/contact...')
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        })
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          message: "",
        })
        
        setTimeout(() => {
          setOpen(false)
          setSubmitStatus({ type: null, message: '' })
        }, 2000)
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || data.details || 'Failed to submit form.'
        })
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An error occurred'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="border border-white/30 text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-3 bg-transparent font-semibold rounded-md transition-colors"
      >
        Get In Touch
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => !isSubmitting && setOpen(false)}
      />
      
      {/* Modal */}
      <div className="relative bg-black border border-[#ff6b35]/30 text-white max-w-2xl w-full mx-4 rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-[#ff6b35]">Get In Touch</h2>
          <button
            onClick={() => !isSubmitting && setOpen(false)}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitStatus.type && (
            <div
              className={`p-4 rounded-md flex items-center gap-3 mb-6 ${
                submitStatus.type === 'success'
                  ? 'bg-green-500/20 border border-green-500/50 text-green-200'
                  : 'bg-red-500/20 border border-red-500/50 text-red-200'
              }`}
            >
              {submitStatus.type === 'success' ? (
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
              ) : (
                <XCircle className="h-5 w-5 flex-shrink-0" />
              )}
              <span className="text-sm">{submitStatus.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                required
                disabled={isSubmitting}
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white placeholder:text-white/40 rounded-md focus:outline-none focus:border-[#ff6b35] disabled:opacity-50"
                placeholder="Your full name"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                disabled={isSubmitting}
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white placeholder:text-white/40 rounded-md focus:outline-none focus:border-[#ff6b35] disabled:opacity-50"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-white">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                disabled={isSubmitting}
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white placeholder:text-white/40 rounded-md focus:outline-none focus:border-[#ff6b35] disabled:opacity-50"
                placeholder="+91 XXX XXX XXXX"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="organization" className="block text-sm font-medium text-white">
                Organization/Institution
              </label>
              <input
                id="organization"
                type="text"
                disabled={isSubmitting}
                value={formData.organization}
                onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white placeholder:text-white/40 rounded-md focus:outline-none focus:border-[#ff6b35] disabled:opacity-50"
                placeholder="Your school, college or organization"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                disabled={isSubmitting}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white placeholder:text-white/40 rounded-md focus:outline-none focus:border-[#ff6b35] resize-none disabled:opacity-50"
                placeholder="Tell us about your inquiry..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ff6b35] hover:bg-[#ff8555] text-white font-semibold text-base py-3 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}