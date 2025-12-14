import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "Space Kidz India Successfully Launches Student-Built Satellite",
    date: "March 15, 2024",
    excerpt:
      "In a historic achievement, Space Kidz India successfully launched a student-built satellite into orbit, marking a significant milestone in space education.",
    image: "/satellite-launch-success.jpg",
    category: "Launch",
  },
  {
    id: 2,
    title: "1000+ Schools Join Space Education Program",
    date: "March 10, 2024",
    excerpt:
      "Over 1000 schools across India have enrolled in our comprehensive space education program, bringing astronomy and rocket science to classrooms nationwide.",
    image: "/students-classroom-space-education.jpg",
    category: "Education",
  },
  {
    id: 3,
    title: "International Space Workshop Concludes Successfully",
    date: "February 28, 2024",
    excerpt:
      "The annual international space workshop brought together young space enthusiasts from 15 countries for collaborative projects and knowledge exchange.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Workshop",
  },
  {
    id: 4,
    title: "New CubeSat Development Program Announced",
    date: "February 15, 2024",
    excerpt:
      "Space Kidz India announces a new CubeSat development program for high school students, providing hands-on experience in satellite engineering.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Program",
  },
  {
    id: 5,
    title: "Partnership with ISRO Expands Educational Initiatives",
    date: "January 30, 2024",
    excerpt:
      "Enhanced collaboration with ISRO will bring more resources and opportunities for students interested in space science and technology.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Partnership",
  },
  {
    id: 6,
    title: "Student Team Wins National Robotics Competition",
    date: "January 20, 2024",
    excerpt:
      "Our talented students secured first place in the national space robotics competition with their innovative Mars rover design.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Achievement",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff6b35] mb-4">Latest News</h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Stay updated with the latest achievements, events, and milestones from Space Kidz India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-[#ff6b35]/50 transition-all group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-[#ff6b35] text-white text-xs px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                    <Calendar size={16} />
                    <time>{article.date}</time>
                  </div>
                  <h2 className="text-white font-semibold text-xl mb-3 group-hover:text-[#ff6b35] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-white/80 mb-4">{article.excerpt}</p>
                  <button className="text-[#ff6b35] hover:text-[#ff8555] font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
