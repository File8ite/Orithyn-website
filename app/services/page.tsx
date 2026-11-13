import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { services } from "@/lib/services";
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Globe, 
  Smartphone, 
  Server, 
  Building2, 
  Bot, 
  Wrench, 
  LucideIcon,
  Sparkles
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Smartphone,
  Server,
  Building2,
  Bot,
  Wrench,
};

export const metadata = {
  title: "Services & Capabilities",
  description:
    "Explore Orithyn's custom software development, web & mobile applications, backend APIs, business management systems, and technical support services.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        {/* Page Hero */}
        <Section className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-900/40">
          <div className="max-w-3xl space-y-6 px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Our Services</span>
            <Heading level={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Software Solutions Engineered for Business.
            </Heading>
            <Text className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              We design, build, and maintain custom digital software tailored to your operational processes. From business management systems to web portals, mobile apps, and backend APIs, our solutions are built to be dependable and scalable.
            </Text>
          </div>
        </Section>

        {/* Services List with Anchor IDs */}
        <Section className="py-16 md:py-24">
          <div className="space-y-12 md:space-y-16">
            {services.map((service) => {
              const Icon = iconMap[service.iconName] || Code2;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28 p-8 sm:p-10 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md shadow-xl hover:border-yellow-500/50 transition duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-amber-400 border border-yellow-500/20 shadow-inner">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Service Specification</span>
                          <h2 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h2>
                        </div>
                      </div>

                      <p className="text-zinc-300 leading-relaxed text-base sm:text-lg font-normal">
                        {service.description}
                      </p>

                      {/* Capabilities */}
                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Core Capabilities:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.capabilities.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                              <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Practical Business Benefit */}
                      <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-1 text-sm">
                        <span className="font-bold text-amber-400 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                          <Sparkles className="h-3.5 w-3.5" /> Practical Business Benefit
                        </span>
                        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                          {service.businessBenefit}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4 pt-4 lg:pt-0">
                      <Link href={`/contact?scope=${encodeURIComponent(`Inquiry regarding: ${service.title}`)}`} className="w-full sm:w-auto">
                        <Button variant="primary" className="w-full sm:w-auto h-11 px-6 text-sm inline-flex items-center justify-center gap-2">
                          Discuss This Service <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="/estimator" className="text-xs text-amber-400 hover:underline inline-flex items-center gap-1">
                        Estimate Project Cost &amp; Timeline →
                      </Link>
                    </div>
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
