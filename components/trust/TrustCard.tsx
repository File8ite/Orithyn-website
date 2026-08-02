import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { ShieldCheck, MessageSquare, TrendingUp, Rocket, Workflow, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  MessageSquare,
  TrendingUp,
  Rocket,
  Workflow,
};

type TrustCardProps = {
  title: string;
  description: string;
  iconName: string;
};

export default function TrustCard({
  title,
  description,
  iconName,
}: TrustCardProps) {
  const Icon = iconMap[iconName] || ShieldCheck;

  return (
    <Card className="h-full flex flex-col justify-between">
      <div>
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 shadow-inner">
          <Icon className="h-6 w-6" />
        </div>

        <Heading level={3} className="text-xl font-extrabold text-white mb-3">
          {title}
        </Heading>

        <Text className="text-sm text-zinc-300 leading-relaxed">
          {description}
        </Text>
      </div>
    </Card>
  );
}