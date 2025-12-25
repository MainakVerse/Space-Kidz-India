import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import { Calendar, Users, MapPin, ChevronRight } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic"

const EVENTS_MAP = {
  "young-scientists-india-2025": {
    title: "Young Scientists India",
    date: "June 2025",
    attendees: "30000+",
    location: "Multiple Cities Across India",
    banner: "/space-summit-conference-audience.jpg",
    description:
      "Young Scientist India (YSI), a prestigious and transformative event that aims to ignite the flame of innovation and empower young minds to become the scientists and innovators of tomorrow. Since its inception in 2013, YSI has been at the forefront of promoting science awareness among high school students, nurturing their scientific curiosity, and guiding them toward rewarding careers in the scientific field. We believe that every young mind has the potential to bring about remarkable advancements and make a lasting impact on society. With a focus on fostering an entrepreneurial mindset and encouraging out-of-the-box thinking, YSI provides a platform for students to showcase their creativity, problem-solving abilities, and scientific acumen.",
    highlights: [
      "Interactive workshops on satellite technology",
      "Hands-on rocket building exercises",
      "Mentorship sessions with ISRO scientists",
      "Science fair and project exhibitions",
    ],
    gallery: [
      "/space-summit-conference-audience.jpg",
      "/ysi2.jpg",
      "/ysi3.jpg",
      "/ysi4.jpg",
      "/ysi5.jpg",
      "/ysi6.jpg",
      "/ysi7.jpg",
      "/ysi8.jpg",
      "/ysi9.jpg",
      "/ysi10.jpg",
      "/ysi11.jpg",
      "/ysi12.jpg",
      "/ysi13.jpg",
      "/ysi14.jpg",
      "/ysi15.jpg",
    ],
    mediaType: "image" as const,
  },
  "azaadisat-launch-2024": {
    title: "AzaadiSAT Launch",
    date: "October 2024",
    attendees: "18000+",
    location: "Sriharikota Launch Center",
    banner: "/international-satellite-workshop-participants.jpg",
    description:
      "“AzaadiSat” is a satellite mission with the ambitious vision to encourage government school children (from economically weak backgrounds) by providing them with a basic understanding and knowledge of space and tutoring them to build a small experiment and launch it to the edge of space through a “balloon satellite” or an “orbital satellite.” The significance of this project is that it has been conceptualized to pay our tribute to mark the 75th anniversary of Independence – Azaadi Ka Amrit Mahotsav. From 75 government schools for girls across India, we have selected 10 female students from each school to give this opportunity. The selected students are predominantly from classes 8th–12th. This is the first-of-its-kind space mission with an ‘all-women concept’ to promote women in STEM, as this year’s UN theme is “Women in Space.”",
    highlights: [
      "Student-designed experiments successfully deployed",
      "Participation from 108 schools nationwide",
      "Live satellite telemetry monitoring",
      "Post-launch data analysis workshops",
    ],
    gallery: [
      "/videos/azaadisat-1.mp4",
      "/videos/azaadisat-2.mp4",
      "/videos/azaadisat-3.mp4",
      "/videos/azaadisat-4.mp4",
      "/videos/azaadisat-5.mp4",
      "/videos/azaadisat-6.mp4",
      "/videos/azaadisat-7.mp4",
      "/videos/azaadisat-8.mp4",
    ],
    mediaType: "video" as const,
  },
  "balloonsat-workshop-2023": {
    title: "BalloonSAT Workshop",
    date: "July 2023",
    attendees: "12000+",
    location: "Regional Centers Pan-India",
    banner: "/balloon-sate-workshop-group-photo.jpg",
    description:
      "An immersive technical workshop focusing on near-space experiments using high-altitude balloons. Students designed, built, and launched their own balloon payloads, collecting atmospheric data and capturing stunning images from the edge of space.",
    highlights: [
      "Payload design and assembly training",
      "High-altitude balloon launches",
      "Real-time data collection and analysis",
      "Recovery missions and results presentation",
    ],
    gallery: [
      "/balloon-sate-workshop-group-photo.jpg",
      "/space-summit-conference-audience.jpg",
      "/international-satellite-workshop-participants.jpg",
    ],
    mediaType: "image" as const,
  },
} as const

type EventSlug = keyof typeof EVENTS_MAP

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = EVENTS_MAP[slug as EventSlug]

  if (!event) return notFound()

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-28 pb-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-white/60">
            <Link 
              href="/" 
              className="hover:text-[#ff6b35] transition"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link 
              href="/events" 
              className="hover:text-[#ff6b35] transition"
            >
              Events
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90 font-medium">
              {event.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Banner */}
      <section className="pb-0">
        <div className="container mx-auto px-4">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img
              src={event.banner}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#ff6b35]" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#ff6b35]" />
                  {event.attendees} Attendees
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#ff6b35]" />
                  {event.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white/5 rounded-xl border border-white/10 p-8 mb-12">
            <h2 className="text-2xl font-bold text-[#ff6b35] mb-4">
              About the Event
            </h2>
            <p className="text-white/80 leading-relaxed text-lg">
              {event.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#ff6b35] mb-6">
              Event Highlights
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {event.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-lg border border-white/10 p-4 flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-[#ff6b35] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-white/80">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Video Gallery */}
          <div>
            <h2 className="text-2xl font-bold text-[#ff6b35] mb-6">
              Event Gallery
            </h2>
            
            {event.mediaType === "video" ? (
              // Video Gallery (2 per row on desktop, 1 on mobile)
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {event.gallery.map((video, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-lg overflow-hidden group bg-black"
                  >
                    <video
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                    >
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            ) : (
              // Image Gallery (3 per row on desktop)
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {event.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-lg overflow-hidden group"
                  >
                    <img
                      src={image}
                      alt={`${event.title} - Gallery ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}