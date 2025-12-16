import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MessengerWidget } from '@/components/MessengerWidget';
import { Toaster } from '@/components/ui/toaster';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vadimgroup.com'),
  title: {
    default: 'Vadim Group | Expert Home, Marine & RV Repair Services in Orlando',
    template: '%s | Vadim Group'
  },
  description: 'Professional home repair, marine, and RV services in Orlando, Lake Nona, and Hunters Creek. Fast response, quality craftsmanship, transparent pricing. Licensed & insured.',
  keywords: [
    'home repair Orlando',
    'marine repair Orlando',
    'RV repair Orlando',
    'drywall repair',
    'gelcoat repair',
    'boat repair',
    'RV restoration',
    'Lake Nona handyman',
    'Hunters Creek repairs',
    'emergency repair services'
  ],
  authors: [{ name: 'Vadim Group' }],
  creator: 'Vadim Group',
  publisher: 'Vadim Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/assets/VG_logo_main2.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/VG_logo_main.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/VG_logo_main2.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/assets/VG_logo_main2.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.vadimgroup.com',
    siteName: 'Vadim Group',
    title: 'Vadim Group | Expert Home, Marine & RV Repair Services',
    description: 'Professional repair services for homes, boats, and RVs in Central Florida. Quality craftsmanship, transparent pricing, fast response.',
    images: [
      {
        url: '/assets/home-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Vadim Group - Professional Repair Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vadim Group | Expert Repair Services',
    description: 'Professional home, marine, and RV repair services in Orlando',
    images: ['/assets/home-hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect to critical external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for additional performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Inline critical CSS for instant rendering */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root{--color-brand-primary:#0F172A;--color-brand-accent:#C6A778;--color-bg-body:#FAFAF9;--color-bg-surface:#FFFFFF;--color-text-primary:#0F172A;--color-text-secondary:#475569}
          *{margin:0;padding:0;box-sizing:border-box}
          html{scroll-behavior:smooth;overflow-x:hidden}
          body{font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background-color:var(--color-bg-body);color:var(--color-text-primary);min-height:100vh;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
        `.replace(/\s+/g, ' ').trim() }} />
        
        <meta name="theme-color" content="#003366" />
        <meta name="msapplication-TileColor" content="#003366" />
        <meta name="msapplication-TileImage" content="/assets/VG_logo_main2.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-surface-body font-body text-text-primary selection:bg-brand-accent/30 antialiased">
        <Header />
        <main className="flex-1 flex flex-col pt-20">{children}</main>
        <Footer />
        <MessengerWidget messengerLink="https://m.me/vadimgroup" />
        <Toaster />
      </body>
    </html>
  );
}
