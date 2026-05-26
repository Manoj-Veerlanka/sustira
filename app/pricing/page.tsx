import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const pricingPlans = [
  {
    title: "Demo Session",
    price: "₹299",
    description:
      "A simple starting point to understand the course style, teaching approach, and learning value before moving further.",
    points: [
      "Introductory guided session",
      "Understand the course flow",
      "Clarify whether the path fits you",
    ],
  },
  {
    title: "Full Course",
    price: "Custom / Varies",
    description:
      "Full course pricing may differ based on the learning track, materials, format, and depth of guidance involved.",
    points: [
      "Course-specific learning journey",
      "Practical product understanding",
      "Guided support and outcomes",
    ],
  },
  {
    title: "Consultation / Guidance",
    price: "On Request",
    description:
      "For users who want broader clarity around eco-product direction, learning choices, or early business guidance.",
    points: [
      "Personalized discussion",
      "Product direction support",
      "Suitable next-step guidance",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="bg-[#fcfaf5]">
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
              Pricing
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1f1f1a] md:text-6xl">
              Simple pricing to help you get started with confidence.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5f5b53] md:text-lg">
              Sustira keeps pricing simple at the early stage so learners can
              explore the right starting point without confusion.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Pricing options"
            title="Choose the path that fits your current stage."
            description="Whether you want to begin with a demo, explore a full course, or seek guidance, the goal is to keep entry simple and approachable."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.title}
                className="rounded-[28px] border border-[#e7e0d4] bg-white p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f6b45]">
                  {plan.title}
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-[#1f1f1a]">
                  {plan.price}
                </h2>

                <p className="mt-4 text-sm leading-6 text-[#5f5b53]">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-[#1f1f1a]">
                  {plan.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f4efe6] py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Included"
                title="What users should expect at this stage."
                description="Sustira is launching with a practical and simple model, so pricing stays flexible where needed and clear where possible."
              />
            </div>

            <div className="space-y-4 text-sm leading-7 text-[#5f5b53] md:text-base">
              <p>
                Demo pricing is intended to help users explore the learning
                style before committing to deeper course participation.
              </p>

              <p>
                Full course pricing may vary depending on the topic, scope,
                materials, and format. Guidance-based support may also be
                offered depending on the learner’s needs.
              </p>

              <p>
                As Sustira grows, pricing structures may become more detailed,
                but the launch approach is intentionally simple.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="rounded-[32px] bg-[#2f6b45] px-6 py-10 text-white md:px-10 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
              Get started
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
              Begin with a demo and choose the right next step for you.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
              Book a demo or contact us to understand the pricing path that fits
              your learning goals best.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button label="Book a Demo" href="/book-demo" variant="secondary" />
              <Button label="Contact Us" href="/contact" variant="secondary" />
              <Button label="Chat on WhatsApp"
                                  href="https://wa.me/919901050050?text=Hi%20Sustira%20Team%2C%20I%20want%20to%20know%20more%20about%20your%20courses."
                                  variant="secondary"
                                  target="_blank"
                                  rel="noopener noreferrer"/>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}