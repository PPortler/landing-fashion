"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { COLLECTION_PRODUCTS } from "@/constants";
import { ProductCard } from "../ui/ProductCard";
import { SectionHeader } from "../ui/SectionHeader";

export function CollectionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collection" className="py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        <SectionHeader label="New Collection" title="Collection 2026" />

        {/* Product grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {COLLECTION_PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
