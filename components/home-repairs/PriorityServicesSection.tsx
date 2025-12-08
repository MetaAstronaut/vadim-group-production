'use client';

import * as React from "react";
import { Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.447 5.514 3.713 7.236V22l3.398-1.868C10.014 20.372 10.99 20.5 12 20.5c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.071 12.414l-2.571-2.743-5.014 2.743L11.071 8.5l2.571 2.743L18.571 8.5l-5.5 5.914z"/>
  </svg>
);

interface PriorityServicesSectionProps {
  messengerLink: string;
}

export const PriorityServicesSection: React.FC<PriorityServicesSectionProps> = ({ messengerLink }) => {
  const coversList = [
    "Minor water-related damage",
    "Moisture-affected drywall & trim",
    "Damaged flooring",
    "Cabinet/drawer issues",
    "Shower/tub/tile problems",
    "Weather-exposed exterior areas",
    "Pre-listing or guest-ready repairs"
  ];

  return (
    <Section id="priority-services" className="bg-brand-primary py-16 md:py-20">
      <Container className="max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          {/* Label */}
          <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">
            EMERGENCY SERVICES
          </span>

          {/* Title */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Priority Scheduling for Urgent Repairs
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            When a repair can't wait, we move your project to the front of the line. Ideal for situations where fast attention helps prevent additional damage or disruption at home.
          </p>
        </div>

        {/* Main Priority Card */}
        <div className="bg-white/5 border border-brand-accent/20 rounded-lg p-6 md:p-8 mb-5 transition-all duration-300 hover:border-brand-accent hover:bg-white/[0.08] hover:shadow-[0_8px_24px_rgba(198,167,120,0.15)]">
          {/* Card Title */}
          <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-5">
            Fast scheduling for issues that can worsen or disrupt daily living
          </h3>

          {/* Covers Section */}
          <div className="mb-6">
            <h4 className="font-bold text-white mb-3 text-base md:text-lg">Covers:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {coversList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button inside card */}
          <div>
            <Button
              asChild
              className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-12 md:h-14 px-6 md:px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow,background-color] duration-300 ease-out text-base w-full md:w-auto"
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              <a
                href={messengerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <MessengerIcon />
                Get a Free Estimate on Messenger
              </a>
            </Button>
          </div>
        </div>

        {/* Response Times & How It Works - 2 mini blocks in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Response Times */}
          <div className="bg-white/5 border border-brand-accent/20 rounded-lg p-5 md:p-6">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-base md:text-lg">
              <Clock className="h-5 w-5 text-brand-accent" />
              Response Times
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent shrink-0">•</span>
                <span>Facebook Messenger assessment: 2–4 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent shrink-0">•</span>
                <span>Scheduling: 24–48 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent shrink-0">•</span>
                <span>Clear communication at every step</span>
              </li>
            </ul>
          </div>

          {/* How It Works */}
          <div className="bg-white/5 border border-brand-accent/20 rounded-lg p-5 md:p-6">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-base md:text-lg">
              <MessageSquare className="h-5 w-5 text-brand-accent" />
              How It Works
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent shrink-0">•</span>
                <span>Send a photo + brief description</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent shrink-0">•</span>
                <span>We assess urgency and timeline</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent shrink-0">•</span>
                <span>Your job is prioritized in our schedule</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

