import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
import { differentiators } from "@/lib/whyOrythyn";
import { TrendingUp, ShieldCheck, MessageSquare, Handshake, Zap } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="h-6 w-6 text-blue-600" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-blue-600" />,
  MessageSquare: <MessageSquare className="h-6 w-6 text-blue-600" />,
  Handshake: <Handshake className="h-6 w-6 text-blue-600" />,
  Zap: <Zap className="h-6 w-6 text-blue-600" />,
};

export default function WhyOrythyn() {
  return (
    <Section id="about" className="py-20 bg-neutral-50/80 border-y border-neutral-200/60">
      <div className="max-w-3xl space-y-4 mb-16 text-center mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">The Orythyn Difference</span>
        <Heading level={2} className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
          Why Ambitious Teams Partner With Us
        </Heading>
        <Text className="text-base text-neutral-600">
          We bring technical rigor, business accountability, and long-term commitment to every line of code we write.
        </Text>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((diff) => (
          <Card key={diff.title} className="p-8 bg-white border-neutral-200/80 shadow-sm hover:shadow-md transition">
            <div className="p-3 w-fit rounded-xl bg-blue-50 border border-blue-100 mb-6">
              {iconMap[diff.iconName]}
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">{diff.title}</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">{diff.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
