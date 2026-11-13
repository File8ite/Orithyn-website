import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import CaseStudiesGallery from "@/components/sections/CaseStudiesGallery";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonLd";

export const metadata = {
  title: "Projects & Reference Architectures | Orithyn Inc.",
  description:
    "Explore internal software applications, AI prototypes, and technical architectures engineered by Orithyn Inc.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "Home", url: "https://orithyn.com" },
    { name: "Portfolio", url: "https://orithyn.com/portfolio" },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans antialiased">
      <JsonLd data={breadcrumb} />
      <Navbar />
      <main className="flex-1">
        {/* Page Hero */}
        <Section id="portfolio-hero" className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-900/40">
          <div className="max-w-3xl space-y-4 px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Technical Work</span>
            <Heading level={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Projects &amp; Reference Architectures.
            </Heading>
            <Text className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Explore our internal platforms, conversational AI prototypes, and technical reference architectures built to solve real business challenges.
            </Text>
          </div>
        </Section>

        {/* Gallery Component */}
        <CaseStudiesGallery />
      </main>
      <Footer />
    </div>
  );
}
