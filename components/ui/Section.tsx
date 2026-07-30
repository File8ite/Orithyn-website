import { ReactNode } from "react";
import Container from "@/components/ui/Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
};

export default function Section({ children, id, className = "py-24", containerClassName }: SectionProps) {
  return (
    <section id={id} className={className}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}