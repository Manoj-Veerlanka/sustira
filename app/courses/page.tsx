import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

const courses = [
  {
    slug: "chemical-free-soap-making",
    title: "Chemical-free Soap Making",
    description:
      "Learn the basics of eco-conscious soap making through practical, guided sessions focused on ingredients, process, and product understanding.",
    demoFee: "Demo ₹299",
    level: "Beginner Friendly",
  },
  {
    slug: "organic-pickle-making",
    title: "Organic Pickle Making",
    description:
      "Explore practical pickle-making methods, material understanding, and product-focused learning in a simple and approachable format.",
    demoFee: "Demo ₹299",
    level: "Hands-on Learning",
  },
  {
    slug: "eco-product-development",
    title: "Eco-Product Development",
    description:
      "Understand how eco-product ideas connect with materials, product thinking, and guided development direction.",
    demoFee: "Coming Soon",
    level: "Product Focused",
  },
  {
    slug: "eco-business-plan-basics",
    title: "Eco-Business Plan Basics",
    description:
      "Get introduced to the early thinking needed to move from product learning toward eco-business possibilities and launch awareness.",
    demoFee: "Coming Soon",
    level: "Growth Oriented",
  },
];

const faqs = [
  "Who can join these courses?",
  "Are demos paid?",
  "Do I need prior chemistry knowledge?",
  "Will materials be provided?",
];

export default function CoursesPage() {
  return (
    <main className="bg-[#fcfaf5]">
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
              Courses
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1f1f1a] md:text-6xl">
              Explore practical eco-product learning paths.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5f5b53] md:text-lg">
              Sustira’s courses are designed to make learning more approachable,
              guided, and connected to real product understanding.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Available learning tracks"
            title="Start with a course that matches your interest."
            description="These early course directions reflect Sustira’s practical, eco-conscious, and guided learning approach."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="rounded-[28px] border border-[#e7e0d4] bg-white p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#e8f2ec] px-3 py-1 text-xs font-medium text-[#2f6b45]">
                    {course.demoFee}
                  </span>
                  <span className="rounded-full bg-[#f4efe6] px-3 py-1 text-xs font-medium text-[#5f5b53]">
                    {course.level}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-semibold text-[#1f1f1a]">
                  {course.title}
                </h2>

                <p className="mt-4 text-sm leading-6 text-[#5f5b53]">
                  {course.description}
                </p>

                <div className="mt-6">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center text-sm font-medium text-[#2f6b45] transition hover:opacity-80"
                  >
                    View details →
                  </Link>
                </div>
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
                eyebrow="Before you join"
                title="A few common questions learners may have."
                description="These are some of the early questions users often want answered before booking a demo or exploring a course."
              />
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq}
                  className="rounded-[22px] bg-white px-5 py-4 text-sm font-medium text-[#1f1f1a]"
                >
                  {faq}
                </div>
              ))}
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
              Choose a course and begin with a guided demo.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
              Start small, understand the learning style, and find the path that
              fits your interest best.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button label="Book a Demo" href="/book-demo" variant="secondary" />
              <Button label="Contact Us" href="/contact" variant="secondary" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}