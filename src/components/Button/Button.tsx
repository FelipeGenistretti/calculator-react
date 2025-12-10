import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Text } from "../Text/Text";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variants?: keyof typeof buttonVariants;
}

const buttonVariants = {
  default: "bg-gray-900",
  primary: "bg-gradient-to-b from-purple-800 to-purple-700",
};

export function Button({
  children,
  className = "",
  variants = "default",
  ...props
}: ButtonProps) {
  const classe = buttonVariants[variants] ?? buttonVariants.default;

  return (
    <Text
      as="button"
      {...props}
      variants="heading"
      className={`flex items-center justify-center rounded-xl p-3 cursor-pointer text-white bg-gray-600 shadow-2xl hover:bg-gray-700 transition duration-300 ${className} ${classe}`}
    >
      {children}
    </Text>
  );
}
