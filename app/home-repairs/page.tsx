import * as React from "react";
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  Droplets, 
  ShieldAlert, 
  Home as HomeIcon, 
  Wrench,
  Calendar,
  Bath,
  Clock,
  Anchor
} from "lucide-react";

// Metadata Export
export const metadata: Metadata = {
  title: "Home Repairs Orlando, Lake Nona, Daytona Beach | Vadim Group",
  description: "Expert home repairs: drywall, water damage, kitchens, bathrooms. Serving Orlando, Lake Nona, Hunters Creek, Winter Park, Daytona Beach, Cocoa Beach, Titusville.",
  keywords: "home repairs orlando, drywall repair lake nona, water damage daytona beach, kitchen repair winter park, handyman cocoa beach",
  openGraph: {
    title: "Home Repairs & Priority Services - Orlando | Vadim Group",
    description: "Expert home repairs with priority scheduling for urgent situations. Water damage, structural work, interior/exterior repairs.",
    url: "https://vadimgroup.com/home-repairs",
    siteName: "Vadim Group",
    images: [{
      url: "/assets/home-repairs-hero.jpg",
      width: 1200,
      height: 630,
    }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://vadimgroup.com/home-repairs"
  }
};

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CityRotator } from "@/components/CityRotator";
import { ServiceCard } from "@/components/home-repairs/ServiceCard";
import { PriorityServicesSection } from "@/components/home-repairs/PriorityServicesSection";
import { PortfolioCarousel } from "@/components/home-repairs/PortfolioCarousel";
import { TestimonialsCarousel } from "@/components/home-repairs/TestimonialsCarousel";
import { FAQAccordion } from "@/components/home-repairs/FAQAccordion";

// Messenger Icon SVG
const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.447 5.514 3.713 7.236V22l3.398-1.868C10.014 20.372 10.99 20.5 12 20.5c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.071 12.414l-2.571-2.743-5.014 2.743L11.071 8.5l2.571 2.743L18.571 8.5l-5.5 5.914z"/>
  </svg>
);

// Google Logo SVG
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

// Home Repairs Page Data
const data = {
  seo: {
    title: "Home Repairs & Priority Services Orlando | Vadim Group",
    description: "Professional home repair and priority scheduling in Orlando. Interior, exterior, water damage, structural repairs. Urgent response within 24-48 hours. Free estimates via Facebook Messenger.",
    keywords: "home repairs orlando, priority home repair, urgent home repairs, emergency home repair orlando, water damage repair, structural repair orlando, fast home repair, same-week repair orlando",
    ogTitle: "Home Repairs & Priority Services - Orlando | Vadim Group",
    ogDescription: "Expert home repairs with priority scheduling for urgent situations. Water damage, structural work, interior/exterior repairs. Fast response in Orlando area.",
    ogImage: "/images/og-home-repairs.jpg"
  },
  services: {
    tag: "OUR SERVICES",
    title: "Home Repair Categories",
    description: "Explore the main service categories below to quickly find the type of repair you need",
    categories: [
      {
        title: "Interior Repairs & Drywall Services",
        brief: "Clean, precise interior repair work that restores the look and comfort of your home",
        preview: "Drywall • Ceiling • Painting • Trim",
        subcategories: [
          {
            title: "Drywall Repair & Installation",
            items: [
              "Small holes, cracks, texture matching",
              "Drywall patching and replacements",
              "Minor water-damaged drywall repair"
            ]
          },
          {
            title: "Ceiling Repairs",
            items: [
              "Stain removal and touch-ups",
              "Crack repair and texture corrections",
              "Popcorn ceiling updates (non-structural)"
            ]
          },
          {
            title: "Interior Painting",
            items: [
              "Walls, ceilings, and trim",
              "Color-match touch-ups",
              "Light refinishing (non-specialty)"
            ]
          },
          {
            title: "Flooring Repair",
            items: [
              "Tile, vinyl, and laminate repairs",
              "Minor subfloor surface corrections",
              "Small-area hardwood refinishing"
            ]
          },
          {
            title: "Baseboards, Trim & Molding",
            items: [
              "Replacement and repair",
              "Caulking and finishing",
              "Light water-damage repair"
            ]
          }
        ]
      },
      {
        title: "Kitchen & Bathroom Repairs",
        brief: "Reliable, moisture-safe repair solutions for high-traffic home areas",
        preview: "Plumbing • Cabinets • Tile • Fixtures",
        subcategories: [
          {
            title: "Plumbing-Related Light Repairs",
            items: [
              "Faucet leaks and loose fixtures",
              "Under-sink minor repairs",
              "Drain clearing (non-snaking)"
            ]
          },
          {
            title: "Cabinet & Drawer Repair",
            items: [
              "Hinges, slides, and alignment",
              "Water-base repair on cabinets",
              "Door and panel adjustments"
            ]
          },
          {
            title: "Countertop Repair (Light Scope)",
            items: [
              "Small chips and sealing",
              "Caulking and surface touch-ups",
              "Minor surface refinishing"
            ]
          },
          {
            title: "Tile & Grout Repair",
            items: [
              "Regrouting and tile replacement",
              "Waterproofing touch-ups",
              "Minor crack repair"
            ]
          },
          {
            title: "Appliance Setup (Non-Electrical)",
            items: [
              "Dishwasher and disposal installation",
              "Hookup assistance for built-ins"
            ]
          }
        ]
      },
      {
        title: "Structural & Safety Repairs (Non-Structural Scope)",
        brief: "Light, non-structural home repairs that help maintain comfort, stability, and safety",
        preview: "Wood Rot • Subfloor • Framing • Foundation",
        subcategories: [
          {
            title: "Wood Rot Repair (Light Scope)",
            items: [
              "Trim, fascia, and small-area wood replacement",
              "Minor moisture-affected sections",
              "Preventive sealing"
            ]
          },
          {
            title: "Joist, Stud & Subfloor Surface Repairs",
            items: [
              "Small-area reinforcement",
              "Subfloor surface leveling",
              "Minor framing fixes"
            ]
          },
          {
            title: "Light Home Corrections",
            items: [
              "Settlement-related cosmetic fixes",
              "Door or framing alignment",
              "General safety improvements"
            ]
          }
        ]
      },
      {
        title: "Exterior Home Repairs",
        brief: "Protecting your home from weather wear and everyday damage",
        preview: "Fence • Deck • Siding • Doors",
        subcategories: [
          {
            title: "Fence & Gate Repairs",
            items: [
              "Post and panel repairs",
              "Hardware replacement",
              "Alignment and adjustments"
            ]
          },
          {
            title: "Deck Repairs (Light Scope)",
            items: [
              "Surface board replacement",
              "Light sanding and staining",
              "Minor stability adjustments"
            ]
          },
          {
            title: "Siding Repair",
            items: [
              "Wood, vinyl, and fiber-cement patches",
              "Small panel replacements",
              "Weather-damage fixes"
            ]
          },
          {
            title: "Gutter Cleaning & Minor Repairs",
            items: [
              "Cleaning and debris removal",
              "Leak patching",
              "Downspout adjustments"
            ]
          },
          {
            title: "Exterior Caulking & Sealing",
            items: [
              "Window and door caulking",
              "Expansion joint sealing",
              "Moisture-prevention touch-ups"
            ]
          }
        ]
      },
      {
        title: "Water Damage Repairs (Light Scope)",
        brief: "Small-scale water damage repairs to restore materials and prevent further issues",
        preview: "Drywall • Moisture • Leak Repairs • Restoration",
        subcategories: [
          {
            title: "Drywall & Trim Water Damage Repair",
            items: [
              "Moisture-affected drywall removal",
              "Baseboard and trim replacement",
              "Texture and paint matching"
            ]
          },
          {
            title: "Moisture Inspection (Non-Invasive)",
            items: [
              "Visual moisture assessment",
              "Surface-level moisture readings",
              "Source identification (non-licensed)"
            ]
          },
          {
            title: "Kitchen/Bath Leak Repairs (Small Scope)",
            items: [
              "Under-sink repairs",
              "Caulking and waterproofing",
              "Tile/grout water damage fixes"
            ]
          },
          {
            title: "Ceiling & Wall Surface Repairs",
            items: [
              "Small-area replacement",
              "Stain blocking and refinishing",
              "Mold-safe material handling"
            ]
          }
        ]
      }
    ]
  },
  education: {
    tag: "HOME CARE EDUCATION",
    title: "Why Homes Need Regular Repair & Maintenance",
    description: "Homes in the Orlando area face constant wear from humidity, heat, daily use, and natural settling. Understanding the common causes behind home repairs helps you plan ahead, avoid bigger problems, and keep your home safe and comfortable.",
    causes: [
      "**Daily Wear & Tear** - Floors, walls, and surfaces naturally wear down with everyday use",
      "**Florida Weather Exposure** - Sun, humidity, and storms slowly affect exterior and interior materials",
      "**Home Settling** - Natural settling causes small cracks, gaps, and alignment issues",
      "**Material Aging** - Caulk dries, paint fades, wood swells, seals weaken over time",
      "**Moisture & Humidity** - Florida's climate increases the chance of small leaks, staining, and moisture buildup",
      "**Previous Poor Work** - Old or rushed repairs often fail and require proper fix-ups"
    ],
    costTitle: "The Cost of Waiting:",
    costDesc: "Delaying small repairs often leads to higher expenses.\n\nMinor leaks turn into moisture damage. Tiny cracks spread.\n\nEarly action keeps repairs simple — and prevents avoidable damage."
  },
  maintenance: {
    tag: "MAINTENANCE GUIDE",
    title: "Home Maintenance Checklist for Orlando Homeowners",
    description: "A simple, year-round maintenance checklist designed for Orlando's warm, humid climate. Following these steps helps prevent water damage, mold risk, and costly repairs — keeping your home in good condition throughout the year.",
    tasks: {
      monthly: [
        "Test smoke and carbon monoxide detectors",
        "Check for small plumbing leaks under sinks",
        "Inspect caulking in kitchens and bathrooms",
        "Inspect weatherstripping on doors and windows",
        "Test GFCI outlets",
        "Replace HVAC filters (recommended in humid climates)"
      ],
      quarterly: [
        "Clean gutters and downspouts",
        "Inspect roof edges for visible damage",
        "Check caulking around tubs, showers, and sinks",
        "Test garage door safety sensors",
        "Inspect exterior paint and trim for wear",
        "Flush A/C drain line (very important for Florida homes)"
      ],
      annual: [
        "Touch up exterior caulking and sealants",
        "Inspect attic for moisture signs and ventilation issues",
        "Check deck and patio boards for loose or damaged sections",
        "Service water heater (non-tankless)",
        "Pressure wash exterior walkways and siding",
        "Inspect home exterior for cracks or gaps"
      ],
      periodic: [
        "Deep clean carpets and upholstery",
        "Reseal driveway and walkways",
        "Refresh exterior paint touch-ups",
        "Inspect and treat exterior wood for pests",
        "Clean dryer vent line (to reduce fire risk)"
      ]
    }
  },
  whyChooseUs: {
    tag: "WHY CHOOSE US",
    title: "Why Homeowners Choose Vadim Group",
    description: "Homeowners across the Orlando area trust us for clean, precise repair work and a calm, reliable service experience. Every project — from drywall to flooring to water-damage repair — is handled with care, honesty, and full respect for your home.",
    bullets: [
      {
        title: "Clean, precise workmanship",
        description: "We fix the issue properly and leave your home spotless"
      },
      {
        title: "Long-lasting repair solutions",
        description: "No shortcuts. We focus on durable, high-quality results"
      },
      {
        title: "Transparent, honest pricing",
        description: "Clear estimates, no surprises, no upselling"
      },
      {
        title: "On-time and dependable",
        description: "We show up when we say — and keep you informed at every step"
      },
      {
        title: "Respect for your home and schedule",
        description: "Careful work, minimal disruption, and professional communication"
      }
    ]
  },
  reviews: {
    tag: "CLIENT REVIEWS",
    title: "What Homeowners Say About Our Work"
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
    title: "Home Repair FAQs",
    items: [
      {
        question: "How quickly can you respond to a home repair request in the Orlando area?",
        answer: "Most standard home repairs in the Orlando and Lake Nona area are scheduled within a few business days. For urgent issues (leaks, water damage, safety concerns), we offer priority scheduling and aim to respond as quickly as possible."
      },
      {
        question: "Do you provide free home repair estimates?",
        answer: "Yes — free estimates are available. Send photos and a short description via Facebook Messenger, and we typically respond within 2-4 hours during business hours (every day 8 AM - 8 PM). Emergency repairs are available 24/7."
      },
      {
        question: "Can you help diagnose a home repair issue if we're not sure what's wrong?",
        answer: "Yes. Many homeowners contact us unsure of the root cause. We handle diagnostics, explain the issue clearly, and recommend the best repair plan."
      },
      {
        question: "What types of home repair services do you specialize in?",
        answer: (
          <>
            We handle interior repairs (drywall, ceilings, flooring), kitchen & bathroom fixes, light structural repairs, exterior work, and water-damage restoration for homeowners in the Orlando area. We also offer specialized <Link href="/marine-rv" className="text-brand-accent hover:underline">marine and RV repair services</Link> for comprehensive care.
          </>
        )
      },
      {
        question: "Do you repair small handyman jobs, or only larger home projects?",
        answer: (
          <>
            We handle projects of all sizes — from quick fixes to full-area restoration. Whether home repairs or <Link href="/marine-rv" className="text-brand-accent hover:underline">boat and RV maintenance</Link>, we handle all project sizes with the same attention to detail.
          </>
        )
      },
      {
        question: "Are your home repairs long-lasting?",
        answer: "Yes — we focus on permanent solutions, not temporary patches. All work includes workmanship support and follow-up if needed."
      },
      {
        question: "Do you repair moisture or mold-related issues?",
        answer: "We perform moisture diagnostics, replace affected materials, and restore damaged surfaces. Severe or industrial-level mold remediation is referred to licensed specialists."
      },
      {
        question: "Do you repair older homes in the Orlando area?",
        answer: "Yes. Older homes often require more precise restoration due to settling, outdated materials, or previous incorrect work. We specialize in careful, clean repairs."
      },
      {
        question: "Do you handle light structural repairs?",
        answer: "Yes — we perform light structural work that does not require an engineer. If a repair requires engineering review, we'll explain it clearly before any work begins."
      },
      {
        question: "Can you match drywall textures, paint colors, or materials?",
        answer: "Yes — texture matching, paint blending, and material restoration are standard parts of our repair services."
      },
      {
        question: "What makes a repair \"priority\" or urgent?",
        answer: "Priority repairs are situations where fast attention helps prevent additional damage or disruption at home. This includes small water-related issues, comfort and usability problems, pre-event fixes, or minor issues that could worsen if left unaddressed. We assess each situation individually and provide realistic timelines. Priority scheduling typically means assessment within 2-4 hours and work scheduled within 24-48 hours, depending on the scope."
      }
    ]
  }
};

export default function HomeRepairsPage() {
  // Service icons for each category: Interior, Kitchen/Bath, Structural, Exterior, Water Damage
  const serviceIcons = [Wrench, Bath, ShieldAlert, HomeIcon, Droplets];

  // JSON-LD Schemas for Home Repairs Page
  const homeRepairServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://vadimgroup.com/home-repairs#service",
    "serviceType": "Home Repair",
    "name": "Home Repair Services Orlando",
    "description": "Professional home repair and restoration services in Orlando metro area including drywall repair, water damage repair, kitchen and bathroom repairs, structural repairs.",
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
      "name": "Home Repair Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Damage Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ceiling Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Painting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flooring Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cabinet Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Door Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trim and Molding" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deck Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fence Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutter Repair" } }
      ]
    }
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can you respond to a home repair request in the Orlando area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most standard home repairs in the Orlando and Lake Nona area are scheduled within a few business days. For urgent issues (leaks, water damage, safety concerns), we offer priority scheduling and aim to respond as quickly as possible."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free home repair estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — free estimates are available. Send photos and a short description via Facebook Messenger, and we typically respond within 2-4 hours during business hours (every day 8 AM - 8 PM). Emergency repairs are available 24/7."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help diagnose a home repair issue if we're not sure what's wrong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many homeowners contact us unsure of the root cause. We handle diagnostics, explain the issue clearly, and recommend the best repair plan."
        }
      },
      {
        "@type": "Question",
        "name": "What types of home repair services do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We handle interior repairs (drywall, ceilings, flooring), kitchen & bathroom fixes, light structural repairs, exterior work, and water-damage restoration for homeowners in the Orlando area."
        }
      },
      {
        "@type": "Question",
        "name": "Do you repair small handyman jobs, or only larger home projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We handle projects of all sizes — from quick fixes to full-area restoration."
        }
      },
      {
        "@type": "Question",
        "name": "Are your home repairs long-lasting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we focus on permanent solutions, not temporary patches. All work includes workmanship support and follow-up if needed."
        }
      },
      {
        "@type": "Question",
        "name": "Do you repair moisture or mold-related issues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We perform moisture diagnostics, replace affected materials, and restore damaged surfaces. Severe or industrial-level mold remediation is referred to licensed specialists."
        }
      },
      {
        "@type": "Question",
        "name": "Do you repair older homes in the Orlando area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Older homes often require more precise restoration due to settling, outdated materials, or previous incorrect work. We specialize in careful, clean repairs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle light structural repairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we perform light structural work that does not require an engineer. If a repair requires engineering review, we'll explain it clearly before any work begins."
        }
      },
      {
        "@type": "Question",
        "name": "Can you match drywall textures, paint colors, or materials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — texture matching, paint blending, and material restoration are standard parts of our repair services."
        }
      },
      {
        "@type": "Question",
        "name": "What makes a repair \"priority\" or urgent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Priority repairs are situations where fast attention helps prevent additional damage or disruption at home. This includes small water-related issues, comfort and usability problems, pre-event fixes, or minor issues that could worsen if left unaddressed. We assess each situation individually and provide realistic timelines. Priority scheduling typically means assessment within 2-4 hours and work scheduled within 24-48 hours, depending on the scope."
        }
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeRepairServiceSchema) }}
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
          src="/assets/blog/seasonal-maintenance.jpg"
          alt="Home repairs services background"
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
            <h1 className="font-heading font-bold text-[32px] sm:text-[42px] md:text-5xl lg:text-6xl xl:text-7xl text-white flex flex-col items-center gap-2 md:gap-3 px-2" style={{ textShadow: '0 2px 16px rgba(0, 0, 0, 0.3)', letterSpacing: '0.02em', lineHeight: '1.17' }}>
              <span className="block">Home Repair & Restoration</span>
              <span className="block">Services in</span>
              <div className="flex justify-center items-center h-[1.5em] overflow-hidden w-full max-w-full px-2">
                 <CityRotator />
              </div>
            </h1>
            
            <p className="text-white/90 max-w-2xl mx-auto leading-[1.6] text-base sm:text-lg md:text-xl px-4" style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.2)' }}>
              Clean, reliable repair work for homes in the Orlando area —<br className="hidden md:inline" /> done the right way, without stress or surprises
            </p>

            {/* CTA Buttons - Same as home page */}
            {/* Mobile: flex-col with 12px gap, Desktop: flex-row with 16px gap */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 md:gap-4 pt-6 md:pt-8 px-4 w-full max-w-full">
              {/* PRIMARY CTA: Gold button (Facebook Messenger) - 56px height */}
              <Button 
                asChild 
                className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-14 sm:h-14 md:h-[56px] px-5 sm:px-6 md:px-8 w-full sm:w-auto sm:min-w-[200px] md:min-w-[220px] max-w-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-[transform,box-shadow,background-color] duration-300 ease-out text-sm sm:text-base md:text-lg"
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
      {/* COLOR SCHEME: White (#FFFFFF) - Clean catalog presentation */}
      <Section className="bg-surface py-24">
        <Container className="max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">{data.services.tag}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">{data.services.title}</h2>
            <p className="text-text-secondary">{data.services.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {data.services.categories.map((category, i) => {
                const Icon = serviceIcons[i] || Wrench;
                return (
                    <ServiceCard
                        key={i}
                        icon={<Icon className="h-8 w-8" strokeWidth={1.5} />}
                        title={category.title}
                        brief={category.brief}
                        preview={category.preview}
                        subcategories={category.subcategories}
                    />
                );
            })}
            
            {/* CTA Card - Desktop Only */}
            <div className="hidden md:block bg-brand-primary text-white rounded-lg p-8 border-2 border-brand-primary shadow-lg flex flex-col justify-between" style={{ minHeight: "300px" }}>
              <div>
                {/* Title */}
                <h3 className="font-heading text-2xl font-semibold text-brand-accent mb-3">
                  Need a Fast Estimate?
                </h3>
                
                {/* Description */}
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  Get a quick, clear quote for any home repair — no pressure, no hidden fees
                </p>
                
                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
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
              
              {/* CTA Button */}
              <div className="mt-auto">
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
        </Container>
      </Section>

      {/* --- PRIORITY SERVICES SECTION --- */}
      {/* COLOR SCHEME: Blue (#0F172A) - Urgency accent, strategic visual anchor */}
      <PriorityServicesSection messengerLink="https://m.me/vadimgroup" />

      {/* --- EDUCATION --- */}
      {/* COLOR SCHEME: Light Grey (#F1F5F9) - Soft background for readability */}
      <Section className="bg-surface-subtle py-24">
        <Container className="max-w-7xl">
          {/* Section Header - Centered */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">
              {data.education.tag}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              {data.education.title}
            </h2>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              {data.education.description}
            </p>
          </div>

          {/* Main Layout: 60% left (cards), 40% right (info + CTA) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Left Column - Common Reasons Cards - 60% (3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-brand-primary mb-7">
                Common Reasons Homes Need Repairs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                {data.education.causes.map((item, i) => {
                  // Parse title and description from "**Title** - Description"
                  const match = item.match(/\*\*(.*?)\*\*\s*-\s*(.*)/);
                  const title = match ? match[1] : item;
                  const desc = match ? match[2] : '';
                  
                  return (
                    <div 
                      key={i} 
                      className="group bg-white p-6 md:p-7 rounded-xl border border-border-light hover:border-brand-accent/50 hover:shadow-lg transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1"
                      style={{ 
                        willChange: 'transform',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale'
                      }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0 transition-colors duration-300 ease-out group-hover:bg-brand-accent/20">
                          <span className="text-brand-accent font-bold text-base">{i + 1}</span>
                        </div>
                        <h4 className="font-bold text-brand-primary text-base md:text-lg leading-tight pt-1.5">
                          {title}
                        </h4>
                      </div>
                      <p className="text-sm md:text-base text-text-secondary leading-[1.6] pl-[52px]">
                        {desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - The Cost of Waiting + CTA - 40% (2 cols) */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-brand-accent/5 to-brand-accent/10 p-8 md:p-10 rounded-xl border border-brand-accent/20 shadow-sm h-full flex flex-col sticky top-24">
                {/* Cost of Waiting Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-brand-accent/15 flex items-center justify-center shrink-0">
                    <Clock className="h-7 w-7 text-brand-accent" />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-brand-primary leading-tight pt-1">
                    {data.education.costTitle.replace(':', '')}
                  </h3>
                </div>
                
                {/* Cost of Waiting Text */}
                <div className="text-text-secondary leading-[1.7] text-base md:text-lg space-y-4 mb-8">
                  {data.education.costDesc.split('\n').map((line, i) => (
                    line.trim() && <p key={i}>{line.trim()}</p>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-brand-accent/25 my-8"></div>

                {/* CTA Section */}
                <div className="mt-auto">
                  <h4 className="font-heading text-xl md:text-2xl font-bold text-brand-primary mb-4">
                    Not sure if a repair can wait?
                  </h4>
                  <p className="text-text-secondary text-base md:text-lg mb-7 leading-[1.6]">
                    Send us a photo — we'll help assess it quickly
                  </p>
                  <Button 
                    asChild
                    className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-12 md:h-14 px-4 sm:px-5 md:px-8 text-sm sm:text-base md:text-lg w-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-[transform,box-shadow,background-color] duration-300 ease-out"
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
                      <span className="truncate">Get a Free Estimate on Messenger</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* --- MAINTENANCE GUIDE --- */}
      {/* COLOR SCHEME: White (#FFFFFF) - Clean card grid */}
      <Section className="bg-surface py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">{data.maintenance.tag}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">{data.maintenance.title}</h2>
            <p className="text-text-secondary">{data.maintenance.description}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             <Card className="h-full hover:shadow-lg transition-shadow">
               <CardHeader><CardTitle className="text-brand-primary flex items-center gap-2"><Calendar className="h-5 w-5 text-brand-accent"/> Monthly</CardTitle></CardHeader>
               <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary">
                   {data.maintenance.tasks.monthly.map((task, i) => <li key={i}>{task}</li>)}
                 </ul>
               </CardContent>
             </Card>
             <Card className="h-full hover:shadow-lg transition-shadow">
               <CardHeader><CardTitle className="text-brand-primary flex items-center gap-2"><Calendar className="h-5 w-5 text-brand-accent"/> Quarterly</CardTitle></CardHeader>
               <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary">
                   {data.maintenance.tasks.quarterly.map((task, i) => <li key={i}>{task}</li>)}
                 </ul>
               </CardContent>
             </Card>
             <Card className="h-full hover:shadow-lg transition-shadow">
               <CardHeader><CardTitle className="text-brand-primary flex items-center gap-2"><Calendar className="h-5 w-5 text-brand-accent"/> Annual</CardTitle></CardHeader>
               <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary">
                   {data.maintenance.tasks.annual.map((task, i) => <li key={i}>{task}</li>)}
                 </ul>
               </CardContent>
             </Card>
             <Card className="h-full bg-brand-primary text-white border-none hover:shadow-lg transition-shadow">
               <CardHeader><CardTitle className="text-white flex items-center gap-2"><Calendar className="h-5 w-5 text-brand-accent"/> Every 2-3 Years</CardTitle></CardHeader>
               <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-white/80">
                   {data.maintenance.tasks.periodic.map((task, i) => <li key={i}>{task}</li>)}
                 </ul>
               </CardContent>
             </Card>
          </div>
        </Container>
      </Section>

      {/* --- WHY CHOOSE US --- */}
      {/* COLOR SCHEME: Light Grey (#F1F5F9) - Subtle contrast for benefits */}
      <Section className="bg-surface-subtle py-16 md:py-20">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">{data.whyChooseUs.tag}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">{data.whyChooseUs.title}</h2>
            <p className="text-text-secondary text-lg leading-relaxed">{data.whyChooseUs.description}</p>
          </div>

          {/* Two-column layout: Left = Bullet Points + CTA (40%), Right = Carousel (60%) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
            {/* Left Column - Bullet Points + CTA - 2 columns */}
            <div className="flex flex-col h-full lg:col-span-2">
              <div className="space-y-5 flex-grow">
                {data.whyChooseUs.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <CheckCircle2 className="h-6 w-6 text-brand-accent shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h3 className="text-lg font-bold text-brand-primary mb-1">{bullet.title}</h3>
                      <p className="text-base text-text-secondary leading-relaxed">{bullet.description}</p>
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
                  See before/after results from real homeowners
                </p>
              </div>
            </div>

            {/* Right Column - Portfolio Carousel - 3 columns */}
            <div className="relative w-full h-full flex items-center lg:col-span-3">
              {/* Portfolio Carousel */}
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
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">
              {data.reviews.tag}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              {data.reviews.title}
            </h2>
            {/* Google Verification Badge - Moved to Header */}
            <div className="flex items-center justify-center gap-2 text-text-secondary">
              <GoogleLogo />
              <span className="text-base">Reviews collected from verified clients</span>
            </div>
          </div>

          <TestimonialsCarousel />
        </Container>
      </Section>

      {/* --- PROCESS SECTION --- */}
      {/* Design System v2.2: Horizontal Cards Layout */}
      {/* COLOR SCHEME: Blue (#0F172A) - Trust and methodology emphasis */}
      <Section className="bg-brand-primary text-white py-20 px-10">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">
              {data.process.tag}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              How Our Repair Process Works
            </h2>
          </div>

          {/* Horizontal Cards Grid */}
          <div className="relative max-w-7xl mx-auto">
            {/* Process Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative z-10">
              {data.process.steps.map((step, i) => (
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
                    {/* Title: Playfair Display, 20px, bold, gold - with min-height for alignment */}
                    <h3 className="font-heading text-xl font-bold text-brand-accent mb-3 leading-tight md:min-h-[56px]">
                      {step.title}
                    </h3>
                    
                    {/* Description: 14px, light gray, 3-4 lines max */}
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
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

          /* Disable animation on mobile for performance */}
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
      {/* COLOR SCHEME: Light Grey (#F1F5F9) - Neutral zone before CTA */}
      <Section className="bg-surface-subtle py-24 md:py-32">
        <Container max-width="container-md">
          <FAQAccordion
            tag={data.faq.tag}
            title={data.faq.title}
            items={data.faq.items}
          />
          
          {/* Cross-Service Navigation */}
          <div className="mt-16 pt-12 border-t border-border-light max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-border-light shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-4 text-center">
                Need Different Services?
              </h3>
              <p className="text-text-secondary text-center mb-6">
                We also specialize in <Link href="/marine-rv" className="text-brand-accent hover:underline font-medium">marine and RV repairs</Link>. From boat gelcoat restoration to RV water damage repair, we handle specialized vessels with the same precision and care.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/marine-rv" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white hover:bg-brand-primary/90 rounded-lg font-medium transition-all duration-300"
                >
                  <Anchor className="h-5 w-5" />
                  View Marine & RV Services
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
      {/* COLOR SCHEME: Blue (#0F172A) - Strong conversion focus */}
      <div id="contact"></div>
      <Section className="bg-brand-primary text-white py-16 md:py-24 lg:py-32 text-center relative overflow-hidden">
        <Container className="relative z-10 px-4">
          {/* Tag: FREE ESTIMATE */}
          <span className="text-brand-accent font-bold tracking-wider text-sm sm:text-base uppercase block mb-4 md:mb-6">
            FREE ESTIMATE
          </span>
          
          {/* CTA Headline: H2, white on dark */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 px-2">
            Ready to Restore Your Home?
          </h2>

          {/* Subtitle - added as per user request */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 px-4 leading-relaxed">
            If you have damage, wear, or unfinished repairs, we're here to help you bring your home back to its best condition. Also need <Link href="/marine-rv" className="text-brand-accent hover:underline">marine or RV repairs</Link>?
          </p>

          {/* Trust statement before CTA - softer color to not compete with button */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium mb-6 md:mb-8 px-4">
            Free Estimate — No Pressure. No Hidden Fees.
          </p>

          {/* PRIMARY CTA: Gold Facebook Messenger button with icon - ENLARGED */}
          <div className="flex flex-col items-center gap-3 md:gap-4 px-4 w-full max-w-full">
            <Button 
              asChild 
              className="
                bg-brand-accent 
                hover:bg-brand-accent-hover 
                text-brand-primary 
                font-semibold 
                text-base sm:text-lg md:text-xl
                h-14 sm:h-16 md:h-[68px] lg:h-[72px]
                px-6 sm:px-8 md:px-10 lg:px-12
                w-full sm:w-auto sm:min-w-[260px] md:min-w-[300px] lg:min-w-[320px]
                max-w-full
                shadow-lg
                hover:shadow-xl
                transition-all duration-300
              "
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
                <span className="truncate">Get a Free Estimate on Messenger</span>
              </a>
            </Button>
            
            {/* Secondary text link */}
            <Link 
              href="/contact"
              className="
                text-gray-300 
                hover:text-white 
                text-sm sm:text-base
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
