'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, HeartHandshake, Users } from 'lucide-react';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import Image from 'next/image';

// Messenger Icon Component
const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.447 5.514 3.713 7.236V22l3.398-1.868C10.014 20.372 10.99 20.5 12 20.5c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.071 12.414l-2.571-2.743-5.014 2.743L11.071 8.5l2.571 2.743L18.571 8.5l-5.5 5.914z"/>
  </svg>
);

// Portfolio projects data - 9 projects total (5 Home + 4 Marine/RV)
const portfolioProjects = {
  homeRepairs: [
    {
      title: "Water Damage Restoration",
      category: "Home Repair",
      description: "Complete drywall repair and repainting after bathroom leak",
      image: "/assets/portfolio-placeholder.png",
    },
    {
      title: "Kitchen Cabinet Repair",
      category: "Home Repair",
      description: "Cabinet door adjustment and hardware replacement",
      image: "/assets/portfolio-placeholder.png",
    },
    {
      title: "Deck Restoration",
      category: "Home Repair",
      description: "Complete deck sanding, staining, and weatherproofing",
      image: "/assets/portfolio-placeholder.png",
    },
    {
      title: "Basement Ceiling Repair",
      category: "Home Repair",
      description: "Drywall replacement and professional finishing",
      image: "/assets/portfolio-placeholder.png",
    },
    {
      title: "Window Frame Restoration",
      category: "Home Repair",
      description: "Rotted frame replacement and weather sealing",
      image: "/assets/portfolio-placeholder.png",
    },
  ],
  marineRV: [
    {
      title: "Boat Gelcoat Repair",
      category: "Marine Service",
      description: "Seamless hull restoration with color matching",
      image: "/assets/portfolio-placeholder.png",
    },
    {
      title: "RV Interior Rebuild",
      category: "RV Service",
      description: "Water damage repair and panel replacement",
      image: "/assets/portfolio-placeholder.png",
    },
    {
      title: "Marine Electrical Work",
      category: "Marine Service",
      description: "Complete lighting system installation and testing",
      image: "/assets/portfolio-placeholder.png",
    },
    {
      title: "Boat Deck Restoration",
      category: "Marine Service",
      description: "Non-slip surface repair and refinishing",
      image: "/assets/portfolio-placeholder.png",
    },
  ],
};

// Portfolio Tabs Component
const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'home' | 'marine'>('all');
  
  const allProjects = [...portfolioProjects.homeRepairs, ...portfolioProjects.marineRV];
  
  const displayProjects = 
    activeTab === 'all' ? allProjects :
    activeTab === 'home' ? portfolioProjects.homeRepairs :
    portfolioProjects.marineRV;

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-300
            ${activeTab === 'all' 
              ? 'bg-brand-accent text-brand-primary shadow-md' 
              : 'bg-white border-2 border-border-light text-text-secondary hover:border-brand-accent/50'
            }
          `}
        >
          All Projects
        </button>
        <button
          onClick={() => setActiveTab('home')}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-300
            ${activeTab === 'home' 
              ? 'bg-brand-accent text-brand-primary shadow-md' 
              : 'bg-white border-2 border-border-light text-text-secondary hover:border-brand-accent/50'
            }
          `}
        >
          Home Repairs
        </button>
        <button
          onClick={() => setActiveTab('marine')}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-300
            ${activeTab === 'marine' 
              ? 'bg-brand-accent text-brand-primary shadow-md' 
              : 'bg-white border-2 border-border-light text-text-secondary hover:border-brand-accent/50'
            }
          `}
        >
          Marine & RV
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project, i) => (
          <div 
            key={i}
            className="
              group
              bg-white 
              rounded-lg 
              overflow-hidden
              border border-border-light
              shadow-sm
              hover:shadow-md
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            
            {/* Content */}
            <div className="p-5">
              <Badge variant="outline" className="mb-3 text-brand-accent border-brand-accent/30">
                {project.category}
              </Badge>
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function AboutPage() {
  // JSON-LD Schemas for About Page
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://vadimgroup.com/#organization",
    "name": "Vadim Group",
    "url": "https://vadimgroup.com",
    "logo": "https://vadimgroup.com/icon.png",
    "description": "Vadim Group provides professional home, marine, and RV repair services in the Orlando area. We deliver high-quality craftsmanship with transparent pricing and exceptional customer service.",
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
      "name": "Vadim",
      "jobTitle": "Founder & Lead Technician"
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
    "knowsAbout": [
      "Home Repair",
      "Marine Repair",
      "RV Repair",
      "Water Damage Restoration",
      "Gelcoat Repair",
      "Drywall Repair",
      "Structural Repair"
    ],
    "slogan": "Care, respect, and craftsmanship"
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://vadimgroup.com/#founder",
    "name": "Vadim",
    "jobTitle": "Founder & Lead Technician",
    "worksFor": {
      "@type": "Organization",
      "name": "Vadim Group"
    },
    "description": "Vadim brings years of hands-on experience across home repairs, marine restoration, and RV services. Known for precision workmanship and clear communication.",
    "knowsAbout": [
      "Home Repair",
      "Marine Repair",
      "RV Repair",
      "Water Damage Restoration",
      "Structural Repair",
      "Gelcoat Repair",
      "Boat Restoration",
      "RV Interior Repair"
    ],
    "alumniOf": "Professional Trade Experience"
  };

  return (
    <div className="flex flex-col">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      {/* --- HERO SECTION --- */}
      <div 
        className="relative h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden"
        data-hero-section
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about-hero.jpeg"
            alt="Professional craftsman at work in workshop"
            fill
            priority
            className="object-cover"
          />
        </div>
        {/* Enhanced gradient overlay for better contrast */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.85))'
          }}
          aria-hidden="true" 
        />

        <Container className="relative z-10 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight" style={{ textShadow: '0 2px 16px rgba(0, 0, 0, 0.3)' }}>
              About Vadim Group
            </h1>
            
            <p className="text-white/90 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl" style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.2)' }}>
              Reliable, on-time repair and restoration services for homes, boats, and RVs — delivered with clean workmanship, clear communication, and no surprises
            </p>
          </div>
        </Container>
      </div>

      {/* --- OUR STORY --- */}
      <Section className="bg-surface py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
                ABOUT US
              </span>
              <h2 className="font-heading font-bold text-3xl text-brand-primary">Our Story</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Vadim Group was created with one goal: to bring dependable, high-quality repair and restoration services to homeowners, boat owners, and RV owners across the Orlando area.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Vadim brings years of hands-on experience across multiple fields — from <Link href="/home-repairs" className="text-brand-accent hover:underline font-medium">residential repairs</Link> to structural <Link href="/marine-rv" className="text-brand-accent hover:underline font-medium">marine and RV restoration</Link>.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Clients trust us because we arrive when promised, communicate clearly, and deliver long-lasting results with clean, precise workmanship.
              </p>
            </div>
            
            <div className="relative">
               <div className="aspect-[4/3] bg-surface-subtle rounded-lg overflow-hidden shadow-xl border border-border-light relative">
                  <Image src="/assets/vadim-portrait.jpg" alt="Vadim at work" fill className="object-cover" />
               </div>
               {/* Decorative element */}
               <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-accent/10 rounded-full -z-10" />
               <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-primary/5 rounded-full -z-10" />
            </div>
          </div>
        </Container>
      </Section>

      {/* --- OUR PHILOSOPHY --- */}
      <Section className="bg-surface-subtle py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
                CORE VALUES
              </span>
              <h2 className="font-heading font-bold text-3xl text-brand-primary mb-8">Our Philosophy</h2>
              <p className="text-text-secondary text-xl leading-relaxed">
                We believe repairs should be done properly the first time — with no shortcuts, no temporary fixes, and no hidden surprises
              </p>
              
              <p className="text-text-secondary text-lg mt-6">
                Our work is built on three principles:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Award, title: "Precision", desc: "Clean, detailed workmanship in every environment: home, boat, or RV" },
                { icon: HeartHandshake, title: "Clarity", desc: "Honest assessments, straightforward pricing, and proactive communication" },
                { icon: Users, title: "Reliability", desc: "Accurate timelines and respect for your space and schedule" }
            ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm text-center border border-border-light hover:shadow-md hover:border-brand-accent/40 transition-all duration-300">
                <div className="mx-auto h-16 w-16 bg-brand-primary/5 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-primary mb-3">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
            </div>

            <blockquote className="text-center">
              <p className="text-2xl italic text-brand-primary mb-4">
                "Repairs should solve the problem — not postpone it"
              </p>
              <footer className="text-text-secondary font-semibold">
                — Vadim, Founder
              </footer>
            </blockquote>
          </div>
        </Container>
      </Section>

      {/* --- TESTIMONIALS --- */}
      <Section className="bg-surface py-20 md:py-24 overflow-hidden" style={{ isolation: 'isolate' }}>
        <Container className="overflow-visible">
          <TestimonialsCarousel />
        </Container>
      </Section>

      {/* --- RECENT PROJECTS --- */}
      <Section className="bg-surface-subtle py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
              OUR PORTFOLIO
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-text-secondary">
              Explore real repair and restoration work across <Link href="/home-repairs" className="text-brand-accent hover:underline font-medium">homes</Link>, <Link href="/marine-rv" className="text-brand-accent hover:underline font-medium">boats, and RVs</Link>.
            </p>
            <p className="text-lg text-text-secondary mt-2">
              From water-damage drywall repairs to structural deck restoration and marine interior rebuilds — our portfolio shows the care and precision behind every project.
            </p>
          </div>

          <PortfolioTabs />
        </Container>
      </Section>

      {/* --- CTA --- */}
      <Section className="bg-brand-primary text-white py-24 md:py-32 text-center relative overflow-hidden">
        <Container className="relative z-10">
          {/* Tag: FREE ESTIMATE */}
          <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-6">
            FREE ESTIMATE
          </span>
          
          {/* CTA Headline */}
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Work Together?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 font-medium mb-8 max-w-2xl mx-auto">
            If you value precision, responsibility, and clear communication, Vadim Group is the right partner for your home, marine, or RV repair needs.
          </p>

          {/* PRIMARY CTA: Gold Facebook Messenger button with icon */}
          <div className="flex flex-col items-center gap-4">
            <Button 
              asChild 
              className="
                bg-brand-accent 
                hover:bg-brand-accent-hover 
                text-brand-primary 
                font-semibold 
                text-xl
                h-[72px]
                px-12
                min-w-[320px]
                shadow-lg
                hover:shadow-xl
                transition-all duration-300
              "
            >
              <a 
                href="https://m.me/vadimgroup"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <span className="w-[28px] h-[28px] flex items-center justify-center">
                  <MessengerIcon />
                </span>
                Get a Free Estimate on Messenger
              </a>
          </Button>
            
            {/* Secondary text link */}
            <Link 
              href="/contact"
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

    </div>
  );
}
