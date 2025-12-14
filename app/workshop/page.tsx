import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WorkshopPage() {
  const workshops = [
    {
      title: "Rocket Science Basics",
      date: "March 15-17, 2024",
      location: "Chennai, Tamil Nadu",
      duration: "3 Days",
      participants: "30 Students",
      description: "Learn the fundamentals of rocket propulsion, aerodynamics, and launch your own model rockets",
      image: "/students-building-model-rockets-workshop.jpg",
    },
    {
      title: "Satellite Building Workshop",
      date: "April 5-7, 2024",
      location: "Bangalore, Karnataka",
      duration: "3 Days",
      participants: "25 Students",
      description: "Design and build functional miniature satellites with real communication systems",
      image: "/students-building-cube-satellite-technology.jpg",
    },
    {
      title: "Space Mission Planning",
      date: "May 20-22, 2024",
      location: "Mumbai, Maharashtra",
      duration: "3 Days",
      participants: "35 Students",
      description: "Plan complete space missions from concept to execution using professional tools",
      image: "/students-planning-space-mission-computers.jpg",
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
              Workshops
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 text-balance leading-relaxed">
              Hands-on learning experiences that bring space science to life
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-12 sm:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff6b35] text-center mb-10 sm:mb-16">
              Upcoming Workshops
            </h2>
            <div className="space-y-8 sm:space-y-12">
              {workshops.map((workshop, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-[#ff6b35]/50 transition-all hover:shadow-xl hover:shadow-[#ff6b35]/10"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={workshop.image || "/placeholder.svg"}
                        alt={workshop.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col justify-between">
                      <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{workshop.title}</h3>
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed">{workshop.description}</p>
                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                          <div className="flex items-center gap-2 text-white/80">
                            <Calendar className="w-4 h-4 text-[#ff6b35]" />
                            {workshop.date}
                          </div>
                          <div className="flex items-center gap-2 text-white/80">
                            <MapPin className="w-4 h-4 text-[#ff6b35]" />
                            {workshop.location}
                          </div>
                          <div className="flex items-center gap-2 text-white/80">
                            <Clock className="w-4 h-4 text-[#ff6b35]" />
                            {workshop.duration}
                          </div>
                          <div className="flex items-center gap-2 text-white/80">
                            <Users className="w-4 h-4 text-[#ff6b35]" />
                            {workshop.participants}
                          </div>
                        </div>
                      </div>
                      <Button className="bg-[#ff6b35] hover:bg-[#ff8555] text-white w-full mt-6 font-semibold">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-black to-[#ff6b35]/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff6b35] text-center mb-10 sm:mb-16">
              What You'll Gain
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center space-y-3 sm:space-y-4 p-6 bg-gradient-to-br from-[#ff6b35]/10 to-transparent rounded-xl border border-[#ff6b35]/20">
                <div className="text-4xl sm:text-5xl">🚀</div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Hands-On Experience</h3>
                <p className="text-sm sm:text-base text-white/70">
                  Build real rockets and satellites with expert guidance
                </p>
              </div>
              <div className="text-center space-y-3 sm:space-y-4 p-6 bg-gradient-to-br from-[#ff6b35]/10 to-transparent rounded-xl border border-[#ff6b35]/20">
                <div className="text-4xl sm:text-5xl">📜</div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Certification</h3>
                <p className="text-sm sm:text-base text-white/70">Receive official certificates upon completion</p>
              </div>
              <div className="text-center space-y-3 sm:space-y-4 p-6 bg-gradient-to-br from-[#ff6b35]/10 to-transparent rounded-xl border border-[#ff6b35]/20">
                <div className="text-4xl sm:text-5xl">👥</div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Networking</h3>
                <p className="text-sm sm:text-base text-white/70">Connect with like-minded space enthusiasts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
