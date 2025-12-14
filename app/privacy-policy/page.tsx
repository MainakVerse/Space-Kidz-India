import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#ff6b35]">Privacy Policy</h1>
          <p className="text-white/60 mb-12">Last updated: December 2024</p>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Space Kidz India ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website and
                participate in our programs. Please read this privacy policy carefully. If you do not agree with the
                terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect information about you in a variety of ways, including:</p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Personal Data</h3>
              <p className="mb-4">
                Personally identifiable information that you voluntarily provide when you register for programs,
                subscribe to newsletters, or contact us. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Name and contact information (email address, phone number, postal address)</li>
                <li>Date of birth and age information (for program eligibility)</li>
                <li>Educational institution and academic details</li>
                <li>Emergency contact information</li>
                <li>Payment and billing information (processed securely through third-party providers)</li>
                <li>Parent or guardian information for participants under 18</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Usage Data</h3>
              <p className="mb-4">Information automatically collected when you visit our website, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Click-through and navigation patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process registrations and manage participation in our programs and events</li>
                <li>Send administrative information, updates, and confirmations</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send newsletters and marketing communications (with your consent)</li>
                <li>Improve our website and services based on user feedback and behavior</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Prevent fraudulent transactions and protect against security threats</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Disclosure of Your Information</h2>
              <p className="mb-4">We may share your information in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>By Law or to Protect Rights:</strong> When required by law or to protect our rights, privacy,
                  safety, or property
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or
                  acquisition
                </li>
                <li>
                  <strong>Third-Party Service Providers:</strong> With vendors who perform services on our behalf (email
                  delivery, hosting, analytics, payment processing)
                </li>
                <li>
                  <strong>Partner Organizations:</strong> With educational institutions, research partners, or sponsors
                  involved in our programs (with your consent)
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you have given us explicit permission to share your
                  information
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal
                information. However, no electronic transmission over the internet or information storage technology can
                be guaranteed to be 100% secure. While we strive to protect your personal information, we cannot
                guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Children's Privacy</h2>
              <p>
                Many of our programs are designed for children and young students. We take additional precautions to
                protect children's privacy. We obtain parental consent before collecting personal information from
                children under 18. Parents have the right to review, modify, or delete their child's personal
                information at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to track activity on our website and hold certain
                information. Cookies are files with small amounts of data that are stored on your device. You can
                instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Your Data Protection Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Access:</strong> Request copies of your personal information
                </li>
                <li>
                  <strong>Rectification:</strong> Request correction of inaccurate or incomplete information
                </li>
                <li>
                  <strong>Erasure:</strong> Request deletion of your personal information
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of processing your personal information
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to another organization
                </li>
                <li>
                  <strong>Objection:</strong> Object to our processing of your personal information
                </li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact us using the information provided below.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                or content of these external sites. We encourage you to review the privacy policies of any third-party
                sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on computers located outside of your state,
                province, country, or other governmental jurisdiction where data protection laws may differ. We take
                steps to ensure that your data is treated securely and in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
              <p className="mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="mb-2">
                  <strong>Space Kidz India - Privacy Officer</strong>
                </p>
                <p className="mb-2">Email: privacy@spacekidzindia.com</p>
                <p className="mb-2">Phone: +91 12345 67890</p>
                <p>Location: Chennai, Tamil Nadu, India</p>
              </div>
            </section>

            <section className="bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-[#ff6b35] mb-3">Your Consent</h3>
              <p>
                By using our website and services, you consent to our Privacy Policy and agree to its terms. If you do
                not agree with this policy, please do not use our website or participate in our programs.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
