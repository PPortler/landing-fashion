import type { NavLink, Product } from "@/types";

// Navigation
export const NAV_LINKS: NavLink[] = [
  { label: "Collection", href: "#collection" },
  { label: "Story", href: "#story" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Contact", href: "#contact" },
];

// Products 
export const COLLECTION_PRODUCTS: Product[] = [
  {
    id: "01",
    name: "Tailored Linen Coat",
    category: "Outerwear",
    price: "€ 890",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
  },
  {
    id: "02",
    name: "Silk Drape Dress",
    category: "Ready-to-Wear",
    price: "€ 640",
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
  },
  {
    id: "03",
    name: "Cashmere Knit",
    category: "Knitwear",
    price: "€ 420",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
  },
  {
    id: "04",
    name: "Wide-Leg Trousers",
    category: "Bottoms",
    price: "€ 380",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
  },
];