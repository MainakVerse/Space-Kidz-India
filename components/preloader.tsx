"use client"

import { useEffect, useState } from "react"

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden'
    
    const timer = setTimeout(() => {
      setLoading(false)
      // Re-enable scrolling
      document.body.style.overflow = 'unset'
      // Force scroll to top again after preloader disappears
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 2500)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!loading) return null

  return (
    <div className="preloader">
      <div className="preloader-logo">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff8555] flex items-center justify-center shadow-2xl shadow-[#ff6b35]/50">
          <div className="text-6xl">🚀</div>
        </div>
      </div>
      <div className="preloader-spinner" />
      <p className="text-[#ff6b35] text-xl font-bold animate-pulse">Loading Space Kidz India...</p>
    </div>
  )
}