import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Rocket, Users, Award, Target } from "lucide-react"
import AchievementsSection from "@/components/counter-stats"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ff6b35] text-balance">
              About Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 text-balance leading-relaxed">
              Pioneering aerospace innovation and inspiring the next generation of space explorers
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff6b35]">Our Mission</h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Space Kidz India is dedicated to democratizing space science and making it accessible to young minds
                across the nation. We believe that every child has the potential to reach for the stars, and we provide
                the tools, knowledge, and inspiration to make that dream a reality.
              </p>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Through hands-on workshops, innovative projects, and real satellite launches, we are building a
                generation of scientists, engineers, and space enthusiasts who will shape the future of aerospace
                technology in India.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl shadow-[#ff6b35]/20">
              <img
                src="/students-working-on-satellite-technology-in-classr.jpg"
                alt="Students working on satellite projects"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-black to-[#ff6b35]/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff6b35] text-center mb-10 sm:mb-16">
              Our Core Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#ff6b35]/50 transition-all">
                <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff6b35] mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Pushing boundaries and exploring new frontiers in aerospace technology
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#ff6b35]/50 transition-all">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff6b35] mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Education</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Empowering students with practical knowledge and hands-on experience
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#ff6b35]/50 transition-all">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff6b35] mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Maintaining highest standards in all our projects and initiatives
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#ff6b35]/50 transition-all">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff6b35] mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Impact</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Creating lasting change in India's aerospace landscape
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-20 bg-black">
        <AchievementsSection />
      </section>

      <Footer />
    </div>
  )
}
