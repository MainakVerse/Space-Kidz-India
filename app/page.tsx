import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { MissionsSection } from "@/components/missions-section"
import { GallerySection } from "@/components/gallery-section"
import { PartnersSection } from "@/components/partners-section"
import { NewsSection } from "@/components/news-section"
import { FAQSection } from "@/components/faq-section"
import { SpaceQuizSection } from "@/components/space-quiz-section"
import { SpaceGPTSection } from "@/components/space-gpt-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { TimelineSection } from "@/components/timeline-section"
import AchievementsSection from "@/components/counter-stats"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <TimelineSection />
      <MissionsSection />
       <section className="py-12 sm:py-20 bg-black">
              <AchievementsSection />
            </section>
      <GallerySection />
      <PartnersSection />
      <NewsSection />
      <FAQSection />
      <SpaceQuizSection />
      <SpaceGPTSection />
      <CTASection />
      <Footer />
    </main>
  )
}
