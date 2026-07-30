import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <Card>
      <div className="mb-6 text-4xl">
        {icon}
      </div>

      <Heading level={3}>
        {title}
      </Heading>

      <div className="mt-4">
        <Text>
          {description}
        </Text>
      </div>
    </Card>
  );
}