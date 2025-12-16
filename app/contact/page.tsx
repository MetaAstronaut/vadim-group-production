'use client';

import * as React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Dynamic import for ContactForm - loads react-hook-form, zod, and emailjs only when needed
// SSR enabled for better SEO (form markup will be in initial HTML)
const ContactForm = dynamic(() => import('./ContactForm'), {
  loading: () => (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent"></div>
    </div>
  )
});

const MessengerIcon = ({ size = "w-6 h-6" }: { size?: string }) => (
  <svg viewBox="0 0 24 24" className={size} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.447 5.514 3.713 7.236V22l3.398-1.868C10.014 20.372 10.99 20.5 12 20.5c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.071 12.414l-2.571-2.743-5.014 2.743L11.071 8.5l2.571 2.743L18.571 8.5l-5.5 5.914z"/>
  </svg>
);

/**
 * Contact Page - Optimized with Dynamic Imports
 * Design System V2.2 Compliant
 */
export default function ContactPage() {
  // JSON-LD Schemas for Contact Page
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Vadim Group",
    "description": "Get in touch with Vadim Group for home, marine, and RV repair services in Orlando. Fast response via Messenger or email.",
    "url": "https://vadimgroup.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Vadim Group",
      "telephone": "+1-424-436-9115",
      "email": "vadimgroup.repairs@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10201 Rocket Ct",
        "addressLocality": "Orlando",
        "addressRegion": "FL",
        "postalCode": "32824",
        "addressCountry": "US"
      }
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://vadimgroup.com/#organization",
    "name": "Vadim Group",
    "description": "Contact Vadim Group for professional repair services. Available daily 8 AM - 8 PM, emergency response 24/7. Serving Orlando metro area.",
    "image": "https://vadimgroup.com/assets/home-hero.webp",
    "telephone": "+1-424-436-9115",
    "email": "vadimgroup.repairs@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10201 Rocket Ct",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "postalCode": "32824",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4562,
      "longitude": -81.2437
    },
    "url": "https://vadimgroup.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Orlando" },
      { "@type": "City", "name": "Lake Nona" },
      { "@type": "City", "name": "Hunters Creek" },
      { "@type": "City", "name": "Winter Park" },
      { "@type": "City", "name": "Lake Mary" },
      { "@type": "City", "name": "Kissimmee" },
      { "@type": "City", "name": "Daytona Beach" },
      { "@type": "City", "name": "Cocoa Beach" },
      { "@type": "City", "name": "Titusville" }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-424-436-9115",
      "contactType": "Customer Service",
      "email": "vadimgroup.repairs@gmail.com",
      "availableLanguage": ["English"],
      "areaServed": "FL"
    }
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* HERO SECTION - Design System V2.2 */}
      <div 
        className="relative h-[calc(100vh-80px)] min-h-[500px] max-h-[700px] flex items-center justify-center overflow-hidden"
        data-hero-section
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/assets/home-hero.webp)` }}
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.85))'
          }}
          aria-hidden="true" 
        />

        <Container className="relative z-10 h-full flex flex-col justify-center py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <h1 className="font-heading font-bold text-[36px] md:text-5xl lg:text-6xl text-white" style={{ textShadow: '0 2px 16px rgba(0, 0, 0, 0.3)', letterSpacing: '0.02em', lineHeight: '1.17' }}>
              Get in Touch With Vadim Group
            </h1>
            
            <p className="text-white/90 max-w-2xl mx-auto leading-[1.6] text-[18px] md:text-[20px]" style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.2)' }}>
              If you have a repair need, a question, or want to share photos of an issue, we're here to help. We typically respond within 2–4 business hours.
            </p>

            {/* CTA Button - Enlarged as per design system */}
            <div className="pt-4">
              <Button 
                asChild 
                className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-12 sm:h-14 md:h-[56px] px-4 sm:px-6 md:px-8 w-full sm:w-auto sm:min-w-[240px] md:min-w-[280px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-all duration-300 text-sm sm:text-base md:text-lg"
              >
                <a 
                  href="https://m.me/vadimgroup"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 sm:gap-3"
                >
                  <span className="shrink-0">
                    <MessengerIcon />
                  </span>
                  <span className="truncate">Get a Free Estimate on Messenger</span>
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* CONTACT OPTIONS - Design System V2.2 */}
      <Section className="bg-surface-subtle py-16 md:py-20">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
              CONTACT OPTIONS
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              Choose How to Reach Us
            </h2>
            <p className="text-xl text-text-secondary mb-4">
              Get a fast response through Messenger or send us detailed project information via email
            </p>
            {/* Service Links */}
            <div className="flex flex-wrap justify-center items-center gap-2 text-base text-text-secondary">
              <span>Looking for specific services?</span>
              <Link href="/home-repairs" className="text-brand-accent hover:underline font-medium">Home Repairs</Link>
              <span className="text-border-light">|</span>
              <Link href="/marine-rv" className="text-brand-accent hover:underline font-medium">Marine & RV</Link>
              <span className="text-border-light">|</span>
              <Link href="/about" className="text-brand-accent hover:underline font-medium">Our Work</Link>
            </div>
          </div>

          {/* Contact Cards Grid - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Messenger Card */}
            <div className="
              group bg-white rounded-md p-6 md:p-8
              border border-border-light 
              shadow-[0_1px_3px_rgba(15,23,42,0.08)]
              hover:border-brand-accent hover:shadow-md
              transition-all duration-300 ease-out
              flex flex-col
            ">
              {/* Icon Container: 64x64px with 48x48px icon */}
              <div className="h-16 w-16 bg-brand-primary text-white rounded-xl flex items-center justify-center mb-6 shrink-0 group-hover:scale-105 group-hover:bg-brand-accent transition-all duration-300">
                <MessengerIcon size="w-12 h-12" />
              </div>
              
              <h3 className="font-heading text-2xl font-semibold text-brand-primary mb-3">
                Message Us
              </h3>
              
              <p className="text-[15px] text-text-secondary mb-5 leading-[1.5]">
                Fastest response — share photos and get answers in real-time
              </p>
              
              <ul className="space-y-2 mb-6 flex-grow text-[14px] text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span>Response within 2-4 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span>Send photos instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span>Real-time conversation</span>
                </li>
              </ul>
              
              <Button 
                asChild 
                variant="outline"
                className="
                  w-full
                  border-[1.5px] border-brand-accent 
                  text-brand-accent 
                  hover:bg-brand-accent hover:text-brand-primary hover:-translate-y-0.5
                  font-medium py-3 px-6
                  transition-all duration-300
                "
              >
                <a href="https://m.me/vadimgroup" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                  Open Messenger
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Email Card */}
            <div className="
              group bg-white rounded-md p-6 md:p-8
              border border-border-light 
              shadow-[0_1px_3px_rgba(15,23,42,0.08)]
              hover:border-brand-accent hover:shadow-md
              transition-all duration-300 ease-out
              flex flex-col
            ">
              {/* Icon Container: 64x64px with 48x48px icon */}
              <div className="h-16 w-16 bg-brand-primary text-white rounded-xl flex items-center justify-center mb-6 shrink-0 group-hover:scale-105 group-hover:bg-brand-accent transition-all duration-300">
                <Mail className="h-12 w-12" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-heading text-2xl font-semibold text-brand-primary mb-3">
                Email Us
              </h3>
              
              <p className="text-[15px] text-text-secondary mb-5 leading-[1.5]">
                Send detailed project information with photos and specifications
              </p>
              
              <ul className="space-y-2 mb-6 flex-grow text-[14px] text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span>Detailed requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span>Attach multiple photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span>vadimgroup.repairs@gmail.com</span>
                </li>
              </ul>
              
              <Button 
                asChild 
                variant="outline"
                className="
                  w-full
                  border-[1.5px] border-brand-accent 
                  text-brand-accent 
                  hover:bg-brand-accent hover:text-brand-primary hover:-translate-y-0.5
                  font-medium py-3 px-6
                  transition-all duration-300
                "
              >
                <a href="mailto:vadimgroup.repairs@gmail.com" className="inline-flex items-center justify-center gap-2">
                  Send Email
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* CONTACT FORM - Design System V2.2 */}
      <Section id="contact-form" className="bg-surface py-20 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
                SEND A MESSAGE
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-primary mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Fill out the form below and we'll respond within 2–4 business hours
              </p>
            </div>

            {/* Form Card with Dynamic Import */}
            <div className="
              bg-white rounded-md p-6 md:p-10
              border border-border-light 
              shadow-[0_1px_3px_rgba(15,23,42,0.08)]
            ">
              <ContactForm />

              {/* Info Note */}
              <div className="mt-8 pt-6 border-t border-border-light">
                <p className="text-sm text-text-muted text-center">
                  <strong className="text-brand-accent">Need to share photos?</strong> Use Messenger above for fastest photo sharing and real-time communication.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CONTACT INFO & SERVICE AREA - Design System V2.2 */}
      <Section className="bg-surface-subtle py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Information */}
            <div>
              <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
                CONTACT INFO
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-8">
                Our Service Details
              </h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-primary flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-primary mb-1">Email</h3>
                    <a 
                      href="mailto:vadimgroup.repairs@gmail.com" 
                      className="text-brand-accent hover:text-brand-accent-hover transition-colors"
                    >
                      vadimgroup.repairs@gmail.com
                    </a>
                    <p className="text-sm text-text-muted mt-1">Response within 24 hours</p>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-primary flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-primary mb-1">Service Area</h3>
                    <p className="text-text-secondary">
                      Orlando, Lake Nona, Hunters Creek, Winter Park, Lake Mary, Kissimmee, Daytona Beach, Cocoa Beach, Titusville
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-primary flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-primary mb-1">Response Time</h3>
                    <p className="text-text-secondary">
                      Typically 2–4 business hours
                    </p>
                    <p className="text-sm text-text-muted mt-1">Priority scheduling available for urgent repairs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
                LOCATION
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-brand-primary mb-6">
                We Serve Central Florida
              </h3>
              
              <div className="w-full h-[400px] rounded-md overflow-hidden shadow-md border border-border-light">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004834768!2d-81.5157!3d28.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Service Area Map"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ SECTION - Design System V2.2 */}
      <Section className="bg-surface-subtle py-20 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
                QUESTIONS & ANSWERS
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-primary">
                Common Questions
              </h2>
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem 
                value="item-1"
                className="
                  group bg-white border border-border-light rounded-md px-6 py-2
                  transition-all duration-300 ease-out
                  hover:border-brand-accent/40 hover:bg-brand-accent/[0.02]
                  data-[state=open]:border-brand-accent data-[state=open]:shadow-sm
                "
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-heading font-semibold text-brand-primary/90 hover:text-brand-primary py-4">
                  Do you offer free estimates?
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary/80 text-[15px] leading-[1.65] pb-4">
                  Yes — estimates are free and can be provided by email or Messenger.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="
                  group bg-white border border-border-light rounded-md px-6 py-2
                  transition-all duration-300 ease-out
                  hover:border-brand-accent/40 hover:bg-brand-accent/[0.02]
                  data-[state=open]:border-brand-accent data-[state=open]:shadow-sm
                "
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-heading font-semibold text-brand-primary/90 hover:text-brand-primary py-4">
                  How fast can I get scheduled?
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary/80 text-[15px] leading-[1.65] pb-4">
                  Most projects are scheduled within 24–48 hours depending on scope.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="
                  group bg-white border border-border-light rounded-md px-6 py-2
                  transition-all duration-300 ease-out
                  hover:border-brand-accent/40 hover:bg-brand-accent/[0.02]
                  data-[state=open]:border-brand-accent data-[state=open]:shadow-sm
                "
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-heading font-semibold text-brand-primary/90 hover:text-brand-primary py-4">
                  Do photos help?
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary/80 text-[15px] leading-[1.65] pb-4">
                  Yes. Photos allow us to give a more accurate estimate and avoid delays.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4"
                className="
                  group bg-white border border-border-light rounded-md px-6 py-2
                  transition-all duration-300 ease-out
                  hover:border-brand-accent/40 hover:bg-brand-accent/[0.02]
                  data-[state=open]:border-brand-accent data-[state=open]:shadow-sm
                "
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-heading font-semibold text-brand-primary/90 hover:text-brand-primary py-4">
                  What areas do you serve?
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary/80 text-[15px] leading-[1.65] pb-4">
                  Orlando, Lake Nona, Hunters Creek, Winter Park, Lake Mary, Kissimmee, Daytona Beach, Cocoa Beach, Titusville.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5"
                className="
                  group bg-white border border-border-light rounded-md px-6 py-2
                  transition-all duration-300 ease-out
                  hover:border-brand-accent/40 hover:bg-brand-accent/[0.02]
                  data-[state=open]:border-brand-accent data-[state=open]:shadow-sm
                "
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-heading font-semibold text-brand-primary/90 hover:text-brand-primary py-4">
                  Do you handle urgent repairs?
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary/80 text-[15px] leading-[1.65] pb-4">
                  Yes — priority scheduling is available for issues that need fast attention.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA - Design System V2.2 */}
      <Section className="bg-brand-primary text-white py-20 md:py-24 text-center relative overflow-hidden">
        <Container className="relative z-10">
          <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-6">
            FREE ESTIMATE
          </span>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>

          <p className="text-lg md:text-xl text-gray-400 font-medium mb-10">
            Free Estimate — No Pressure.<br className="sm:hidden" /> No Hidden Fees.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button 
              asChild 
              className="
                bg-brand-accent 
                hover:bg-brand-accent-hover 
                text-brand-primary 
                font-semibold 
                text-base sm:text-lg md:text-xl
                h-14 sm:h-16 md:h-[72px]
                px-6 sm:px-10 md:px-12
                w-full sm:w-auto sm:min-w-[280px] md:min-w-[320px]
                shadow-lg
                hover:shadow-xl
                transition-all duration-300
              "
            >
              <a 
                href="https://m.me/vadimgroup"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3"
              >
                <span className="shrink-0">
                  <MessengerIcon />
                </span>
                <span>Get a Free Estimate on Messenger</span>
              </a>
            </Button>
            
            <Link 
              href="#contact-form"
              className="
                text-gray-300 
                hover:text-white 
                text-base
                inline-flex items-center gap-2
                transition-colors duration-200
                group
              "
            >
              Or email us your project details
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
