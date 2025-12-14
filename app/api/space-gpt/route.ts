import { streamText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: "openai/gpt-4o-mini",
    messages,
    system:
      "You are Space GPT, an expert AI assistant specializing in space, astronomy, astrophysics, and space exploration. You provide accurate, engaging, and educational information about space topics. Keep your responses clear, informative, and accessible to learners of all ages. When appropriate, include fascinating facts and relate concepts to real-world space missions and discoveries, especially those from India's space program (ISRO) when relevant.",
  })

  return result.toUIMessageStreamResponse()
}
