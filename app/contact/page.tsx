"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Custom Software Development",
    message: "",
  });

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
      `*Service Required:* ${formData.service}\n` +
      `*Details:* ${formData.message}`
    );
    
    // Open WhatsApp with prefilled message
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        {/* Contact Hero */}
        <Section className="py-16 bg-neutral-50/70 border-b border-neutral-200/60">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Get in Touch</span>
            <Heading level={1} className="text-4xl font-extrabold sm:text-5xl text-neutral-900 tracking-tight">
              Let&apos;s Discuss Your Project.
            </Heading>
            <Text className="text-lg text-neutral-600">
              Reach out directly on WhatsApp or submit your project details below to get an instant response.
            </Text>
          </div>
        </Section>

        {/* Contact Content */}
        <Section className="py-20">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Channels</h2>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We reply to all WhatsApp messages and email inquiries promptly.
                </p>
              </div>

              <div className="space-y-6">
                {/* WhatsApp Quick Link */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80">
                  <div className="p-3 rounded-xl bg-emerald-600 text-white shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-emerald-950">Chat on WhatsApp</h3>
                    <p className="text-xs text-emerald-800 font-mono">+234 814 852 6658</p>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hello%20Orythyn,%20I'd%20like%20to%20discuss%20a%20project`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:underline pt-1"
                    >
                      Open WhatsApp Chat →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">Email Us</h3>
                    <a href="mailto:contact@orithyn.com" className="text-sm text-blue-600 hover:underline">
                      contact@orithyn.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-700 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">Phone / Call</h3>
                    <a href="tel:+2348148526658" className="text-sm text-neutral-700 hover:underline">
                      +234 814 852 6658
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">Company</h3>
                    <p className="text-sm text-neutral-600">Orythyn Inc.</p>
                  </div>
                </div>
              </div>

              {/* GitHub repo callout */}
              <div className="p-6 rounded-2xl bg-neutral-900 text-white space-y-3">
                <h3 className="text-sm font-bold">Open Source &amp; Repository</h3>
                <p className="text-xs text-neutral-400">
                  Explore our public code repositories and website source on GitHub.
                </p>
                <a
                  href="https://github.com/Orithyn/website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:underline"
                >
                  github.com/Orithyn/website →
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-md">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">Inquiry Prepared for WhatsApp!</h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    WhatsApp has opened in a new tab with your pre-filled inquiry. You can also send an email to <strong className="text-neutral-900">contact@orithyn.com</strong>.
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
                    <h2 className="text-xl font-bold text-neutral-900">Send an Enquiry</h2>
                    <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                      <MessageSquare className="h-3.5 w-3.5" /> Direct to WhatsApp
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Primary Need
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none bg-white"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your goals, timeline, or requirements..."
                      className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="h-12 w-full justify-center inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white">
                    Send via WhatsApp <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
