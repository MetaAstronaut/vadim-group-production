import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQ[];
  className?: string;
}

/**
 * FAQAccordion component for displaying frequently asked questions
 * 
 * @example
 * ```tsx
 * <FAQAccordion
 *   items={[
 *     { question: "What services do you offer?", answer: "We offer..." },
 *     { question: "How much does it cost?", answer: "Pricing varies..." }
 *   ]}
 * />
 * ```
 */
export function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Accordion type="single" collapsible className={className}>
      {items.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-semibold text-brand-primary hover:text-brand-accent">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

