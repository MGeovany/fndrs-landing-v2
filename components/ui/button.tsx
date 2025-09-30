import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-0",
  {
    variants: {
      variant: {
        primary:
          "bg-black text-white relative overflow-hidden transition-all duration-300 hover:text-black [background-image:linear-gradient(90deg,white_0%,white_100%)] [background-size:0%_100%] [background-repeat:no-repeat] [background-position:left] hover:[background-size:100%_100%]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-white bg-transparent text-white relative overflow-hidden transition-all duration-300 hover:text-black hover:border-white [background-image:linear-gradient(90deg,white_0%,white_100%)] [background-size:0%_100%] [background-repeat:no-repeat] [background-position:left] hover:[background-size:100%_100%]",
        secondary:
          "bg-white text-black relative overflow-hidden transition-all duration-300 hover:text-white [background-image:linear-gradient(90deg,black_0%,black_100%)] [background-size:0%_100%] [background-repeat:no-repeat] [background-position:left] hover:[background-size:100%_100%]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-8 py-2 rounded-full",
        sm: "h-9 rounded-full px-3",
        lg: "h-12 rounded-full px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          "relative z-10"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
