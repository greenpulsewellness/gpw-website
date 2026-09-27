import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * shadcn/ui Button, restyled to the GreenPulse brand.
 * Lime is reserved for primary CTAs — everything else is pine, wood or white.
 */
const buttonVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-sans font-medium transition-colors duration-300 ease-calm disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-lime text-pine hover:bg-pine hover:text-canvas",
        dark: "bg-pine text-canvas hover:bg-lime hover:text-pine",
        outline: "border border-pine/25 text-pine hover:border-pine hover:bg-pine hover:text-canvas",
        "outline-light": "border border-white/60 text-white hover:border-white hover:bg-white hover:text-pine",
        ghost: "text-pine hover:bg-oat",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-[0.9375rem]",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
