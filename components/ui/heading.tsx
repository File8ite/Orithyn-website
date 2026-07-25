import { ReactNode } from "react";
import { typography } from "@/lib/typography";

type HeadingProps = {
  children: ReactNode;
  level?: 1 | 2 | 3;
};

export default function Heading({
  children,
  level = 2,
}: HeadingProps) {
  if (level === 1) {
    return <h1 className={typography.display}>{children}</h1>;
  }

  if (level === 2) {
    return <h2 className={typography.heading}>{children}</h2>;
  }

  return <h3 className={typography.subheading}>{children}</h3>;
}