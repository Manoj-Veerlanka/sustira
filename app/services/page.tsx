import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Course Guidance",
    description:
      "Get a clear understanding of the learning paths available at Sustira and find the course direction that best matches your interest.",
  },
  {
    title: "Product Development Support",
    description:
      "Explore how product ideas connect with ingredients, materials, formulation thinking, and practical eco-product direction.",
  },
  {
    title: "Guest Lectures",
    description:
      "Learn from guided sessions and expert-led interactions that expand practical knowledge and perspective.",
  },
  {
    title: "Webinars",
    description:
      "Join focused learning events that introduce product themes, concepts, and opportunities in a simple and approachable way.",
  },
  {
    title: "Career & Business Direction",
    description:
      "Move beyond learning into clearer thinking around future product possibilities, launch readiness, and eco-business awareness.",
  },
  {
    title: "Community Support",
    description:
      "Be part of a supportive learning environment designed to encourage growth, confidence, and meaningful participation.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#fcfaf5]">
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
              Services
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1f1f1a] md:text-6xl">
              Support that goes beyond courses.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5f5b53] md:text-lg">
              Sustira brings together practical learning, product-focused
              guidance, and a warm support system to help people explore
              eco-product paths with clarity and confidence.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we offer"
            title="A broader support system for learning and eco-product growth."
            description="Sustira is designed not only as a place to learn, but as a platform that helps users move forward with practical understanding, supportive guidance, and future-oriented direction."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[28px] border border-[#e7e0d4] bg-white p-6"
              >
                <h3 className="text-xl font-semibold text-[#1f1f1a]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5f5b53]">
                  {service.description}
                </p>
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
                eyebrow="Why this matters"
                title="Learning becomes more useful when it is guided and connected to real direction."
                description="Sustira is being shaped to help users understand not only what to learn, but how that learning can support practical creation and future growth."
              />
            </div>

            <div className="space-y-4 text-sm leading-7 text-[#5f5b53] md:text-base">
              <p>
                Many learners need more than information. They need clarity,
                encouragement, and a practical path that helps them move from
                interest into meaningful action.
              </p>

              <p>
                By combining courses with broader support such as demos,
                webinars, product guidance, and community-oriented learning,
                Sustira aims to make the journey feel more complete and useful.
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
              Explore the support that fits your learning journey best.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
              Browse courses, book a demo, or connect with us to understand the
              best starting point for you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button label="Explore Courses" href="/courses" variant="secondary" />
              <Button label="Book a Demo" href="/book-demo" variant="secondary" />
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