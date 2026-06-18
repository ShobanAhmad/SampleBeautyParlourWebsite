/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, TeamMember, Testimonial, GalleryItem } from './types';

export const SALON_INFO = {
  name: "Glow & Grace Beauty Studio",
  tagline: "Your Ultimate Glow-Up Destination in Meerut",
  address: "S-18, First Floor, Imperial Plaza, Opposite Commissioner's Residence, Civil Lines, Meerut, Uttar Pradesh - 250001",
  phone: "+91 88877 99911", // Fictional premium contact number
  whatsapp: "https://wa.me/918887799911?text=Hi%20Glow%20and%20Grace!%20I%20would%20like%20to%20book%20a%20consultation.",
  email: "appointments@glowandgracemeerut.com",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  hours: [
    { days: "Monday - Saturday", time: "10:00 AM - 08:30 PM" },
    { days: "Sunday", time: "11:00 AM - 07:00 PM" }
  ],
  stats: [
    { value: "10+", label: "Years of Trust", suffix: "Years" },
    { value: "5,000+", label: "Delighted Clients", suffix: "Clients" },
    { value: "12+", label: "Award-Winning Stylists", suffix: "Stylists" },
    { value: "4.9★", label: "340+ Verified Reviews", suffix: "Google Rating" }
  ]
};

export const SERVICES_DATA: Service[] = [
  // --- HAIR DIVISION ---
  {
    id: "hair-1",
    name: "Couture Haircut & Personal Styling",
    category: "hair",
    price: 1500,
    duration: "45 Mins",
    description: "Advanced haircut personalized by Meera Sharma to complement your unique bone structure. Includes luxury hair wash, mask, and signature blow-dry.",
    isPopular: true
  },
  {
    id: "hair-2",
    name: "L'Oréal Smartbond Color & Balayage",
    category: "hair",
    price: 6500,
    duration: "150 Mins",
    description: "Multi-dimensional international premium balayage with high-strength bond protection. Includes customized toner and moisture sealant."
  },
  {
    id: "hair-3",
    name: "Kérastase Nutritive Caviar Hair Spa",
    category: "hair",
    price: 2800,
    duration: "60 Mins",
    description: "Intense cellular rejuvenation therapy for frizzy, dehydrated tresses. Includes scalp micro-circulation massage and steam fusion.",
    isPopular: false
  },
  {
    id: "hair-4",
    name: "Brazilian Keratin / Botox Restoration",
    category: "hair",
    price: 7500,
    duration: "180 Mins",
    description: "Zero-frizz, deep protein alignment which provides sleek, long-lasting silkiness for up to 50 washes. Perfect for India's humid weather."
  },

  // --- SKIN CARING ---
  {
    id: "skin-1",
    name: "O3+ Ultra-Shine Miracle Oxygen Facial",
    category: "skin",
    price: 3500,
    duration: "75 Mins",
    description: "Exclusive multi-step cellular oxygen booster to instantly clarify skin tone, fade dark spots, and illuminate your skin with a long-lasting bridal radiance.",
    isPopular: true
  },
  {
    id: "skin-2",
    name: "Clarins Hydra-Replenishing Glow Ritual",
    category: "skin",
    price: 4200,
    duration: "90 Mins",
    description: "Premium French botanical skincare treatment with dual-pressure lymphoid drainage. Deeply hydrates sensitive skin damaged by urban pollution."
  },
  {
    id: "skin-3",
    name: "Organic Honey & Saffron Detan Elixir",
    category: "skin",
    price: 1800,
    duration: "45 Mins",
    description: "Traditional Ayurvedic fairness detan using premium Kashmiri saffron paste alongside raw Himalayan wild honey to restore standard complexion."
  },

  // --- DESIGNER MAKEUP ---
  {
    id: "makeup-1",
    name: "Celebrity HD Glamour Party Makeup",
    category: "makeup",
    price: 6000,
    duration: "60 Mins",
    description: "Ultra-fine high-definition makeup with global products (Estée Lauder, MAC, NARS). Includes customizable lashes and professional contour lock.",
    isPopular: true
  },
  {
    id: "makeup-2",
    name: "Ethereal Airbrush Cocktail Makeover",
    category: "makeup",
    price: 9500,
    duration: "90 Mins",
    description: "Flawless luxury airbrush coverage that delivers a satin, sweat-proof, lightweight matte finish designed to look stunning under cinematic event photography."
  },

  // --- BRIDAL COUTURE ---
  {
    id: "bridal-1",
    name: "The Regal Royal Bridal Heirloom Package",
    category: "bridal",
    price: 21000,
    duration: "240 Mins",
    description: "Meera's masterpiece: Elite HD/Airbrush bridal makeup, exquisite hair artistry, dupatti draping, premium nail extensions, and a 24k gold leaf skin prep facial.",
    isPopular: true
  },
  {
    id: "bridal-2",
    name: "Bridal Sagan / Haldi Ritual Elegance",
    category: "bridal",
    price: 11000,
    duration: "150 Mins",
    description: "Suttle yet glowing HD pastel styling tailored for your pre-wedding rituals. Complemented by traditional floral hair-weaving and skin hydration."
  },

  // --- WELLNESS SPA ---
  {
    id: "spa-1",
    name: "Moroccan Argan Deep Tissue Renewal",
    category: "spa",
    price: 3200,
    duration: "90 Mins",
    description: "Sensory aromatherapy relaxation designed to melt muscles using warm pure Moroccan organic oils, hot stones, and custom pressure reflexology."
  },
  {
    id: "spa-2",
    name: "Ayurvedic Kansa Vataki Back Soothing",
    category: "spa",
    price: 2500,
    duration: "60 Mins",
    description: "Detoxifying therapy utilizing traditional bell-metal bowls, medicated herbal oils, and acupressure pathways to release deep tensions."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "staff-1",
    name: "Meera Sharma",
    role: "Founder & Creative Director",
    specialty: "Bridal Transformations & Advanced Hair Colorimetry",
    experience: "12+ Years",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "staff-2",
    name: "Priya Chauhan",
    role: "Senior Bridal & Airbrush Makeup Artist",
    specialty: "High-Definition Editorial Makeups",
    experience: "7 Years",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "staff-3",
    name: "Rahul Verma",
    role: "Senior Hair Alchemist & Texture Specialist",
    specialty: "Chemical Treatments, Balayage & Botox",
    experience: "8 Years",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "staff-4",
    name: "Anjali Rao",
    role: "Chief Aesthetician & Skin Therapist",
    specialty: "Micro-current Radiance & Clarifying Facials",
    experience: "6 Years",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
  }
];

export const CERTIFICATIONS = [
  { title: "L'Oréal Professionnel Academy Paris", subtitle: "Grand Master Colorist Certification" },
  { title: "Kérastase Paris Advanced Haircare Specialists", subtitle: "Scalp Diagnostics & Cell-Fusion Protocols" },
  { title: "MAC Cosmetics Pro Artistry Elite", subtitle: "High Definition Cinematic Crafting" },
  { title: "O3+ Dermacare Clinical Institute", subtitle: "Advanced Aesthetic Peels & Facial Sculpting" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Shreya Singhal",
    location: "Sardar Patel Nagar, Meerut",
    rating: 5,
    text: "Reviewing after my wedding: Meera di is literally a magician. My Regal Bridal makeup didn't budge for 10 hours at all and photographed like an absolute dream! Family was so happy. Truly premium work worth every rupee.",
    date: "2 weeks ago",
    treatment: "Regal Royal Bridal Package"
  },
  {
    id: "rev-2",
    name: "Divya Rastogi",
    location: "Saket Colony, Meerut",
    rating: 5,
    text: "Highly recommend the L'Oréal Balayage and Hair Botox! Rahul bhaiya patiently listened to my concerns about my damaged hair and did a fabulous job. It feels silky and of international caliber. Safe and hygienic.",
    date: "1 month ago",
    treatment: "Balayage & Botox Restoration"
  },
  {
    id: "rev-3",
    name: "Aparna Goel",
    location: "Civil Lines, Meerut",
    rating: 5,
    text: "The O3+ Miracle Facial was amazing. Anjali is brilliant with facial muscle contouring. The salon environment is incredibly calm and has that proper champagne luxury vibe. Cleanest premium parlour in Meerut, hands down!",
    date: "3 weeks ago",
    treatment: "O3+ Oxygen Miracle Facial"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "The Royal Crimson Bride",
    category: "bridal",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-2",
    title: "Luxury Honey Balayage Waves",
    category: "hair",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-3",
    title: "Signature Dewy Summer Glam",
    category: "makeup",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-4",
    title: "O3+ Clarifying Hydrator Results",
    category: "skin",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-5",
    title: "Pastel Sagan Elegance Transformation",
    category: "bridal",
    imageUrl: "https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-6",
    title: "Soft Curls & Sleek Texture Craft",
    category: "hair",
    imageUrl: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800"
  }
];

export const INSTAGRAM_TEASER = [
  { id: "insta-1", url: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a3ef?auto=format&fit=crop&q=80&w=400" },
  { id: "insta-2", url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400" },
  { id: "insta-3", url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=400" },
  { id: "insta-4", url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400" },
  { id: "insta-5", url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=400" },
  { id: "insta-6", url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400" },
];
