// Server Component - No 'use client' directive
import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Hammer, Anchor, Siren, ArrowRight } from 'lucide-react';
import { typography } from '@/lib/typography';

// Metadata Export
export const metadata: Metadata = {
  title: "Home, Marine & RV Repair Orlando & Daytona Beach | Vadim Group",
  description: "Professional repairs in Orlando, Lake Nona, Daytona Beach, Cocoa Beach. Home, marine & RV services. Fast response, quality craftsmanship. Free estimates.",
  keywords: "home repair orlando, marine repair daytona beach, rv repair cocoa beach, handyman lake nona, titusville boat repair",
  openGraph: {
    title: "Expert Home, Marine & RV Repairs | Vadim Group Orlando",
    description: "Professional repair services in Orlando, Lake Nona, Daytona Beach, Cocoa Beach - homes, boats, and RVs",
    url: "https://vadimgroup.com",
    siteName: "Vadim Group",
    images: [{
      url: "/assets/home-hero.png",
      width: 1200,
      height: 630,
    }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://vadimgroup.com"
  }
};
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { CityRotator } from '@/components/CityRotator';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import FAQAccordion from '@/components/home/FAQAccordion';

// Assets - replace with Next.js public paths
const heroBg = '/assets/home-hero.png';
const vadimPortrait = '/assets/vadim-portrait-optimized.webp';

// Messenger Icon Component
const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.447 5.514 3.713 7.236V22l3.398-1.868C10.014 20.372 10.99 20.5 12 20.5c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.071 12.414l-2.571-2.743-5.014 2.743L11.071 8.5l2.571 2.743L18.571 8.5l-5.5 5.914z"/>
  </svg>
);

export default function HomePage() {
  const serviceIcons = [Hammer, Anchor, Siren];

  // Data from markdown - copied from React version
  const data = {
    seo: {
      title: "Home Repair, Marine & RV Services in Orlando | Vadim Group",
      description: "Fast, high-quality home repair, marine and RV services in Orlando, Lake Nona and Hunters Creek. Professional craftsmanship, transparent pricing, fast response.",
      keywords: "home repair orlando, marine repair orlando, rv repair orlando, emergency repairs, professional handyman orlando",
      ogTitle: "Expert Home, Marine & RV Repairs | Vadim Group Orlando",
      ogDescription: "Professional repair services in Orlando - homes, boats, and RVs",
      ogImage: "/assets/home-hero.png"
    },
    whyChooseUs: {
      tag: "WHY CHOOSE US",
      title: "Why Work With The Vadim Group?",
      description: "We combine professional craftsmanship with calm, professional service. Every project is handled with precision, responsibility, and respect for your home or vessel.",
      closing: "I focus on one thing: solving your problem properly and making the whole process as easy and worry-free as possible — with a clean finish every time.",
      bullets: []
    },
    services: {
      tag: "WHAT WE OFFER",
      title: "Our Services",
      description: "Expert repairs and restoration for your home, boat, and RV",
      items: [
        {
          title: "Home Repairs & Restoration",
          description: "High-quality home repair and restoration services designed for long-lasting results.",
          features: [
            {
              category: "Interior",
              items: ["Drywall, ceilings, painting", "Flooring, doors, windows", "Baseboards and trim"]
            },
            {
              category: "Kitchen & Bathroom",
              items: ["Plumbing-related fixes", "Cabinets, countertops, tile", "Appliance installation"]
            },
            {
              category: "Electrical",
              items: ["Outlets, switches, fixtures", "Ceiling fans, GFCI outlets"]
            },
            {
              category: "Structural & Exterior",
              items: ["Crack repairs, reinforcement", "Siding, gutters, decks", "Fences, pressure washing"]
            }
          ],
          linkText: "View Home Services",
          linkHref: "/home-repairs",
          footerNote: null
        },
        {
          title: "Marine & RV Services",
          description: "Technical, structural, and mechanical repairs for boats and RVs.",
          features: [
            {
              category: "Structural",
              items: ["Gelcoat and deck restoration", "Interior panels, cabin rebuild", "Hull and frame repairs"]
            },
            {
              category: "Electrical & Systems",
              items: ["Lighting, switches, wiring", "Battery and fuse issues", "System diagnostics"]
            },
            {
              category: "Water Damage",
              items: ["Moisture diagnostics", "Cabin drying, panel replacement", "Preventive weatherproofing"]
            },
            {
              category: "Engine & Mechanical",
              items: ["Engine diagnostics, repairs", "Cooling system work", "Belt and accessory repairs"]
            }
          ],
          linkText: "View Marine & RV Services",
          linkHref: "/marine-rv",
          footerNote: null
        },
        {
          title: "Emergency Services",
          description: "Priority scheduling for urgent repairs that can't wait. We respond quickly to help you get back on track.",
          features: [
            {
              category: "Water Issues",
              items: ["Active leaks, flooding", "Water damage restoration"]
            },
            {
              category: "Structural Concerns",
              items: ["Major storm damage", "Safety-critical repairs"]
            },
            {
              category: "Pre-Travel Repairs",
              items: ["Urgent RV/boat fixes", "Trip-critical issues"]
            },
            {
              category: "Home Emergencies",
              items: ["Major appliance failures", "Severe damage prevention"]
            }
          ],
          linkText: "Get Emergency Help",
          linkHref: "/contact",
          footerNote: null
        }
      ]
    },
    process: {
      tag: "HOW WE WORK",
      title: "How Our Repair Process Works",
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
    reviews: {
      tag: "CLIENT REVIEWS",
      title: "What Our Clients Say"
    },
    about: {
      tag: "ABOUT US",
      title: "About Vadim Group",
      quote: "Care, respect, and craftsmanship",
      description: "Vadim Group provides home, marine, and RV repair services in the Orlando area, built on a simple idea: repairs should be done properly, without stress, mess, or inflated pricing. Vadim personally handles each project — from home repairs to boat and RV restoration — bringing years of hands-on experience and a calm, responsible approach to every job. We listen first, explain everything clearly, and treat your place with the same respect we'd want for our own. No shortcuts, no pressure — just clean, precise work done the right way.",
      promiseTitle: "What We Stand For",
      promiseItems: [
        "Respect for your home, time, and budget",
        "Clear communication from start to finish",
        "Long-lasting results, not temporary fixes",
        "A clean, careful approach to every repair"
      ],
      closing: "Clients choose us because they value professionalism, trust, and a calm, solution-driven approach to every repair."
    },
    faq: {
      tag: "QUESTIONS & ANSWERS",
      title: "Questions We Hear Most Often",
      items: [
        {
          question: "How much does a typical home repair cost in the Orlando area?",
          answer: "Home repair pricing in Orlando varies based on the project size and materials. Small fixes like faucet leaks or outlet replacements typically range from $150–$300. Larger repairs such as drywall restoration, light carpentry, or water-damage repair generally cost $300–$1,500. We always provide a clear, itemized estimate before any work begins."
        },
        {
          question: "How quickly can you respond to home, marine, or RV repair requests?",
          answer: "We typically respond within 2-4 hours during business hours (every day 8 AM - 8 PM). For emergency repairs, we provide 24/7 response. Send us photos on Facebook Messenger for the fastest assessment."
        },
        {
          question: "Do you offer warranties on your repair work?",
          answer: "Yes. All home, marine, and RV repairs include a workmanship warranty. If anything doesn't look right after the job is completed, we'll return to make it right."
        },
        {
          question: "Can you handle both small repairs and larger restoration projects?",
          answer: (
            <>
              Yes — we handle everything from small handyman repairs to larger restoration work for homes, boats, and RVs. Whether it's a minor fixture issue or more complex structural or moisture-related repairs, we provide precise, dependable service. Explore our <Link href="/home-repairs" className="text-brand-accent hover:underline">home repair services</Link> and <Link href="/marine-rv" className="text-brand-accent hover:underline">marine & RV services</Link> for details.
            </>
          )
        },
        {
          question: "Do I need to be home during the repair appointment?",
          answer: "For most home or RV repairs, you can choose whether to be home. If access can be arranged safely, we can complete many repairs without requiring you to be present. For marine repairs, we typically coordinate access directly at the marina or storage location."
        },
        {
          question: "What if the repair issue is worse than it first appears?",
          answer: (
            <>
              If we discover additional damage during the repair, we'll explain the issue, provide photos, and give an updated estimate before continuing. Whether it's <Link href="/home-repairs" className="text-brand-accent hover:underline">home repairs</Link>, <Link href="/marine-rv" className="text-brand-accent hover:underline">marine work</Link>, or RV restoration — no surprise charges and no work is done without your approval.
            </>
          )
        },
        {
          question: "How do I know which repairs to prioritize for my home, boat, or RV?",
          answer: "During our initial assessment, we help you understand which repairs are urgent (safety or water-damage risks), important (preventing further deterioration), and optional (aesthetic or improvement-focused). We provide clear recommendations based on your budget and goals."
        },
        {
          question: "Do you offer same-day or emergency repair services in Orlando?",
          answer: "We offer limited same-day and urgent repair services depending on the project and schedule. Send details or photos on Facebook Messenger for the quickest availability check."
        },
        {
          question: "What types of marine repair services do you provide in Orlando?",
          answer: "We handle gelcoat repairs, deck and interior restoration, electrical diagnostics, moisture checks, and engine-adjacent troubleshooting. Send photos and details, and we'll provide a clear estimate for your vessel."
        },
        {
          question: "What types of RV repairs do you handle?",
          answer: "We repair RV electrical systems, lighting, leaks, cabinet or wall damage, soft spots, water-damage issues, and interior restoration. Our service is fully mobile across Orlando and surrounding areas."
        }
      ]
    }
  };

  // JSON-LD Schemas for Homepage
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://vadimgroup.com/#organization",
    "name": "Vadim Group",
    "description": "Professional home repair, marine and RV services in Orlando. Fast response, transparent pricing, quality craftsmanship. Serving Orlando, Lake Nona, and surrounding areas.",
    "image": "https://vadimgroup.com/assets/home-hero.png",
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
      { "@type": "City", "name": "Orlando", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Lake Nona", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Hunters Creek", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Winter Park", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Lake Mary", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Kissimmee", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Daytona Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Cocoa Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Titusville", "containedInPlace": { "@type": "State", "name": "Florida" } }
    ],
    "sameAs": []
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://vadimgroup.com/#organization",
    "name": "Vadim Group",
    "url": "https://vadimgroup.com",
    "logo": "https://vadimgroup.com/icon.png",
    "description": "Professional home repair, marine and RV services in Orlando metro area. Reliable, high-quality repairs with transparent pricing.",
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
    "founder": {
      "@type": "Person",
      "name": "Vadim"
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Home Repair, Marine Repair, RV Repair",
    "provider": {
      "@id": "https://vadimgroup.com/#organization"
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
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceRange": "$$"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Repair Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Home Repair Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Damage Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ceiling Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flooring Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deck Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fence Repair" } }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Marine Repair Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boat Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gelcoat Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marine Electrical Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boat Interior Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deck Restoration" } }
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
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RV Slide Out Repair" } }
          ]
        }
      ]
    }
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* --- HERO SECTION --- */}
      <div 
        className="relative h-[calc(100vh-80px)] min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden w-full max-w-full"
        data-hero-section
      >
        {/* Hero background image with priority loading */}
        <Image
          src={heroBg}
          alt="Home repair services background"
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
              <span className="block">Home, Marine & RV</span>
              <span className="block">Repair Services in</span>
              <div className="flex justify-center items-center h-[1.5em] overflow-hidden w-full max-w-full px-2">
                 <CityRotator />
              </div>
            </h1>
            
            <p className={`text-white/90 max-w-2xl mx-auto ${typography.heroSubtitle} px-4`} style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.2)' }}>
              Fast, reliable repair for homes, boats, and RVs in the Orlando area
            </p>

            {/* CTA Buttons - Enlarged as per requirements */}
            {/* Mobile: flex-col with 12px gap, Desktop: flex-row with 16px gap */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 md:gap-4 pt-6 md:pt-8 px-4 w-full max-w-full">
              {/* PRIMARY CTA: Gold button (Facebook Messenger) - 56px height */}
              <Button 
                asChild 
                className={`bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-14 sm:h-14 md:h-[56px] px-5 sm:px-6 md:px-8 w-full sm:w-auto sm:min-w-[200px] md:min-w-[220px] max-w-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-all duration-300 ${typography.ctaSecondary}`}
              >
                <a 
                  href="https://m.me/vadimgroup"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full"
                >
                  <span className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                    <MessengerIcon />
                  </span>
                  <span className="truncate">Get a Free Estimate on Messenger</span>
                </a>
              </Button>

              {/* SECONDARY CTA: White outline (Contact) - 56px height */}
              <Button 
                asChild 
                className={`bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white/90 font-semibold h-14 sm:h-14 md:h-[56px] px-5 sm:px-6 md:px-8 w-full sm:w-auto sm:min-w-[140px] md:min-w-[160px] max-w-full transition-all duration-300 ${typography.ctaSecondary}`}
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* --- WHY CHOOSE US --- */}
      <WhyChooseUs data={data.whyChooseUs} />

      {/* --- SERVICES SECTION --- */}
      {/* Design System v2.2: Section 6.2 - Service Cards with equal heights */}
      <Section id="services" className="bg-surface-subtle py-12 md:py-20">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            {/* Eyebrow label: unified typography */}
            <span className={`text-brand-accent ${typography.eyebrow} block mb-3`}>
              {data.services.tag}
            </span>
            {/* H2: Unified section header */}
            <h2 className={`font-heading ${typography.h2Section} font-bold text-brand-primary mb-6`}>
              {data.services.title}
            </h2>
            <p className={`${typography.sectionDescription} text-text-secondary`}>
              {data.services.description}
            </p>
          </div>

          {/* Service Cards Grid - Equal heights with new structure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-fr">
            {data.services.items.map((item, i) => {
                const Icon = serviceIcons[i] || Hammer;
                return (
                    <div 
                      key={i} 
                      className="
                        group
                        bg-white rounded-lg p-6 md:p-8
                        border border-border-light 
                        shadow-[0_1px_3px_rgba(15,23,42,0.08)]
                        hover:border-brand-accent hover:shadow-md
                        transition-all duration-300 ease-out
                        flex flex-col
                      "
                    >
                        {/* Icon Container: with hover effect and rounded corners */}
                        <div className="h-16 w-16 bg-brand-primary text-white rounded-xl flex items-center justify-center mb-6 shrink-0 group-hover:bg-brand-accent transition-colors duration-300">
                            <Icon className="h-12 w-12" strokeWidth={1.5} />
                        </div>
                        
                        {/* Card Title: H3, Unified typography */}
                        <h3 className={`font-heading ${typography.h3Card} font-semibold text-brand-primary mb-3`}>
                          {item.title}
                        </h3>
                        
                        {/* Description */}
                        <p className={`${typography.body} text-text-secondary mb-5`}>
                          {item.description}
                        </p>
                        
                        {/* Features with Categories - grow to push footer down */}
                        <div className="space-y-4 mb-6 flex-grow">
                            {item.features.map((feature, idx) => (
                                <div key={idx}>
                                    {feature.category && (
                                        <h4 className={`font-bold ${typography.bodySmall} text-brand-primary mb-2`}>
                                            {feature.category}
                                        </h4>
                                    )}
                                    <ul className={`space-y-1.5 ${typography.bodySmall} text-text-secondary`}>
                                        {feature.items.map((featureItem, itemIdx) => (
                                            <li key={itemIdx} className="flex items-start gap-2">
                                                <span className="text-brand-accent mt-0.5">•</span>
                                                <span>{featureItem}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        
                        {/* CTA Button: Outlined button style with enhanced hover */}
                        <div className="mt-auto">
                          <Button 
                            asChild 
                            variant="outline"
                            className="
                              w-full md:w-auto
                              border-[1.5px] border-brand-accent 
                              text-brand-accent 
                              hover:bg-brand-accent hover:text-brand-primary
                              font-medium
                              py-3 px-6
                              transition-all duration-300
                            "
                          >
                              <Link href={item.linkHref} className="inline-flex items-center justify-center gap-2">
                                {item.linkText}
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                          </Button>
                          
                          {/* Footer Note for Emergency Services */}
                          {item.footerNote && (
                            <p className="text-[13px] text-text-muted text-center mt-3">
                              {item.footerNote}
                            </p>
                          )}
                        </div>
                    </div>
                );
            })}
          </div>
        </Container>
      </Section>

      {/* --- PROCESS SECTION --- */}
      {/* Design System v2.2: Horizontal Cards Layout */}
      <Section className="bg-brand-primary text-white py-20 px-10">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`text-brand-accent ${typography.eyebrow} block mb-3`}>
              {data.process.tag}
            </span>
            <h2 className={`font-heading ${typography.h2Section} font-bold text-white mb-6`}>
              {data.process.title}
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
              <p className={`text-gray-300 ${typography.bodyLarge} mb-6`}>
                Get a quick estimate or see examples of our work
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 px-4 sm:px-0">
                {/* Primary CTA: Gold Messenger Button */}
                <Button 
                  asChild 
                  className={`bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-12 sm:h-14 px-4 sm:px-6 md:px-8 ${typography.ctaSmall} w-full sm:w-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow,background-color] duration-300 ease-out`}
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
                  className={`bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white/90 font-semibold h-12 sm:h-14 px-4 sm:px-6 md:px-8 ${typography.ctaSmall} w-full sm:w-auto transition-[background-color,border-color] duration-300 ease-out`}
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

      {/* --- TESTIMONIALS --- */}
      {/* Design System v2.2: Section 6.9 - Testimonial Cards with Carousel */}
      <Section className="bg-surface-subtle py-12 md:py-16 overflow-hidden" style={{ isolation: 'isolate' }}>
        <Container className="overflow-visible">
          <TestimonialsCarousel />
        </Container>
      </Section>

      {/* --- ABOUT US --- */}
      {/* Design System v2.2: Standard section with image layout */}
      <Section className="bg-surface py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
            {/* Content Column - 50% width with balanced padding */}
            <div className="lg:pr-6">
               {/* Eyebrow Label */}
               <span className={`text-brand-accent ${typography.eyebrow} block mb-3`}>
                 {data.about.tag}
               </span>
               
               {/* H2 Title: Unified section header */}
               <h2 className={`font-heading ${typography.h2Section} font-bold text-brand-primary mb-4`}>
                 {data.about.title}
               </h2>
               
               {/* Lead Quote - reduced gap from title */}
               <p className={`${typography.bodyLarge} text-text-secondary mb-6 font-semibold italic`}>
                 {data.about.quote}
               </p>
               
              {/* Body Description - split into two paragraphs with service links */}
              {(() => {
                const splitPoint = "We listen first";
                const desc = data.about.description;
                const splitIndex = desc.indexOf(splitPoint);
                if (splitIndex > 0) {
                  const secondPara = desc.substring(splitIndex).trim();
                  return (
                    <div className="space-y-4 mb-10">
                      <p className={`text-text-secondary ${typography.body}`}>
                        Vadim Group provides <Link href="/home-repairs" className="text-brand-accent hover:underline font-medium">home repair</Link>, <Link href="/marine-rv" className="text-brand-accent hover:underline font-medium">marine, and RV services</Link> in the Orlando area, built on a simple idea: repairs should be done properly, without stress, mess, or inflated pricing.
                      </p>
                      <p className={`text-text-secondary ${typography.body}`}>{secondPara}</p>
                    </div>
                  );
                }
                 return (
                   <p className={`text-text-secondary mb-10 ${typography.body}`}>{desc}</p>
                 );
               })()}
               
               {/* Promise List - Enhanced spacing and markers */}
               <div className="space-y-6">
                 <h3 className={`font-heading ${typography.processTitle} font-semibold text-brand-primary mb-6`}>
                   {data.about.promiseTitle}
                 </h3>
                 {data.about.promiseItems.map((item, i) => (
                   <div key={i} className="flex items-start gap-4">
                     {/* Enhanced Gold bullet point */}
                     <div className="h-2.5 w-2.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                     <span className={`text-text-secondary ${typography.body}`}>{item}</span>
                   </div>
                 ))}
               </div>
               
               {/* CTA Button - See Our Work with increased spacing */}
               <div className="mt-12">
                 <Button 
                   asChild 
                   variant="outline"
                   className="
                     border-[1.5px] border-brand-accent 
                     text-brand-accent 
                     hover:bg-brand-accent hover:text-brand-primary
                     font-medium
                     py-3 px-6
                     transition-all duration-300
                   "
                 >
                   <Link href="/about" className="inline-flex items-center justify-center gap-2">
                     See Our Work
                     <ArrowRight className="h-4 w-4" />
                   </Link>
                 </Button>
               </div>
            </div>
            
            {/* Image Column - 50% width with balanced padding */}
            <div className="relative lg:pl-6">
              <div className="aspect-[4/5] rounded-md overflow-hidden bg-brand-primary/5 relative group">
                 <Image 
                   src={vadimPortrait} 
                   alt="Vadim - The Vadim Group" 
                   fill
                   className="object-cover"
                   loading="lazy"
                   sizes="(max-width: 768px) 100vw, 50vw"
                 />
                 <div className="absolute inset-0 bg-brand-primary/10" />
              </div>
              
              {/* Quote Overlay Card - Further reduced visual weight */}
              <div className="absolute -bottom-5 -left-5 bg-brand-primary/85 backdrop-blur-sm text-white p-5 max-w-[240px] shadow-md hidden lg:block rounded-sm">
                <p className="font-heading text-base italic leading-[1.65] opacity-95">
                  "{data.about.closing}"
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* --- FAQ --- */}
      {/* Design System v2.2: Section 6.10 - FAQ Accordion with Show More */}
      <Section className="bg-surface-subtle py-24 md:py-32">
        <Container max-width="container-md">
           {/* FAQ Schema for SEO - Google uses this for rich snippets */}
           <script
             type="application/ld+json"
             dangerouslySetInnerHTML={{
               __html: JSON.stringify({
                 "@context": "https://schema.org",
                 "@type": "FAQPage",
                 "mainEntity": data.faq.items.map(item => ({
                   "@type": "Question",
                   "name": item.question,
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": typeof item.answer === 'string' ? item.answer : item.question
                   }
                 }))
               })
             }}
           />
           
           <FAQAccordion 
             tag={data.faq.tag}
             title={data.faq.title}
             items={data.faq.items}
           />
           
           {/* Service Navigation Helper */}
           <div className="mt-16 pt-12 border-t border-border-light max-w-2xl mx-auto">
             <div className="text-center">
               <p className={`text-text-secondary ${typography.bodyLarge} mb-6`}>
                 Looking for specific services?
               </p>
               <div className="flex flex-wrap justify-center gap-4">
                 <Link 
                   href="/home-repairs" 
                   className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-brand-accent/30 rounded-lg text-brand-accent hover:bg-brand-accent hover:text-brand-primary hover:border-brand-accent font-medium transition-all duration-300"
                 >
                   <Hammer className="h-5 w-5" />
                   Home Repairs
                 </Link>
                 <Link 
                   href="/marine-rv" 
                   className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-brand-accent/30 rounded-lg text-brand-accent hover:bg-brand-accent hover:text-brand-primary hover:border-brand-accent font-medium transition-all duration-300"
                 >
                   <Anchor className="h-5 w-5" />
                   Marine & RV Services
                 </Link>
                 <Link 
                   href="/about" 
                   className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-brand-accent/30 rounded-lg text-brand-accent hover:bg-brand-accent hover:text-brand-primary hover:border-brand-accent font-medium transition-all duration-300"
                 >
                   <ArrowRight className="h-5 w-5" />
                   See Our Work
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
            Let's Fix the Problem — Fast and Professionally
          </h2>

          {/* Trust statement before CTA - softer color to not compete with button */}
          <p className={`${typography.sectionDescription} text-gray-300 font-medium mb-6 md:mb-8 px-4`}>
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
                shadow-lg
                hover:shadow-xl
                transition-all duration-300
              `}
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
