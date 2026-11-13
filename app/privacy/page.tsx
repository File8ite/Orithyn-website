import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Orithyn Inc.",
  description:
    "Information on how Orithyn Inc. handles inquiries, client communications, and website visitor data transparently and securely.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        {/* Header Hero */}
        <Section className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-900/40">
          <div className="max-w-3xl space-y-6 px-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
              <Shield className="h-3.5 w-3.5" />
              <span>Legal Documentation</span>
            </div>
            <Heading level={1} className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Privacy Policy
            </Heading>
            <Text className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Last updated: August 2026. This policy explains how Orithyn Inc. collects, uses, and safeguards information when you visit our website or reach out regarding our software development services.
            </Text>
          </div>
        </Section>

        {/* Policy Content */}
        <Section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 space-y-12 text-zinc-300 leading-relaxed">
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">1. Information We Collect</h2>
              <p>
                We collect information that you voluntarily provide when contacting us via our website contact form, direct email, or direct WhatsApp messaging. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Your name and job title or organization name.</li>
                <li>Your business email address and phone number.</li>
                <li>Project requirements, scope notes, timelines, and budget ranges shared during project inquiries.</li>
              </ul>
              <p>
                We do not collect unnecessary personal data or require account creation to browse our public website.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">2. How We Use Your Information</h2>
              <p>Information provided through inquiries is used strictly for legitimate business purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Evaluating project feasibility and preparing architectural or cost estimates.</li>
                <li>Communicating directly regarding your project specifications and technical requirements.</li>
                <li>Delivering agreed software development, maintenance, and technical consulting services.</li>
                <li>Maintaining administrative and billing records for engaged client projects.</li>
              </ul>
              <p>
                We do not sell, rent, or trade your contact details or project information to third-party data brokers or marketing lists.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">3. Cookies &amp; Tracking</h2>
              <p>
                Our corporate website is designed with user privacy in mind. We do not use third-party behavioral advertising cookies, invasive tracking pixels, or cross-site fingerprinting scripts. Any storage used is strictly necessary for standard site performance, navigation state, and security.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">4. Third-Party Services</h2>
              <p>
                When you initiate communication through external platforms such as WhatsApp or direct email, your interaction is also governed by the privacy practices of those respective service providers (e.g., Meta/WhatsApp or your email provider). We advise reviewing their respective privacy policies.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">5. Data Retention &amp; Security</h2>
              <p>
                We retain inquiry and communication records only for as long as necessary to fulfill project evaluation, deliver contracted services, or comply with legitimate administrative obligations. We employ industry-standard organizational and technical practices to protect electronic records from unauthorized access.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">6. Contact &amp; Inquiries</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to request the deletion or correction of your inquiry information, please contact our team directly:
              </p>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 space-y-2">
                <p className="font-semibold text-white">Orithyn Inc.</p>
                <p className="text-zinc-400">Email: <a href="mailto:contact@orithyn.com" className="text-amber-400 hover:underline">contact@orithyn.com</a></p>
                <p className="text-zinc-400">Phone / WhatsApp: <a href="https://wa.me/2348148526658" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">+234 814 852 6658</a></p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
