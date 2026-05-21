// Navigation
export interface NavLink {
  label: string;
  href: string;
}

// Product
export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  tag?: string; // e.g. "New", "Bestseller"
}
