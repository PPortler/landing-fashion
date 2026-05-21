"use client"

import { fadeUp } from "@/lib/motion"
import { motion } from "framer-motion"
import Image from "next/image"
import { SectionLabel } from "../ui/SectionLabel"
import { Button } from "../ui/Button"

function BrandStory() {
  return (
    <section id="story" className="py-24 md:py-36 bg-stone-100">
      <div className='max-w-screen-xl mx-auto px-6 md:px-12'>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20 mb-20">
          <motion.div
            variants={fadeUp}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80"
                alt="Maison atelier — Paris"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Decorative frame offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-stone-300 -z-10" />
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
          >
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h1
                className="text-display-md mb-8">
                A Family recipe for
                <br />
                <p>the prefect evening.</p>
              </h1>
              <div className="space-y-8
               text-stone-600 mb-10">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ipsum odit reprehenderit tempore molestiae? Eius earum ut ipsa rerum maxime nobis dolorum rem, odit cum atque dolor, labore, perspiciatis magnam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione alias iusto nisi unde laboriosam beatae laborum iste necessitatibus exercitationem voluptatibus inventore quod.</p>
                <p className="text-center"><span className="font-bold">{"\"Bella Italia zaustavija vreme.\""}</span> - John Doe</p>
              </div>
              <div className="flex justify-center">
                <Button variant="ghost" className="border-b hover:opacity-50">
                  Read More
                </Button>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
