import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import TrustCard from "./TrustCard";
import { trustPrinciples } from "@/lib/trust";

export default function Trust() {
  return (
    <Section className="py-16 md:py-24 border-y border-zinc-800/80 bg-zinc-950/60">
      <div className="max-w-3xl text-center mx-auto space-y-4 px-4">
        <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Core Engineering Principles</span>
        <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Why Organizations Trust Orithyn
        </Heading>
        <Text className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
          Great software is built on more than code. It is built on disciplined engineering, transparent communication, and long-term partnership.
        </Text>
      </div>

      <div className="mt-12 md:mt-16 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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