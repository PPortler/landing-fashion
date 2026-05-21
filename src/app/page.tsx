import BrandStory from "@/components/section/BrandStory";
import CollectionSection from "@/components/section/CollectionSection";
import GallerySection from "@/components/section/GallerySection";
import HeroSection from "@/components/section/HeroSection";

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
