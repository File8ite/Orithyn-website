import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

type TrustCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function TrustCard({
  title,
  description,
  icon,
}: TrustCardProps) {
  return (
    <Card>
      <div className="mb-6 text-4xl">
        {icon}
      </div>

      <Heading level={3}>
        {title}
      </Heading>

      <div className="mt-4">
        <Text>{description}</Text>
      </div>
    </Card>
  );
}