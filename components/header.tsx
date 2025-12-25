"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg shadow-[#ff6b35]/10" : "bg-black/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg shadow-[#ff6b35]/30 overflow-hidden bg-black/10">
  <img
    src="/brand.jpg"
    alt="Space Kidz India Logo"
    className="w-full h-full object-contain p-1"
  />
</div>
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            <Link
              href="/about"
              className={`text-sm xl:text-base font-medium transition-colors ${
                isActive("/about") ? "text-[#ff6b35] border-b-2 border-[#ff6b35]" : "text-white/80 hover:text-[#ff6b35]"
              }`}
            >
              About
            </Link>
            {/* <Link
              href="/space-education"
              className={`text-sm xl:text-base font-medium transition-colors ${
                isActive("/space-education")
                  ? "text-[#ff6b35] border-b-2 border-[#ff6b35]"
                  : "text-white/80 hover:text-[#ff6b35]"
              }`}
            >
              Space Education
            </Link> */}
            <Link
              href="/workshop"
              className={`text-sm xl:text-base font-medium transition-colors ${
                isActive("/workshop")
                  ? "text-[#ff6b35] border-b-2 border-[#ff6b35]"
                  : "text-white/80 hover:text-[#ff6b35]"
              }`}
            >
              Workshop
            </Link>
            <Link
              href="/press-releases"
              className={`text-sm xl:text-base font-medium transition-colors ${
                isActive("/press-releases")
                  ? "text-[#ff6b35] border-b-2 border-[#ff6b35]"
                  : "text-white/80 hover:text-[#ff6b35]"
              }`}
            >
              Press Releases
            </Link>
            <Link
              href="/events"
              className={`text-sm xl:text-base font-medium transition-colors ${
                isActive("/events")
                  ? "text-[#ff6b35] border-b-2 border-[#ff6b35]"
                  : "text-white/80 hover:text-[#ff6b35]"
              }`}
            >
              Events
            </Link>
            <Link href="/collaborate">
              <Button size="sm" className="bg-[#ff6b35] hover:bg-[#ff8555] text-white font-semibold">
                Collaborate
              </Button>
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-white hover:text-[#ff6b35] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-white/10 pt-4">
            <Link
              href="/about"
              className={`text-base font-medium transition-colors ${
                isActive("/about") ? "text-[#ff6b35]" : "text-white/80 hover:text-[#ff6b35]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/space-education"
              className={`text-base font-medium transition-colors ${
                isActive("/space-education") ? "text-[#ff6b35]" : "text-white/80 hover:text-[#ff6b35]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Space Education
            </Link>
            <Link
              href="/workshop"
              className={`text-base font-medium transition-colors ${
                isActive("/workshop") ? "text-[#ff6b35]" : "text-white/80 hover:text-[#ff6b35]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Workshop
            </Link>
            <Link
              href="/press-releases"
              className={`text-base font-medium transition-colors ${
                isActive("/press-releases") ? "text-[#ff6b35]" : "text-white/80 hover:text-[#ff6b35]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Press Releases
            </Link>
            <Link
              href="/events"
              className={`text-base font-medium transition-colors ${
                isActive("/events") ? "text-[#ff6b35]" : "text-white/80 hover:text-[#ff6b35]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link href="/collaborate" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" className="bg-[#ff6b35] hover:bg-[#ff8555] text-white font-semibold w-full">
                Collaborate
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
