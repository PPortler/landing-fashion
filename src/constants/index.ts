import type { GalleryImage, NavLink, Product } from "@/types";

// Navigation
export const NAV_LINKS: NavLink[] = [
  { label: "Collection", href: "#collection" },
  { label: "Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
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

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
    label: "Spring Lookbook",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1521334884684-d80222895322?w=800&q=80",
    label: "City Streets",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80",
    label: "Evening Elegance",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    label: "Weekend Casual",
  },  
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1521334884684-d80222895322?w=800&q=80",
    label: "Monochrome Magic",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80",
    label: "Nature Escape",
  }
] 