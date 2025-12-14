"use client"

import { Rocket, Satellite, GraduationCap, Radio } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const capabilities = [
  {
    icon: Rocket,
    title: "Launch Operations",
    description: "Comprehensive launch vehicle integration and mission planning services",
  },
  {
    icon: Satellite,
    title: "Satellite Development",
    description: "Design and manufacturing of small satellites and payloads",
  },
  {
    icon: GraduationCap,
    title: "Space Education",
    description: "Training programs and workshops for students and professionals",
  },
  {
    icon: Radio,
    title: "Ground Stations",
    description: "Advanced tracking and telemetry systems for mission control",
  },
]

export function CapabilitiesSection() {
  return (
    <section id="technology" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Core <span className="text-[#ff6b35]">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive aerospace solutions powered by innovation and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-[#ff6b35] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6b35]/10 hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center group-hover:bg-[#ff6b35] transition-colors">
                  <capability.icon className="w-6 h-6 text-[#ff6b35] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
