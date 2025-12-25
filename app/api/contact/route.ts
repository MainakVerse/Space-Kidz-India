import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET → health check
 */
export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Contact API is working",
    timestamp: new Date().toISOString(),
  });
}

/**
 * POST → insert contact submission
 */
export async function POST(req: Request) {
  console.log("🔥 POST /api/contact HIT");

  try {
    // --- Parse body safely ---
    const body = await req.json();
    console.log("📩 BODY:", body);

    const {
      name,
      email,
      phone = null,
      organization = null,
      message,
    } = body ?? {};

    // --- Validation ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "name, email and message are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // --- DB connection proof ---
    const dbInfo = await sql`
      SELECT
        current_database() AS db,
        current_user AS user,
        current_schema() AS schema,
        inet_server_addr() AS server_ip
    `;
    console.log("🧠 DB INFO:", dbInfo);

    // --- Insert ---
    const result = await sql`
      INSERT INTO public.contact_submissions
        (name, email, phone, organization, message)
      VALUES
        (${name}, ${email}, ${phone}, ${organization}, ${message})
      RETURNING id, created_at
    `;

    console.log("✅ INSERT RESULT:", result);

    return NextResponse.json(
      {
        success: true,
        id: result[0]?.id,
        created_at: result[0]?.created_at,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("❌ POST ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        error:
          err instanceof Error ? err.message : "Unknown server error",
      },
      { status: 500 }
    );
  }
}
