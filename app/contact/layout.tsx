import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Vadim Group - Orlando to Daytona Beach Repairs",
  description: "Professional repairs in Orlando, Lake Nona, Hunters Creek, Winter Park, Daytona Beach, Cocoa Beach, Titusville. Available daily 8 AM-8 PM, 24/7 emergency.",
  keywords: "contact vadim group, orlando repair services, daytona beach repairs, free estimate cocoa beach",
  openGraph: {
    title: "Contact Vadim Group - Professional Repair Services",
    description: "Get in touch for home, marine, and RV repair services. Fast response via Messenger or email. Serving Orlando metro area.",
    url: "https://vadimgroup.com/contact",
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
    canonical: "https://vadimgroup.com/contact"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
