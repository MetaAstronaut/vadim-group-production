'use client';

import * as React from "react";
import { 
  Clock, 
  Award, 
  Sparkles, 
  BadgeDollarSign 
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface WhyChooseUsData {
  tag: string;
  title: string;
  description: string;
  closing: string;
  bullets: string[];
}

interface WhyChooseUsProps {
  data: WhyChooseUsData;
}

/**
 * WhyChooseUs Component - Design System v2.2 compliant
 * Feature cards with icons following Section 6.7 (Icon System)
 * Updated: 2x2 grid layout, enhanced tag styling, improved quote section
 */
export const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  // Card data with title and description for each benefit
  const benefits = [
    {
      title: "We Treat Your Project Like Our Own",
      description: "We work carefully, respectfully, and never leave a mess behind",
      Icon: Sparkles
    },
    {
      title: "Fair, Simple Pricing",
      description: "You get a clear explanation and a straightforward price — no surprises, ever",
      Icon: BadgeDollarSign
    },
    {
      title: "We Respect Your Time",
      description: "We show up when we say we will — no delays, no excuses",
      Icon: Clock
    },
    {
      title: "You Talk Directly to the Person Doing the Work",
      description: "No middlemen — just honest communication with the person doing the work",
      Icon: Award
    }
  ];

  // Updated quote text
  const closingQuote = "I focus on one thing: solving your problem properly and making the whole process as easy and worry-free as possible — with a clean finish every time.";

  return (
    <Section className="bg-surface py-10 md:py-16 relative overflow-hidden">
      {/* Subtle Background Pattern - Updated gold color to match v2.2 */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A778_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Label: semi-bold, uppercase, gold, tracked */}
          <span className="text-brand-accent font-semibold tracking-[0.08em] text-sm uppercase block mb-2">
            {data.tag}
          </span>
          
          {/* H2: Playfair Display, Oxford Blue */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-3">
            {data.title}
          </h2>
          
          {/* Subtitle: max-width 800px */}
          <p className="text-base text-text-secondary leading-relaxed max-w-[800px] mx-auto">
            {data.description}
          </p>
        </div>

        {/* Benefits Grid - 2x2 layout, equal heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-5xl mx-auto mt-8 md:auto-rows-fr">
          {benefits.map((benefit, index) => {
            const { Icon, title, description } = benefit;
            
            return (
              <Card 
                key={index}
                className="
                  group 
                  bg-white
                  border border-border-light
                  rounded-lg
                  shadow-[0_1px_3px_rgba(15,23,42,0.08)]
                  hover:border-brand-accent 
                  hover:shadow-md
                  hover:-translate-y-1
                  transition-all 
                  duration-300 
                  ease-out
                "
              >
                <CardContent className="p-4 md:p-5 flex flex-col items-center text-center h-full">
                  {/* Icon Container: 48px circle with light gold background */}
                  <div className="
                    w-12 h-12 
                    rounded-full 
                    bg-brand-accent/10
                    flex items-center justify-center 
                    mb-3 
                    group-hover:bg-brand-accent/15
                    transition-all 
                    duration-300
                    shrink-0
                  ">
                    <Icon 
                      className="w-6 h-6 text-brand-accent transition-transform duration-300 group-hover:scale-110" 
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  {/* Benefit Title */}
                  <h3 className="text-brand-primary font-semibold text-[16px] leading-[1.3] mb-1.5">
                    {title}
                  </h3>
                  
                  {/* Benefit Description */}
                  <p className="text-text-secondary text-[14px] leading-[1.5]">
                    {description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonial Block - Enhanced with avatar and attribution */}
        <div className="max-w-[900px] mx-auto mt-8">
          <div className="
            relative 
            bg-[#F8F9FA]
            rounded-xl 
            p-5 md:p-6
            border border-brand-accent/15
            shadow-[0_2px_8px_rgba(15,23,42,0.04)]
          ">
            {/* Flex container for avatar + content */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              {/* Avatar */}
              <div className="flex justify-center md:justify-start shrink-0">
                <div className="relative">
                  <Image 
                    src="/assets/vadim-portrait.jpg" 
                    alt="Vadim Shakin" 
                    width={64}
                    height={64}
                    className="
                      w-14 h-14 md:w-16 md:h-16 
                      rounded-full 
                      object-cover 
                      border-[3px] border-brand-accent
                      shadow-[0_4px_12px_rgba(15,23,42,0.1)]
                    "
                  />
                </div>
              </div>
              
              {/* Quote and Attribution */}
              <div className="flex-1">
                <blockquote className="relative">
                  <p className="
                    text-[15px] md:text-[16px] 
                    font-medium 
                    text-brand-primary 
                    italic 
                    leading-[1.5]
                    mb-2
                  ">
                    {closingQuote}
                  </p>
                </blockquote>
                
                {/* Attribution */}
                <div className="mt-2">
                  <div className="font-semibold text-brand-primary text-[15px]">
                    Vadim Shakin
                  </div>
                  <div className="text-[14px] text-text-secondary">
                    CEO, Vadim Group
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

