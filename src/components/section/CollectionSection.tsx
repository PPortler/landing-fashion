"use client"

import { motion } from "framer-motion"
import { SectionLabel } from "../ui/SectionLabel"
import { fadeUp, slideInLeft, staggerContainer } from "@/lib/motion"
import { COLLECTION_PRODUCTS } from "@/constants"
import { ProductCard } from "../ui/ProductCard"
import { Button } from "../ui/Button"

function CollectionSection() {
  return (
    <section id="collection" className="py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={slideInLeft}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <SectionLabel>New Collection</SectionLabel>
            <h2 className="text-display-md text-stone-900">
              Featured Pieces
            </h2>
          </div>
          <Button variant="ghost">
            View All →
          </Button>
        </motion.div>

        {/* Product grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
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

export default CollectionSection
