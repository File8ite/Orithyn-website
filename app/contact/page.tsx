import { Suspense } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import ContactForm from "@/components/contact/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonLd";
import { WHATSAPP_BUSINESS_URL } from "@/lib/contactConfig";
import { Mail, MapPin, MessageSquare, Phone, Code2 } from "lucide-react";

export const metadata = {
  title: "Contact & Project Inquiries",
  description:
    "Get in touch with Orithyn Inc. to discuss your custom software development, web application, mobile app, or business management system requirements.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "Home", url: "https://orithyn.com" },
    { name: "Contact", url: "https://orithyn.com/contact" },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans antialiased">
      <JsonLd data={breadcrumb} />
      <Navbar />
      <main className="flex-1">
        {/* Contact Hero */}
        <Section className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-900/40">
          <div className="max-w-3xl space-y-4 px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Get in Touch
            </span>
            <Heading level={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Let&apos;s Discuss Your Project.
            </Heading>
            <Text className="text-base sm:text-lg text-zinc-300">
              Reach out directly via our enquiry form, WhatsApp, or email to discuss your software specifications with our engineering team.
            </Text>
          </div>
        </Section>

        {/* Main Content */}
        <Section className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Column: Direct Contact Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Direct Channels</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Have an urgent requirement or prefer direct conversation? Reach us directly on WhatsApp or email.
                </p>
              </div>

              <div className="space-y-4">
                {/* WhatsApp Quick Card */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/80 border border-amber-500/30 shadow-lg">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <MessageSquare className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">WhatsApp Business</h3>
                    <p className="text-xs text-zinc-400">Direct conversation with our team</p>
                    <a
                      href={WHATSAPP_BUSINESS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with us on WhatsApp (opens in a new tab)"
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 transition pt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                    >
                      Chat with us on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-amber-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-semibold text-white">Email Us Directly</h3>
                    <p className="text-xs text-zinc-400">For RFPs, specs, and formal inquiries</p>
                    <a
                      href="mailto:contact@orithyn.com"
                      className="text-xs sm:text-sm text-amber-400 hover:underline block pt-1 font-mono"
                    >
                      contact@orithyn.com
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-amber-400 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-semibold text-white">Phone / Direct Line</h3>
                    <p className="text-xs text-zinc-400">Direct voice support</p>
                    <a
                      href="tel:+2348148526658"
                      className="text-xs sm:text-sm text-zinc-300 hover:text-white transition block pt-1 font-mono"
                    >
                      +234 814 852 6658
                    </a>
                  </div>
                </div>

                {/* Location / Entity */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-amber-400 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-semibold text-white">Operating Entity</h3>
                    <p className="text-xs text-zinc-300 font-medium">Orithyn Inc.</p>
                    <p className="text-xs text-zinc-400">Worldwide Remote Software Engineering</p>
                  </div>
                </div>
              </div>

              {/* GitHub Repository Banner */}
              <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-white space-y-2.5">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Code2 className="h-4 w-4 text-amber-400" />
                  <h3 className="text-xs font-bold uppercase tracking-wider">Source Code &amp; Architecture</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Our codebase standards, open issues, and reference architectures are published transparently.
                </p>
                <a
                  href="https://github.com/Orithyn/website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition pt-1"
                >
                  github.com/Orithyn/website →
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="bg-zinc-900/80 p-10 rounded-3xl border border-zinc-800 text-center text-zinc-400">
                    Loading enquiry form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
