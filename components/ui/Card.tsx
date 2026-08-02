import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/50 hover:shadow-yellow-500/5 ${className}`}
    >
      {children}
    </article>
  );
}