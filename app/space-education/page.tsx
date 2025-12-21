"use client"

import Image from "next/image"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

type Course = {
  title: string
  amount: number
}

export default function SpaceEducationPage() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  const openModal = (course: Course) => {
    setSelectedCourse(course)
    setOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedCourse) return

    router.push(
      `/payment?course=${encodeURIComponent(
        selectedCourse.title
      )}&amount=${selectedCourse.amount}`
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold text-[#ff6b35]">
          Space Education Programs
        </h1>
        <p className="mt-4 text-white/80 max-w-3xl mx-auto">
          Structured learning paths designed to nurture scientific curiosity
          and space technology skills.
        </p>
      </section>

      {/* Courses */}
      <section className="pb-24">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-3">

          {/* Level I */}
          <CourseCard
            image="/little-space-scientist-level-1.jpg"
            title="Little Space Scientist – Level I"
            price={500}
            meta={[
              "Duration: 32 hrs (3–4 months)",
              "Timings: 6:00 PM – 8:00 PM (Weekly once)",
              "Mode: Online",
              "Level: Intermediate",
            ]}
            curriculum={[
              "History of Astronomy",
              "Mysteries of our Universe",
              "Our Superman Solar System",
              "All about Stars & our only Star",
              "Exploring our Planets",
              "Mother Earth and her Powers",
              "Secrets of our Moon",
              "Light & Electromagnetic Spectrum",
            ]}
            onRegister={() =>
              openModal({
                title: "Little Space Scientist – Level I",
                amount: 500,
              })
            }
          />

          {/* Level II */}
          <CourseCard
            image="/little-space-scientist-level-2.jpg"
            title="Little Space Scientist – Level II"
            price={1000}
            meta={[
              "Duration: 24 hrs",
              "Timings: 6:30 PM – 8:00 PM",
              "Mode: Online",
              "Level: Advanced",
            ]}
            curriculum={[
              "Robotics",
              "Rovers",
              "Aeronautics",
              "Drones",
              "Space Shuttles",
              "Rockets",
              "Satellites",
            ]}
            note="* Completion of Level I is mandatory before registration"
            onRegister={() =>
              openModal({
                title: "Little Space Scientist – Level II",
                amount: 1000,
              })
            }
          />

          {/* Astronomy for Everyone */}
          <CourseCard
            image="/astronomy-for-everyone.jpg"
            title="Astronomy for Everyone"
            price={800}
            meta={[
              "Age Group: 12 – 17 years",
              "Total Duration: 3 months",
              "No. of Classes: 25",
              "Mode: Online & Offline",
              "Language: English, Tamil",
            ]}
            curriculum={[
              "Level 1: Introduction to Astronomy",
              "Level 2: The Observable Universe",
              "Level 3: The High Energy Universe",
            ]}
            note="For more details: +91 8122412261"
            onRegister={() =>
              openModal({
                title: "Astronomy for Everyone",
                amount: 800,
              })
            }
          />

        </div>
      </section>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black border border-white/20 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-[#ff6b35]">
              Register for {selectedCourse?.title}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <Input required placeholder="Student Name" />
            <Input required placeholder="Age" />
            <Input required type="email" placeholder="Parent Email" />
            <Input required placeholder="Contact Number" />

            <div className="text-sm text-white/70">
              Payable Amount:{" "}
              <span className="text-[#ff6b35] font-semibold">
                ₹{selectedCourse?.amount}
              </span>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#ff6b35] hover:bg-[#ff8555]"
            >
              Proceed to Payment
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}

/* ---------- Course Card ---------- */

function CourseCard({
  image,
  title,
  price,
  meta,
  curriculum,
  note,
  onRegister,
}: {
  image: string
  title: string
  price: number
  meta: string[]
  curriculum: string[]
  note?: string
  onRegister: () => void
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col">
      <Image
        src={image}
        alt={title}
        width={600}
        height={350}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-white">{title}</h3>

        <ul className="text-sm text-white/70 mt-3 space-y-1">
          {meta.map((m, i) => (
            <li key={i}>• {m}</li>
          ))}
        </ul>

        <h4 className="text-white font-semibold mt-4 mb-2">
          Curriculum
        </h4>
        <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
          {curriculum.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {note && (
          <p className="text-xs text-[#ff6b35] mt-3">{note}</p>
        )}

        <div className="mt-auto">
          <p className="text-sm text-white/70 mt-4">
            Registration Fee: ₹{price}
          </p>
          <Button
            onClick={onRegister}
            className="mt-3 w-full bg-[#ff6b35] hover:bg-[#ff8555]"
          >
            Register Now
          </Button>
        </div>
      </div>
    </div>
  )
}
