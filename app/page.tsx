import HeroSection from "@/components/sections/HeroSection";
import WhatIsSustiraSection from "@/components/sections/WhatIsSustiraSection";
import FeaturedCoursesSection from "@/components/sections/FeaturedCoursesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FounderSection from "@/components/sections/FounderSection";
import ProductsPreviewSection from "@/components/sections/ProductsPreviewSection";
import CtaSection from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <div className="bg-[#fcfaf5]">
      <HeroSection />
      <WhatIsSustiraSection />
      <FeaturedCoursesSection />
      <HowItWorksSection />
      <FounderSection />
      <ProductsPreviewSection />
      <CtaSection />
    </div>
  );
}
