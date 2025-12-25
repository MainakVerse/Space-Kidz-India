"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Users, Clock, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function WorkshopPage() {
  const [open, setOpen] = useState(false)
  const [selectedWorkshop, setSelectedWorkshop] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form State
  const [formData, setFormData] = useState({
    studentName: "",
    studentClass: "",
    schoolName: "",
    parentName: "",
    contactNumber: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const payload = {
        workshopName: selectedWorkshop,
        ...formData
      }

      const response = await fetch("/api/workshop-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Registration failed")
      }

      // Success
      alert(`✅ Application submitted successfully for ${selectedWorkshop}!`)
      setOpen(false)
      setFormData({
        studentName: "",
        studentClass: "",
        schoolName: "",
        parentName: "",
        contactNumber: "",
        email: "",
      })

    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const workshops = [
    {
      title: "3-Day Space Science Workshop",
      date: "FOR VII – IX",
      location: "School / Institution Premises",
      duration: "3 Days",
      participants: "Limited Seats",
      description:
        "Space Kidz India’s 3-day immersive program designed to introduce students to Space Science.\n\nDay 1 – Astronomy\nDay 2 – Satellite Technology\nDay 3 – Rocket Science",
      image: "/space-science-students-astronomy-workshop.jpg",
    },
    {
      title: "5-Day Advanced Space Science Workshop",
      date: "FOR VIII – IX",
      location: "School / Institution Premises",
      duration: "5 Days",
      participants: "Limited Seats",
      description:
        "An elaborate week-long workshop for deeper understanding.\n\nDay 1–2: Astronomy\nDay 3–4: Satellite Technology\nDay 5: Rocket Science",
      image: "/students-satellite-rocket-science-workshop.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-center">
        <h1 className="text-5xl font-bold text-[#ff6b35]">Workshops</h1>
        <p className="text-white/80 mt-4 text-xl">
          Hands-on learning experiences that bring space science to life
        </p>
      </section>

      {/* Workshops */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl space-y-10">
          {workshops.map((w, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden grid md:grid-cols-2"
            >
              <img
                src={w.image}
                alt={w.title}
                className="w-full h-full object-cover"
              />

              <div className="p-8 space-y-5">
                <h3 className="text-3xl font-bold text-white">{w.title}</h3>

                <p className="text-white/70 whitespace-pre-line">
                  {w.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 text-sm text-white/80">
                  <div className="flex gap-2">
                    <Calendar className="w-4 h-4 text-[#ff6b35]" />
                    {w.date}
                  </div>
                  <div className="flex gap-2">
                    <MapPin className="w-4 h-4 text-[#ff6b35]" />
                    {w.location}
                  </div>
                  <div className="flex gap-2">
                    <Clock className="w-4 h-4 text-[#ff6b35]" />
                    {w.duration}
                  </div>
                  <div className="flex gap-2">
                    <Users className="w-4 h-4 text-[#ff6b35]" />
                    {w.participants}
                  </div>
                </div>

                <Button
                  onClick={() => {
                    setSelectedWorkshop(w.title)
                    setOpen(true)
                  }}
                  className="bg-[#ff6b35] hover:bg-[#ff8555] w-full"
                >
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-[#0b0b0b] border border-white/10 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative p-6">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold text-[#ff6b35] mb-1">
              Workshop Application
            </h2>
            <p className="text-white/70 mb-6">{selectedWorkshop}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label className="text-white">Student Name *</Label>
                <Input
                  name="studentName"
                  required
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Enter student name"
                  className="bg-white/5 border-white/20 text-white"
                />
              </div>

              <div>
                <Label className="text-white">Class</Label>
                <Input
                  name="studentClass"
                  value={formData.studentClass}
                  onChange={handleChange}
                  placeholder="Class / Grade"
                  className="bg-white/5 border-white/20 text-white"
                />
              </div>

              <div>
                <Label className="text-white">School Name</Label>
                <Input
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  placeholder="School / Institution"
                  className="bg-white/5 border-white/20 text-white"
                />
              </div>

              <div>
                <Label className="text-white">Parent / Guardian Name</Label>
                <Input
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Parent name"
                  className="bg-white/5 border-white/20 text-white"
                />
              </div>

              <div>
                <Label className="text-white">Contact Number *</Label>
                <Input
                  name="contactNumber"
                  required
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="bg-white/5 border-white/20 text-white"
                />
              </div>

              <div>
                <Label className="text-white">Email *</Label>
                <Input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="bg-white/5 border-white/20 text-white"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ff6b35] hover:bg-[#ff8555] font-semibold disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}