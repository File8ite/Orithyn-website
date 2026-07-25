import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import ServiceCard from "@/components/services/ServiceCard";

import { services } from "@/lib/services";

export default function Services() {
  return (
    <Section>

      <Heading level={2}>
        Our Services
      </Heading>

      <div className="mt-6 max-w-2xl">
        <Text>
          We partner with organizations to design,
          build and support software that creates
          measurable business value.
        </Text>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
          />
        ))}

      </div>

    </Section>
  );
}