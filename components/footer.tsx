import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="mb-4">
            <Image
              src="/brand.jpg"
              alt="Space Kidz India Logo"
              width={220}
              height={60}
              priority
              className="object-contain"
            />
          
            <p className="text-white/60 text-sm leading-relaxed">
              Empowering the next generation of space explorers through innovation and education
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/60 hover:text-[#ff6b35] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/collaborate" className="text-white/60 hover:text-[#ff6b35] transition-colors">
                  Collaborate
                </Link>
              </li>
              <li>
                <Link href="/press-releases" className="text-white/60 hover:text-[#ff6b35] transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Programs</h3>
            <ul className="space-y-2 text-sm">
             
              <li>
                <Link href="/workshop" className="text-white/60 hover:text-[#ff6b35] transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/60 hover:text-[#ff6b35] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/60 hover:text-[#ff6b35] transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:support@spacekidzindia.com"
                  className="text-white/60 hover:text-[#ff6b35] transition-colors"
                >
                  support@spacekidzindia.com
                </a>
              </li>
              <li>
                <Link href="/collaborate" className="text-white/60 hover:text-[#ff6b35] transition-colors">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Space Kidz India. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#ff6b35] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-[#ff6b35] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
