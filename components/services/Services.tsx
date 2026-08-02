import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/lib/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <Section id="services" className="py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Engineering Solutions</span>
          <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Services Tailored for Impact
          </Heading>
          <Text className="text-base sm:text-lg text-zinc-300">
            We partner with organizations to design, build, and support software products that eliminate bottlenecks and unlock growth.
          </Text>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition"
        >
          View All Service Specifications <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
          />
        ))}
      </div>
    </Section>
  );
}