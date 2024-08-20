import { forwardRef } from "react";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/utils";

import { buttonVariants, type ButtonVariantProps } from "./buttonVariants";

export type ButtonLinkProps = LinkProps &
  ButtonVariantProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ variant, className, ...rest }, ref) => {
    return (
      <Link
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        {...rest}
      />
    );
  },
);
ButtonLink.displayName = "ButtonLink";
