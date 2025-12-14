"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is Space Kidz India?",
    answer:
      "Space Kidz India is a pioneering organization that empowers students to design, build, and launch satellites and experiments into space. We provide hands-on STEM education and real-world space mission experience.",
  },
  {
    question: "Who can participate in your programs?",
    answer:
      "Our programs are designed for students aged 8-18 years. We welcome participants from schools, colleges, and educational institutions across India who are passionate about space and technology.",
  },
  {
    question: "Do I need prior technical knowledge to join?",
    answer:
      "No prior technical knowledge is required! Our curriculum is designed to take students from basics to advanced concepts. We provide comprehensive training and mentorship throughout the journey.",
  },
  {
    question: "What kind of workshops do you offer?",
    answer:
      "We offer workshops on satellite building, rocket science, coding for space applications, astronomy, astrophysics, and more. Workshops range from one-day sessions to multi-week intensive programs.",
  },
  {
    question: "How can schools collaborate with Space Kidz India?",
    answer:
      "Schools can partner with us to integrate our space education curriculum, organize workshops, set up space clubs, or participate in national/international space missions. Contact us for customized collaboration programs.",
  },
  {
    question: "What are the costs involved?",
    answer:
      "Program costs vary depending on the workshop duration and complexity. We offer scholarships and financial assistance for deserving students. Please contact us for detailed pricing and scholarship information.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-zinc-950" id="faq">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff6b35] mb-4">Frequently Asked Questions</h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Find answers to common questions about our programs
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
              >
                <h3 className="text-base md:text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-[#ff6b35] transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-4 md:px-6 pb-4 md:pb-6 text-white/70 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
