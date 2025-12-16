import * as React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  ArrowRight, 
  CheckCircle2, 
  Anchor, 
  Gauge, 
  Droplets, 
  Zap,
  Calendar,
  Clock,
  MessageSquare,
  Wrench
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CityRotator } from "@/components/CityRotator";
import { TestimonialsCarousel } from "@/components/marine-rv/TestimonialsCarousel";
import { PortfolioCarousel } from "@/components/marine-rv/PortfolioCarousel";
import { FAQAccordion } from "@/components/marine-rv/FAQAccordion";
import { typography } from '@/lib/typography';

// Messenger Icon SVG Component
const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.447 5.514 3.713 7.236V22l3.398-1.868C10.014 20.372 10.99 20.5 12 20.5c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.071 12.414l-2.571-2.743-5.014 2.743L11.071 8.5l2.571 2.743L18.571 8.5l-5.5 5.914z"/>
  </svg>
);

// Page Data
const pageData = {
  hero: {
    subtitle: "From structural repairs to interior restoration, electrical troubleshooting, and engine/mechanical work, we help keep your boat or RV safe, functional, and ready for the road (or water)"
  },
  services: {
    tag: "OUR SERVICES",
    title: "Marine & RV Repair Categories",
    description: "Explore the main repair categories below to find the service you need"
  },
  whyMatters: {
    tag: "WHY IT MATTERS",
    title: "Why Marine & RV Repairs Need Specialized Expertise",
    description: "Boats and RVs aren't built like traditional homes — they flex, move, vibrate, and face intense moisture and electrical load. Small issues can quickly turn into costly repairs if not handled correctly.",
    blocks: [
      {
        title: "Constant Movement & Vibration",
        points: [
          "Causes loosened fixtures, cracks, and surface stress",
          "Requires movement-resistant repair techniques"
        ]
      },
      {
        title: "High Exposure to Moisture",
        points: [
          "Leads to swelling, soft spots, and water-damage spread",
          "Needs moisture-safe materials and diagnostics"
        ]
      },
      {
        title: "Lightweight, Tight Construction",
        points: [
          "Thin composite panels and compact interior systems",
          "Improper repair can cause additional internal damage"
        ]
      },
      {
        title: "Complex Electrical & Onboard Systems",
        points: [
          "Multi-system wiring under constant vibration",
          "Requires careful troubleshooting to ensure safe operation"
        ]
      }
    ]
  },
  maintenance: {
    tag: "MAINTENANCE GUIDE",
    title: "Seasonal Maintenance Tips for Boats & RVs",
    description: "Staying ahead of wear and moisture issues extends the life of your vehicle and prevents expensive repairs",
    tasks: {
      monthly: [
        "Inspect seals, gaskets, windows & hatches",
        "Check battery charge and cable corrosion",
        "Test interior lights and small appliances",
        "Inspect for moisture or musty smell"
      ],
      quarterly: [
        "Check roof seams (RV)",
        "Inspect bilge area (boat)",
        "Clean water lines and drains",
        "Verify wiring connections",
        "Test smoke and CO detectors"
      ],
      seasonal: [
        "Deep clean interior and storage areas",
        "Treat seals & gaskets with conditioner",
        "Lubricate hinges and mechanisms",
        "Check tires, brakes, and wheel safety (RV)",
        "Inspect hull and underside (boat)"
      ],
      annual: [
        "Inspect full moisture levels",
        "Replace worn seals and gasket materials",
        "Refresh caulking around all openings",
        "Test all electrical safety points",
        "Clean A/C or ventilation systems"
      ]
    }
  },
  process: {
    tag: "HOW WE WORK",
    steps: [
      {
        title: "Quick Repair Estimate",
        description: "Tell us what's going on, and we'll give you a clear, simple quote — fast"
      },
      {
        title: "Schedule Your Repair",
        description: "We agree on a time that works for you — and we stick to it"
      },
      {
        title: "Professional Repair Work",
        description: "Clean, careful, and precise work from start to finish"
      },
      {
        title: "Final Review & Cleanup",
        description: "You check everything, and we leave your space spotless"
      },
      {
        title: "Follow-Up Support",
        description: "If anything needs attention later, we're here to help"
      }
    ]
  },
  faq: {
    tag: "QUESTIONS & ANSWERS",
    title: "Marine & RV Repair FAQs",
    items: [
      {
        question: "Do you repair marine or RV engines?",
        answer: "We provide light mechanical work and minor engine-related repairs, such as diagnostics, starting issues, and accessory replacements. We do not perform full engine servicing, overhauls, or rebuilds."
      },
      {
        question: "Can you repair water-damaged RV or boat interiors?",
        answer: "Yes — we restore wall panels, flooring, ceilings, cabinetry, and moisture-affected areas. We also perform moisture diagnostics to identify hidden damage."
      },
      {
        question: "Do you handle fiberglass or gelcoat repairs?",
        answer: "Yes — we perform light fiberglass patching, gelcoat correction, small crack repairs, and color-matched finishing for boats and RV exterior areas."
      },
      {
        question: "Do you repair electrical issues on boats or RVs?",
        answer: "Yes — we handle lighting, switches, wiring checks, battery/fuse issues, and basic onboard electrical systems. We do not service high-voltage or complex engine-control electronics."
      },
      {
        question: "Can you repair or adjust RV slide-outs?",
        answer: (
          <>
            Yes — we perform light slide-out alignment, lubrication, and minor adjustment. For interior <Link href="/home-repairs" className="text-brand-accent hover:underline">home-style repairs</Link> in your RV, we use the same precision techniques as residential work. Major structural rebuilds or hydraulic system replacements are referred to specialists.
          </>
        )
      },
      {
        question: "Do you offer mobile RV or boat repair service?",
        answer: (
          <>
            Yes — mobile service is available in Orlando, Lake Nona, Winter Park, Lake Mary, and nearby areas, depending on the job type. Some repairs require workshop conditions for proper materials, tools, and curing. We also offer <Link href="/home-repairs" className="text-brand-accent hover:underline">residential repair services</Link> if your RV serves as your home.
          </>
        )
      },
      {
        question: "Do you work on all RV brands and boat types?",
        answer: "Yes — we repair most common RV brands and small-to-mid-size boats, including fiberglass, pontoon, and bowrider types. For large vessels or specialized builds, we'll confirm scope before scheduling."
      },
      {
        question: "Can I send photos or videos for a repair estimate?",
        answer: "Absolutely — Facebook Messenger is the fastest way to send photos or short videos. We typically reply with an estimate within a few business hours."
      },
      {
        question: "Do you repair soft spots, floor rot, or delamination?",
        answer: "We handle light soft-spot repairs, minor delamination areas, and panel replacement. Severe structural rot or major rebuilds require a full marine specialist."
      },
      {
        question: "Can you repair roof leaks or exterior sealant issues on RVs?",
        answer: "Yes — we repair roof leaks, reseal exterior joints, replace damaged trim, and fix water-intrusion points."
      },
      {
        question: "Do you fix trailer wiring or lighting issues?",
        answer: "Yes — we repair basic trailer wiring, lights, connectors, and fuse problems."
      },
      {
        question: "Do you offer cosmetic restoration for boats or RVs?",
        answer: "Yes — including gelcoat touch-ups, scratch repair, surface refinishing, and cabinet/floor restoration."
      },
      {
        question: "Can you help diagnose unusual noises, vibration, or electrical faults?",
        answer: "Yes — we provide diagnostics for mechanical noises, electrical faults, and operational issues and guide you toward the correct repair path."
      }
    ]
  }
};

// Metadata
export const metadata: Metadata = {
  title: "Marine & RV Repair Services Orlando | Vadim Group",
  description: "Expert boat and RV repair in Orlando. Gelcoat repair, deck restoration, interior work, water damage treatment. Specialized knowledge for marine and RV structures.",
  keywords: "marine repair orlando, boat repair orlando, rv repair orlando, gelcoat repair, boat interior repair, rv water damage, deck restoration, boat cabin repair",
  openGraph: {
    title: "Marine & RV Repair Specialists - Orlando, FL",
    description: "Professional repair for boats and RVs. Gelcoat, deck work, interiors, water damage. Precision techniques for marine and RV environments.",
    url: "https://vadimgroup.com/marine-rv",
    siteName: "Vadim Group",
    images: [{
      url: "/images/og-marine-rv.jpg",
      width: 1200,
      height: 630,
    }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://vadimgroup.com/marine-rv"
  }
};

export default function MarineRVPage() {
  // JSON-LD Schemas for Marine & RV Page
  const marineRVServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://vadimgroup.com/marine-rv#service",
    "serviceType": "Marine Repair, Boat Repair, RV Repair",
    "name": "Marine and RV Repair Services Orlando",
    "description": "Professional marine and RV repair services in Orlando. Boat repairs, gelcoat restoration, RV interior work, water damage repair. Specialized knowledge for marine and RV structures.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://vadimgroup.com/#organization",
      "name": "Vadim Group"
    },
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marine and RV Repair Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Marine Repair Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boat Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gelcoat Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boat Deck Restoration" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marine Electrical Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boat Interior Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fiberglass Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boat Water Damage Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pontoon Boat Repair" } }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "RV Repair Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RV Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RV Water Damage Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RV Interior Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RV Electrical Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RV Slide Out Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RV Roof Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RV Leak Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RV Cabinet Repair" } }
          ]
        }
      ]
    }
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you repair marine or RV engines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide light mechanical work and minor engine-related repairs, such as diagnostics, starting issues, and accessory replacements. We do not perform full engine servicing, overhauls, or rebuilds."
        }
      },
      {
        "@type": "Question",
        "name": "Can you repair water-damaged RV or boat interiors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we restore wall panels, flooring, ceilings, cabinetry, and moisture-affected areas. We also perform moisture diagnostics to identify hidden damage."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle fiberglass or gelcoat repairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we perform light fiberglass patching, gelcoat correction, small crack repairs, and color-matched finishing for boats and RV exterior areas."
        }
      },
      {
        "@type": "Question",
        "name": "Do you repair electrical issues on boats or RVs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we handle lighting, switches, wiring checks, battery/fuse issues, and basic onboard electrical systems. We do not service high-voltage or complex engine-control electronics."
        }
      },
      {
        "@type": "Question",
        "name": "Can you repair or adjust RV slide-outs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we perform light slide-out alignment, lubrication, and minor adjustment. Major structural rebuilds or hydraulic system replacements are referred to specialists."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer mobile RV or boat repair service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — mobile service is available in Orlando, Lake Nona, Winter Park, Lake Mary, and nearby areas, depending on the job type. Some repairs require workshop conditions for proper materials, tools, and curing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work on all RV brands and boat types?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we repair most common RV brands and small-to-mid-size boats, including fiberglass, pontoon, and bowrider types. For large vessels or specialized builds, we'll confirm scope before scheduling."
        }
      },
      {
        "@type": "Question",
        "name": "Can I send photos or videos for a repair estimate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely — Facebook Messenger is the fastest way to send photos or short videos. We typically reply with an estimate within a few business hours."
        }
      },
      {
        "@type": "Question",
        "name": "Do you repair soft spots, floor rot, or delamination?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We handle light soft-spot repairs, minor delamination areas, and panel replacement. Severe structural rot or major rebuilds require a full marine specialist."
        }
      },
      {
        "@type": "Question",
        "name": "Can you repair roof leaks or exterior sealant issues on RVs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we repair roof leaks, reseal exterior joints, replace damaged trim, and fix water-intrusion points."
        }
      },
      {
        "@type": "Question",
        "name": "Do you fix trailer wiring or lighting issues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we repair basic trailer wiring, lights, connectors, and fuse problems."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer cosmetic restoration for boats or RVs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — including gelcoat touch-ups, scratch repair, surface refinishing, and cabinet/floor restoration."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help diagnose unusual noises, vibration, or electrical faults?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we provide diagnostics for mechanical noises, electrical faults, and operational issues and guide you toward the correct repair path."
        }
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(marineRVServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      {/* --- HERO SECTION --- */}
      <div 
        className="relative h-[calc(100vh-80px)] min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden w-full max-w-full"
        data-hero-section
      >
        {/* Hero background image with priority loading */}
        <Image
          src="/assets/marine-rv-hero.jpg"
          alt="Marine and RV repair services background"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Enhanced gradient overlay for better contrast */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.85))'
          }}
          aria-hidden="true" 
        />

        <Container className="relative z-10 h-full flex flex-col justify-center py-8 sm:py-12 md:py-16 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto text-center space-y-5 sm:space-y-6 md:space-y-8 w-full">
            <h1 className={`font-heading font-bold ${typography.h1Hero} text-white flex flex-col items-center gap-2 md:gap-3 px-2`} style={{ textShadow: '0 2px 16px rgba(0, 0, 0, 0.3)', letterSpacing: '0.02em' }}>
              <span className="block">Marine & RV Repair</span>
              <span className="block">Services in</span>
              <div className="flex justify-center items-center h-[1.5em] overflow-hidden w-full max-w-full px-2">
                <CityRotator />
              </div>
            </h1>
            
            <p className={`text-white/90 max-w-2xl mx-auto ${typography.heroSubtitle} px-4`} style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.2)' }}>
              {pageData.hero.subtitle}
            </p>

            {/* CTA Buttons - Same as home page */}
            {/* Mobile: flex-col with 12px gap, Desktop: flex-row with 16px gap */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 md:gap-4 pt-6 md:pt-8 px-4 w-full max-w-full">
              {/* PRIMARY CTA: Gold button (Facebook Messenger) - 56px height */}
              <Button 
                asChild 
                className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-14 sm:h-14 md:h-[56px] px-5 sm:px-6 md:px-8 w-full sm:w-auto sm:min-w-[200px] md:min-w-[220px] max-w-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-[box-shadow,background-color] duration-300 ease-out text-sm sm:text-base md:text-lg"
                style={{ 
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                <a 
                  href="https://m.me/vadimgroup"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full"
                >
                  <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0">
                    <MessengerIcon />
                  </span>
                  <span className="truncate">Get a Free Estimate on Messenger</span>
                </a>
              </Button>

              {/* SECONDARY CTA: White outline (See Our Work) - 56px height */}
              <Button 
                asChild 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white/90 font-semibold h-14 sm:h-14 md:h-[56px] px-5 sm:px-6 md:px-8 w-full sm:w-auto sm:min-w-[140px] md:min-w-[160px] max-w-full transition-[background-color,border-color] duration-300 ease-out text-sm sm:text-base md:text-lg"
                style={{ 
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                <Link href="/about">See Our Work</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* --- SERVICES GRID --- */}
      <Section className="bg-surface py-24">
        <Container className="max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`text-brand-accent ${typography.eyebrow} block mb-4`}>{pageData.services.tag}</span>
            <h2 className={`font-heading ${typography.h2Section} font-bold text-brand-primary mb-6`}>{pageData.services.title}</h2>
            <p className={`${typography.sectionDescription} text-text-secondary`}>{pageData.services.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1: Structural & Body Repairs */}
            <div className="group rounded-lg bg-white border-2 border-border-light shadow-md hover:shadow-xl hover:border-brand-accent/40 transition-[border-color,box-shadow] duration-300 p-6">
              {/* Icon */}
              <div className="h-16 w-16 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-6 shrink-0 group-hover:bg-brand-accent transition-colors duration-300">
                <Anchor className="h-8 w-8" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className={`font-heading ${typography.h3Card} font-semibold text-brand-primary mb-3`}>
                Structural & Body Repairs (Light Scope)
              </h3>

              {/* Brief Description */}
              <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                Clean, careful repair work for boat and RV exteriors, interiors, and structural surfaces — without full-scale rebuilding
              </p>

              {/* Covers Section */}
              <div>
                <h4 className="font-bold text-brand-primary mb-3 text-sm">Covers:</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Gelcoat repair & surface restoration</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Fiberglass patching (light scope)</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Deck, floor & ceiling panel repairs</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Soft-spot correction (non-structural)</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Interior wall, cabinet & bunk repairs</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Light frame reinforcement</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Hatch, latch & hardware repairs</span></li>
                </ul>
              </div>
            </div>

            {/* Card 2: Electrical & Onboard Systems */}
            <div className="group rounded-lg bg-white border-2 border-border-light shadow-md hover:shadow-xl hover:border-brand-accent/40 transition-[border-color,box-shadow] duration-300 p-6">
              {/* Icon */}
              <div className="h-16 w-16 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-6 shrink-0 group-hover:bg-brand-accent transition-colors duration-300">
                <Zap className="h-8 w-8" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className={`font-heading ${typography.h3Card} font-semibold text-brand-primary mb-3`}>
                Electrical & Onboard Systems (Non-Licensed Scope)
              </h3>

              {/* Brief Description */}
              <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                Safe, precise troubleshooting and light electrical repair for interior systems and onboard components
              </p>

              {/* Covers Section */}
              <div>
                <h4 className="font-bold text-brand-primary mb-3 text-sm">Covers:</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Lighting repairs & replacements</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Battery, fuse & wiring diagnostics</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Switches, controls & interior systems</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Bathroom/kitchen system troubleshooting</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>RV slide-out alignment (light scope)</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>No high-voltage, shore-power, or major electrical servicing</span></li>
                </ul>
              </div>
            </div>

            {/* Card 3: Water Damage & Moisture Repair */}
            <div className="group rounded-lg bg-white border-2 border-border-light shadow-md hover:shadow-xl hover:border-brand-accent/40 transition-[border-color,box-shadow] duration-300 p-6">
              {/* Icon */}
              <div className="h-16 w-16 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-6 shrink-0 group-hover:bg-brand-accent transition-colors duration-300">
                <Droplets className="h-8 w-8" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className={`font-heading ${typography.h3Card} font-semibold text-brand-primary mb-3`}>
                Water Damage & Moisture Repair
              </h3>

              {/* Brief Description */}
              <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                Moisture intrusion is one of the most common issues in boats and RVs. We focus on fast, careful restoration to prevent long-term damage
              </p>

              {/* Covers Section */}
              <div>
                <h4 className="font-bold text-brand-primary mb-3 text-sm">Covers:</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Leak tracing & moisture diagnostics</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Interior drying (non-remediation)</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Mold-safe material replacement</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Panel, ceiling & floor rebuild (light scope)</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Waterproofing corrections & sealing</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Seal & gasket repairs</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>No mold remediation or flood extraction</span></li>
                </ul>
              </div>
            </div>

            {/* Card 4: Engine & Mechanical Repairs */}
            <div className="group rounded-lg bg-white border-2 border-border-light shadow-md hover:shadow-xl hover:border-brand-accent/40 transition-[border-color,box-shadow] duration-300 p-6">
              {/* Icon */}
              <div className="h-16 w-16 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-6 shrink-0 group-hover:bg-brand-accent transition-colors duration-300">
                <Gauge className="h-8 w-8" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className={`font-heading ${typography.h3Card} font-semibold text-brand-primary mb-3`}>
                Engine & Mechanical Repairs (Light Scope)
              </h3>

              {/* Brief Description */}
              <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                Smaller mechanical issues and engine-adjacent components — without performing major servicing or rebuilds
              </p>

              {/* Covers Section */}
              <div>
                <h4 className="font-bold text-brand-primary mb-3 text-sm">Covers:</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Starting issues diagnostics</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Minor engine repairs</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Cooling system troubleshooting</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Belt & accessory repairs</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Non-invasive fuel system checks</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Small mechanical adjustments</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>No major engine rebuilds or full servicing</span></li>
                </ul>
              </div>
            </div>

            {/* Card 5: CTA Card - Full width on desktop */}
            <div className="md:col-span-2 bg-brand-primary text-white rounded-lg p-6 md:p-8 border-2 border-brand-primary shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
                {/* Left side - Text content */}
                <div className="flex-1">
                  {/* Title */}
                  <h3 className={`font-heading ${typography.h3Card} font-semibold text-brand-accent mb-3`}>
                    Get a Quick Marine & RV Repair Estimate
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/90 text-sm md:text-base mb-5 leading-relaxed">
                    Fast, transparent pricing for marine and RV repairs — share photos and get timelines instantly
                  </p>
                  
                  {/* Bullet Points */}
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>Send photos on Facebook Messenger</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>Get timelines and pricing</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>Ask any questions</span>
                    </li>
                  </ul>
                </div>

                {/* Right side - CTA Buttons */}
                <div className="md:w-auto md:min-w-[280px] shrink-0">
                  <Button 
                    asChild
                    className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-12 px-6 text-sm w-full mb-3 transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                    style={{
                      willChange: 'transform',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale'
                    }}
                  >
                    <a 
                      href="https://m.me/vadimgroup"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <span className="w-4 h-4 flex items-center justify-center">
                        <MessengerIcon />
                      </span>
                      Get a Free Estimate on Messenger
                    </a>
                  </Button>
                  
                  {/* Secondary Link */}
                  <Link 
                    href="/contact"
                    className="text-white/80 hover:text-white text-sm inline-flex items-center gap-1 transition-colors duration-200 justify-center w-full"
                  >
                    Or email us your project details
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* --- EMERGENCY SERVICES SECTION --- */}
      <Section className="bg-brand-primary py-16 md:py-20">
        <Container className="max-w-[1200px]">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12">
            {/* Label */}
            <span className={`text-brand-accent ${typography.eyebrow} block mb-4`}>
              EMERGENCY SERVICES
            </span>

            {/* Title */}
            <h2 className={`font-heading ${typography.h2Section} font-bold text-white mb-4`}>
              Priority Marine & RV Repairs When You Need Fast Help
            </h2>

            {/* Description */}
            <p className={`${typography.bodyLarge} text-gray-300 max-w-3xl mx-auto`}>
              When a boat or RV issue can't wait, we move your project to the front of the line. Fast attention helps prevent moisture damage, electrical failures, and trip-ending breakdowns. We also handle <Link href="/home-repairs#priority-services" className="text-brand-accent hover:underline">emergency home repairs</Link> if your RV is your residence.
            </p>
          </div>

          {/* Main Priority Card */}
          <div className="bg-white/5 border border-brand-accent/20 rounded-lg p-6 md:p-8 mb-5 transition-all duration-300 hover:border-brand-accent hover:bg-white/[0.08] hover:shadow-[0_8px_24px_rgba(198,167,120,0.15)]">
            {/* Card Title */}
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-5">
              Priority attention for moisture, electrical, and structural issues
            </h3>

            {/* Covers Section */}
            <div className="mb-6">
              <h4 className="font-bold text-white mb-3 text-base md:text-lg">Covers:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>Active leaks or moisture intrusion</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>Soft spots in floors, decks, walls (light scope)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>Minor electrical failures affecting operation</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>Starting or cooling issues (light repairs)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>Weather-related or impact damage</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>Pre-trip safety concerns</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>Water-damage areas that can quickly worsen</span>
                </li>
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
                  href="https://m.me/vadimgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  <MessengerIcon />
                  Request Priority Help on Facebook
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

      {/* --- WHY IT MATTERS --- */}
      <Section className="bg-bg-surface py-24">
        <Container className="max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`text-brand-accent ${typography.eyebrow} block mb-4`}>{pageData.whyMatters.tag}</span>
            <h2 className={`font-heading ${typography.h2Section} font-bold text-brand-primary mb-6`}>{pageData.whyMatters.title}</h2>
            <p className={`${typography.sectionDescription} text-text-secondary mb-8`}>{pageData.whyMatters.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {pageData.whyMatters.blocks.map((block, i) => (
               <div key={i} className="bg-white p-6 rounded-lg border border-border-light shadow-sm hover:shadow-md hover:border-brand-accent/40 transition-all duration-300">
                 <h3 className={`font-heading ${typography.processTitle} font-bold text-brand-primary mb-4`}>
                   {block.title}
                 </h3>
                 <ul className="space-y-3">
                   {block.points.map((point, j) => (
                     <li key={j} className="flex items-start gap-3 text-text-secondary">
                       <span className="text-brand-accent shrink-0" style={{ marginTop: '0.35em', lineHeight: 1 }}>•</span>
                       <span className="text-sm leading-relaxed">{point}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
          </div>
        </Container>
      </Section>

      {/* --- MAINTENANCE GUIDE --- */}
      <Section className="bg-bg-subtle py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`text-brand-accent ${typography.eyebrow} block mb-4`}>{pageData.maintenance.tag}</span>
            <h2 className={`font-heading ${typography.h2Section} font-bold text-brand-primary mb-6`}>{pageData.maintenance.title}</h2>
            <p className={`${typography.sectionDescription} text-text-secondary`}>{pageData.maintenance.description}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             <Card className="h-full hover:shadow-lg transition-shadow">
               <CardHeader><CardTitle className="text-brand-primary flex items-center gap-2"><Calendar className="h-5 w-5 text-brand-accent"/> Monthly</CardTitle></CardHeader>
               <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary">
                   {pageData.maintenance.tasks.monthly.map((task, i) => <li key={i}>{task}</li>)}
                 </ul>
               </CardContent>
             </Card>
             <Card className="h-full hover:shadow-lg transition-shadow">
               <CardHeader><CardTitle className="text-brand-primary flex items-center gap-2"><Calendar className="h-5 w-5 text-brand-accent"/> Quarterly</CardTitle></CardHeader>
               <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary">
                   {pageData.maintenance.tasks.quarterly.map((task, i) => <li key={i}>{task}</li>)}
                 </ul>
               </CardContent>
             </Card>
             <Card className="h-full hover:shadow-lg transition-shadow">
               <CardHeader><CardTitle className="text-brand-primary flex items-center gap-2"><Calendar className="h-5 w-5 text-brand-accent"/> Seasonal</CardTitle></CardHeader>
               <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary">
                   {pageData.maintenance.tasks.seasonal.map((task, i) => <li key={i}>{task}</li>)}
                 </ul>
               </CardContent>
             </Card>
             <Card className="h-full bg-brand-primary text-white border-none hover:shadow-lg transition-shadow">
               <CardHeader><CardTitle className="text-white flex items-center gap-2"><Calendar className="h-5 w-5 text-brand-accent"/> Annual</CardTitle></CardHeader>
               <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-white/80">
                   {pageData.maintenance.tasks.annual.map((task, i) => <li key={i}>{task}</li>)}
                 </ul>
               </CardContent>
             </Card>
          </div>
        </Container>
      </Section>

      {/* --- WHY CHOOSE US --- */}
      {/* COLOR SCHEME: Light Grey (#F1F5F9) - Subtle contrast for benefits */}
      <Section className="bg-surface-subtle py-24">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className={`text-brand-accent ${typography.eyebrow} block mb-4`}>WHY CHOOSE US</span>
            <h2 className={`font-heading ${typography.h2Section} font-bold text-brand-primary mb-6`}>Why Marine & RV Owners Trust Vadim Group</h2>
            <p className={`text-text-secondary ${typography.bodyLarge}`}>Boat and RV owners across the Orlando area rely on us for clean, precise repair work and calm, dependable service. Every project — from fiberglass patching to moisture diagnostics to interior panel repairs — is handled with care, honesty, and full respect for your vessel.</p>
          </div>

          {/* Two-column layout: Left = Bullet Points + CTA (40%), Right = Carousel (60%) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
            {/* Left Column - Bullet Points + CTA - 2 columns */}
            <div className="flex flex-col h-full lg:col-span-2">
              <div className="space-y-5 flex-grow">
                {[
                  {
                    title: "Clean, precise workmanship",
                    description: "We repair your boat or RV with careful attention to detail — clean finishes, no shortcuts, no mess left behind"
                  },
                  {
                    title: "Long-lasting repair solutions",
                    description: "We focus on durable, high-quality results that prevent repeat issues and help extend the life of your vessel"
                  },
                  {
                    title: "Transparent, honest pricing",
                    description: "Clear timelines, clear estimates, no pressure, and no hidden fees — just straightforward communication"
                  },
                  {
                    title: "On-time and dependable",
                    description: "We show up when promised, keep you informed, and respect your travel plans and schedule"
                  },
                  {
                    title: "Respect for your boat, RV, and onboard systems",
                    description: "Professional handling, minimal disruption, and repairs done the right way — with respect for how you use your vessel"
                  }
                ].map((bullet, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <CheckCircle2 className="h-6 w-6 text-brand-accent shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h3 className={`${typography.bodyLarge} font-bold text-brand-primary mb-1`}>{bullet.title}</h3>
                      <p className={`${typography.body} text-text-secondary`}>{bullet.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button with Micro-copy */}
              <div className="mt-8 pt-8 border-t border-border-light">
                <Button 
                  asChild
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold h-12 px-8 transition-all duration-300 w-full md:w-auto"
                >
                  <Link href="/about" className="inline-flex items-center justify-center gap-2">
                    View Full Portfolio
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-sm text-text-muted mt-3 text-center md:text-left">
                  See before/after results from real marine & RV owners
                </p>
              </div>
            </div>

            {/* Right Column - Portfolio Carousel - 3 columns */}
            <div className="relative w-full h-full flex items-center lg:col-span-3">
              <PortfolioCarousel />
            </div>
          </div>
        </Container>
      </Section>

      {/* --- TESTIMONIALS --- */}
      {/* Design System v2.2: Section 6.9 - Testimonial Cards with Carousel */}
      {/* COLOR SCHEME: White (#FFFFFF) - Clean showcase for social proof */}
      <Section className="bg-surface py-12 md:py-16 overflow-hidden" style={{ isolation: 'isolate' }}>
        <Container className="overflow-visible">
          <TestimonialsCarousel />
        </Container>
      </Section>

      {/* --- PROCESS SECTION --- */}
      {/* Design System v2.2: Horizontal Cards Layout */}
      <Section className="bg-brand-primary text-white py-20 px-10">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`text-brand-accent ${typography.eyebrow} block mb-3`}>
              {pageData.process.tag}
            </span>
            <h2 className={`font-heading ${typography.h2Section} font-bold text-white mb-6`}>
              How Our Repair Process Works
            </h2>
          </div>

          {/* Horizontal Cards Grid */}
          <div className="relative max-w-7xl mx-auto">
            {/* Process Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative z-10">
              {pageData.process.steps.map((step, i) => (
                <div 
                  key={i}
                  className="
                    group
                    bg-white/5
                    border border-[rgba(198,167,120,0.2)]
                    rounded-xl
                    p-6 md:p-8
                    md:h-[320px]
                    flex flex-col
                    transition-all duration-300 ease-out
                    hover:border-brand-accent
                    hover:-translate-y-1.5
                    hover:shadow-[0_8px_24px_rgba(198,167,120,0.25)]
                  "
                  style={{
                    animation: `fadeInLeft 600ms ease-out ${i * 100}ms both`
                  }}
                >
                  {/* Step Number Badge: 56px circle */}
                  <div className="
                    w-14 h-14
                    rounded-full 
                    bg-brand-accent 
                    text-brand-primary 
                    font-bold 
                    flex items-center justify-center 
                    text-2xl
                    mb-5
                    mx-auto md:mx-0
                    shrink-0
                    transition-transform duration-300 ease-out
                    group-hover:scale-105
                  ">
                    {i + 1}
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 flex flex-col text-center md:text-left">
                    {/* Title: Unified process card typography */}
                    <h3 className={`font-heading ${typography.processTitle} font-bold text-brand-accent mb-3 md:min-h-[56px]`}>
                      {step.title}
                    </h3>
                    
                    {/* Description: Unified process card description */}
                    <p className={`text-gray-300 ${typography.processDescription} line-clamp-4`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Block */}
            <div className="mt-12 pt-10 border-t border-white/10 max-w-3xl mx-auto text-center">
              <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                Get a quick estimate or see examples of our work
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 px-4 sm:px-0">
                {/* Primary CTA: Gold Messenger Button */}
                <Button 
                  asChild 
                  className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-12 sm:h-14 px-4 sm:px-6 md:px-8 text-sm sm:text-base w-full sm:w-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow,background-color] duration-300 ease-out"
                  style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}
                >
                  <a 
                    href="https://m.me/vadimgroup"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center shrink-0">
                      <MessengerIcon />
                    </span>
                    Get Your Free Estimate
                  </a>
                </Button>

                {/* Secondary CTA: White Outline Button */}
                <Button 
                  asChild 
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white/90 font-semibold h-12 sm:h-14 px-4 sm:px-6 md:px-8 text-sm sm:text-base w-full sm:w-auto transition-[background-color,border-color] duration-300 ease-out"
                  style={{
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}
                >
                  <Link href="/about" className="inline-flex items-center justify-center gap-2">
                    See Our Work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {/* Keyframe animation for fade-in effect */}
        <style>{`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Disable animation on mobile for performance */
          @media (max-width: 767px) {
            @keyframes fadeInLeft {
              from, to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          }
        `}</style>
      </Section>

      {/* --- FAQ --- */}
      {/* Design System v2.2: Section 6.10 - FAQ Accordion with Show More */}
      <Section className="bg-surface-subtle py-24 md:py-32">
        <Container className="max-w-[900px]">
          <FAQAccordion 
            tag={pageData.faq.tag}
            title={pageData.faq.title}
            items={pageData.faq.items}
          />
          
          {/* Cross-Service Navigation */}
          <div className="mt-16 pt-12 border-t border-border-light max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-border-light shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-4 text-center">
                Also Need Home Repairs?
              </h3>
              <p className="text-text-secondary text-center mb-6">
                If your RV is also your residence or you need interior work done, check out our <Link href="/home-repairs" className="text-brand-accent hover:underline font-medium">home repair services</Link>. We handle drywall, flooring, kitchen and bathroom repairs with the same precision and care.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/home-repairs" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white hover:bg-brand-primary/90 rounded-lg font-medium transition-all duration-300"
                >
                  <Wrench className="h-5 w-5" />
                  View Home Repair Services
                </Link>
                <Link 
                  href="/#services" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-brand-accent/30 rounded-lg text-brand-accent hover:bg-brand-accent hover:text-brand-primary font-medium transition-all duration-300"
                >
                  <ArrowRight className="h-5 w-5" />
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* --- FINAL CTA --- */}
      {/* Design System v2.2: Section 6.6 - Simplified CTA with single focus */}
      <div id="contact"></div>
      <Section className="bg-brand-primary text-white py-16 md:py-24 lg:py-32 text-center relative overflow-hidden">
        <Container className="relative z-10 px-4">
          {/* Tag: FREE ESTIMATE */}
          <span className={`text-brand-accent ${typography.eyebrow} block mb-4 md:mb-6`}>
            FREE ESTIMATE
          </span>
          
          {/* CTA Headline: H2, white on dark */}
          <h2 className={`font-heading ${typography.h2Section} font-bold text-white mb-6 md:mb-8 px-2`}>
            Ready to Get Your Boat or RV Back in Shape?
          </h2>

          {/* Subtitle - Marine & RV specific */}
          <p className={`${typography.sectionDescription} text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 px-4`}>
            If your boat or RV needs attention, we can inspect the issue and recommend the right repair plan. Need <Link href="/home-repairs" className="text-brand-accent hover:underline">home repairs</Link> too?
          </p>

          {/* Trust statement before CTA - softer color to not compete with button */}
          <p className={`${typography.bodyLarge} text-gray-400 font-medium mb-6 md:mb-8 px-4`}>
            Free Estimate — No Pressure.<br className="sm:hidden" /> No Hidden Fees.
          </p>

          {/* PRIMARY CTA: Gold Facebook Messenger button with icon - ENLARGED */}
          <div className="flex flex-col items-center gap-3 md:gap-4 px-4 w-full max-w-full">
            <Button 
              asChild 
              className={`
                bg-brand-accent 
                hover:bg-brand-accent-hover 
                text-brand-primary 
                font-semibold 
                ${typography.ctaPrimary}
                h-14 sm:h-16 md:h-[68px] lg:h-[72px]
                px-6 sm:px-8 md:px-10 lg:px-12
                w-full sm:w-auto sm:min-w-[280px] md:min-w-[320px]
                max-w-full
                shadow-[0_4px_12px_rgba(0,0,0,0.15)]
                hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)]
                transition-[box-shadow,background-color] duration-300 ease-out
              `}
              style={{
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              <a 
                href="https://m.me/vadimgroup"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 w-full"
              >
                <span className="shrink-0 w-6 h-6 flex items-center justify-center">
                  <MessengerIcon />
                </span>
                <span>Get a Free Estimate on Messenger</span>
              </a>
            </Button>
            
            {/* Secondary text link */}
            <Link 
              href="/contact"
              className={`
                text-gray-300 
                hover:text-white 
                ${typography.ctaSmall}
                inline-flex items-center gap-2
                transition-colors duration-200
                group
              `}
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
