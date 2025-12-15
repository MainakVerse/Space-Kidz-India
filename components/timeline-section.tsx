"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface TimelineEvent {
  year: string
  title: string
  description: string
  image: string
}

const events: TimelineEvent[] = [
  {
    year: "2010",
    title: "Conceptualization",
    description: "Initial vision and planning for Space Kidz India to revolutionize space education for students.",
    image: "/satellite-launch-pad-with-rocket.jpg",
  },
  {
    year: "2011",
    title: "Foundation",
    description: "Space Kidz India was founded with a vision to inspire young minds in space science and technology.",
    image: "/kids-building-model-rocket-workshop.jpg",
  },
  {
    year: "2012",
    title: "First Workshop",
    description: "Conducted first hands-on satellite building workshop with 50+ students across Chennai schools.",
    image: "/satellite-in-space-orbit-earth.jpg",
  },
  {
    year: "2013",
    title: "Know Your Cadence",
    description: "Went on a global collaborative and student exchange program to learn best practices in space education - pairing with top space agencies like ISRO, NASA and ESA.",
    image: "/space-station-astronauts-working.jpg",
  },
  {
    year: "2014",
    title: "National Recognition",
    description: "Received national awards for excellence in space education and student engagement programs.",
    image: "/kids-launching-model-rockets-outdoors.jpg",
  },
  {
    year: "2015",
    title: "International Collaboration",
    description: "Partnered with global space agencies for joint research and educational initiatives.",
    image: "/students-working-on-satellite-project.jpg",
  },
  {
    year: "2016",
    title: "Launching Balloon Satellites",
    description: "Successfully launched first student-built high-altitude balloon satellites reaching near-space altitudes.",
    image: "/balloon-satellite.jpg",
  },
  {
    year: "2017",
    title: "KalamSat Launch",
    description: "World's lightest satellite built by students of Space Kidz India, rewriting history of Indian Astronomy in golden letters.",
    image: "/kalamsat.jpg",
  },
  {
    year: "2018",
    title: "Launched SKISAT",
    description: "Achieved milestone by launching SKISAT, the satellite carrying the maximum number of sensors into space.",
    image: "/skisat.jpg",
  },
  {
    year: "2019",
    title: "KalamSat V2",
    description: "Upgraded and relaunched KalamSat V2 with enhanced capabilities and student involvement.",
    image: "/kalamsat-v2.jpg",
  },
  {
    year: "2020",
    title: "Virtual Learning",
    description: "Launched comprehensive online platform for remote space education during pandemic.",
    image: "/virtualized-space.jpg",
  },
  {
    year: "2021",
    title: "Jatayu Satellite",
    description: "Deployed Jatayu 14 and 15, high altitude balloon satellites with advanced telemetry systems.",
    image: "/jatayu.jpg",
  },
  {
    year: "2022",
    title: "SD SAT",
    description: "Developed and launched SD SAT, a student-designed 3U Cubesat satellite with advanced communication systems.",
    image: "/3u-cubesat-structure-sd-sat.jpg",
  },
  {
    year: "2023",
    title: "Azaadi SAT",
    description: "Celebrated India's 75th Independence with Azaadi SAT, a landmark student satellite project - Satellite built by 750 girl students from 75 schools across India.",
    image: "/azaadisat.jpg",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded operations to 15 countries, inspiring 50,000+ students worldwide in space science.",
    image: "/satellite-in-space-orbit-earth.jpg",
  },
  {
    year: "2025",
    title: "Mission ShakthiSAT",
    description: "Preparing for Mission ShakthiSAT, an ambitious all-girl-led satellite mission to explore lunar surface phenomena with over 12,000+ girl students involved.",
    image: "/shakthisat.jpg",
  },
]

export function TimelineSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const closeModal = () => setSelectedIndex(null)

  return (
    <section className="relative py-12 px-4 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Our Journey</h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Milestones that shaped Space Kidz India's mission to inspire the next generation
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="relative h-20 mb-4">
          <div className="absolute bottom-1/3 left-0 right-0 h-2 bg-primary/20" />
          <div className="absolute bottom-1/3 left-0 right-0 flex justify-between px-4">
            {events.slice(0, 5).map((event, index) => (
              <div key={index} className="relative flex flex-col items-center" onClick={() => setSelectedIndex(index)}>
                <div
                  className={`w-6 h-6 md:w-10 md:h-10 rounded-full border-4 border-primary bg-background cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-primary ${
                    index === 0 ? "scale-125 bg-primary" : ""
                  }`}
                />
                <span className="absolute top-full mt-2 text-xs md:text-sm text-primary font-bold whitespace-nowrap">
                  {event.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-32 mb-4 ml-auto w-24">
          <div className="absolute right-1/2 top-0 bottom-0 w-2 bg-primary/20 transform translate-x-1/2" />
          <div className="absolute right-1/2 top-0 bottom-0 flex items-center justify-center transform translate-x-1/2">
            {events.slice(5, 6).map((event, index) => (
              <div key={index + 5} className="relative flex items-center" onClick={() => setSelectedIndex(index + 5)}>
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border-4 border-primary bg-background cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-primary" />
                <span className="absolute left-full ml-2 text-xs md:text-sm text-primary font-bold whitespace-nowrap">
                  {event.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-20 mb-4">
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-primary/20 transform -translate-y-1/2" />
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4 flex-row-reverse">
            {events.slice(6, 11).map((event, index) => (
              <div
                key={index + 6}
                className="relative flex flex-col items-center"
                onClick={() => setSelectedIndex(index + 6)}
              >
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border-4 border-primary bg-background cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-primary" />
                <span className="absolute top-full mt-2 text-xs md:text-sm text-primary font-bold whitespace-nowrap">
                  {event.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-32 mb-4 w-24">
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-primary/20 transform -translate-x-1/2" />
          <div className="absolute left-1/2 top-0 bottom-0 flex items-center justify-center transform -translate-x-1/2">
            {events.slice(11, 12).map((event, index) => (
              <div key={index + 11} className="relative flex items-center" onClick={() => setSelectedIndex(index + 11)}>
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border-4 border-primary bg-background cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-primary" />
                <span className="absolute right-full mr-2 text-xs md:text-sm text-primary font-bold whitespace-nowrap">
                  {event.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-20">
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-primary/20 transform -translate-y-1/2" />
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
            {events.slice(12, 16).map((event, index) => (
              <div
                key={index + 12}
                className="relative flex flex-col items-center"
                onClick={() => setSelectedIndex(index + 12)}
              >
                <div
                  className={`w-6 h-6 md:w-10 md:h-10 rounded-full border-4 border-primary cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-primary ${
                    index === 3 ? "scale-125 bg-primary" : "bg-background"
                  }`}
                />
                <span className="absolute top-full mt-2 text-xs md:text-sm text-primary font-bold whitespace-nowrap">
                  {event.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal overlay and centered card display */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-lg mx-4 bg-card border-2 border-primary rounded-lg shadow-2xl p-6 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
            >
              
            </button>
            <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden">
              <Image
                src={events[selectedIndex].image || "/placeholder.svg"}
                alt={events[selectedIndex].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-primary font-bold text-xl mb-2">{events[selectedIndex].year}</div>
            <h3 className="font-bold text-foreground text-2xl mb-3">{events[selectedIndex].title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed">{events[selectedIndex].description}</p>
          </div>
        </div>
      )}
    </section>
  )
}
