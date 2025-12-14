"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const missions = [
  {
    title: "Lunar Exploration Initiative",
    year: "2024",
    description: "Advanced lunar surface mapping and resource identification mission",
    image: "/moon-surface-lunar-exploration.jpg",
  },
  {
    title: "Student Satellite Program",
    year: "2023",
    description: "Empowering students to design, build, and launch their own satellites",
    image: "/small-satellite-cubesat-space.jpg",
  },
  {
    title: "Climate Monitoring Constellation",
    year: "2024",
    description: "Earth observation system for real-time climate and environmental data",
    image: "/earth-from-space-climate-monitoring.jpg",
  },
]

export function MissionsSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = [...prev]
              updated[index] = true
              return updated
            })
          }
        },
        { threshold: 0.2 },
      )
      if (ref) observer.observe(ref)
      return observer
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <section id="missions" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Flagship <span className="text-[#ff6b35]">Missions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pushing the boundaries of space exploration through innovative projects
          </p>
        </div>

        <div className="space-y-12">
          {missions.map((mission, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`transition-all duration-1000 ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <Card className="overflow-hidden border-border bg-card">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                  <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <img
                      src={mission.image || "/placeholder.svg"}
                      alt={mission.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 px-4 py-2 bg-[#ff6b35] text-white font-bold rounded-lg">
                      {mission.year}
                    </div>
                  </div>
                  <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-card-foreground mb-4 text-balance">{mission.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{mission.description}</p>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
