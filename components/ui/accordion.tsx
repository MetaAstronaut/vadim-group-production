"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all duration-300",
        // Remove underline hover, keep text color consistent
        "hover:no-underline",
        // Chevron styling: gold color and scale when open (increased size by 25%)
        "[&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-brand-accent [&[data-state=open]>svg]:scale-125",
        className,
      )}
      {...props}
      aria-expanded={props["aria-expanded"]}
    >
      {children}
      {/* Increased base size from h-4 w-4 to h-5 w-5 (25% larger), thicker stroke for premium feel */}
      <ChevronDown className="h-5 w-5 shrink-0 transition-all duration-300 ease-out text-text-muted" strokeWidth={2.5} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    style={{ 
      transition: 'height 0.35s ease-out',
      willChange: 'height',
      backfaceVisibility: 'hidden',
      transform: 'translateZ(0)'
    }}
    {...props}
  >
    {/* Increased padding-top to 18px for better spacing between question and answer */}
    <div className={cn("pb-4 pt-[18px]", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
