import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#ff6b35]">Terms & Conditions</h1>
          <p className="text-white/60 mb-12">Last updated: December 2024</p>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Space Kidz India website, you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials on Space Kidz India's website
                for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on Space Kidz India's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Educational Programs and Workshops</h2>
              <p className="mb-4">
                Participation in Space Kidz India's educational programs, workshops, and events is subject to the
                following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Registration is required for all programs and workshops</li>
                <li>Age restrictions may apply to certain programs</li>
                <li>Parental consent is required for participants under 18 years of age</li>
                <li>Payment terms and refund policies will be clearly stated for each program</li>
                <li>Safety guidelines must be followed during all hands-on activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p>
                All content, designs, graphics, logos, and materials on the Space Kidz India website are protected by
                intellectual property laws and are the property of Space Kidz India or its content suppliers. The
                compilation of all content on this site is the exclusive property of Space Kidz India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. User Conduct</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website for any unlawful purpose or to solicit illegal activity</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Interfere with or disrupt the website or servers connected to the website</li>
                <li>Upload or transmit viruses or any other type of malicious code</li>
                <li>Collect or harvest personal data of other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Photography and Media</h2>
              <p>
                By participating in Space Kidz India programs and events, you grant permission for photographs, videos,
                and other media taken during these activities to be used for promotional and educational purposes. If
                you wish to opt out, please notify us in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer</h2>
              <p>
                The materials on Space Kidz India's website are provided on an 'as is' basis. Space Kidz India makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitations of Liability</h2>
              <p>
                In no event shall Space Kidz India or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on Space Kidz India's website, even if Space Kidz India or an
                authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Links</h2>
              <p>
                Space Kidz India's website may contain links to third-party websites or services that are not owned or
                controlled by Space Kidz India. We have no control over and assume no responsibility for the content,
                privacy policies, or practices of any third-party websites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Modifications to Terms</h2>
              <p>
                Space Kidz India may revise these terms of service at any time without notice. By using this website,
                you are agreeing to be bound by the then-current version of these terms of service. We encourage you to
                review these terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India, and you
                irrevocably submit to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
              <p className="mb-4">If you have any questions about these Terms & Conditions, please contact us:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="mb-2">
                  <strong>Space Kidz India</strong>
                </p>
                <p className="mb-2">Email: info@spacekidzindia.com</p>
                <p className="mb-2">Phone: +91 12345 67890</p>
                <p>Location: Chennai, Tamil Nadu, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
