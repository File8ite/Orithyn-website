import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ShieldCheck, Target, Users, Code2, ArrowRight, Award, Layers } from "lucide-react";

export const metadata = {
  title: "About Us | Orythyn Inc.",
  description: "Learn about Orythyn Inc., our mission, engineering philosophy, and commitment to building reliable software products.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        {/* Header Hero */}
        <Section className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-900/40">
          <div className="max-w-3xl space-y-6 px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Company Overview</span>
            <Heading level={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Engineering Software for Real Business Value.
            </Heading>
            <Text className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Orythyn Inc. was founded on the belief that custom software development should be transparent, disciplined, and directly tied to measurable business outcomes.
            </Text>
          </div>
        </Section>

        {/* Mission & Philosophy */}
        <Section className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 space-y-4 backdrop-blur-md">
              <div className="p-3 w-fit rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <Target className="h-6 w-6 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                To empower organizations with modern digital products that eliminate operational friction, automate repetitive tasks, and enable long-term growth with software that just works.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 space-y-4 backdrop-blur-md">
              <div className="p-3 w-fit rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <ShieldCheck className="h-6 w-6 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Engineering Philosophy</h2>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                We adhere to strict engineering standards: type-safety, clean architecture, automated testing, responsive accessibility, and performance optimization.
              </p>
            </div>
          </div>
        </Section>

        {/* Leadership & Values */}
        <Section className="py-16 md:py-24 bg-zinc-900/80 border border-zinc-800 rounded-3xl my-8 mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 backdrop-blur-xl">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Leadership & Standards</span>
            <Heading level={2} className="text-3xl sm:text-4xl font-extrabold text-white">
              Led by Engineers &amp; Problem Solvers
            </Heading>
            <Text className="text-base text-zinc-300">
              Orythyn is led by Chijioke Echefulachi Prince, working alongside experienced full-stack engineers, cloud architects, and product designers.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-3">
              <Code2 className="h-6 w-6 text-yellow-400" />
              <h3 className="text-lg font-bold text-white">Quality Code</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Every project is architected with modern frameworks like Next.js 16, TypeScript, and cloud-native microservices.
              </p>
            </div>
            <div className="bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-3">
              <Users className="h-6 w-6 text-yellow-400" />
              <h3 className="text-lg font-bold text-white">Client Partnership</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                We work directly with founders, executives, and team leads to provide continuous updates and alignment.
              </p>
            </div>
            <div className="bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-3">
              <ShieldCheck className="h-6 w-6 text-yellow-400" />
              <h3 className="text-lg font-bold text-white">Reliability</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                From initial security audits to ongoing support SLAs, we ensure your software stays operational 24/7.
              </p>
            </div>
          </div>
        </Section>

        {/* Action Call */}
        <Section className="py-16 md:py-24 text-center">
          <div className="space-y-6 max-w-xl mx-auto px-4">
            <Heading level={2} className="text-3xl sm:text-4xl font-extrabold text-white">Ready to Start a Conversation?</Heading>
            <Text className="text-base text-zinc-300">Discover how Orythyn can partner with your team on your next digital project.</Text>
            <div className="pt-2">
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
