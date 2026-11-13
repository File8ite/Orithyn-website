import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import ProjectEstimator from "@/components/estimator/ProjectEstimator";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonLd";

export const metadata = {
  title: "Project Cost & Scope Calculator | Orithyn Inc.",
  description:
    "Interactively calculate estimated budget ranges and turnaround timelines for custom web apps, mobile apps, business systems, and AI automation.",
  alternates: {
    canonical: "/estimator",
  },
};

export default function EstimatorPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "Home", url: "https://orithyn.com" },
    { name: "Project Estimator", url: "https://orithyn.com/estimator" },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans antialiased">
      <JsonLd data={breadcrumb} />
      <Navbar />
      <main className="flex-1">
        {/* Page Hero */}
        <Section className="py-16 md:py-20 border-b border-zinc-800/80 bg-zinc-900/40">
          <div className="max-w-3xl space-y-4 px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Interactive Scope Tool</span>
            <Heading level={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Project Cost &amp; Timeline Calculator.
            </Heading>
            <Text className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Tailor your software specifications below to get real-time price ranges and turnaround estimates for your business.
            </Text>
          </div>
        </Section>

        {/* Estimator Tool */}
        <ProjectEstimator />
      </main>
      <Footer />
    </div>
  );
}
