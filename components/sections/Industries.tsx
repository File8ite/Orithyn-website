import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
import { industries } from "@/lib/industries";
import { GraduationCap, Building2, Rocket, HeartHandshake, Truck, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="h-6 w-6 text-yellow-400" />,
  Building2: <Building2 className="h-6 w-6 text-yellow-400" />,
  Rocket: <Rocket className="h-6 w-6 text-yellow-400" />,
  HeartHandshake: <HeartHandshake className="h-6 w-6 text-yellow-400" />,
  Truck: <Truck className="h-6 w-6 text-yellow-400" />,
};

export default function Industries() {
  return (
    <Section id="industries" className="py-16 md:py-24 bg-zinc-950/80 border border-zinc-800/80 rounded-3xl my-8 mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 backdrop-blur-xl">
      <div className="max-w-3xl space-y-4 mb-12 md:mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Industry Expertise</span>
        <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Solutions Crafted for Your Domain
        </Heading>
        <Text className="text-base sm:text-lg text-zinc-300">
          We combine domain-specific insights with solid engineering to tackle industry challenges head-on.
        </Text>
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => (
          <Card key={ind.id} className="bg-zinc-900/80 border-zinc-800/80 p-6 sm:p-8 flex flex-col justify-between text-zinc-200 hover:border-yellow-500/50 transition shadow-xl">
            <div className="space-y-4">
              <div className="p-3 w-fit rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                {iconMap[ind.iconName]}
              </div>
              <h3 className="text-xl font-bold text-white">{ind.title}</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{ind.description}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 space-y-2 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-200">Outcome:</strong> {ind.outcomes}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
