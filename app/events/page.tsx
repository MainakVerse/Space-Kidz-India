import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "National Space Science Exhibition",
      date: "March 25, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Chennai Trade Centre, Chennai",
      attendees: "2000+ Expected",
      description:
        "A grand exhibition showcasing student projects, satellite models, and interactive space science demonstrations",
      type: "Exhibition",
      image: "/space-science-exhibition-displays-students.jpg",
    },
    {
      title: "Rocket Launch Demonstration",
      date: "April 10, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Space Kidz India Launch Facility",
      attendees: "500 Students",
      description: "Witness live rocket launches and learn about propulsion systems from our expert team",
      type: "Demo",
      image: "/model-rocket-launch-demonstration-field.jpg",
    },
    {
      title: "Space Career Fair",
      date: "May 5, 2024",
      time: "11:00 AM - 5:00 PM",
      location: "Bangalore International Centre",
      attendees: "1500+ Students",
      description: "Connect with aerospace industry professionals and explore career opportunities in space technology",
      type: "Career Fair",
      image: "/career-fair-aerospace-industry-booths.jpg",
    },
  ]

  const pastEvents = [
    {
      title: "Annual Space Summit 2023",
      date: "December 2023",
      attendees: "3000+",
      image: "/space-summit-conference-audience.jpg",
    },
    {
      title: "International Satellite Workshop",
      date: "October 2023",
      attendees: "800+",
      image: "/international-satellite-workshop-participants.jpg",
    },
    {
      title: "Space Camp Summer Edition",
      date: "July 2023",
      attendees: "1200+",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ff6b35] text-balance">
              Events
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 text-balance leading-relaxed">
              Join us for exciting space science events and community gatherings
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 sm:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff6b35] mb-10 sm:mb-16">
              Upcoming Events
            </h2>
            <div className="space-y-8 sm:space-y-12">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-[#ff6b35]/50 transition-all hover:shadow-xl hover:shadow-[#ff6b35]/10"
                >
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="relative h-64 md:h-auto md:col-span-2">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#ff6b35] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                        {event.type}
                      </div>
                    </div>
                    <div className="p-6 sm:p-8 md:col-span-3 flex flex-col justify-between">
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{event.title}</h3>
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed">{event.description}</p>
                        <div className="grid sm:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2 text-white/80">
                            <Calendar className="w-4 h-4 text-[#ff6b35]" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2 text-white/80">
                            <Clock className="w-4 h-4 text-[#ff6b35]" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2 text-white/80">
                            <MapPin className="w-4 h-4 text-[#ff6b35]" />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-2 text-white/80">
                            <Users className="w-4 h-4 text-[#ff6b35]" />
                            {event.attendees}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <Button className="bg-[#ff6b35] hover:bg-[#ff8555] text-white flex-1 font-semibold">
                          Register Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button
                          variant="outline"
                          className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white flex-1 font-semibold bg-transparent"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-black to-[#ff6b35]/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff6b35] mb-10 sm:mb-16">Past Events</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-[#ff6b35]/50 transition-all hover:shadow-xl hover:shadow-[#ff6b35]/10"
                >
                  <div className="relative h-48 sm:h-56">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{event.title}</h3>
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <span>{event.date}</span>
                      <span className="text-[#ff6b35] font-semibold">{event.attendees} Attendees</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
