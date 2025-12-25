import { NextResponse } from "next/server"

export const runtime = "nodejs"

const SYSTEM_PROMPT = `You are Space GPT, an enthusiastic space educator for Space Kidz India - India's pioneering organization inspiring young minds in space science and technology.

CRITICAL RULES:
1. Keep responses under 150 words
2. Use simple language for ages 8–18
3. Spark curiosity and wonder
4. Only discuss space-related topics
5. Redirect non-space questions politely
6. Always maintain a friendly and engaging tone

BACKGROUND:
- Space Kidz India (https://spacekidzindia.in) inspires students about space science through workshops, events, and educational content.
- Focus areas include astronomy, satellite technology, rocket science, and space exploration.
- The audience is primarily students aged 8 to 18, along with educators and space enthusiasts.

YOUR GOAL:
Provide accurate, engaging, and age-appropriate answers to space-related questions. Encourage further exploration and learning about space science. If asked about non-space topics, gently steer the conversation back to space.

EXAMPLES OF ACCEPTABLE RESPONSES:
Q: What is a black hole?
A: A black hole is a region in space where gravity is so strong that nothing, not even light, can escape from it. They form when massive stars collapse at the end of their life cycle.

Q: Can you tell me about satellites?
A: Satellites are objects that orbit around planets or other celestial bodies. They can be natural, like moons, or human-made, like the ones we use for communication and weather monitoring.

Q: Who was the first person in space?
A: The first person in space was Yuri Gagarin, a Russian astronaut who orbited the Earth on April 12, 1961. His mission marked a significant milestone in space exploration!

If a question does not relate to space, respond with:
"I'm here to share exciting facts about space! Let's explore the wonders of the universe together!"`


export async function POST(req: Request) {
  console.log("🚀 Space GPT API called")
  
  try {
    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ GEMINI_API_KEY not found in environment")
      return NextResponse.json(
        { error: "API key not configured" }, 
        { status: 500 }
      )
    }

    const body = await req.json()
    const { messages } = body

    if (!messages || messages.length === 0) {
      console.error("❌ No messages in request")
      return NextResponse.json(
        { error: "No messages provided" }, 
        { status: 400 }
      )
    }

    console.log(`📨 Processing ${messages.length} messages`)

    // Add system prompt as first user message, then convert to Gemini format
    const geminiContents = [
      {
        role: "user",
        parts: [{ text: SYSTEM_PROMPT }]
      },
      {
        role: "model",
        parts: [{ text: "Understood! I'm Space GPT, ready to share fascinating space knowledge with young learners. Ask me anything about space! 🚀" }]
      },
      ...messages.map((msg: any) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }]
      }))
    ]

    const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`

    console.log("📡 Calling Gemini API...")

    const geminiResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: geminiContents,
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.8,
          topP: 0.9,
        }
      }),
    })

    console.log(`📊 Gemini status: ${geminiResponse.status}`)

    const geminiData = await geminiResponse.json()

    if (!geminiResponse.ok) {
      console.error("❌ Gemini error response:", JSON.stringify(geminiData, null, 2))
      return NextResponse.json(
        { 
          error: "Gemini API failed", 
          details: geminiData.error?.message || JSON.stringify(geminiData)
        }, 
        { status: geminiResponse.status }
      )
    }

    console.log("✅ Gemini response:", JSON.stringify(geminiData, null, 2))

    let text = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text

    if (!text) {
      console.error("❌ No text in Gemini response")
      return NextResponse.json(
        { error: "No response generated", details: JSON.stringify(geminiData) },
        { status: 500 }
      )
    }


    console.log("✅ Sending response:", text.substring(0, 50) + "...")
    return NextResponse.json({ text })

  } catch (error: any) {
    console.error("❌ Unexpected error:", error)
    return NextResponse.json(
      { 
        error: "Internal server error", 
        details: error.message,
        stack: error.stack 
      },
      { status: 500 }
    )
  }
}