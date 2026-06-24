import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4efe6]">
      <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* Left content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#2f6b45]">
            Eco-Friendly Product Development Program
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#1f1f1a] md:text-5xl lg:text-6xl">
            Learn, create, and grow with eco-friendly product skills.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5b53] md:text-lg">
            Sustira helps aspiring learners, entrepreneurs, and communities
            explore guided demos, hands-on eco-product learning, and practical
            sustainability-focused product development.
          </p>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#5f5b53]">
            Our goal is to bridge the gap between environmental awareness and
            practical implementation by enabling people to develop eco-friendly,
            chemical-free, and sustainable products with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button label="Book free Demo" href="/book-demo" variant="primary" />
            <Button
              label="Explore Courses"
              href="/courses"
              variant="secondary"
            />
          </div>
        </div>

        {/* Right big image */}
        <div className="relative h-[360px] overflow-hidden rounded-[2rem] md:h-[480px] lg:h-[600px]">
          <Image
            src="/images/hero-image.png"
            alt="Sustira eco-friendly product development program"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </Container>
    </section>
  );
}