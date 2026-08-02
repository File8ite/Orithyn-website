import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  let styles = "bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold hover:from-amber-400 hover:to-yellow-300 shadow-lg shadow-amber-500/20";

  if (variant === "secondary") {
    styles = "bg-zinc-900 border border-yellow-500/30 text-white hover:border-yellow-400 hover:bg-zinc-800/80";
  } else if (variant === "outline") {
    styles = "border border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400";
  }

  return (
    <button
      className={`rounded-xl px-6 py-3 font-medium transition duration-200 cursor-pointer flex items-center justify-center gap-2 ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}