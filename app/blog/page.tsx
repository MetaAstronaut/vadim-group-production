import * as React from "react";
import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getBlogPageData } from "@/utils/contentParsers";
import BlogClientSection from "./BlogClientSection";

// Metadata Export
export const metadata: Metadata = {
  title: "Home Repair Tips & Guides - Orlando Metro | Vadim Group",
  description: "Expert home repair advice for Orlando, Lake Nona, Daytona Beach homeowners. Maintenance tips, DIY guides, professional insights from trusted specialists.",
  keywords: "home repair tips orlando, maintenance advice florida, diy repairs daytona beach, orlando home care",
  openGraph: {
    title: "Home Repair Tips & Guides | Vadim Group",
    description: "Expert home repair advice for Orlando, Lake Nona, Daytona Beach homeowners. Maintenance tips, DIY guides, professional insights.",
    url: "https://vadimgroup.com/blog",
    siteName: "Vadim Group",
    images: [{
      url: "/assets/blog/repair-costs.jpg",
      width: 1200,
      height: 630,
    }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://vadimgroup.com/blog"
  }
};

export default function BlogPage() {
  const data = getBlogPageData();

  return (
    <>
      {/* --- HERO SECTION - Compact --- */}
      <Section className="bg-brand-primary text-white py-16 md:py-20">
        <Container className="max-w-4xl">
          <div className="text-center space-y-6">
            {/* Title */}
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
              {data.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-brand-accent font-medium">
              {data.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {data.hero.description}
            </p>
            
            {/* Service Links */}
            <div className="flex flex-wrap justify-center items-center gap-3 text-base text-gray-300 mt-6">
              <span>Explore our services:</span>
              <Link href="/home-repairs" className="text-brand-accent hover:underline font-medium">Home Repairs</Link>
              <span className="text-gray-500">|</span>
              <Link href="/marine-rv" className="text-brand-accent hover:underline font-medium">Marine & RV</Link>
              <span className="text-gray-500">|</span>
              <Link href="/about" className="text-brand-accent hover:underline font-medium">Portfolio</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* --- CLIENT SECTION (Filters, Articles, Newsletter) --- */}
      <BlogClientSection articles={data.articles} contactEmail={data.contactEmail} contactInfo={data.contactInfo} subscribeTitle={data.subscribeTitle} subscribeInfo={data.subscribeInfo} />
    </>
  );
}

