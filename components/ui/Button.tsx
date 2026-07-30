import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-gray-800"
      : "border border-black text-black hover:bg-gray-100";

  return (
    <button
      className={`rounded-xl px-6 py-3 font-medium transition cursor-pointer ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}