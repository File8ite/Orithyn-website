import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
import { industries } from "@/lib/industries";
import { GraduationCap, Building2, Rocket, HeartHandshake, Truck, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="h-6 w-6 text-blue-600" />,
  Building2: <Building2 className="h-6 w-6 text-blue-600" />,
  Rocket: <Rocket className="h-6 w-6 text-blue-600" />,
  HeartHandshake: <HeartHandshake className="h-6 w-6 text-blue-600" />,
  Truck: <Truck className="h-6 w-6 text-blue-600" />,
};

export default function Industries() {
  return (
    <Section id="industries" className="py-20 bg-neutral-900 text-white rounded-3xl my-12 mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12">
      <div className="max-w-3xl space-y-4 mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Industry Expertise</span>
        <Heading level={2} className="text-3xl font-extrabold text-white sm:text-4xl">
          Solutions Crafted for Your Domain
        </Heading>
        <Text className="text-base text-neutral-400">
          We combine domain-specific insights with solid engineering to tackle industry challenges head-on.
        </Text>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => (
          <Card key={ind.id} className="bg-neutral-800/80 border-neutral-700/60 p-6 flex flex-col justify-between text-neutral-200 hover:border-neutral-500 transition shadow-lg">
            <div className="space-y-4">
              <div className="p-3 w-fit rounded-xl bg-neutral-900 border border-neutral-700">
                {iconMap[ind.iconName]}
              </div>
              <h3 className="text-xl font-bold text-white">{ind.title}</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">{ind.description}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-700/80 space-y-2 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-neutral-200">Outcome:</strong> {ind.outcomes}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
