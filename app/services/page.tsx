import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { services } from "@/lib/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Services | Orythyn Inc.",
  description: "Explore custom software development, business automation, web applications, and AI solutions by Orythyn Inc.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        {/* Page Hero */}
        <Section className="py-20 bg-neutral-50/70 border-b border-neutral-200/60">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Engineering Offerings</span>
            <Heading level={1} className="text-4xl font-extrabold sm:text-5xl text-neutral-900 tracking-tight">
              Software Services Tailored for Growth.
            </Heading>
            <Text className="text-lg text-neutral-600 leading-relaxed">
              Whether you need to build a new web application from scratch, automate complex internal operations, or integrate custom AI capabilities, Orythyn delivers end-to-end software solutions.
            </Text>
          </div>
        </Section>

        {/* Services List */}
        <Section className="py-20">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid md:grid-cols-12 gap-8 items-center p-8 rounded-3xl border border-neutral-200/80 bg-white shadow-sm hover:shadow-md transition ${
                  index % 2 === 1 ? "bg-neutral-50/50" : ""
                }`}
              >
                <div className="md:col-span-8 space-y-4">
                  <div className="text-4xl">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-neutral-900">{service.title}</h2>
                  <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                  <div className="pt-2 flex items-center gap-4 text-xs font-medium text-neutral-500">
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600"/> Custom Architecture</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600"/> SLA Maintenance Option</span>
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center">
                  <Link href="/contact">
                    <Button variant="primary" className="h-11 px-6 text-sm inline-flex items-center gap-2">
                      Discuss Your Project <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
