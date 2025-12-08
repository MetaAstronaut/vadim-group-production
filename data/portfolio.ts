// Centralized portfolio data for all pages

export interface PortfolioItem {
  id: number;
  category: 'home-repairs' | 'marine-rv';
  title: string;
  subtitle: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export const portfolioItems: PortfolioItem[] = [
  // Home Repairs Portfolio
  {
    id: 1,
    category: 'home-repairs',
    title: "Drywall & Ceiling Restoration",
    subtitle: "Water Damage",
    description: "Replaced damaged drywall, matched the texture, repainted, and left a clean finish.",
    beforeImage: "/images/portfolio/drywall-before.jpg",
    afterImage: "/images/portfolio/drywall-after.jpg"
  },
  {
    id: 2,
    category: 'home-repairs',
    title: "Kitchen Cabinet Repair",
    subtitle: "Water Exposure",
    description: "Restored cabinet base, reinforced structure, resealed surfaces, and realigned doors.",
    beforeImage: "/images/portfolio/cabinet-before.jpg",
    afterImage: "/images/portfolio/cabinet-after.jpg"
  },
  {
    id: 3,
    category: 'home-repairs',
    title: "Exterior Fence & Gate Repair",
    subtitle: "Storm Damage",
    description: "Replaced damaged posts, reinforced gate, sealed joints, and ensured smooth operation.",
    beforeImage: "/images/portfolio/fence-before.jpg",
    afterImage: "/images/portfolio/fence-after.jpg"
  },

  // Marine & RV Portfolio
  {
    id: 101,
    category: 'marine-rv',
    title: "RV Water Damage Restoration",
    subtitle: "Moisture Intrusion",
    description: "Removed damaged paneling, dried interior framing thoroughly, and rebuilt with moisture-resistant materials — finish matches perfectly.",
    beforeImage: "/images/portfolio/rv-water-before.jpg",
    afterImage: "/images/portfolio/rv-water-after.jpg"
  },
  {
    id: 102,
    category: 'marine-rv',
    title: "Boat Gelcoat Repair",
    subtitle: "Dock Impact",
    description: "Repaired deep gelcoat scratches, color-matched perfectly, and blended seamlessly — you cannot tell where the repair was done.",
    beforeImage: "/images/portfolio/boat-gelcoat-before.jpg",
    afterImage: "/images/portfolio/boat-gelcoat-after.jpg"
  },
  {
    id: 103,
    category: 'marine-rv',
    title: "Motorhome Electrical Repair",
    subtitle: "Electrical System",
    description: "Diagnosed failed connection points, repaired wiring properly, tested every circuit — back on the road within hours.",
    beforeImage: "/images/portfolio/rv-electrical-before.jpg",
    afterImage: "/images/portfolio/rv-electrical-after.jpg"
  }
];

// Helper functions to get portfolio items by category
export const getPortfolioByCategory = (category: PortfolioItem['category']) => {
  return portfolioItems.filter(item => item.category === category);
};

export const getHomeRepairsPortfolio = () => getPortfolioByCategory('home-repairs');
export const getMarineRVPortfolio = () => getPortfolioByCategory('marine-rv');

