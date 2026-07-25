import { ReactNode } from "react";
import { typography } from "@/lib/typography";

type TextProps = {
  children: ReactNode;
};

export default function Text({ children }: TextProps) {
  return (
    <p className={typography.body}>
      {children}
    </p>
  );
}