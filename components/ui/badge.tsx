import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-brand-primary text-white hover:bg-brand-primary/80",
        secondary:
          "border-transparent bg-brand-secondary text-white hover:bg-brand-secondary/80",
        outline: "text-text-primary border-border-light",
        success:
          "border-transparent bg-semantic-success text-white hover:bg-semantic-success/80",
        warning:
          "border-transparent bg-semantic-warning text-white hover:bg-semantic-warning/80",
        error:
          "border-transparent bg-semantic-error text-white hover:bg-semantic-error/80",
        info:
          "border-transparent bg-semantic-info text-white hover:bg-semantic-info/80",
        accent:
          "border-transparent bg-brand-accent text-brand-primary hover:bg-brand-accent/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
