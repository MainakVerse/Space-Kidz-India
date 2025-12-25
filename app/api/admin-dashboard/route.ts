import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { headers } from "next/headers";
import crypto from "crypto"; // Native Node.js crypto for secure comparison
import dotenv from "dotenv";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- IN-MEMORY RATE LIMITER ---
const rateLimit = new Map<string, { count: number; expires: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (record && now > record.expires) {
    rateLimit.delete(ip);
    return false;
  }

  if (record && record.count >= 5) {
    return true;
  }

  return false;
}

function incrementRateLimit(ip: string) {
  const now = Date.now();
  const record = rateLimit.get(ip);
  if (record) {
    record.count++;
  } else {
    rateLimit.set(ip, { count: 1, expires: now + 15 * 60 * 1000 });
  }
}

export async function POST(req: Request) {
  try {
    const headerList = headers();
    // Await headers if you are on Next.js 15+, otherwise remove 'await'
    const ip = (await headerList).get("x-forwarded-for") || "unknown";

    // 1. Check Rate Limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many failed attempts. Try again in 15 minutes." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { password } = body;

    // 2. Strict Environment Variable Check
    // We REMOVED the fallback. If .env is missing, the API intentionally breaks 
    // rather than letting someone in with a default password.
    const ADMIN_PASS = process.env.ADMIN_PASSWORD;

    if (!ADMIN_PASS) {
      console.error("❌ SECURITY ERROR: ADMIN_PASSWORD is missing from .env");
      return NextResponse.json(
        { error: "Server misconfiguration. Contact support." }, 
        { status: 500 }
      );
    }

    // 3. Timing-Safe Comparison
    // We verify the password using crypto.timingSafeEqual.
    // This takes the exact same amount of time regardless of whether the 
    // password is right or wrong, preventing timing attacks.
    
    const inputBuffer = Buffer.from(password || "");
    const targetBuffer = Buffer.from(ADMIN_PASS);

    // Buffers must be same length for timingSafeEqual, so we check length first
    // strictly, but maintain constant time flow where possible.
    let isValid = false;
    if (inputBuffer.length === targetBuffer.length) {
        isValid = crypto.timingSafeEqual(inputBuffer, targetBuffer);
    }

    if (!isValid) {
      incrementRateLimit(ip);
      return NextResponse.json({ error: "Invalid Password" }, { status: 401 });
    }

    // 4. Clear rate limit on success
    rateLimit.delete(ip);

    // 5. Fetch Data
    const contacts = await sql`SELECT * FROM public.contact_submissions ORDER BY created_at DESC`;
    const collaborations = await sql`SELECT * FROM public.collaboration_submissions ORDER BY created_at DESC`;
    const events = await sql`SELECT * FROM public.event_registrations ORDER BY created_at DESC`;
    const workshops = await sql`SELECT * FROM public.workshop_registrations ORDER BY created_at DESC`;

    return NextResponse.json({
      success: true,
      data: {
        contacts,
        collaborations,
        events,
        workshops,
      },
    });
  } catch (error) {
    console.error("Admin API Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}