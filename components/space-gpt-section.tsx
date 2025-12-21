"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, Sparkles, Loader2 } from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  isTyping?: boolean
}

export function SpaceGPTSection() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  /* ---------------- SAFE TYPEWRITER (NO TRUNCATION) ---------------- */
  const typeWriter = (id: string, text: string) => {
    let i = 0

    const interval = setInterval(() => {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === id ? { ...m, content: text.slice(0, i + 1) } : m
        )
      )

      i++
      if (i >= text.length) {
        clearInterval(interval)
        setMessages((prev) =>
          prev.map((m) => (m.id === id ? { ...m, isTyping: false } : m))
        )
      }
    }, 16)
  }

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const res = await fetch("/api/space-gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      })

      const data = await res.json()

      if (!res.ok || typeof data.text !== "string" || !data.text.trim()) {
        throw new Error("Invalid or empty response from AI")
      }

      const assistantId = crypto.randomUUID()

      // Insert assistant message FIRST (never overwrite history)
      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: "assistant",
          content: "",
          isTyping: true,
        },
      ])

      // Type AFTER full response exists
      typeWriter(assistantId, data.text)
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: `⚠️ ${err.message}`,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  /* ---------------- LINK RENDERER ---------------- */
  const renderMessageContent = (content: string) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts: any[] = []
    let last = 0
    let match

    while ((match = regex.exec(content))) {
      if (match.index > last) {
        parts.push(content.slice(last, match.index))
      }

      parts.push(
        <Link
          key={match.index}
          href={match[2]}
          className="text-[#ff6b35] underline hover:text-[#ff8555] font-semibold"
        >
          {match[1]}
        </Link>
      )

      last = match.index + match[0].length
    }

    if (last < content.length) parts.push(content.slice(last))
    return parts.length ? parts : content
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
          {/* CHAT BODY */}
          <div className="h-[420px] overflow-y-auto space-y-4 mb-4 pr-2">
            {messages.length === 0 && (
              <p className="text-center text-white/50 mt-20">
                Try asking: “What is a black hole?”
              </p>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-[80%] ${
                  m.role === "user"
                    ? "ml-auto bg-[#ff6b35]"
                    : "mr-auto bg-white/10"
                } rounded-xl p-4 text-white`}
              >
                <p className="whitespace-pre-wrap">
                  {renderMessageContent(m.content)}
                </p>
              </div>
            ))}

            {isLoading && (
              <div className="bg-white/10 p-4 rounded-xl w-fit">
                <Loader2 className="animate-spin text-[#ff6b35]" />
              </div>
            )}
          </div>

          {/* FIXED INPUT */}
          <form onSubmit={handleSubmit} className="flex gap-3">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about space, stars, planets, missions..."
              rows={2}
              disabled={isLoading}
              className="flex-1 resize-none bg-white/10 text-white border-white/20"
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
              className="bg-[#ff6b35] hover:bg-[#ff8555]"
            >
              <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
