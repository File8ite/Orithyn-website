"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Phone, Sparkles } from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const scopeParam = searchParams.get("scope");

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Custom Software Development",
    message: "",
  });

  // Pre-fill message if scope parameter is passed from estimator
  useEffect(() => {
    if (scopeParam) {
      setFormData((prev) => ({
        ...prev,
        message: scopeParam,
      }));
    }
  }, [scopeParam]);

  const whatsappNumber = "2348148526658";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct WhatsApp message URL
    const text = encodeURIComponent(
      `*New Website Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Company:* ${formData.company || "N/A"}\n` +
      `*Service Required:* ${formData.service}\n\n` +
      `*Project Specifications / Details:*\n${formData.message}`
    );
    
    // Open WhatsApp with prefilled message
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="lg:col-span-7 bg-zinc-900/80 p-6 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl backdrop-blur-xl">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">Inquiry Prepared for WhatsApp!</h3>
          <p className="text-sm text-zinc-300 max-w-md mx-auto">
            WhatsApp has opened in a new tab with your pre-filled inquiry. You can also send an email to <strong className="text-white">contact@orithyn.com</strong>.
          </p>
          <Button
            variant="secondary"
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", company: "", service: "Custom Software Development", message: "" });
            }}
            className="mt-4"
          >
            Submit Another Inquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Send an Enquiry</h2>
            {scopeParam && (
              <span className="text-xs text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Pre-filled Scope Estimate
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@company.com"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                Company / Organization
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Acme Corp"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                Primary Need
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-yellow-400 focus:outline-none"
              >
                <option value="Custom Software Development">Custom Software Development</option>
                <option value="Business Automation">Business Automation</option>
                <option value="Web Applications">Web Application</option>
                <option value="AI-Enhanced Solutions">AI-Enhanced Solutions</option>
                <option value="Software Maintenance & Support">Software Maintenance & Support</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
              Project Details / Estimated Scope *
            </label>
            <textarea
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Briefly describe your goals, timeline, or requirements..."
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none font-mono text-xs leading-relaxed"
            />
          </div>

          <Button type="submit" variant="primary" className="h-12 w-full justify-center inline-flex items-center gap-2">
            Send via WhatsApp <Send className="h-4 w-4" />
          </Button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  const whatsappNumber = "2348148526658";

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        {/* Contact Hero */}
        <Section className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-900/40">
          <div className="max-w-3xl space-y-4 px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Get in Touch</span>
            <Heading level={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Let&apos;s Discuss Your Project.
            </Heading>
            <Text className="text-base sm:text-lg text-zinc-300">
              Reach out directly on WhatsApp or submit your project details below to get an instant response.
            </Text>
          </div>
        </Section>

        {/* Contact Content */}
        <Section className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Channels</h2>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  We reply to all WhatsApp messages and email inquiries promptly.
                </p>
              </div>

              <div className="space-y-6">
                {/* WhatsApp Quick Link */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/80 border border-yellow-500/30">
                  <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-400 shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">Chat on WhatsApp</h3>
                    <p className="text-xs text-yellow-400 font-mono">+234 814 852 6658</p>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hello%20Orythyn,%20I'd%20like%20to%20discuss%20a%20project`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-yellow-400 hover:underline pt-1"
                    >
                      Open WhatsApp Chat →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-yellow-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Email Us</h3>
                    <a href="mailto:contact@orithyn.com" className="text-sm text-yellow-400 hover:underline">
                      contact@orithyn.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-yellow-400 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Phone / Direct Line</h3>
                    <a href="tel:+2348148526658" className="text-sm text-zinc-300 hover:underline">
                      +234 814 852 6658
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-yellow-400 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Company</h3>
                    <p className="text-sm text-zinc-300">Orythyn Inc.</p>
                  </div>
                </div>
              </div>

              {/* GitHub repo callout */}
              <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-white space-y-3">
                <h3 className="text-sm font-bold">Source Code &amp; Repository</h3>
                <p className="text-xs text-zinc-400">
                  Explore our public code repositories and engineering standards on GitHub.
                </p>
                <a
                  href="https://github.com/File8ite/Orithyn-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-yellow-400 hover:underline"
                >
                  github.com/File8ite/Orithyn-website →
                </a>
              </div>
            </div>

            {/* Right: Contact Form Wrapped in Suspense */}
            <Suspense fallback={<div className="lg:col-span-7 p-10 bg-zinc-900/80 rounded-3xl border border-zinc-800 text-center text-zinc-400">Loading form...</div>}>
              <ContactFormContent />
            </Suspense>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
