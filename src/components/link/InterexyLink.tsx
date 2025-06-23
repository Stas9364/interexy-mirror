import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const linkVariants = cva(
  "inline-flex items-center justify-center select-none text-center font-medium text-base rounded-md transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        primary:
          "bg-btn text-white border border-btn hover:bg-btn-hover hover:border-btn-hover",
        secondary:
          "bg-transparent text-primary border border-color-primary hover:text-white hover:bg-btn-hover hover:border-btn-hover",
      },
      size: {
        sm: "py-3 px-6 text-sm",
        lg: "py-4 px-8",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
);

export const InterexyLink = ({
  href,
  text,
  variant,
  size,
  className,
}: {
  href: string;
  text: string;
  className?: string;
} & VariantProps<typeof linkVariants>) => {
  return (
    <Link href={href} className={cn(linkVariants({ variant, size, className }))}>
      {text}
    </Link>
  );
};
