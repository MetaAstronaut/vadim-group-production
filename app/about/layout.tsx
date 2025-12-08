import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Vadim Group - Professional Repairs Orlando Metro",
  description: "Vadim Group: Precision craftsmanship for home, marine & RV repairs. Serving Orlando, Lake Nona, Daytona Beach, Cocoa Beach, Titusville. Reliable, transparent service.",
  keywords: "vadim group, professional repairs orlando, marine repair specialist, reliable handyman central florida",
  openGraph: {
    title: "About Vadim Group - Professional Repair Services",
    description: "Reliable, on-time repair and restoration services for homes, boats, and RVs — delivered with clean workmanship and clear communication.",
    url: "https://vadimgroup.com/about",
    siteName: "Vadim Group",
    images: [{
      url: "/assets/vadim-portrait.jpg",
      width: 1200,
      height: 630,
    }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://vadimgroup.com/about"
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

