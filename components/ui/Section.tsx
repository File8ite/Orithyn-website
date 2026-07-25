import { ReactNode } from "react";
import Container from "./container";

type SectionProps = {
  children: ReactNode;
};

export default function Section({ children }: SectionProps) {
  return (
    <section className="py-24">
      <Container>
        {children}
      </Container>
    </section>
  );
}