'use client';

import * as React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  brief: string;
  preview: string;
  subcategories: Array<{
    title: string;
    items: string[];
  }>;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  brief,
  preview,
  subcategories,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "relative group rounded-lg bg-white border-2 transition-[border-color,box-shadow] duration-300",
        isExpanded 
          ? "border-brand-accent shadow-xl md:col-span-1" 
          : "border-border-light shadow-md hover:shadow-xl hover:border-brand-accent/40"
      )}
      style={{
        minHeight: isExpanded ? "auto" : "300px",
        maxHeight: isExpanded ? "700px" : "auto",
        contain: 'layout style paint'
      }}
    >

      {/* Closed State */}
      <div 
        className={cn(
          "p-6 flex flex-col h-full transition-opacity duration-200",
          isExpanded ? "opacity-0 pointer-events-none absolute inset-0" : "opacity-100"
        )}
      >
        {/* Icon */}
        <div className="h-16 w-16 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-6 shrink-0 group-hover:bg-brand-accent transition-colors duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl font-semibold text-brand-primary mb-3">
          {title}
        </h3>

        {/* Brief Description */}
        <p className="text-sm text-text-secondary mb-4 leading-relaxed">
          {brief}
        </p>

        {/* Preview */}
        <p className="text-sm text-brand-accent/90 mb-6 font-medium">
          {preview}
        </p>

        {/* View All Details Button */}
        <button
          onClick={() => setIsExpanded(true)}
          className="mt-auto flex items-center justify-center gap-2 w-full py-3 px-4 rounded-md border border-brand-accent/30 text-brand-accent hover:bg-brand-accent/5 hover:border-brand-accent transition-all duration-300 font-medium text-sm"
          aria-label={`View all ${title} details`}
          disabled={isExpanded}
        >
          View All Details
          <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
        </button>
      </div>

      {/* Expanded State */}
      <div 
        className={cn(
          "flex flex-col h-full transition-opacity duration-200",
          isExpanded ? "opacity-100" : "opacity-0 pointer-events-none absolute inset-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-6 border-b border-border-light shrink-0">
          <div className="h-12 w-12 rounded-lg bg-brand-primary text-white flex items-center justify-center shrink-0">
            {React.cloneElement(icon as React.ReactElement, { 
              className: "h-6 w-6",
              strokeWidth: 1.5 
            })}
          </div>
          <h3 className="font-heading text-xl font-semibold text-brand-primary">
            {title}
          </h3>
        </div>

        {/* Accordion Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 pb-4" style={{ scrollbarGutter: 'stable' }}>
          <div className="space-y-3">
            {subcategories.map((subcategory, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem
                  value={`subcategory-${index}`}
                  className="border border-border-light rounded-md px-4 hover:border-brand-accent/40 data-[state=open]:border-brand-accent data-[state=open]:shadow-sm"
                  style={{ 
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-brand-primary hover:text-brand-primary py-3">
                    {subcategory.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-secondary text-sm leading-relaxed pb-3">
                    <ul className="space-y-2">
                      {subcategory.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>

        {/* Close Details Button - Bottom */}
        <div className="p-6 pt-4 border-t border-border-light shrink-0">
          <button
            onClick={() => setIsExpanded(false)}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-md border border-brand-accent/30 text-brand-accent hover:bg-brand-accent/5 hover:border-brand-accent transition-all duration-300 font-medium text-sm"
            aria-label="Close details"
            disabled={!isExpanded}
          >
            Close Details
            <ChevronUp className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

