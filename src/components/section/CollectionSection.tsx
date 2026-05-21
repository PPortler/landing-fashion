"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { COLLECTION_PRODUCTS } from "@/constants";
import { ProductCard } from "../ui/ProductCard";
import { Button } from "../ui/Button";
import { FadeInWhenVisible } from "../ui/FadeInWhenVisible";

export function CollectionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collection" className="py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <FadeInWhenVisible
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <SectionLabel>New Collection</SectionLabel>
            <h2 className="text-display-md text-stone-900">
              Collection 2026
            </h2>
          </div>
          <Button variant="ghost">
            View All →
          </Button>
        </FadeInWhenVisible>

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
