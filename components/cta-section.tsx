import { ContactModal } from "./contact-modal"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-[#1a1a1a] to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff6b35] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#22c55e] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Ready to Launch Your <span className="text-[#ff6b35]">Space Journey</span>?
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Join us in shaping the future of aerospace technology and space exploration
          </p>
          <ContactModal 
            buttonClassName="bg-[#ff6b35] hover:bg-[#ff8555] text-white text-lg px-12 py-6 h-auto"
          />
        </div>
      </div>
    </section>
  )
}