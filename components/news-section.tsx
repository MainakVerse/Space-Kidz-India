import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const newsItems = [
  {
    title: "Space Kidz India Successfully Launches Educational Satellite",
    date: "March 15, 2024",
    excerpt:
      "Our team of young engineers successfully launched an educational satellite in collaboration with ISRO, marking a milestone in student-led space missions.",
    image: "/satellite-launch-success-celebration.jpg",
  },
  {
    title: "National Space Workshop Series Announced for 2024",
    date: "March 10, 2024",
    excerpt:
      "Space Kidz India announces a series of workshops across 15 Indian cities to inspire and educate the next generation of space scientists.",
    image: "/students-space-workshop-learning.jpg",
  },
  {
    title: "Partnership with DRDO for Advanced Aerospace Programs",
    date: "March 5, 2024",
    excerpt:
      "New collaboration aims to provide hands-on experience in aerospace engineering and defense technology to aspiring young minds.",
    image: "/aerospace-partnership-handshake.jpg",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 md:py-24 bg-black" id="news">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff6b35] mb-4">Latest News</h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Stay updated with our latest achievements and announcements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsItems.map((news, index) => (
            <article
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#ff6b35] text-sm mb-3">
                  <Calendar size={16} />
                  <time>{news.date}</time>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff6b35] transition-colors">
                  {news.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{news.excerpt}</p>
                <Button variant="link" className="text-[#ff6b35] p-0 h-auto font-semibold group">
                  Read More <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
