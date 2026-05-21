"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn, fadeUp, slideInLeft, staggerContainer } from "@/lib/motion"
import { Button } from "../ui/Button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-end">
      {/* Background image — full bleed */}
      <motion.div
        className="absolute inset-0"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&q=85"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay — keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/30 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="z-10 pb-40 md:pb-56 px-6 md:px-16 max-w-screen-xl mx-auto w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Title */}
          <motion.h1
            variants={slideInLeft}
            className="text-display-xl text-stone-300 mb-8">
            The Art of
            <br />
            <p>Quiet Luxury</p>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className=" text-stone-300 mb-10"
          >
            Refined essentials designed for the considered life.
            <br />
            Crafted in Europe. Worn worldwide.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            <Button variant="primary">
              Explore Collection
            </Button>
            <Button
              variant="ghost"
              className="text-stone-300 hover:text-stone-50"
            >
              Watch Film →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
