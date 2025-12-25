import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, organization, country } = body;

    // 1. Validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    // 2. Insert into Database
    const result = await sql`
      INSERT INTO public.event_registrations
        (full_name, email, phone, organization, country)
      VALUES
        (${fullName}, ${email}, ${phone}, ${organization}, ${country})
      RETURNING id, created_at
    `;

    return NextResponse.json(
      { success: true, id: result[0].id },
      { status: 201 }
    );

  } catch (error) {
    console.error("❌ Registration API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}