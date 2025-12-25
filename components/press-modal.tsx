"use client"

import { X, ExternalLink } from "lucide-react"

interface PressModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  link: string
}

export default function PressModal({
  isOpen,
  onClose,
  title,
  link,
}: PressModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur flex items-center justify-center px-4">
      <div className="bg-black border border-white/20 rounded-xl w-full max-w-6xl h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <h3 className="text-sm sm:text-base font-semibold truncate">
            {title}
          </h3>

          <div className="flex items-center gap-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="text-white/60 hover:text-white"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Iframe */}
        <div className="flex-1 bg-black">
          <iframe
            src={link}
            title={title}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Fallback */}
        <div className="px-4 py-2 text-xs text-white/50 border-t border-white/10 text-center">
          If the page does not load,{" "}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff6b35] underline"
          >
            open it in a new tab
          </a>
          .
        </div>
      </div>
    </div>
  )
}
