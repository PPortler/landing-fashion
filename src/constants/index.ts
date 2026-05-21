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
      "/images/collections/collection-1.jpg",
  },
  {
    id: "02",
    name: "Silk Drape Dress",
    category: "Ready-to-Wear",
    price: "€ 640",
    tag: "Bestseller",
    image:
      "/images/collections/collection-2.jpg",
  },
  {
    id: "03",
    name: "Cashmere Knit",
    category: "Knitwear",
    price: "€ 420",
    image:
      "/images/collections/collection-3.jpg",
  },
  {
    id: "04",
    name: "Wide-Leg Trousers",
    category: "Bottoms",
    price: "€ 380",
    image:
      "/images/collections/collection-4.jpg",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/gallery/gallery-1.jpg",
    label: "Spring Lookbook",
  },
  {
    id: "g2",
    src: "/images/gallery/gallery-2.jpg",
    label: "City Streets",
  },
  {
    id: "g3",
    src: "/images/gallery/gallery-3.jpg",
    label: "Evening Elegance",
  },
  {
    id: "g4",
    src: "/images/gallery/gallery-4.jpg",
    label: "Weekend Casual",
  },  
  {
    id: "g5",
    src: "/images/gallery/gallery-5.jpg",
    label: "Monochrome Magic",
  },
  {
    id: "g6",
    src: "/images/gallery/gallery-6.jpg",
    label: "Nature Escape",
  }
] 