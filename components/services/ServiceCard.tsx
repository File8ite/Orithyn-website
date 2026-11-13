import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
import { Code2, Globe, Smartphone, Server, Building2, Bot, Wrench, LucideIcon, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Smartphone,
  Server,
  Building2,
  Bot,
  Wrench,
};

type ServiceCardProps = {
  id?: string;
  title: string;
  description: string;
  shortDescription?: string;
  businessProblem?: string;
  businessBenefit?: string;
  iconName: string;
  capabilities?: string[];
};

export default function ServiceCard({
  id,
  title,
  shortDescription,
  description,
  businessProblem,
  businessBenefit,
  iconName,
}: ServiceCardProps) {
  const Icon = iconMap[iconName] || Code2;
  const displayText = shortDescription || description;

  return (
    <Card id={id} className="h-full flex flex-col justify-between">
      <div className="space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-inner">
          <Icon className="h-6 w-6" />
        </div>

        <Heading level={3} className="text-xl font-bold text-white leading-snug">
          {title}
        </Heading>

        <Text className="text-sm text-zinc-300 leading-relaxed">
          {displayText}
        </Text>

        {(businessProblem || businessBenefit) && (
          <div className="pt-3 border-t border-zinc-800/60 space-y-2.5 text-xs">
            {businessProblem && (
              <div>
                <span className="font-semibold text-red-400/90 text-[11px] uppercase tracking-wider block mb-0.5">
                  Business Problem Addressed:
                </span>
                <p className="text-zinc-400 leading-relaxed text-[11px]">{businessProblem}</p>
              </div>
            )}
            {businessBenefit && (
              <div>
                <span className="font-semibold text-amber-400 text-[11px] uppercase tracking-wider block mb-0.5">
                  Practical Business Benefit:
                </span>
                <p className="text-zinc-300 leading-relaxed text-[11px]">{businessBenefit}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="pt-5 mt-4 border-t border-zinc-800/80">
        <Link
          href={`/services#${id || ""}`}
          className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition inline-flex items-center gap-1"
        >
          View Full Specifications →
        </Link>
      </div>
    </Card>
  );
}