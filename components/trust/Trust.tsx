import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import TrustCard from "./TrustCard";
import { trustPrinciples } from "@/lib/trust";

export default function Trust() {
  return (
    <Section className="bg-neutral-50/70 border-y border-neutral-200/60 py-20">
      <div className="max-w-3xl text-center mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Core Principles</span>
        <Heading level={2} className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
          Why Organizations Trust Orythyn
        </Heading>
        <Text className="text-base text-neutral-600 max-w-2xl mx-auto">
          Great software is built on more than code. It is built on disciplined engineering, transparent communication, and long-term partnership.
        </Text>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {trustPrinciples.map((principle) => (
          <TrustCard
            key={principle.title}
            {...principle}
          />
        ))}
      </div>
    </Section>
  );
}