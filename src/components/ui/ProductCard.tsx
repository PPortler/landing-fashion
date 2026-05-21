"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden bg-stone-100 aspect-[3/4] mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Optional tag badge */}
        {product.tag && (
          <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase bg-stone-50 text-stone-800 px-3 py-1">
            {product.tag}
          </span>
        )}
      </div>

      {/* Product info */}
      <div className="space-y-1">
        <p className="text-label">{product.category}</p>
        <h3 className="text-lg text-stone-900">
          {product.name}
        </h3>
        <p className="text-sm text-stone-500">
          {product.price}
        </p>
      </div>
    </motion.div>
  );
}
