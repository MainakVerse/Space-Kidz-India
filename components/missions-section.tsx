"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const missions = [
  {
    title: "Mission ShakthiSAT",
    year: "2026",
    description: "World's first all girls mission for advanced lunar surface mapping and resource identification. 12000 girls across 108+ countries are participating in this mission, led by Mission Director, Dr. Srimathy Kesan. This mission aims to inspire and empower the next generation of women in STEM fields. Mission ShakthiSAT resembles a break from traditional chains of patriarchal thinking and paves the way for feminine power in space exploration.\n\nThe mission will focus on high-resolution mapping of the lunar surface, identification of potential resources such as water ice, and studying the lunar environment to support future manned missions. By involving young girls globally, the mission seeks to foster interest in space science and technology among young women.",
    image: "/moon-surface-lunar-exploration.jpg",
  },
  {
    title: "AzaadiSAT",
    year: "2023",
    description: "AzaadiSAT is a 8U CubeSat launched to commemorate 75 years of India's independence. It carries 75 payloads designed and developed by 750 school across India, focusing on environmental monitoring, agricultural assessment, and disaster management. The satellite aims to provide valuable data for various applications while inspiring young minds to pursue careers in space technology and research.\n\nThe mission highlights the importance of youth involvement in space exploration and aims to foster a culture of innovation and scientific inquiry among students. AzaadiSAT represents a significant step towards democratizing access to space and encouraging educational initiatives in the field of space science.",
    image: "/azaadisat.jpg",
  },
  {
    title: "KALAMSAT",
    year: "2017",
    description: "World's lightest satellite built by students of Space Kidz India, rewriting history of Indian Astronomy in golden letters. KALAMSAT is world's lightest satellite, weighing just 64 grams, and was launched aboard the PSLV-C38 mission. The satellite was designed to carry a message of peace and inspiration from the students to space, embodying the vision of former President Dr. A.P.J. Abdul Kalam.\n\nKALAMSAT's mission includes educational outreach, promoting space science among young students, and demonstrating the capabilities of miniaturized satellite technology. The project showcases the potential of student-led initiatives in contributing to space exploration and serves as a beacon of hope and aspiration for future generations.",
    image: "/kalamsat.jpg",
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
                    <div className="space-y-4">
  {mission.description.split("\n\n").map((para, i) => (
    <p
      key={i}
      className="text-lg text-muted-foreground leading-relaxed"
    >
      {para}
    </p>
  ))}
</div>
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
