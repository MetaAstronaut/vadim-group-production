import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva(
  "w-full",
  {
    variants: {
      spacing: {
        default: "py-16 md:py-24",
        compact: "py-12 md:py-16",
        large: "py-20 md:py-32",
        none: "",
      },
      background: {
        default: "bg-surface",
        subtle: "bg-surface-subtle",
        dark: "bg-surface-dark",
        transparent: "bg-transparent",
      },
    },
    defaultVariants: {
      spacing: "default",
      background: "default",
    },
  }
);

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

/**
 * Section component for page sections with consistent spacing and backgrounds
 */
const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, background, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ spacing, background }), className)}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

export { Section, sectionVariants };

