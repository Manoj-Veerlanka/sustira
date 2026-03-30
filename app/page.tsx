import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function HomePage() {
  return (
    <div className="bg-[#fcfaf5]">
      <HeroSection />

       <ServicesSection />
    </div>
  );
}