"use client";

import Image from "next/image";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { FadeInWhenVisible } from "../ui/FadeInWhenVisible";

export function BrandStory() {
  return (
    <section id="story" className="py-24 md:py-36 bg-stone-100">
      <div className='max-w-screen-xl mx-auto px-6 md:px-12'>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20 mb-20">
          <FadeInWhenVisible>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/ceo.jpg"
                alt="Maison atelier — Paris"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Decorative frame offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-stone-300 -z-10" />
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.15}>
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
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}
