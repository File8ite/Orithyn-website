import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { industries } from "@/lib/industries";
import { 
  HeartPulse, 
  GraduationCap, 
  Hotel, 
  Building, 
  ShoppingBag, 
  Building2, 
  Rocket, 
  Truck, 
  AlertCircle,
  Code2,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="h-6 w-6 text-amber-400" />,
  GraduationCap: <GraduationCap className="h-6 w-6 text-amber-400" />,
  Hotel: <Hotel className="h-6 w-6 text-amber-400" />,
  Building: <Building className="h-6 w-6 text-amber-400" />,
  ShoppingBag: <ShoppingBag className="h-6 w-6 text-amber-400" />,
  Building2: <Building2 className="h-6 w-6 text-amber-400" />,
  Rocket: <Rocket className="h-6 w-6 text-amber-400" />,
  Truck: <Truck className="h-6 w-6 text-amber-400" />,
};

export default function Industries() {
  return (
    <Section id="industries" className="py-16 md:py-24 border-y border-zinc-800/80 bg-zinc-950/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Industries We Serve</span>
          <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Solutions We Can Build for Your Industry
          </Heading>
          <Text className="text-base sm:text-lg text-zinc-300">
            We combine domain-specific understanding with disciplined engineering to solve operational challenges across commercial and institutional sectors.
          </Text>
        </div>

        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition shrink-0"
        >
          View All Industry Solutions <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind) => (
          <Card key={ind.id} className="bg-zinc-900/80 border-zinc-800/80 p-6 sm:p-7 flex flex-col justify-between text-zinc-200 hover:border-amber-500/50 transition shadow-xl">
            <div className="space-y-4">
              <div className="p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/20">
                {iconMap[ind.iconName] || <Building2 className="h-6 w-6 text-amber-400" />}
              </div>
              <h3 className="text-xl font-bold text-white">{ind.title}</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">{ind.description}</p>

              <div className="space-y-3 pt-3 border-t border-zinc-800/60 text-xs">
                {/* Problem */}
                <div className="space-y-1">
                  <span className="font-semibold text-red-400/90 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" /> Business Problem
                  </span>
                  <p className="text-zinc-400 leading-relaxed text-[11px]">{ind.businessProblem}</p>
                </div>

                {/* Solution */}
                <div className="space-y-1">
                  <span className="font-semibold text-amber-400 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                    <Code2 className="h-3.5 w-3.5 shrink-0" /> Solution We Build
                  </span>
                  <p className="text-zinc-300 leading-relaxed text-[11px]">{ind.solution}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-zinc-800/80 text-xs">
              <span className="font-semibold text-emerald-400 flex items-center gap-1.5 text-[11px] uppercase tracking-wider mb-1">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> Business Benefit
              </span>
              <p className="text-zinc-300 text-[11px] leading-relaxed">{ind.benefit}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
