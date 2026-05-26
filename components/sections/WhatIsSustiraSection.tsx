import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhatIsSustiraSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <SectionHeading
              eyebrow="What is Sustira"
              title="A practical learning and launch platform for eco-product creators."
              description="Sustira is an India-based, founder-led platform focused on step-by-step procedural learning, eco-friendly product development, and guided support for people who want to learn, create, and grow with confidence."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] bg-[#f4efe6] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f6b45]">
                Practical Learning
              </p>
              <p className="mt-3 text-sm leading-6 text-[#5f5b53]">
                Understand product making through simple, hands-on step-by-step procedural learning.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#f4efe6] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f6b45]">
                Founder-Led Support
              </p>
              <p className="mt-3 text-sm leading-6 text-[#5f5b53]">
                Learn through a warm, foundational approach focused on real-world growth.
Build practical skills with guided support and long-term vision.
Created to help you grow with confidence and purpose.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#f4efe6] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f6b45]">
                Eco-Product Focus
              </p>
              <p className="mt-3 text-sm leading-6 text-[#5f5b53]">
                Explore eco-conscious learning through soaps, healthy pickles, solar energy, SAP EHS, and sustainable product creation. Gain practical guidance to build real-world skills and beginner-friendly business ideas.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#f4efe6] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f6b45]">
                Growth Path
              </p>
              <p className="mt-3 text-sm leading-6 text-[#5f5b53]">
                Move from curiosity to demos, deeper learning, and future product-building opportunities.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}