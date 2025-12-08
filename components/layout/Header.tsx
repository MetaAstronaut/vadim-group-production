'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// Navigation items - COPIED FROM REACT VERSION
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Home Repairs', href: '/home-repairs' },
  { name: 'Marine & RV', href: '/marine-rv' },
  { name: 'Our Work', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

// Facebook Messenger Icon Component
const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.447 5.514 3.713 7.236V22l3.398-1.868C10.014 20.372 10.99 20.5 12 20.5c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.071 12.414l-2.571-2.743-5.014 2.743L11.071 8.5l2.571 2.743L18.571 8.5l-5.5 5.914z"/>
  </svg>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [showCTA, setShowCTA] = React.useState(false);
  const rawPathname = usePathname();
  // Normalize pathname - remove trailing slash for comparison (except for root "/")
  const normalizedPathname = rawPathname === '/' ? '/' : rawPathname?.replace(/\/$/, '') || '/';
  const [pathname, setPathname] = React.useState(normalizedPathname);
  
  // Update pathname when route changes
  React.useEffect(() => {
    if (rawPathname) {
      const normalized = rawPathname === '/' ? '/' : rawPathname.replace(/\/$/, '');
      setPathname(normalized);
    }
  }, [rawPathname]);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Intersection Observer for Hero section
  // On pages with hero: show CTA after scrolling past hero
  // On pages without hero: always show CTA
  React.useEffect(() => {
    const heroSection = document.querySelector('[data-hero-section]');
    
    // If no hero section exists on this page, always show the CTA button
    if (!heroSection) {
      setShowCTA(true);
      return;
    }

    // Reset showCTA when navigating to a page with hero
    setShowCTA(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show CTA when hero is NOT intersecting (fully scrolled past)
          // Hide CTA when hero IS intersecting (back in viewport)
          setShowCTA(!entry.isIntersecting);
        });
      },
      {
        // Trigger when hero section is completely out of view
        threshold: 0,
        rootMargin: '0px'
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, [pathname]); // Re-run when route changes

  const headerClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
    "h-20 bg-[#0F172A]/95 backdrop-blur-md border-b border-[#C6A778]/50 shadow-lg"
  );

  const linkClasses = (isActive: boolean) => cn(
    "text-sm font-medium tracking-wide relative py-1",
    "after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#C6A778]",
    isActive
      ? "text-[#C6A778] after:w-full" // Active state: no transition, instant underline
      : "text-white/90 hover:text-white after:w-0 hover:after:w-full after:transition-all after:duration-300 transition-colors duration-300" // Hover state: with animation
  );


  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full max-w-[1280px]">
        {/* Logo Area */}
        <Link 
          href="/" 
          className="flex items-center gap-3 relative z-50 group focus:outline-none"
          aria-label="Vadim Group - Home"
        >
          {/* Logo Icon */}
          <Image 
            src="/assets/VG_logo_main2.png" 
            alt="Vadim Group Logo" 
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Brand Text */}
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl md:text-2xl tracking-tight text-white leading-tight">
              Vadim Group
            </span>
            <span className="hidden md:block text-[9px] uppercase tracking-[0.15em] text-[#C6A778] font-semibold mt-0.5">
              Professional Repair & Restoration
            </span>
            <span className="hidden lg:block text-[8px] uppercase tracking-wider text-white/60 font-medium -mt-0.5">
              Home • Marine • RV
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={linkClasses(pathname === item.href)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA - Appears after scrolling past Hero */}
        <div className="hidden lg:flex items-center gap-4">
          <div
            className={cn(
              "transition-all duration-500 ease-out",
              showCTA 
                ? "opacity-100 translate-y-0 pointer-events-auto" 
                : "opacity-0 -translate-y-2 pointer-events-none"
            )}
            style={{ willChange: 'opacity, transform' }}
            aria-hidden={!showCTA}
          >
            <Button 
              asChild 
              className={cn(
                "font-semibold rounded-[2px] px-5 h-9 text-sm",
                "bg-[#C6A778] text-[#0F172A] hover:bg-[#A68A56]",
                "border-none shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)]",
                "transition-[box-shadow,background-color] duration-300 ease-out"
              )}
              style={{
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
              tabIndex={showCTA ? 0 : -1}
            >
              <a 
                href="https://m.me/vadimgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessengerIcon />
                Free Estimate on Messenger
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "lg:hidden relative z-50 p-2 rounded-sm transition-colors focus:outline-none",
            "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-[#0F172A] z-40 flex flex-col pt-32 px-8 transition-transform duration-500 lg:hidden h-screen",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)'
          }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C6A778] to-transparent opacity-50" />
          
          <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-heading font-medium transition-colors py-2 border-b border-white/5",
                  pathname === item.href
                    ? "text-[#C6A778]"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-8">
              <div
                className={cn(
                  "transition-all duration-500 ease-out",
                  showCTA 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 -translate-y-2"
                )}
                style={{ willChange: 'opacity, transform' }}
                aria-hidden={!showCTA}
              >
                <Button 
                  asChild 
                  className="w-full h-12 text-base font-semibold bg-[#C6A778] text-[#0F172A] hover:bg-[#A68A56] rounded-[2px] border-none shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-[box-shadow,background-color] duration-300 ease-out"
                  style={{
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}
                  tabIndex={showCTA ? 0 : -1}
                >
                  <a 
                    href="https://m.me/vadimgroup"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessengerIcon />
                    Free Estimate on Messenger
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

