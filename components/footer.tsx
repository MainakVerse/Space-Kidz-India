import Link from "next/link"
import Image from "next/image"
import { MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-black text-white pt-16 pb-10">
      {/* Top glow divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/60 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/brand.jpg"
              alt="Space Kidz India Logo"
              width={220}
              height={60}
              priority
              className="object-contain"
            />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Empowering the next generation of space explorers through innovation and education.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Collaborate", href: "/collaborate" },
                { label: "News", href: "/press-releases" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-[#ff6b35] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white mb-4">
              Programs
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Workshops", href: "/workshop" },
                { label: "Events", href: "/events" },
                { label: "Gallery", href: "/gallery" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-[#ff6b35] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="pt-1">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 text-[#ff6b35] mt-1 shrink-0" />
                  <address className="not-italic text-white/60 leading-relaxed">
                    Shambala Facility, Ispahani Centre,
                    <br />
                    123–124, Nungambakkam High Rd,
                    <br />
                    Thousand Lights West,
                    <br />
                    Chennai, Tamil Nadu 600034
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Space Kidz India. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#ff6b35] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-[#ff6b35] transition-colors"
            >
              Terms & Conditions
            </Link>
            
                <a
                  href="mailto:support@spacekidzindia.com"
                  className="text-white/60 hover:text-[#ff6b35] transition-colors"
                >
                  support@spacekidzindia.com
                </a>
             
          </div>
        </div>
      </div>
    </footer>
  )
}
