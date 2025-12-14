"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is Space Kidz India?",
    answer:
      "Space Kidz India is an organization dedicated to making space education accessible to students across India. We conduct workshops, build satellites with students, and provide hands-on experience in space science and technology.",
  },
  {
    question: "Who can participate in Space Kidz India programs?",
    answer:
      "Our programs are designed for students from grade 5 to undergraduate level. We have different modules tailored to various age groups and skill levels, ensuring everyone can participate and learn.",
  },
  {
    question: "How can schools enroll in the space education program?",
    answer:
      "Schools can contact us through our website or email. We offer customized programs that can be integrated into the existing curriculum, along with teacher training and resource materials.",
  },
  {
    question: "What kind of workshops do you conduct?",
    answer:
      "We conduct various workshops including rocket building, satellite design, astronomy, robotics, and space science fundamentals. Each workshop is hands-on and designed to spark curiosity and learning.",
  },
  {
    question: "Do students get to build actual satellites?",
    answer:
      "Yes! Our advanced programs allow students to design, build, and even launch CubeSats (small satellites). These projects are done in collaboration with ISRO and provide real-world experience.",
  },
  {
    question: "What are the costs involved?",
    answer:
      "Our programs have varying costs depending on the type and duration. We also offer scholarships and subsidized programs for government schools and underprivileged students to ensure accessibility.",
  },
  {
    question: "How long are the typical programs?",
    answer:
      "Program duration varies from single-day workshops to year-long satellite development projects. Most workshops are 1-3 days, while comprehensive programs can span several months.",
  },
  {
    question: "What equipment or materials do students need?",
    answer:
      "We provide all necessary materials and equipment for our workshops. Students just need to bring their curiosity and enthusiasm to learn!",
  },
  {
    question: "Can individual students participate without school enrollment?",
    answer:
      "Yes! We conduct public workshops and events where individual students can register. Check our Events page for upcoming opportunities.",
  },
  {
    question: "How can I become a volunteer or instructor?",
    answer:
      "We welcome space enthusiasts, engineers, and educators to join our team. Visit our Collaborate section or contact us directly to learn about volunteer and instructor opportunities.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff6b35] mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-white/80">
              Find answers to common questions about Space Kidz India programs
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-[#ff6b35]/50 transition-all"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-white font-semibold text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`text-[#ff6b35] transition-transform flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={24}
                  />
                </button>
                {openIndex === index && <div className="px-6 pb-4 text-white/80 leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#ff6b35] mb-4">Still have questions?</h2>
            <p className="text-white/80 mb-6">
              {"Can't find the answer you're looking for? Please reach out to our team."}
            </p>
            <button className="bg-[#ff6b35] hover:bg-[#ff8555] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
