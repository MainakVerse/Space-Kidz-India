import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Preloader } from "@/components/preloader"
import { PageTransition } from "@/components/page-transition"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ImageScrollEffects } from "@/components/image-scroll-effects"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Space Kidz India - Aerospace Innovation",
  description:
    "Leading aerospace research and education organization empowering the next generation of space scientists and engineers",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} font-sans antialiased`}>
        <Preloader />
        <PageTransition />
        <ScrollToTop />
        <ImageScrollEffects />
        <div className="orange-rays-gradient" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
