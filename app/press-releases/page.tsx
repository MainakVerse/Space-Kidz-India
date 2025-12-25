"use client"

import { useState } from "react"
import pressData from "@/data/press-data-complete.json"
import { ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function PressReleasesPage() {
  const categories = ["All", ...Object.keys(pressData)]
  const [activeCategory, setActiveCategory] = useState("All")

  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredData =
    activeCategory === "All"
      ? pressData
      : { [activeCategory]: pressData[activeCategory as keyof typeof pressData] }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#ff6b35]">
          Press & Media
        </h1>
        <p className="mt-3 text-sm sm:text-lg text-white/70 max-w-3xl mx-auto">
          Verified media coverage, achievements, collaborations, and official announcements
        </p>
      </section>

    {/* Category Filters with Collapser */}
<section className="sticky top-16 sm:top-20 z-30 bg-black/90 backdrop-blur border-y border-white/10">
  <div className="container mx-auto px-4 sm:px-6 py-4 space-y-3">

    {/* Collapser Header */}
    <div className="flex items-center justify-between">
      <span className="text-sm text-white/70">
        Filter by Category
      </span>

      <button
        onClick={() => setFiltersOpen((v) => !v)}
        className="text-xs sm:text-sm text-[#ff6b35] hover:underline"
      >
        {filtersOpen ? "Hide filters" : "Show filters"}
      </button>
    </div>

    {/* Filters Grid */}
    {filtersOpen && (
      <div
        className="
          grid gap-2
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          xl:grid-cols-8
        "
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition
              ${
                activeCategory === cat
                  ? "bg-[#ff6b35] text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>
    )}
  </div>
</section>


      {/* Content */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 space-y-16 max-w-7xl">
          {Object.entries(filteredData).map(([category, items]) => (
            <div key={category} className="space-y-6">
              <h2 className="text-xl sm:text-3xl font-bold border-b border-white/10 pb-2">
                {category}
              </h2>

              {/* Cards: 3 per row on desktop */}
              <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {(items as any[]).map((item, index) => (
                  <article
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#ff6b35]/40 transition"
                  >
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-semibold leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-white/60">
                      <span className="truncate max-w-[55%]">
                        {item.source}
                      </span>

                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white"
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read more
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
