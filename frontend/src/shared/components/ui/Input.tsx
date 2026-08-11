import type { InputHTMLAttributes } from "react";
import { cx } from "@/shared/utils";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, id, className, ...props }: Props) {
  const inputId = id ?? props.name;
  return (
    <label className="field" htmlFor={inputId}>
      <span className="field-label">{label}</span>
      <input id={inputId} className={cx("field-input", className)} {...props} />
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
}
