import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
import { differentiators } from "@/lib/whyOrythyn";
import { TrendingUp, ShieldCheck, MessageSquare, Handshake, Zap } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="h-6 w-6 text-yellow-400" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-yellow-400" />,
  MessageSquare: <MessageSquare className="h-6 w-6 text-yellow-400" />,
  Handshake: <Handshake className="h-6 w-6 text-yellow-400" />,
  Zap: <Zap className="h-6 w-6 text-yellow-400" />,
};

export default function WhyOrythyn() {
  return (
    <Section id="about" className="py-16 md:py-24 border-y border-zinc-800/80 bg-zinc-950/60">
      <div className="max-w-3xl space-y-4 mb-12 md:mb-16 text-center mx-auto px-4">
        <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">The Orythyn Advantage</span>
        <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Why Ambitious Teams Partner With Us
        </Heading>
        <Text className="text-base sm:text-lg text-zinc-300">
          We bring technical rigor, business accountability, and long-term commitment to every line of code we write.
        </Text>
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((diff) => (
          <Card key={diff.title} className="p-8 bg-zinc-900/60 border-zinc-800/80 shadow-xl hover:border-yellow-500/50 transition">
            <div className="p-3 w-fit rounded-xl bg-yellow-500/10 border border-yellow-500/20 mb-6">
              {iconMap[diff.iconName]}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{diff.title}</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">{diff.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
