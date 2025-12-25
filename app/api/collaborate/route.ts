import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, organization, phone, collaborationType, message } = body;

    // 1. Basic Validation
    if (!name || !email || !collaborationType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Insert into Database
    // Note: We map 'collaborationType' (js) to 'collaboration_type' (sql)
    const result = await sql`
      INSERT INTO public.collaboration_submissions
        (name, email, organization, phone, collaboration_type, message)
      VALUES
        (${name}, ${email}, ${organization}, ${phone}, ${collaborationType}, ${message})
      RETURNING id, created_at
    `;

    return NextResponse.json(
      { success: true, id: result[0].id },
      { status: 201 }
    );

  } catch (error) {
    console.error("❌ Collaboration API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}