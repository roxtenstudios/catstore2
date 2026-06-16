import { Hero } from "@/components/sections/Hero";
import { MarqueeDivider } from "@/components/sections/MarqueeDivider";
import { MobileKittenStore } from "@/components/ecommerce/MobileKittenStore";
import { AboutUs } from "@/components/sections/AboutUs";
import { KittenStuffs } from "@/components/ecommerce/KittenStuffs";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { InstaGallery } from "@/components/sections/InstaGallery";
import { FAQQuery } from "@/components/sections/FAQQuery";
import { Footer } from "@/components/ui/Footer";
import { StickyCTA } from "@/components/ui/StickyCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-background selection:bg-primary/50">
      
      <StickyCTA />
      
      <Hero />
      <MarqueeDivider />
      
      <MobileKittenStore />
      <AboutUs />
      <KittenStuffs />
      <PromoBanner />
      
      <InstaGallery />
      <FAQQuery />
      
      <Footer />
      
    </main>
  );
}
