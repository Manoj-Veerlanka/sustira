import Button from "@/components/ui/Button";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FounderSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="rounded-[32px] bg-[#f4efe6] p-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px]">
              <Image
                src="/images/founder.png"
                alt="Founder of Sustira"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Founder-led vision"
              title="Built with warmth, guidance, and practical intent."
              description="Sustira is shaped as a founder-led platform to make eco-product learning more approachable, supportive, and meaningful for people who want to build skills with confidence."
            />

            <div className="mt-6 space-y-4 text-sm leading-7 text-[#5f5b53] md:text-base">
              <p>
                The goal is not only to teach a course, but to create a clear
                and encouraging path for learners who want to understand
                products, materials, and future possibilities in a practical
                way.
              </p>

              <p>
                Through guided learning, demos, and product-focused support,
                Sustira aims to help learners move from curiosity toward real
                confidence and creation.
              </p>
            </div>

            <div className="mt-8">
              <Button label="Learn More About Sustira" href="/about" variant="primary" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}