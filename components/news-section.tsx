"use client"

import { useState } from "react"
import { Calendar, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import newsDetails from "@/data/newsDetails.json"

const newsItems = [
  {
    title: "Space Kidz India makes history with largest feminine satellite mission",
    date: "March 15, 2026",
    excerpt:
      "Space Kidz India marks a historical milestone with the execution of ShakthiSat, the first satellite designed and built entirely by women ambassadors across the world.",
    image: "/satellite-launch-success-celebration.jpg",
  },
  {
    title: "AzaadiSAT Makes Waves By Celebrating 75 Years of Independence",
    date: "March 10, 2024",
    excerpt:
      "Space Kidz India announces a satellite launch with a massive program across 75 Indian schools to celebrate 75 years of Independence. This initiative aims to foster a spirit of partriotism.",
    image: "/students-space-workshop-learning.jpg",
  },
  {
    title: "Young Scientist India partners makes space for Scientific Temperament",
    date: "March 5, 2025",
    excerpt:
      "New collaboration aims to provide hands-on experience in aerospace engineering and defense technology to aspiring young minds.",
    image: "/aerospace-partnership-handshake.jpg",
  },
]

export function NewsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const activeNews = activeIndex !== null ? newsDetails[activeIndex] : null

  return (
    <section className="py-16 md:py-24 bg-black" id="news">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff6b35] mb-4">
            Latest News
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Stay updated with our latest achievements and announcements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <article
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {news.excerpt}
                </p>

                <Button
                  variant="link"
                  className="text-[#ff6b35] p-0 font-semibold"
                  onClick={() => setActiveIndex(index)}
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeNews && (
  <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center">
    <div
      className="
        bg-[#0b0b0b]
        w-full sm:max-w-3xl
        h-[92vh] sm:h-auto
        sm:max-h-[90vh]
        rounded-t-2xl sm:rounded-2xl
        overflow-hidden
        flex flex-col
        relative
      "
    >
      {/* Close Button */}
      <button
        onClick={() => setActiveIndex(null)}
        className="absolute top-4 right-4 z-10 text-white/70 hover:text-white"
      >
        <X size={22} />
      </button>

      {/* Image Banner */}
      <div className="flex-shrink-0">
        <img
          src={activeNews.image}
          alt={activeNews.title}
          className="w-full h-48 sm:h-56 object-cover"
        />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
          {activeNews.title}
        </h3>

        {activeNews.content.map((para, i) => (
          <p
            key={i}
            className="text-white/70 text-sm sm:text-base leading-relaxed mb-4"
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  </div>
)}

    </section>
  )
}
