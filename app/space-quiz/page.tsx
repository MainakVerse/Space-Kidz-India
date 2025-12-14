"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react"

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const quizQuestions: Question[] = [
  {
    question: "Which Indian space mission was the first to reach Mars orbit?",
    options: ["Chandrayaan-1", "Mangalyaan (Mars Orbiter Mission)", "Chandrayaan-2", "Gaganyaan"],
    correctAnswer: 1,
    explanation:
      "Mangalyaan (Mars Orbiter Mission) launched in 2013 made India the first Asian nation to reach Mars orbit and the first nation in the world to do so in its maiden attempt.",
  },
  {
    question: "What is the name of India's first lunar mission?",
    options: ["Chandrayaan-1", "Luna-1", "Apollo-1", "Artemis-1"],
    correctAnswer: 0,
    explanation:
      "Chandrayaan-1 was India's first lunar probe launched by ISRO in October 2008, which discovered water molecules on the Moon.",
  },
  {
    question: "Where is the headquarters of ISRO located?",
    options: ["Mumbai", "Bangalore", "Thiruvananthapuram", "Chennai"],
    correctAnswer: 1,
    explanation: "The Indian Space Research Organisation (ISRO) has its headquarters in Bangalore, Karnataka.",
  },
  {
    question: "Who is known as the father of Indian space program?",
    options: ["APJ Abdul Kalam", "Vikram Sarabhai", "Satish Dhawan", "K Radhakrishnan"],
    correctAnswer: 1,
    explanation:
      "Dr. Vikram Sarabhai is regarded as the father of the Indian space program. He founded ISRO and established the Thumba Equatorial Rocket Launching Station.",
  },
  {
    question: "What does PSLV stand for?",
    options: [
      "Polar Satellite Launch Vehicle",
      "Primary Space Launch Vehicle",
      "Powered Satellite Launch Vehicle",
      "Precision Space Launch Vehicle",
    ],
    correctAnswer: 0,
    explanation:
      "PSLV stands for Polar Satellite Launch Vehicle, which is ISRO's workhorse launch vehicle that has successfully launched numerous satellites.",
  },
  {
    question: "Which planet did India's Mangalyaan orbit?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    explanation:
      "Mangalyaan, also known as Mars Orbiter Mission (MOM), was India's first interplanetary mission that successfully orbited Mars.",
  },
  {
    question: "In which year was ISRO established?",
    options: ["1962", "1969", "1975", "1980"],
    correctAnswer: 1,
    explanation:
      "ISRO (Indian Space Research Organisation) was established on August 15, 1969, superseding the Indian National Committee for Space Research (INCOSPAR).",
  },
  {
    question: "What was the name of India's first satellite?",
    options: ["INSAT-1A", "Aryabhata", "Bhaskara-1", "Rohini"],
    correctAnswer: 1,
    explanation:
      "Aryabhata, named after the famous Indian astronomer, was India's first satellite launched on April 19, 1975, by the Soviet Union.",
  },
  {
    question: "Which mission discovered water on the Moon?",
    options: ["Chandrayaan-1", "Apollo-11", "Luna-24", "Chang'e-4"],
    correctAnswer: 0,
    explanation:
      "India's Chandrayaan-1 mission in 2008 discovered water molecules on the lunar surface using its Moon Mineralogy Mapper.",
  },
  {
    question: "What is the name of India's first manned space mission program?",
    options: ["Vyomyaan", "Gaganyaan", "Antariksh", "Akashyaan"],
    correctAnswer: 1,
    explanation:
      "Gaganyaan is India's first crewed orbital spacecraft program, aiming to send Indian astronauts to space in a domestically built spacecraft.",
  },
]

export default function SpaceQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(Array(quizQuestions.length).fill(false))
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return

    setSelectedAnswer(answerIndex)
    setShowResult(true)

    const newAnsweredQuestions = [...answeredQuestions]
    newAnsweredQuestions[currentQuestion] = true
    setAnsweredQuestions(newAnsweredQuestions)

    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions(Array(quizQuestions.length).fill(false))
    setQuizCompleted(false)
  }

  if (quizCompleted) {
    const percentage = (score / quizQuestions.length) * 100

    return (
      <div className="min-h-screen bg-black">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center">
              <Trophy className="w-20 h-20 text-[#ff6b35] mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-[#ff6b35] mb-4">Quiz Completed!</h1>
              <p className="text-2xl text-white mb-8">
                Your Score: {score} / {quizQuestions.length}
              </p>
              <div className="w-full bg-white/10 rounded-full h-4 mb-8">
                <div className="bg-[#ff6b35] h-4 rounded-full transition-all" style={{ width: `${percentage}%` }} />
              </div>
              <p className="text-xl text-white/80 mb-8">
                {percentage >= 80
                  ? "Excellent! You're a space expert!"
                  : percentage >= 60
                    ? "Good job! Keep learning!"
                    : "Keep exploring! Space is vast and full of wonders!"}
              </p>
              <button
                onClick={handleRestart}
                className="bg-[#ff6b35] hover:bg-[#ff8555] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <RotateCcw size={20} />
                Retake Quiz
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#ff6b35] mb-4">Space Quiz on India</h1>
            <p className="text-lg text-white/80">Test your knowledge of Indian space exploration</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white/60">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <span className="text-[#ff6b35] font-semibold">Score: {score}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className="bg-[#ff6b35] h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 sm:p-8 mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">{question.question}</h2>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === question.correctAnswer
                const showCorrect = showResult && isCorrect
                const showIncorrect = showResult && isSelected && !isCorrect

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={answeredQuestions[currentQuestion]}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      showCorrect
                        ? "border-green-500 bg-green-500/20"
                        : showIncorrect
                          ? "border-red-500 bg-red-500/20"
                          : isSelected
                            ? "border-[#ff6b35] bg-[#ff6b35]/20"
                            : "border-white/10 bg-white/5 hover:border-[#ff6b35]/50"
                    } ${answeredQuestions[currentQuestion] ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white">{option}</span>
                      {showCorrect && <CheckCircle2 className="text-green-500 flex-shrink-0" size={24} />}
                      {showIncorrect && <XCircle className="text-red-500 flex-shrink-0" size={24} />}
                    </div>
                  </button>
                )
              })}
            </div>

            {showResult && (
              <div className="mt-6 p-4 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-lg">
                <p className="text-white/90 leading-relaxed">{question.explanation}</p>
              </div>
            )}
          </div>

          {showResult && (
            <button
              onClick={handleNext}
              className="w-full bg-[#ff6b35] hover:bg-[#ff8555] text-white py-3 rounded-lg font-semibold transition-colors"
            >
              {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
            </button>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
