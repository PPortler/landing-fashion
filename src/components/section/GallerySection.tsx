"use client"

import { slideInLeft, staggerContainer } from "@/lib/motion"
import { motion } from "framer-motion"
import { SectionLabel } from "../ui/SectionLabel"
import { Button } from "../ui/Button"
import { GALLERY_IMAGES } from "@/constants"
import Image from "next/image"

function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={slideInLeft}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <SectionLabel>Limited Gallery</SectionLabel>
            <h2 className="text-display-md text-stone-900">
              Gallery Highlights
            </h2>
          </div>
          <Button variant="ghost">
            View All →
          </Button>
        </motion.div>
        {/* Gallery */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 gap-2"
        >
          {GALLERY_IMAGES.map((item) => (
            <motion.div key={item.id}
              className="group relative overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="
                    transition-transform
                    duration-700
                    ease-out
                    object-cover
                    group-hover:scale-105
                  "
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              {/* overlay */}

              <div
                className="
                bg-black/10
                  absolute inset-0
                  transition-colors
                  duration-500
                  group-hover:bg-black/30
                "
              />
              <p className="text-stone-100 absolute bottom-0 m-3 md:m-5">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>

  )
}

export default GallerySection
