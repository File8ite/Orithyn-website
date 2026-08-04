import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Industries from "@/components/sections/Industries";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonLd";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Industries & Domain Expertise | Orythyn Inc.",
  description:
    "Tailored software engineering, AI assistants, and workflow automation for SMEs, Startups, Schools, NGOs, and E-Commerce.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "Home", url: "https://orithyn.com" },
    { name: "Industries", url: "https://orithyn.com/industries" },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans antialiased">
      <JsonLd data={breadcrumb} />
      <Navbar />
      <main className="flex-1">
        {/* Page Hero */}
        <Section className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-900/40">
          <div className="max-w-3xl space-y-4 px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Target Industry Solutions</span>
            <Heading level={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Software Engineered for Your Specific Sector.
            </Heading>
            <Text className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              We design and build custom software tailored to the unique operational, compliance, and growth requirements of your industry.
            </Text>
          </div>
        </Section>

        {/* Industries Grid */}
        <Industries />

        {/* Bottom Callout */}
        <Section className="py-16 md:py-24 text-center">
          <div className="max-w-2xl mx-auto space-y-6 px-4">
            <Heading level={2} className="text-3xl font-extrabold text-white">
              Don&apos;t See Your Specific Industry Listed?
            </Heading>
            <Text className="text-base text-zinc-300">
              Our core engineering architecture is domain-agnostic. Contact our team to discuss your custom software requirements.
            </Text>
            <div>
              <Link href="/contact">
                <Button variant="primary" className="h-12 px-8 inline-flex items-center gap-2">
                  Discuss Your Sector Requirements <ArrowRight className="h-4 w-4" />
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
