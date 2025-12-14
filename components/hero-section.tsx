"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "./contact-modal"
import { SpaceKidzIndiaParticles } from "./space-kidz-india-particles"

const subheaderTexts = [
  "Inspiring Young Minds to Reach for the Stars",
  "Building India's Future Space Scientists and Engineers",
  "Making Space Technology Accessible to Every Student",
]

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % subheaderTexts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div ref={parallaxRef} className="absolute inset-0 w-full h-[120vh] transition-transform duration-100 ease-out">
       <div className="w-full h-full">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover opacity-60"
  >
    <source src="/hero-background-dark.mp4" type="video/mp4" />
   
    {/* Fallback image if video doesn't load */}
    <img
      src="/hero-background-dark.jpg"
      alt="Space background"
      className="w-full h-full object-cover"
    />
  </video>
</div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full">
          <SpaceKidzIndiaParticles />
        </div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight opacity-0 pointer-events-none">
              <span className="text-[#ff6b35]">Space</span>
              <span className="text-white"> Kidz</span>
              <span className="text-[#22c55e]"> India</span>
            </h1>
            <div className="relative h-16 sm:h-20 flex items-center justify-center mt-32 sm:mt-40">
              <p
                key={currentTextIndex}
                className="text-lg sm:text-xl md:text-2xl text-white/90 text-balance max-w-2xl mx-auto leading-relaxed px-4 blink-text font-medium"
              >
                {subheaderTexts[currentTextIndex]}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-4 pointer-events-auto">
              <Button
                size="lg"
                className="bg-[#ff6b35] hover:bg-[#ff8555] text-white text-base sm:text-lg px-6 sm:px-8 font-semibold w-full sm:w-auto"
              >
                Explore Our Missions
              </Button>
              <ContactModal />
            </div>
          </div>
        </div>
      </div>

     
    </section>
  )
}
