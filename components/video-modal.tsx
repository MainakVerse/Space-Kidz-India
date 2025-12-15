"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  // Lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-white/80 hover:text-white"
          aria-label="Close video"
        >
          <X className="h-6 w-6" />
        </button>

        {/* YouTube Embed */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/wGef22SDArw?autoplay=1&rel=0&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  )
}
