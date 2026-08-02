import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { services } from "@/lib/services";
import { ArrowRight, CheckCircle2, Code2, Globe, Workflow, Cpu, Wrench, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Workflow,
  Cpu,
  Wrench,
};

export const metadata = {
  title: "Services | Orythyn Inc.",
  description: "Explore custom software development, business automation, web applications, and AI solutions by Orythyn Inc.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        {/* Page Hero */}
        <Section className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-900/40">
          <div className="max-w-3xl space-y-6 px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Engineering Offerings</span>
            <Heading level={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Software Services Tailored for Growth.
            </Heading>
            <Text className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Whether you need to build a new web application from scratch, automate complex internal operations, or integrate custom data pipelines, Orythyn delivers end-to-end software solutions.
            </Text>
          </div>
        </Section>

        {/* Services List */}
        <Section className="py-16 md:py-24">
          <div className="space-y-8 md:space-y-12">
            {services.map((service) => {
              const Icon = iconMap[service.iconName] || Code2;
              return (
                <div
                  key={service.title}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md shadow-xl hover:border-yellow-500/50 transition duration-300"
                >
                  <div className="md:col-span-8 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 shadow-inner">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                    <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">{service.description}</p>
                    <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-400">
                      <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-yellow-400"/> Custom Architecture</span>
                      <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-yellow-400"/> SLA Maintenance Option</span>
                    </div>
                  </div>

                  <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center">
                    <Link href="/contact" className="w-full sm:w-auto">
                      <Button variant="primary" className="w-full sm:w-auto h-11 px-6 text-sm inline-flex items-center justify-center gap-2">
                        Discuss Your Project <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
