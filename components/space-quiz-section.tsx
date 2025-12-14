"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react"

const quizQuestions = [
  {
    question: "Which Indian space mission was the first to reach Mars orbit?",
    options: ["Chandrayaan-1", "Mangalyaan (Mars Orbiter Mission)", "Chandrayaan-2", "Gaganyaan"],
    correctAnswer: 1,
  },
  {
    question: "What is the name of India's first satellite launched in 1975?",
    options: ["INSAT-1A", "Aryabhata", "Bhaskara-1", "Rohini"],
    correctAnswer: 1,
  },
  {
    question: "Which Indian astronomer discovered the Chandrasekhar Limit?",
    options: ["C.V. Raman", "Homi Bhabha", "Subrahmanyan Chandrasekhar", "Vikram Sarabhai"],
    correctAnswer: 2,
  },
  {
    question: "Where is India's primary spaceport located?",
    options: ["Thiruvananthapuram", "Sriharikota", "Bengaluru", "Ahmedabad"],
    correctAnswer: 1,
  },
  {
    question: "What does ISRO stand for?",
    options: [
      "Indian Space Research Organization",
      "International Space Research Organization",
      "Indian Satellite Research Organization",
      "Indian Space Research Observatory",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which Indian mission successfully soft-landed near the Moon's south pole in 2023?",
    options: ["Chandrayaan-1", "Chandrayaan-2", "Chandrayaan-3", "Mangalyaan"],
    correctAnswer: 2,
  },
  {
    question: "Who is known as the father of the Indian Space Program?",
    options: ["APJ Abdul Kalam", "Vikram Sarabhai", "Satish Dhawan", "U.R. Rao"],
    correctAnswer: 1,
  },
  {
    question: "What was unique about ISRO's PSLV-C37 mission in 2017?",
    options: [
      "First Mars mission",
      "Launched 104 satellites in one mission",
      "First lunar landing",
      "First human spaceflight",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which Indian telescope is located in Ladakh for astronomical observations?",
    options: [
      "Giant Metrewave Radio Telescope",
      "Kavalur Observatory",
      "Indian Astronomical Observatory (Hanle)",
      "Udaipur Solar Observatory",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is India's planned human spaceflight program called?",
    options: ["Mangalyaan", "Chandrayaan", "Gaganyaan", "Aditya"],
    correctAnswer: 2,
  },
]

export function SpaceQuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizQuestions.length).fill(false))

  const handleAnswerSelect = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return

    setSelectedAnswer(answerIndex)
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
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setAnsweredQuestions(new Array(quizQuestions.length).fill(false))
  }

  if (showResult) {
    const percentage = (score / quizQuestions.length) * 100
    let message = ""
    if (percentage >= 80) message = "Outstanding! You're a space expert!"
    else if (percentage >= 60) message = "Great job! You know your space facts well!"
    else if (percentage >= 40) message = "Good effort! Keep learning about space!"
    else message = "Keep exploring! There's so much to discover!"

    return (
      <section className="py-16 md:py-24 bg-black" id="space-quiz">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff6b35] mb-8">Quiz Complete!</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="text-6xl md:text-8xl font-bold text-[#ff6b35] mb-4">
                {score}/{quizQuestions.length}
              </div>
              <p className="text-2xl md:text-3xl text-white font-semibold mb-4">{percentage.toFixed(0)}% Correct</p>
              <p className="text-lg md:text-xl text-white/70 mb-8">{message}</p>
              <Button
                onClick={handleRestart}
                className="bg-[#ff6b35] hover:bg-[#ff8555] text-white font-semibold px-8 py-6 text-lg"
              >
                <RotateCcw className="mr-2" size={20} />
                Retry Quiz
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-black" id="space-quiz">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff6b35] mb-4">
            Space Quiz: Indian Astronomy
          </h2>
          <p className="text-base md:text-lg text-white/70">
            Test your knowledge about India's contributions to space exploration
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#ff6b35] font-semibold">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <span className="text-white/70">
                Score: {score}/{currentQuestion + (answeredQuestions[currentQuestion] ? 1 : 0)}
              </span>
            </div>

            <div className="mb-2 bg-white/10 rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#ff6b35] h-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 mt-8">
              {quizQuestions[currentQuestion].question}
            </h3>

            <div className="space-y-4 mb-8">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={answeredQuestions[currentQuestion]}
                  className={`w-full text-left p-4 md:p-5 rounded-lg transition-all duration-300 ${
                    selectedAnswer === index
                      ? index === quizQuestions[currentQuestion].correctAnswer
                        ? "bg-green-500/20 border-2 border-green-500"
                        : "bg-red-500/20 border-2 border-red-500"
                      : answeredQuestions[currentQuestion] && index === quizQuestions[currentQuestion].correctAnswer
                        ? "bg-green-500/20 border-2 border-green-500"
                        : "bg-white/5 hover:bg-white/10 border-2 border-transparent"
                  } ${answeredQuestions[currentQuestion] ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{option}</span>
                    {answeredQuestions[currentQuestion] && (
                      <>
                        {index === quizQuestions[currentQuestion].correctAnswer && (
                          <CheckCircle2 className="text-green-500" size={24} />
                        )}
                        {selectedAnswer === index && index !== quizQuestions[currentQuestion].correctAnswer && (
                          <XCircle className="text-red-500" size={24} />
                        )}
                      </>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={!answeredQuestions[currentQuestion]}
              className="w-full bg-[#ff6b35] hover:bg-[#ff8555] text-white font-semibold py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
