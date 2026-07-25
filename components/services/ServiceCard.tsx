import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

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
    <article className="rounded-2xl border border-gray-200 p-8 transition hover:shadow-lg">
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
    </article>
  );
}