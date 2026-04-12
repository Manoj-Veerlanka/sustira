import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FounderSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="rounded-[32px] bg-[#f4efe6] p-4">
            <div className="overflow-hidden rounded-[28px] bg-[#e6dfd2]">
              <Image
                src="/images/founder.png"
                alt="Founder of Sustira"
                width={900}
                height={1200}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Founder-led vision"
              title="Built on sustainability, learning, and practical guidance."
              description="Sustira is shaped by a founder with deep experience in environmental sustainability, safety systems, training content, and community-focused initiatives. The vision is to make eco-product learning more practical, approachable, and meaningful for aspiring learners and creators."
            />

            <div className="mt-6 space-y-4 text-sm leading-7 text-[#5f5b53] md:text-base">
              <p>
                Deepthi brings over 8 years of experience across sustainability,
                environmental compliance, SAP EHS/EHSM systems, and training-led
                knowledge sharing.
              </p>

              <p>
                Through Sustira, that experience is being shaped into a warmer,
                more accessible platform where learners can explore eco-products,
                understand materials with confidence, and move toward real-world
                creation with guided support.
              </p>
            </div>

            <div className="mt-8">
              <Button
                label="Learn More About Sustira"
                href="/about"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}