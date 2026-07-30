import { ReactNode } from "react";
import { typography } from "@/lib/typography";

type TextProps = {
  children: ReactNode;
  className?: string;
};

export default function Text({ children, className = "" }: TextProps) {
  return (
    <p className={`${typography.body} ${className}`}>
      {children}
    </p>
  );
}