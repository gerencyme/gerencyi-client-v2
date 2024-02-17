import { buttonRootTV } from "@shared/components/button/ButtonTV";
import { TRootComponent } from "@shared/types";
import { ButtonHTMLAttributes } from "react";
import { VariantProps } from "tailwind-variants";

type TButtonRootProps = TRootComponent &
  VariantProps<typeof buttonRootTV> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonRoot({
  children,
  variant,
  className,
  ...props
}: TButtonRootProps) {
  return (
    <button {...props} className={buttonRootTV({ variant, className })}>
      {children}
    </button>
  );
}
