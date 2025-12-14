import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, Rocket, Globe, Microscope, Star, Satellite } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SpaceEducationPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ff6b35] text-balance">
              Space Education
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 text-balance leading-relaxed">
              Inspiring young minds through comprehensive space science and technology programs
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12 sm:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff6b35] text-center mb-10 sm:mb-16">
              Our Education Programs
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#ff6b35]/50 transition-all hover:shadow-xl hover:shadow-[#ff6b35]/10">
                <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff6b35] mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Curriculum Design</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
                  Age-appropriate space science curriculum integrated with national educational standards
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white w-full bg-transparent"
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#ff6b35]/50 transition-all hover:shadow-xl hover:shadow-[#ff6b35]/10">
                <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff6b35] mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Practical Training</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
                  Hands-on experience with rocket building, satellite design, and space mission planning
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white w-full bg-transparent"
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#ff6b35]/50 transition-all hover:shadow-xl hover:shadow-[#ff6b35]/10">
                <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff6b35] mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Online Courses</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
                  Interactive digital learning modules accessible from anywhere in the world
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white w-full bg-transparent"
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#ff6b35]/50 transition-all hover:shadow-xl hover:shadow-[#ff6b35]/10">
                <Microscope className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff6b35] mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Research Projects</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
                  Student-led research initiatives in space science and aerospace engineering
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white w-full bg-transparent"
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#ff6b35]/50 transition-all hover:shadow-xl hover:shadow-[#ff6b35]/10">
                <Star className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff6b35] mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Astronomy Classes</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
                  Telescopic observations, celestial navigation, and understanding the cosmos
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white w-full bg-transparent"
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#ff6b35]/50 transition-all hover:shadow-xl hover:shadow-[#ff6b35]/10">
                <Satellite className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff6b35] mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Satellite Programs</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
                  Learn to build, program, and launch your own miniature satellites
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white w-full bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-black to-[#ff6b35]/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff6b35] text-center mb-10 sm:mb-16">
              Programs by Age Group
            </h2>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-[#ff6b35]/20 to-transparent p-8 rounded-xl border-2 border-[#ff6b35]/30">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ages 8-12</h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                  Introduction to space science, basic rocket principles, and astronomy fundamentals through fun and
                  engaging activities
                </p>
                <Button className="bg-[#ff6b35] hover:bg-[#ff8555] text-white w-full font-semibold">Enroll Now</Button>
              </div>
              <div className="bg-gradient-to-br from-[#ff6b35]/20 to-transparent p-8 rounded-xl border-2 border-[#ff6b35]/30">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ages 13-16</h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                  Advanced concepts in orbital mechanics, satellite technology, and hands-on engineering projects
                </p>
                <Button className="bg-[#ff6b35] hover:bg-[#ff8555] text-white w-full font-semibold">Enroll Now</Button>
              </div>
              <div className="bg-gradient-to-br from-[#ff6b35]/20 to-transparent p-8 rounded-xl border-2 border-[#ff6b35]/30">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ages 17+</h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                  Professional-level training in aerospace engineering, mission design, and space technology research
                </p>
                <Button className="bg-[#ff6b35] hover:bg-[#ff8555] text-white w-full font-semibold">Enroll Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
