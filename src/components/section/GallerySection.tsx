"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GALLERY_IMAGES } from "@/constants";
import Image from "next/image";
import { SectionHeader } from "../ui/SectionHeader";

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        <SectionHeader label="Limited Gallery" title="Gallery Highlights" />
        {/* Gallery */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 gap-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {GALLERY_IMAGES.map((item) => (
            <motion.div key={item.id}
              variants={fadeUp}
              className="group relative overflow-hidden"
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
