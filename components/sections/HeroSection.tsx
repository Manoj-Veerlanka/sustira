import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ChemistryScene from "@/components/three/ChemistryScene";

export default function HeroSection() {
  return (
    <section className="bg-[#f4efe6]">
      <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#2f6b45]">
            Practical eco-product learning
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#1f1f1a] md:text-5xl lg:text-6xl">
            Learn, create, and grow with chemistry-based eco skills.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5b53] md:text-lg">
            Sustira helps learners explore hands-on courses, guided demo sessions,
            and product-focused support in a warm, founder-led learning environment.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button label="Book a Demo" href="/book-demo" variant="primary" />
            <Button label="Explore Courses" href="/courses" variant="secondary" />
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[32px] bg-white shadow-sm ring-1 ring-[#e8e1d4]">
            <div className="relative h-[420px] bg-[linear-gradient(135deg,#e2eddc_0%,#eadfcd_100%)]">
              <div className="absolute inset-0">
                <ChemistryScene />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
