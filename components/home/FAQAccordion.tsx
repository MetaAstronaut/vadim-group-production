'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQAccordionProps {
  tag: string;
  title: string;
  items: FAQItem[];
}

export default function FAQAccordion({ tag, title, items }: FAQAccordionProps) {
  const [showAllFAQ, setShowAllFAQ] = useState(false);
  const initialCount = 5;
  const displayedItems = showAllFAQ ? items : items.slice(0, initialCount);
  const hasMore = items.length > initialCount;

  return (
    <>
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
          {tag}
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-primary">
          {title}
        </h2>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {displayedItems.map((item, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="
                group
                bg-white 
                border border-border-light 
                rounded-md 
                px-6 py-2
                transition-all duration-300 ease-out
                hover:border-brand-accent/40 hover:bg-brand-accent/[0.02]
                data-[state=open]:border-brand-accent data-[state=open]:shadow-sm
              "
              style={{ 
                animation: showAllFAQ && i >= initialCount ? `fadeIn 400ms ease-out ${(i - initialCount) * 80}ms both` : 'none' 
              }}
            >
              {/* Question Button */}
              <AccordionTrigger 
                className="
                  text-left 
                  text-lg md:text-xl 
                  font-heading 
                  font-semibold 
                  text-brand-primary/90
                  hover:text-brand-primary
                  py-4
                "
              >
                {item.question}
              </AccordionTrigger>
              
              {/* Answer Panel */}
              <AccordionContent className="
                text-text-secondary/80
                text-[15px]
                leading-[1.65]
                pb-4
              ">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Show More/Less Button */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllFAQ(!showAllFAQ)}
              className="
                inline-flex items-center gap-2
                text-brand-accent hover:text-brand-accent-hover
                font-medium text-base
                py-3 px-6
                border border-brand-accent/30 hover:border-brand-accent
                rounded-md
                transition-all duration-300
                hover:bg-brand-accent/5
              "
            >
              {showAllFAQ ? 'Show Less Questions' : `Show ${items.length - initialCount} More Questions`}
              <ChevronDown 
                className={`h-4 w-4 transition-transform duration-300 ${showAllFAQ ? 'rotate-180' : ''}`}
                strokeWidth={2.5}
              />
            </button>
          </div>
        )}

        {/* Fade-in animation for new questions */}
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
}

