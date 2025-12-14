"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Send, Sparkles } from "lucide-react"
import { useRef, useEffect } from "react"

export default function SpaceGPTPage() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/space-gpt" }),
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = inputRef.current?.value
    if (!input?.trim()) return

    sendMessage({ text: input })
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  const suggestedQuestions = [
    "What is a black hole?",
    "Tell me about the James Webb Space Telescope",
    "How does a rocket work?",
    "What are the different types of galaxies?",
  ]

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-6">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl h-full flex flex-col">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="text-[#ff6b35]" size={32} />
              <h1 className="text-4xl sm:text-5xl font-bold text-[#ff6b35]">Space GPT</h1>
            </div>
            <p className="text-lg text-white/80">Ask me anything about space, astronomy, and the universe</p>
          </div>

          <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-white/60 mb-6">Start a conversation about space! Try asking:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (inputRef.current) {
                            inputRef.current.value = question
                            inputRef.current.focus()
                          }
                        }}
                        className="text-left p-3 bg-white/5 border border-white/10 rounded-lg hover:border-[#ff6b35]/50 transition-all text-sm text-white/80"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === "user"
                        ? "bg-[#ff6b35] text-white"
                        : "bg-white/10 text-white border border-white/10"
                    }`}
                  >
                    {message.parts.map((part, index) => {
                      if (part.type === "text") {
                        return (
                          <p key={index} className="whitespace-pre-wrap leading-relaxed">
                            {part.text}
                          </p>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              ))}

              {status === "in_progress" && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white border border-white/10 rounded-lg p-4">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-white/10 p-4">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask about space, stars, planets, missions..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff6b35]"
                  disabled={status === "in_progress"}
                />
                <button
                  type="submit"
                  disabled={status === "in_progress"}
                  className="bg-[#ff6b35] hover:bg-[#ff8555] disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-colors"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
