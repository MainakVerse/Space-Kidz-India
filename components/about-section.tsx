"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#ff6b35]/10 rounded-full">
              <span className="text-sm font-semibold text-[#ff6b35] uppercase tracking-wide">Our Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Pioneering Aerospace Innovation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Space Kidz India is a leading aerospace research organization dedicated to inspiring and empowering young
              minds to explore the frontiers of space technology. Through hands-on education and cutting-edge satellite
              missions, we're building the future of aerospace innovation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to democratize access to space technology and create a generation of scientists, engineers,
              and innovators who will shape humanity's cosmic future. For over a decade, we've been at the forefront of
              aerospace education, launching numerous successful satellite missions and educational programs that have
              reached thousands of students worldwide.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-[#ff6b35]/20">
              <img src="/satellite-in-orbit-earth-space-technology.jpg" alt="Satellite technology" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ff6b35] rounded-2xl opacity-20 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#22c55e] rounded-2xl opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
