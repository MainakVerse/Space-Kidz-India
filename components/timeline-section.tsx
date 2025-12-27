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
    description:
      "Initial vision and planning for Space Kidz India to revolutionize space education for students.",
    image: "/satellite-launch-pad-with-rocket.jpg",
  },
  {
    year: "2011",
    title: "Foundation",
    description:
      "Space Kidz India was founded with a vision to inspire young minds in space science and technology.",
    image: "/kids-building-model-rocket-workshop.jpg",
  },
  {
    year: "2012",
    title: "First Workshop",
    description:
      "Conducted first hands-on satellite building workshop with 50+ students across Chennai schools.",
    image: "/satellite-in-space-orbit-earth.jpg",
  },
  {
    year: "2013",
    title: "Know Your Cadence",
    description:
      "Went on a global collaborative and student exchange program to learn best practices in space education - pairing with top space agencies like ISRO, NASA and ESA.",
    image: "/space-station-astronauts-working.jpg",
  },
  {
    year: "2014",
    title: "National Recognition",
    description:
      "Received national awards for excellence in space education and student engagement programs.",
    image: "/kids-launching-model-rockets-outdoors.jpg",
  },
  {
    year: "2015",
    title: "International Collaboration",
    description:
      "Partnered with global space agencies for joint research and educational initiatives.",
    image: "/students-working-on-satellite-project.jpg",
  },
  {
    year: "2016",
    title: "Launching Balloon Satellites",
    description:
      "Successfully launched first student-built high-altitude balloon satellites reaching near-space altitudes.",
    image: "/balloon-satellite.jpg",
  },
  {
    year: "2017",
    title: "KalamSat Launch",
    description:
      "World's lightest satellite built by students of Space Kidz India, rewriting history of Indian Astronomy in golden letters.",
    image: "/kalamsat.jpg",
  },
  {
    year: "2018",
    title: "Launched SKISAT",
    description:
      "Achieved milestone by launching SKISAT, the satellite carrying the maximum number of sensors into space.",
    image: "/skisat.jpg",
  },
  {
    year: "2019",
    title: "KalamSat V2",
    description:
      "Upgraded and relaunched KalamSat V2 with enhanced capabilities and student involvement.",
    image: "/kalamsat-v2.jpg",
  },
  {
    year: "2020",
    title: "Virtual Learning",
    description:
      "Launched comprehensive online platform for remote space education during pandemic.",
    image: "/virtualized-space.jpg",
  },
  {
    year: "2021",
    title: "Jatayu Satellite",
    description:
      "Deployed Jatayu 14 and 15, high altitude balloon satellites with advanced telemetry systems.",
    image: "/jatayu.jpg",
  },
  {
    year: "2022",
    title: "SD SAT",
    description:
      "Developed and launched SD SAT, a student-designed 3U Cubesat satellite with advanced communication systems.",
    image: "/3u-cubesat-structure-sd-sat.jpg",
  },
  {
    year: "2023",
    title: "Azaadi SAT",
    description:
      "Celebrated India's 75th Independence with Azaadi SAT, a landmark student satellite project - Satellite built by 750 girl students from 75 schools across India.",
    image: "/azaadisat.jpg",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description:
      "Expanded operations to 15 countries, inspiring 50,000+ students worldwide in space science.",
    image: "/satellite-in-space-orbit-earth.jpg",
  },
  {
    year: "2025",
    title: "Mission ShakthiSAT",
    description:
      "Preparing for Mission ShakthiSAT, an ambitious all-girl-led satellite mission to explore lunar surface phenomena with over 12,000+ girl students involved.",
    image: "/shakthisat.jpg",
  },
]

export function TimelineSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const closeModal = () => setSelectedIndex(null)

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Animated starfield background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-small" />
        <div className="stars-medium" />
        <div className="stars-large" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 mx-auto max-w-7xl text-center mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 mb-4">
          Our Journey
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
          Milestones that shaped Space Kidz India&apos;s mission to inspire the next generation
        </p>
      </div>

      {/* Desktop Timeline (hidden on mobile) */}
      <div className="hidden lg:block relative z-10">
        <div className="mx-auto" style={{ width: "min(90vw, 1400px)" }}>
          <svg
            viewBox="0 0 1400 900"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Path connecting all dots */}
            <path
              d="M 140 150 L 350 150 L 560 150 L 770 150 L 980 150 L 1120 150 L 1120 300 L 980 450 L 770 450 L 560 450 L 350 450 L 140 450 L 140 600 L 350 750 L 560 750 L 770 750 L 980 750"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              className="drop-shadow-lg"
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#fdba74" />
              </linearGradient>
            </defs>

            {/* Dots for each event */}
            {/* Row 1 - Top (2010-2014) */}
            {[140, 350, 560, 770, 980].map((x, i) => (
              <circle
                key={`top-${i}`}
                cx={x}
                cy={150}
                r="12"
                fill="url(#gradient)"
                className="cursor-pointer drop-shadow-lg hover:r-16 transition-all"
                onClick={() => setSelectedIndex(i)}
              />
            ))}

            {/* Middle dot 1 (2015) */}
            <circle
              cx={1120}
              cy={300}
              r="12"
              fill="url(#gradient)"
              className="cursor-pointer drop-shadow-lg hover:r-16 transition-all"
              onClick={() => setSelectedIndex(5)}
            />

            {/* Row 2 - Middle (2016-2020) */}
            {[980, 770, 560, 350, 140].map((x, i) => (
              <circle
                key={`middle-${i}`}
                cx={x}
                cy={450}
                r="12"
                fill="url(#gradient)"
                className="cursor-pointer drop-shadow-lg hover:r-16 transition-all"
                onClick={() => setSelectedIndex(i + 6)}
              />
            ))}

            {/* Middle dot 2 (2021) */}
            <circle
              cx={140}
              cy={600}
              r="12"
              fill="url(#gradient)"
              className="cursor-pointer drop-shadow-lg hover:r-16 transition-all"
              onClick={() => setSelectedIndex(11)}
            />

            {/* Row 3 - Bottom (2022-2025) */}
            {[350, 560, 770, 980].map((x, i) => (
              <circle
                key={`bottom-${i}`}
                cx={x}
                cy={750}
                r="12"
                fill="url(#gradient)"
                className="cursor-pointer drop-shadow-lg hover:r-16 transition-all"
                onClick={() => setSelectedIndex(i + 12)}
              />
            ))}
          </svg>

          {/* Text labels positioned absolutely */}
          <div className="relative" style={{ marginTop: "-900px", height: "900px" }}>
            {/* Row 1 labels - above dots */}
            {events.slice(0, 5).map((event, i) => (
              <button
                key={`label-top-${i}`}
                onClick={() => setSelectedIndex(i)}
                className="absolute group cursor-pointer"
                style={{
                  left: `${[10, 25, 40, 55, 70][i]}%`,
                  top: "15%",
                  transform: "translate(-50%, -100%)",
                }}
              >
                <div className="text-center mb-2">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 mb-1 group-hover:from-orange-400 group-hover:to-orange-200 transition-all">
                    {event.year}
                  </h3>
                  <p className="text-gray-200 text-sm font-semibold group-hover:text-white transition-colors">
                    {event.title}
                  </p>
                </div>
              </button>
            ))}

            {/* 2015 label - right side */}
            <button
              onClick={() => setSelectedIndex(5)}
              className="absolute group cursor-pointer"
              style={{ left: "80%", top: "33%", transform: "translate(20px, -50%)" }}
            >
              <div className="text-left">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 mb-1 group-hover:from-orange-400 group-hover:to-orange-200 transition-all">
                  {events[5].year}
                </h3>
                <p className="text-gray-200 text-sm font-semibold group-hover:text-white transition-colors max-w-[120px]">
                  {events[5].title.split(" ").map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </button>

            {/* Row 2 labels - below dots */}
            {events.slice(6, 11).map((event, i) => (
              <button
                key={`label-middle-${i}`}
                onClick={() => setSelectedIndex(i + 6)}
                className="absolute group cursor-pointer"
                style={{
                  left: `${[70, 55, 40, 25, 10][i]}%`,
                  top: "40%",
                  transform: "translate(-50%, 0%)",
                }}
              >
                <div className="text-center mt-2">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 mb-1 group-hover:from-orange-400 group-hover:to-orange-200 transition-all">
                    {event.year}
                  </h3>
                  <p className="text-gray-200 text-sm font-semibold group-hover:text-white transition-colors">
                    {event.title}
                  </p>
                </div>
              </button>
            ))}

            {/* 2021 label - left side */}
            <button
              onClick={() => setSelectedIndex(11)}
              className="absolute group cursor-pointer"
              style={{ left: "10%", top: "66%", transform: "translate(-120px, -50%)" }}
            >
              <div className="text-right">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 mb-1 group-hover:from-orange-400 group-hover:to-orange-200 transition-all">
                  {events[11].year}
                </h3>
                <p className="text-gray-200 text-sm font-semibold group-hover:text-white transition-colors max-w-[120px] ml-auto">
                  {events[11].title.split(" ").map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </button>

            {/* Row 3 labels - above dots */}
            {events.slice(12, 16).map((event, i) => (
              <button
                key={`label-bottom-${i}`}
                onClick={() => setSelectedIndex(i + 12)}
                className="absolute group cursor-pointer"
                style={{
                  left: `${[25, 40, 55, 70][i]}%`,
                  top: "80%",
                  transform: "translate(-50%, -100%)",
                }}
              >
                <div className="text-center mb-2">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 mb-1 group-hover:from-orange-400 group-hover:to-orange-200 transition-all">
                    {event.year}
                  </h3>
                  <p className="text-gray-200 text-sm font-semibold group-hover:text-white transition-colors">
                    {event.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline (visible only on mobile) */}
      <div className="lg:hidden relative z-10 mx-auto max-w-2xl">
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400 shadow-lg shadow-orange-500/50" />

          {/* Timeline items */}
          {events.map((event, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              {/* Circle on the line */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 shadow-lg shadow-orange-500/50 -translate-x-1/2" />

              {/* Content */}
              <button
                onClick={() => setSelectedIndex(index)}
                className="block w-full text-left pl-6 group"
              >
                <div className="transition-transform hover:scale-105">
                  <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 mb-1 group-hover:from-orange-400 group-hover:to-orange-200 transition-all">
                    {event.year}
                  </h3>
                  <p className="text-gray-200 font-semibold text-sm sm:text-base group-hover:text-white transition-colors">
                    {event.title}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal overlay and centered card display */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-black rounded-2xl shadow-2xl shadow-orange-500/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-orange-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 hover:bg-orange-900/50 transition-colors backdrop-blur-sm border border-orange-500/30"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-orange-400" />
            </button>

            <div className="relative w-full overflow-hidden rounded-t-2xl">
              <div className="relative w-full pt-[56.25%]">
                {/* 16:9 aspect ratio */}
                <Image
                  src={events[selectedIndex].image}
                  alt={events[selectedIndex].title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 mb-2">
                {events[selectedIndex].year}
              </h3>
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                {events[selectedIndex].title}
              </h4>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {events[selectedIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}