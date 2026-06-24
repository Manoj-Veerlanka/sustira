import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Explore a learning path",
    description:
      "Browse Sustira’s early courses and eco-product learning options to find what fits your interest.",
  },
  {
    number: "02",
    title: "Book a free demo",
    description:
      "Start with a free demo session to understand the course style, approach, and value.",
  },
  {
    number: "03",
    title: "Learn with guidance",
    description:
      "Join a warm, founder-led learning experience focused on practical understanding and application.",
  },
  {
    number: "04",
    title: "Grow toward product creation",
    description:
      "Move from learning into deeper product thinking, eco-business direction, and future launch potential.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A simple path from curiosity to eco-product learning."
          description="Sustira is designed to help learners move step by step, with clarity, confidence, and guided support."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[28px] border border-[#e7e0d4] bg-white p-6"
            >
              <p className="text-sm font-semibold tracking-[0.12em] text-[#2f6b45]">
                {step.number}
              </p>

              <h3 className="mt-4 text-xl font-semibold leading-snug text-[#1f1f1a]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#5f5b53]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}