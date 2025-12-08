// Centralized testimonials data for all pages

export interface Testimonial {
  id: number;
  name: string;
  location?: string;
  initials: string;
  avatarColor: string;
  rating: number;
  text: string;
  date: string;
  category: 'general' | 'home-repairs' | 'marine-rv';
}

export const testimonials: Testimonial[] = [
  // Home Page - General testimonials
  {
    id: 1,
    name: "Jason M.",
    initials: "JM",
    avatarColor: "#E8F4F8",
    rating: 5,
    text: "Vadim was on time, very professional, and extremely clean with his work. He fixed a hidden leak inside our bathroom wall and restored the drywall perfectly — you can't even tell anything happened.",
    date: "2 weeks ago",
    category: 'general'
  },
  {
    id: 2,
    name: "Maria L.",
    initials: "ML",
    avatarColor: "#FFF4E6",
    rating: 5,
    text: "Fantastic experience. Vadim showed up exactly when he said he would, fixed our broken cabinet, and even adjusted two other doors without charging extra. Super polite, clean, and honest.",
    date: "1 month ago",
    category: 'general'
  },
  {
    id: 3,
    name: "Daniel S.",
    initials: "DS",
    avatarColor: "#F0E8FF",
    rating: 5,
    text: "We had water damage under our kitchen sink. The issue was diagnosed quickly, the damaged panel was replaced, everything sealed correctly, and the space was left spotless.",
    date: "2 months ago",
    category: 'general'
  },
  {
    id: 4,
    name: "Robert K.",
    initials: "RK",
    avatarColor: "#E8F4F8",
    rating: 5,
    text: "Fixed gelcoat damage on our boat hull. The repair is seamless and the color match is perfect. Very impressed with the attention to detail and craftsmanship.",
    date: "3 weeks ago",
    category: 'general'
  },
  {
    id: 5,
    name: "Sarah T.",
    initials: "ST",
    avatarColor: "#FFF4E6",
    rating: 5,
    text: "Our RV had electrical issues that no one else could diagnose. Vadim found and fixed the problem in one visit. Excellent technical knowledge and fair pricing.",
    date: "1 month ago",
    category: 'general'
  },
  {
    id: 6,
    name: "Michael B.",
    initials: "MB",
    avatarColor: "#F0E8FF",
    rating: 5,
    text: "Repaired water damage in our RV bathroom. The work was done professionally, everything sealed properly, and looks brand new. Highly recommend for RV repairs.",
    date: "2 weeks ago",
    category: 'general'
  },
  {
    id: 7,
    name: "Jennifer W.",
    initials: "JW",
    avatarColor: "#E8F4F8",
    rating: 5,
    text: "Called for emergency deck repair before guests arrived. Vadim responded quickly, completed quality work on time, and left everything clean. True professional.",
    date: "3 months ago",
    category: 'general'
  },
  {
    id: 8,
    name: "Thomas R.",
    initials: "TR",
    avatarColor: "#FFF4E6",
    rating: 5,
    text: "Marine electrical work on our cabin cruiser. All lighting and switches work perfectly now. Clean installation and thorough testing. Great service!",
    date: "1 month ago",
    category: 'general'
  },

  // Home Repairs Page - Specific home repair testimonials
  {
    id: 101,
    name: "Jason M.",
    location: "Lake Nona",
    initials: "JM",
    avatarColor: "#E8F4F8",
    rating: 5,
    text: "Vadim repaired water damage in our bathroom after a hidden leak. He removed the damaged drywall, dried everything properly, and restored the wall perfectly — you can't even tell there was damage. The pricing was fair and explained clearly from the start.",
    date: "2 weeks ago",
    category: 'home-repairs'
  },
  {
    id: 102,
    name: "Maria L.",
    location: "Winter Park",
    initials: "ML",
    avatarColor: "#FFF4E6",
    rating: 5,
    text: "We had a long list of small repairs that other contractors didn't want to touch. Vadim handled everything professionally — fixed cabinets, repaired drywall holes, adjusted doors, and even fixed some trim work. Clean, precise, and reasonably priced.",
    date: "1 month ago",
    category: 'home-repairs'
  },
  {
    id: 103,
    name: "Daniel S.",
    location: "Hunters Creek",
    initials: "DS",
    avatarColor: "#F0E8FF",
    rating: 5,
    text: "After a kitchen sink leak damaged our cabinet base, Vadim restored the structure, resealed everything, and realigned the doors. The workspace was left spotless. Highly recommend for anyone who wants the job done right.",
    date: "2 months ago",
    category: 'home-repairs'
  },
  {
    id: 104,
    name: "Amanda R.",
    location: "Orlando",
    initials: "AR",
    avatarColor: "#E8F4F8",
    rating: 5,
    text: "Vadim repaired our ceiling after a roof leak. He matched the texture perfectly and repainted the entire area — it looks brand new. Professional, punctual, and respectful of our home throughout the project.",
    date: "3 weeks ago",
    category: 'home-repairs'
  },
  {
    id: 105,
    name: "Robert K.",
    location: "Kissimmee",
    initials: "RK",
    avatarColor: "#FFF4E6",
    rating: 5,
    text: "We needed exterior fence repairs after storm damage. Vadim replaced damaged posts, reinforced the structure, and made sure everything was level and secure. The gate operates smoothly now and looks great.",
    date: "1 month ago",
    category: 'home-repairs'
  },

  // Marine & RV Page - Marine and RV specific testimonials
  {
    id: 201,
    name: "Tom R.",
    location: "Orlando",
    initials: "TR",
    avatarColor: "#E8F4F8",
    rating: 5,
    text: "After discovering water damage in our RV's rear bedroom, Vadim removed the affected paneling, thoroughly dried the interior framing, and rebuilt everything with moisture-resistant materials. The finish matches perfectly and the repair is completely solid. The pricing was fair and explained clearly from the start.",
    date: "3 weeks ago",
    category: 'marine-rv'
  },
  {
    id: 202,
    name: "Lisa M.",
    location: "Winter Park",
    initials: "LM",
    avatarColor: "#FFF4E6",
    rating: 5,
    text: "Our boat's gelcoat had deep scratches from dock impact. Vadim repaired the damaged area, color-matched the finish perfectly, and blended it seamlessly — you absolutely cannot tell where the repair was done. Professional work at a reasonable price.",
    date: "1 month ago",
    category: 'marine-rv'
  },
  {
    id: 203,
    name: "Michael D.",
    location: "Kissimmee",
    initials: "MD",
    avatarColor: "#F0E8FF",
    rating: 5,
    text: "We had multiple electrical issues in our Class A motorhome that left us stranded. Vadim diagnosed the failed connection points, repaired the wiring properly, tested every circuit, and had us back on the road within hours. Clean work and honest communication throughout.",
    date: "2 weeks ago",
    category: 'marine-rv'
  },
  {
    id: 204,
    name: "Jennifer B.",
    location: "Lake Nona",
    initials: "JB",
    avatarColor: "#E8F4F8",
    rating: 5,
    text: "Vadim restored our pontoon boat's soft deck area after years of moisture intrusion. He replaced the damaged decking, reinforced the structure, and resealed everything properly — the deck is now completely solid and safe. Highly professional and detail-oriented.",
    date: "1 month ago",
    category: 'marine-rv'
  },
  {
    id: 205,
    name: "Carlos P.",
    location: "Winter Park",
    initials: "CP",
    avatarColor: "#FFF4E6",
    rating: 5,
    text: "After a roof leak damaged our travel trailer's interior wall and cabinet, Vadim rebuilt the structure, replaced all moisture-affected materials, and refinished the surfaces to match the original perfectly. The workspace was left spotless and the repair is flawless.",
    date: "2 months ago",
    category: 'marine-rv'
  }
];

// Helper functions to get testimonials by category
export const getTestimonialsByCategory = (category: Testimonial['category']) => {
  return testimonials.filter(t => t.category === category);
};

export const getGeneralTestimonials = () => getTestimonialsByCategory('general');
export const getHomeRepairsTestimonials = () => getTestimonialsByCategory('home-repairs');
export const getMarineRVTestimonials = () => getTestimonialsByCategory('marine-rv');

