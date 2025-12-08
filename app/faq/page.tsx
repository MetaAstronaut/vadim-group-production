import Link from 'next/link';
import { getFAQPageData } from '@/lib/markdown';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CTAButton } from '@/components/CTAButton';

export async function generateMetadata() {
  const { frontMatter } = getFAQPageData();
  
  return {
    title: frontMatter.title || 'Frequently Asked Questions | Vadim Group',
    description: frontMatter.description || 'Get answers to common questions about our home repair, marine, and RV services in Central Florida.',
    openGraph: {
      title: frontMatter['og:title'] || frontMatter.title,
      description: frontMatter['og:description'] || frontMatter.description,
    },
  };
}

export default function FAQPage() {
  const { generalFAQs, servicesFAQs, pricingFAQs, bookingFAQs } = getFAQPageData();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary/90 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Find answers to common questions about our services, pricing, and process
            </p>
          </div>
        </div>
      </section>

      {/* General FAQs */}
      {generalFAQs && generalFAQs.length > 0 && (
        <section className="bg-background py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-heading text-2xl font-bold text-brand-primary sm:text-3xl">
                General Questions
              </h2>
              <div className="mt-6">
                <FAQAccordion items={generalFAQs} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services FAQs */}
      {servicesFAQs && servicesFAQs.length > 0 && (
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-heading text-2xl font-bold text-brand-primary sm:text-3xl">
                About Our Services
              </h2>
              <div className="mt-6">
                <FAQAccordion items={servicesFAQs} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing FAQs */}
      {pricingFAQs && pricingFAQs.length > 0 && (
        <section className="bg-background py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-heading text-2xl font-bold text-brand-primary sm:text-3xl">
                Pricing & Payment
              </h2>
              <div className="mt-6">
                <FAQAccordion items={pricingFAQs} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Booking FAQs */}
      {bookingFAQs && bookingFAQs.length > 0 && (
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-heading text-2xl font-bold text-brand-primary sm:text-3xl">
                Booking & Scheduling
              </h2>
              <div className="mt-6">
                <FAQAccordion items={bookingFAQs} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Still Have Questions Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-brand-primary sm:text-3xl">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Can't find what you're looking for? We're here to help!
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <CTAButton size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </CTAButton>
              <CTAButton variant="phone" size="lg" asChild>
                <Link href="tel:+14075550123">Call: (407) 555-0123</Link>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

