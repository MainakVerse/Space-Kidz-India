"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  {
    src: "/satellite-launch-pad-with-rocket.jpg",
    alt: "Satellite Launch",
    category: "Launches",
  },
  {
    src: "/kids-building-model-rocket-workshop.jpg",
    alt: "Student Workshop",
    category: "Education",
  },
  {
    src: "/team-analyzing-space-data-mission-control.jpg",
    alt: "Mission Control",
    category: "Operations",
  },
  {
    src: "/kids-launching-model-rockets-outdoors.jpg",
    alt: "Rocket Launch Event",
    category: "Events",
  },
  {
    src: "/satellite-in-space-orbit-earth.jpg",
    alt: "Satellite in Orbit",
    category: "Missions",
  },
  {
    src: "/students-learning-about-astronomy-telescope.jpg",
    alt: "Astronomy Class",
    category: "Education",
  },
  {
    src: "/rocket-assembly-workshop-engineering.jpg",
    alt: "Rocket Assembly",
    category: "Engineering",
  },
  {
    src: "/space-camp-kids-group-photo.jpg",
    alt: "Space Camp",
    category: "Events",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-black" id="gallery">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff6b35] mb-4">Gallery</h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Explore our journey through space exploration and education
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">{image.alt}</p>
                  <p className="text-[#ff6b35] text-xs">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#ff6b35] transition-colors"
            >
              <X size={32} />
            </button>
            <button
              onClick={handlePrevious}
              className="absolute left-4 text-white hover:text-[#ff6b35] transition-colors"
            >
              <ChevronLeft size={48} />
            </button>
            <button onClick={handleNext} className="absolute right-4 text-white hover:text-[#ff6b35] transition-colors">
              <ChevronRight size={48} />
            </button>
            <div className="max-w-5xl w-full">
              <img
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-white text-lg font-semibold">{galleryImages[selectedImage].alt}</p>
                <p className="text-[#ff6b35]">{galleryImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
