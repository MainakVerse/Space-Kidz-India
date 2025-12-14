import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PressReleasesPage() {
  const pressReleases = [
    {
      date: "February 28, 2024",
      title: "Space Kidz India Successfully Launches 10th Student Satellite",
      excerpt:
        "In a historic achievement, Space Kidz India has successfully launched its 10th student-built satellite, marking another milestone in democratizing space technology education across the nation.",
      image: "/satellite-launch-successful-rocket.jpg",
    },
    {
      date: "January 15, 2024",
      title: "Partnership with ISRO for Educational Initiatives",
      excerpt:
        "Space Kidz India announces a landmark partnership with the Indian Space Research Organisation (ISRO) to expand space education programs across 1000 schools nationwide.",
      image: "/isro-partnership-agreement-signing.jpg",
    },
    {
      date: "December 10, 2023",
      title: "Record-Breaking 500 Students Participate in National Space Camp",
      excerpt:
        "The annual National Space Camp organized by Space Kidz India witnessed unprecedented participation with over 500 students from 25 states engaging in advanced aerospace workshops.",
      image: "/students-space-camp-activities-group.jpg",
    },
    {
      date: "November 5, 2023",
      title: "International Recognition: UNESCO Award for Space Education",
      excerpt:
        "Space Kidz India receives prestigious UNESCO award for outstanding contribution to STEM education and inspiring young minds in space science and technology.",
      image: "/unesco-award-ceremony-trophy.jpg",
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
              Press Releases
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 text-balance leading-relaxed">
              Latest news and announcements from Space Kidz India
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases Grid */}
      <section className="py-12 sm:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
            {pressReleases.map((release, index) => (
              <article
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-[#ff6b35]/50 transition-all hover:shadow-xl hover:shadow-[#ff6b35]/10"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="relative h-64 md:h-auto md:col-span-2">
                    <img
                      src={release.image || "/placeholder.svg"}
                      alt={release.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 md:col-span-3 flex flex-col justify-between">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-[#ff6b35]">
                        <Calendar className="w-4 h-4" />
                        {release.date}
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                        {release.title}
                      </h2>
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed">{release.excerpt}</p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white w-full sm:w-auto mt-6 font-semibold bg-transparent"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-black to-[#ff6b35]/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#ff6b35]/20 to-transparent p-8 sm:p-12 rounded-xl border-2 border-[#ff6b35]/30 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Media Inquiries</h2>
            <p className="text-base sm:text-lg text-white/80 mb-6">
              For press inquiries, interviews, or more information, please contact our media relations team
            </p>
            <div className="space-y-2 text-white/80 mb-8">
              <p className="text-base sm:text-lg">Email: press@spacekidzindia.com</p>
              <p className="text-base sm:text-lg">Phone: +91 98765 43210</p>
            </div>
            <Button className="bg-[#ff6b35] hover:bg-[#ff8555] text-white px-8 font-semibold">
              Contact Media Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
