import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const partners = [
  {
    name: "ISRO",
    logo: "/isro-logo.jpg",
    description: "Indian Space Research Organisation - Our primary collaborator in satellite missions",
  },
  {
    name: "NASA",
    logo: "/nasa-logo.png",
    description: "National Aeronautics and Space Administration - International space collaboration",
  },
  {
    name: "IIT Madras",
    logo: "/iit-madras-logo.jpg",
    description: "Indian Institute of Technology Madras - Research and development partner",
  },
  {
    name: "DRDO",
    logo: "/drdo-logo.jpg",
    description: "Defence Research and Development Organisation - Technology collaboration",
  },
  {
    name: "Space Foundation",
    logo: "/space-foundation-logo.png",
    description: "Global space education and awareness partner",
  },
  {
    name: "CBSE",
    logo: "/cbse-logo.jpg",
    description: "Central Board of Secondary Education - Educational curriculum integration",
  },
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff6b35] mb-4">Our Partners</h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Collaborating with leading space agencies, research institutions, and educational organizations to inspire
              the next generation of space scientists
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-[#ff6b35]/50 transition-all"
              >
                <div className="bg-white rounded-lg p-4 mb-4 flex items-center justify-center h-32">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-[#ff6b35] font-semibold text-xl mb-2">{partner.name}</h3>
                <p className="text-white/80">{partner.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-[#ff6b35] mb-6">Become a Partner</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join us in our mission to make space education accessible to every child. Partner with Space Kidz India to
              create the next generation of space enthusiasts and innovators.
            </p>
            <button className="bg-[#ff6b35] hover:bg-[#ff8555] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us for Partnership
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
