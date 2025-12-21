"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function PaymentPage() {
  const params = useSearchParams()
  const course = params.get("course")
  const amount = params.get("amount")

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-xl p-8 text-white">
        <h1 className="text-2xl font-bold text-[#ff6b35] mb-4">
          Payment Summary
        </h1>

        <p className="mb-2">
          <span className="text-white/70">Course:</span> {course}
        </p>
        <p className="mb-6">
          <span className="text-white/70">Amount:</span>{" "}
          <span className="font-semibold">₹{amount}</span>
        </p>

        <Button className="w-full bg-[#ff6b35] hover:bg-[#ff8555]">
          Pay Now
        </Button>
      </div>
    </div>
  )
}
