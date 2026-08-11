import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/shared/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
};

export function Button({
  children,
  variant = "primary",
  fullWidth,
  className,
  ...props
}: Props) {
  return (
    <button
      className={cx(
        "btn",
        variant === "primary" && "btn-primary",
        variant === "secondary" && "btn-secondary",
        variant === "ghost" && "btn-ghost",
        fullWidth && "btn-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
