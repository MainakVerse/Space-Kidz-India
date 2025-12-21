"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, Sparkles, Loader2 } from "lucide-react"
import Link from "next/link"

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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/space-gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      const data = await response.json()
      console.log("Response:", response.status, data)

      if (!response.ok) {
        throw new Error(data.details || data.error || "Unknown error")
      }

      if (!data.text) {
        throw new Error("No text in response")
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.text,
        },
      ])
    } catch (err: any) {
      console.error("Error:", err.message)
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: `⚠️ ${err.message}. Check your API key and try again.`,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // Function to render message content with clickable links
  const renderMessageContent = (content: string) => {
    // Match markdown links: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = linkRegex.exec(content)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index))
      }
      
      // Add the link
      const linkText = match[1]
      const linkUrl = match[2]
      parts.push(
        <Link 
          key={match.index} 
          href={linkUrl}
          className="text-[#ff6b35] underline hover:text-[#ff8555] font-semibold"
        >
          {linkText}
        </Link>
      )
      
      lastIndex = match.index + match[0].length
    }

    // Add remaining text after the last link
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex))
    }

    return parts.length > 0 ? parts : content
  }

  return (
    <section className="py-16 bg-zinc-950" id="space-gpt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Sparkles className="mx-auto mb-3 text-[#ff6b35]" size={32} />
          <h2 className="text-4xl font-bold text-[#ff6b35]">Space GPT</h2>
          <p className="text-white/70 mt-2">
            Ask me anything about space, astronomy, or exploration!
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl p-6">
          <div className="h-[420px] overflow-y-auto space-y-4 mb-4">
            {messages.length === 0 && (
              <p className="text-center text-white/50 mt-20">
                Try asking: "What is a black hole?"
              </p>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-[80%] ${
                  m.role === "user"
                    ? "ml-auto bg-[#ff6b35] text-white"
                    : "mr-auto bg-white/10 text-white"
                } rounded-xl p-4`}
              >
                <p className="whitespace-pre-wrap">
                  {m.role === "assistant" ? renderMessageContent(m.content) : m.content}
                </p>
              </div>
            ))}

            {isLoading && (
              <div className="bg-white/10 p-4 rounded-xl w-fit">
                <Loader2 className="animate-spin text-[#ff6b35]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex gap-3">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about space, stars, planets, missions..."
              className="flex-1 bg-white/10 text-white border-white/20"
              disabled={isLoading}
              rows={2}
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
              className="bg-[#ff6b35] hover:bg-[#ff8555] disabled:opacity-50"
            >
              <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}