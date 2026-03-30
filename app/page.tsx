import HeroSection from "@/components/sections/HeroSection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HomePage() {
  return (
    <main className="bg-[#fcfaf5]">
      <HeroSection />

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Offer"
            title="A warm, practical path into eco-product learning."
            description="Sustira supports learners through courses, demo sessions, product guidance, and eco-business direction in a simple and supportive way."
            align="center"
          />
        </Container>
      </section>
    </main>
  );
}