import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Home, Hammer, Anchor, Phone, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center bg-gradient-to-b from-surface to-surface-subtle">
      <Container className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* 404 Number with Gradient */}
          <div className="mb-8">
            <h1 
              className="font-heading text-9xl md:text-[200px] font-bold leading-none"
              style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #C6A778 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              404
            </h1>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Page Not Found
          </h2>

          {/* Message */}
          <p className="text-lg text-text-secondary mb-12 max-w-xl mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {/* Home Link */}
            <Link 
              href="/"
              className="group flex items-center gap-4 p-6 bg-white rounded-lg border-2 border-border-light hover:border-brand-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-brand-primary text-white flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                <Home className="h-6 w-6" />
              </div>
              <div className="text-left flex-1">
                <div className="font-semibold text-brand-primary group-hover:text-brand-accent transition-colors">
                  Home
                </div>
                <div className="text-sm text-text-muted">
                  Return to homepage
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* Home Repairs Link */}
            <Link 
              href="/home-repairs"
              className="group flex items-center gap-4 p-6 bg-white rounded-lg border-2 border-border-light hover:border-brand-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-brand-primary text-white flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                <Hammer className="h-6 w-6" />
              </div>
              <div className="text-left flex-1">
                <div className="font-semibold text-brand-primary group-hover:text-brand-accent transition-colors">
                  Home Repairs
                </div>
                <div className="text-sm text-text-muted">
                  Residential services
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* Marine & RV Link */}
            <Link 
              href="/marine-rv"
              className="group flex items-center gap-4 p-6 bg-white rounded-lg border-2 border-border-light hover:border-brand-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-brand-primary text-white flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                <Anchor className="h-6 w-6" />
              </div>
              <div className="text-left flex-1">
                <div className="font-semibold text-brand-primary group-hover:text-brand-accent transition-colors">
                  Marine & RV
                </div>
                <div className="text-sm text-text-muted">
                  Boat and RV repairs
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* Contact Link */}
            <Link 
              href="/contact"
              className="group flex items-center gap-4 p-6 bg-white rounded-lg border-2 border-border-light hover:border-brand-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-brand-primary text-white flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                <Phone className="h-6 w-6" />
              </div>
              <div className="text-left flex-1">
                <div className="font-semibold text-brand-primary group-hover:text-brand-accent transition-colors">
                  Contact Us
                </div>
                <div className="text-sm text-text-muted">
                  Get in touch
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Alternative CTA */}
          <div className="border-t border-border-light pt-8">
            <p className="text-text-muted mb-4">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent-hover text-primary-900">
                <a href="https://m.me/vadimgroup" target="_blank" rel="noopener noreferrer">
                  Message Us
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+14073457890">
                  Call: (407) 345-7890
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

