"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Textarea } from "@/components/ui/textarea"
import { Send, Sparkles, Loader2 } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function SpaceGPTSection() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/space-gpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let assistantMessage = ""

      const assistantMessageId = (Date.now() + 1).toString()
      setMessages((prev) => [...prev, { id: assistantMessageId, role: "assistant", content: "" }])

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          const lines = chunk.split("\n")

          for (const line of lines) {
            if (line.startsWith("0:")) {
              try {
                const data = JSON.parse(line.slice(2))
                if (data) {
                  assistantMessage += data
                  setMessages((prev) =>
                    prev.map((m) => (m.id === assistantMessageId ? { ...m, content: assistantMessage } : m)),
                  )
                }
              } catch (e) {
                // Skip invalid JSON
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("Error:", error)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-zinc-950" id="space-gpt">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-[#ff6b35]" size={32} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff6b35]">Space GPT</h2>
          </div>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Ask me anything about space, astronomy, or space exploration!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-8">
            <div className="mb-6 h-[400px] overflow-y-auto space-y-4 px-2">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full text-white/50 text-center">
                  <div>
                    <Sparkles className="mx-auto mb-4 text-[#ff6b35]" size={48} />
                    <p className="text-lg">Ask me anything about space!</p>
                    <p className="text-sm mt-2">Try: "What is a black hole?" or "Tell me about Mars missions"</p>
                  </div>
                </div>
              ) : (
                messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.role === "user" ? "bg-[#ff6b35] text-white" : "bg-white/10 text-white"
                      }`}
                    >
                      <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Loader2 className="animate-spin text-[#ff6b35]" size={24} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 md:gap-4">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about space, stars, planets, missions..."
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none min-h-[60px] focus:border-[#ff6b35] focus:ring-[#ff6b35]"
                disabled={isLoading}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit(e)
                  }
                }}
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-[#ff6b35] hover:bg-[#ff8555] text-white px-6 md:px-8 self-end disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
