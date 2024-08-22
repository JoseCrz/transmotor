import { forwardRef } from "react";
import { buttonVariants, type ButtonVariantProps } from "./buttonVariants";
import { cn } from "@/utils";

export type ButtonProps = ButtonVariantProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
