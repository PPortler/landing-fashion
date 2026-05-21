import { HeroSection } from "@/components/section/HeroSection";
import { CollectionSection } from "@/components/section/CollectionSection";
import { BrandStory } from "@/components/section/BrandStory";
import { GallerySection } from "@/components/section/GallerySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollectionSection />
      <BrandStory />
      <GallerySection />
    </>
  );
}
