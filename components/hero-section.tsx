"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "./contact-modal"
import { VideoModal } from "./video-modal"
import { Play } from "lucide-react"

const subheaderTexts = [
  "Inspiring Young Minds to Reach for the Stars",
  "Building India's Future Space Scientists and Engineers",
  "Making Space Technology Accessible to Every Student",
]

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  /* Background parallax */
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* Rotating subheader text */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % subheaderTexts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 h-[120vh] w-full transition-transform duration-100 ease-out"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/hero-background-dark.mp4" type="video/mp4" />
          <img
            src="/hero-background-dark.jpg"
            alt="Space background"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="mx-auto max-w-4xl space-y-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-wide text-white">
              SPACE KIDZ INDIA
            </h1>

            <div className="relative h-16 sm:h-20 flex items-center justify-center">
              <p
                key={currentTextIndex}
                className="max-w-2xl px-4 text-lg sm:text-xl md:text-2xl font-medium text-white/90 leading-relaxed transition-opacity duration-500"
              >
                {subheaderTexts[currentTextIndex]}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                size="lg"
                onClick={() => setIsVideoOpen(true)}
                className="bg-[#ff6b35] hover:bg-[#ff8555] text-white px-8 text-base sm:text-lg font-semibold flex items-center gap-2"
              >
                <Play className="h-5 w-5 fill-white" />
                Explore Our Missions
              </Button>

              <ContactModal />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </section>
  )
}
