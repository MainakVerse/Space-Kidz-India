"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Clock, Users, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const upcomingEvents = [
    {
      title: "Mission ShakthiSAT",
      date: "March 25, 2026",
      time: "10:00 AM - 6:00 PM",
      location: "Sriharikota Launch Center",
      attendees: "200000+ Expected",
      description:
        "ShakthiSAT, driven by the burning desire to empower little girls globally through the awe-inspiring realm of space exploration, plans the participation of 12000 courageous girls from every corner of the globe, representing 108 diverse nations. ",
      type: "Satellite Launch",
      image: "/mission-shakthisat-launch.jpg",
    },
  ]

  const pastEvents = [
    {
      slug: "young-scientists-india-2025",
      title: "Young Scientists India",
      date: "June 2025",
      attendees: "30000+",
      image: "/space-summit-conference-audience.jpg",
      description:
        "A nationwide initiative inspiring young minds through hands-on space science programs.",
    },
    {
      slug: "azaadisat-launch-2024",
      title: "AzaadiSAT Launch",
      date: "October 2024",
      attendees: "18000+",
      image: "/international-satellite-workshop-participants.jpg",
      description:
        "A historic student-built satellite launch celebrating innovation and unity.",
    },
    {
      slug: "balloonsat-workshop-2023",
      title: "BalloonSAT Workshop",
      date: "July 2023",
      attendees: "12000+",
      image: "/balloon-sate-workshop-group-photo.jpg",
      description:
        "Students designed, launched, and analyzed near-space balloon payloads.",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert("Registration submitted!")
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-[#ff6b35]">
            Events
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Join us for exciting space science events and community gatherings
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#ff6b35] mb-12">
            Upcoming Events
          </h2>

          <div className="space-y-12">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-[#ff6b35]/50 transition"
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-5">
                  <div className="relative lg:col-span-2 h-72 md:h-96 lg:h-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 right-4 bg-[#ff6b35] px-3 py-1 text-xs font-bold rounded-full">
                      {event.type}
                    </span>
                  </div>

                  <div className="p-6 md:p-8 lg:col-span-3 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {event.title}
                      </h3>
                      <p className="text-white/70 mb-6 text-sm md:text-base">
                        {event.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-white/80">
                          <Calendar className="w-4 h-4 text-[#ff6b35] flex-shrink-0" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                          <Clock className="w-4 h-4 text-[#ff6b35] flex-shrink-0" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                          <MapPin className="w-4 h-4 text-[#ff6b35] flex-shrink-0" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                          <Users className="w-4 h-4 text-[#ff6b35] flex-shrink-0" />
                          {event.attendees}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <Button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white font-semibold"
                      >
                        Register Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Link
                        href="https://shakthisat.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="w-full border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35]/10"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gradient-to-b from-black to-[#ff6b35]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#ff6b35] mb-12">
            Past Events
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/events/past/${event.slug}`}
                className="group"
              >
                <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-[#ff6b35]/50 transition hover:shadow-lg">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#ff6b35]">
                      {event.title}
                    </h3>

                    <p className="text-sm text-white/70">
                      {event.description}
                    </p>

                    <div className="flex justify-between text-sm text-white/60 pt-2">
                      <span>{event.date}</span>
                      <span className="text-[#ff6b35] font-semibold">
                        {event.attendees}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-black/95 border border-white/20 rounded-xl w-full max-w-md p-6 md:p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl md:text-3xl font-bold text-[#ff6b35] mb-2">
              Register for Mission ShakthiSAT
            </h3>
            <p className="text-white/60 text-sm mb-6">
              Fill in your details to register for this historic event
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-white/80 text-sm mb-1 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 focus:border-[#ff6b35] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="text-white/80 text-sm mb-1 block">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 focus:border-[#ff6b35] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="text-white/80 text-sm mb-1 block">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 focus:border-[#ff6b35] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="text-white/80 text-sm mb-1 block">
                  Organization/School
                </label>
                <input
                  type="text"
                  placeholder="Enter your organization or school name"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 focus:border-[#ff6b35] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="text-white/80 text-sm mb-1 block">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Enter your country"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 focus:border-[#ff6b35] focus:outline-none transition"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white font-semibold py-2.5 mt-2"
              >
                Submit Registration
              </Button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}