"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/satellite-launch-pad-with-rocket.jpg",
    title: "Satellite Launch Mission",
    description: "Our students witnessing a historic satellite launch",
  },
  {
    id: 2,
    src: "/kids-building-model-rocket-workshop.jpg",
    title: "Rocket Workshop",
    description: "Hands-on rocket building workshop for young enthusiasts",
  },
  {
    id: 3,
    src: "/space-science-exhibition-astronomy.jpg",
    title: "Space Science Exhibition",
    description: "Interactive space science exhibition for schools",
  },
  {
    id: 4,
    src: "/students-with-satellite-model-isro.jpg",
    title: "ISRO Collaboration",
    description: "Student-built satellite model at ISRO facility",
  },
  {
    id: 5,
    src: "/astronomy-telescope-observation-night-sky.jpg",
    title: "Astronomy Night",
    description: "Telescope observation session under the stars",
  },
  {
    id: 6,
    src: "/space-robotics-competition-students.jpg",
    title: "Robotics Competition",
    description: "Students competing in space robotics challenge",
  },
  {
    id: 7,
    src: "/cubesat-assembly-clean-room.jpg",
    title: "CubeSat Assembly",
    description: "Clean room assembly of student CubeSat",
  },
  {
    id: 8,
    src: "/space-education-seminar-auditorium.jpg",
    title: "Education Seminar",
    description: "National space education seminar",
  },
  {
    id: 9,
    src: "/students-testing-payload-experiment.jpg",
    title: "Payload Testing",
    description: "Students testing their experimental payload",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff6b35] mb-4">Gallery</h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Explore our journey through space education, satellite missions, and inspiring young minds
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#ff6b35] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-white font-semibold text-2xl mb-2">{selectedImage.title}</h3>
            <p className="text-white/80 text-lg">{selectedImage.description}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
