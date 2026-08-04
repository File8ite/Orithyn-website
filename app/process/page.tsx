import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Process from "@/components/sections/Process";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonLd";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Engineering Process & Methodology | Orythyn Inc.",
  description:
    "Learn about Orythyn's disciplined software delivery process: Discovery, Architecture, Agile Sprints, Testing, Launch & SLA Maintenance.",
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "Home", url: "https://orithyn.com" },
    { name: "Process", url: "https://orithyn.com/process" },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans antialiased">
      <JsonLd data={breadcrumb} />
      <Navbar />
      <main className="flex-1">
        {/* Page Hero */}
        <Section className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-900/40">
          <div className="max-w-3xl space-y-4 px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Engineering Methodology</span>
            <Heading level={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Disciplined Delivery from Concept to SLA.
            </Heading>
            <Text className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              We eliminate guesswork with a structured, transparent software engineering workflow built on accountability and clean architecture.
            </Text>
          </div>
        </Section>

        {/* Process Component */}
        <Process />

        {/* Action Call */}
        <Section className="py-16 md:py-24 text-center">
          <div className="max-w-xl mx-auto space-y-6 px-4">
            <Heading level={2} className="text-3xl font-extrabold text-white">Ready to Experience Disciplined Engineering?</Heading>
            <Text className="text-base text-zinc-300">Book a strategy call to map out your project timeline and technical architecture.</Text>
            <div>
              <Link href="/contact">
                <Button variant="primary" className="h-12 px-8 inline-flex items-center gap-2">
                  Start Your Project <ArrowRight className="h-4 w-4" />
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
