const partners = [
  { name: "ISRO", logo: "/isro-logo.jpg" },
  { name: "INSPACE", logo: "/inspace-logo.jpg" },
  { name: "SIAINDIA", logo: "/sia-india-logo.png" },
  { name: "Alpha", logo: "/alpha-impulsion-logo.jpg" },
  { name: "ZohoLearn", logo: "/zoho-learn-logo.jpg" },
  { name: "Atmanirbhar", logo: "/atmanirbhar-bharat-logo.jpg" },
  { name: "WAN", logo: "/wan-logo.jpg" },
  { name: "STEM Queens", logo: "/stem-queens-logo.jpg" },
]

export function PartnersSection() {
  return (
    <section className="py-16 md:py-24 bg-zinc-950" id="partners">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff6b35] mb-4">Our Partners</h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Collaborating with leading organizations to advance space technology and education
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-full h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
