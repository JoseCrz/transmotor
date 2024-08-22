import { cva, type VariantProps } from "class-variance-authority";

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap border-2 px-8 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "rounded border-white bg-white",
        crystal:
          "rounded border border-[rgba(237,237,237,0.40)] text-white backdrop-blur",
        ghost: "rounded border border-[#F0F0F0] bg-[#FBFBFB]",
        electric: "rounded-full border border-[#F89728] bg-[#F89728]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
