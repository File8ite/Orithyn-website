import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ShieldCheck, Target, Users, Code2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Orythyn Inc.",
  description: "Learn about Orythyn Inc., our mission, engineering philosophy, and commitment to building reliable software products.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        {/* Header Hero */}
        <Section className="py-20 bg-neutral-50/70 border-b border-neutral-200/60">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Company Overview</span>
            <Heading level={1} className="text-4xl font-extrabold sm:text-5xl text-neutral-900 tracking-tight">
              Engineering Software for Real Business Value.
            </Heading>
            <Text className="text-lg text-neutral-600 leading-relaxed">
              Orythyn Inc. was founded on the belief that custom software development should be transparent, disciplined, and directly tied to measurable business outcomes.
            </Text>
          </div>
        </Section>

        {/* Mission & Vision */}
        <Section className="py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="p-3 w-fit rounded-xl bg-blue-50 border border-blue-100">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Our Mission</h2>
              <p className="text-neutral-600 leading-relaxed">
                To empower organizations with modern digital products that eliminate operational friction, automate repetitive tasks, and enable long-term growth with software that just works.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-3 w-fit rounded-xl bg-emerald-50 border border-emerald-100">
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Engineering Philosophy</h2>
              <p className="text-neutral-600 leading-relaxed">
                We adhere to strict engineering standards: type-safety, clean architecture, automated testing, responsive accessibility, and performance optimization.
              </p>
            </div>
          </div>
        </Section>

        {/* Core Leadership & Values */}
        <Section className="py-20 bg-neutral-900 text-white rounded-3xl my-12 mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Leadership & Team</span>
            <Heading level={2} className="text-3xl font-extrabold text-white">
              Led by Engineers & Problem Solvers
            </Heading>
            <Text className="text-base text-neutral-400">
              Orythyn is led by Chijioke Echefulachi Prince, working alongside experienced full-stack engineers, cloud architects, and product designers.
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-800/80 p-6 rounded-2xl border border-neutral-700 space-y-3">
              <Code2 className="h-6 w-6 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Quality Code</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Every project is architected with modern frameworks like Next.js 16, TypeScript, and cloud-native services.
              </p>
            </div>
            <div className="bg-neutral-800/80 p-6 rounded-2xl border border-neutral-700 space-y-3">
              <Users className="h-6 w-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Client Partnership</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                We work directly with founders, executives, and team leads to provide continuous updates and alignment.
              </p>
            </div>
            <div className="bg-neutral-800/80 p-6 rounded-2xl border border-neutral-700 space-y-3">
              <ShieldCheck className="h-6 w-6 text-purple-400" />
              <h3 className="text-lg font-bold text-white">Reliability</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                From initial security audits to ongoing support SLAs, we ensure your software stays operational 24/7.
              </p>
            </div>
          </div>
        </Section>

        {/* Action Call */}
        <Section className="py-16 text-center">
          <div className="space-y-6 max-w-xl mx-auto">
            <Heading level={2} className="text-3xl font-bold">Ready to Start a Conversation?</Heading>
            <Text className="text-neutral-600">Discover how Orythyn can partner with your team on your next digital project.</Text>
            <div>
              <Link href="/contact">
                <Button variant="primary" className="h-12 px-8 inline-flex items-center gap-2">
                  Get in Touch <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
