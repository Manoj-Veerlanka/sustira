import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { notFound } from "next/navigation";

const courseData = {
  "chemical-free-soap-making": {
    title: "Chemical-free Soap Making",
    description:
      "Learn the basics of eco-conscious soap making through practical, guided sessions focused on ingredients, process, and product understanding.",
    audience: [
      "Beginners interested in product learning",
      "Homemakers exploring eco-friendly product creation",
      "Learners who want practical and guided sessions",
    ],
    learn: [
      "Basic understanding of soap-making process",
      "Ingredient awareness and eco-product thinking",
      "Practical learning through guided explanation",
    ],
    highlights: [
      "Beginner-friendly introduction",
      "Hands-on learning direction",
      "Product-focused understanding",
    ],
    materials: [
      "Course-related materials may vary by format",
      "Specific guidance can be shared during demo or enrollment",
    ],
    demoFee: "₹299",
  },
  "organic-pickle-making": {
    title: "Organic Pickle Making",
    description:
      "Explore practical pickle-making methods, material understanding, and product-focused learning in a simple and approachable format.",
    audience: [
      "Beginners who want to learn through practical guidance",
      "Homemakers and aspiring product creators",
      "Learners interested in traditional eco-friendly products",
    ],
    learn: [
      "Understanding of pickle-making fundamentals",
      "Awareness of materials and preparation flow",
      "Product-oriented learning in a guided format",
    ],
    highlights: [
      "Simple and approachable learning path",
      "Practical product direction",
      "Beginner-friendly structure",
    ],
    materials: [
      "Material details may depend on the format of the course",
      "More clarity can be shared during the demo session",
    ],
    demoFee: "₹299",
  },
  "eco-product-development": {
    title: "Eco-Product Development",
    description:
      "Understand how eco-product ideas connect with materials, product thinking, and guided development direction.",
    audience: [
      "Learners exploring eco-product possibilities",
      "People interested in product thinking and guidance",
      "Users looking for broader practical direction",
    ],
    learn: [
      "How eco-product ideas take shape",
      "Basic connection between materials and product concept",
      "Guided direction toward practical development thinking",
    ],
    highlights: [
      "Product-focused learning",
      "Development-oriented approach",
      "Future launch perspective",
    ],
    materials: [
      "Material direction may vary by topic and scope",
      "Specific details can be shared before enrollment",
    ],
    demoFee: "Coming Soon",
  },
  "eco-business-plan-basics": {
    title: "Eco-Business Plan Basics",
    description:
      "Get introduced to the early thinking needed to move from product learning toward eco-business possibilities and launch awareness.",
    audience: [
      "Learners curious about future business direction",
      "Aspiring entrepreneurs exploring eco-product paths",
      "Users who want guided next-step clarity",
    ],
    learn: [
      "How product learning can connect to business thinking",
      "Basic launch awareness and early planning ideas",
      "A guided introduction to eco-business possibilities",
    ],
    highlights: [
      "Growth-oriented direction",
      "Foundational business awareness",
      "Beginner-friendly approach",
    ],
    materials: [
      "This course may rely more on guided understanding than material kits",
      "Additional details can be shared during the demo or enquiry stage",
    ],
    demoFee: "Coming Soon",
  },
} as const;

type CourseSlug = keyof typeof courseData;

type CourseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { slug } = await params;
  const course = courseData[slug as CourseSlug];

  if (!course) {
    notFound();
  }

  return (
    <main className="bg-[#fcfaf5]">
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
              Course Detail
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1f1f1a] md:text-6xl">
              {course.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5f5b53] md:text-lg">
              {course.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#e8f2ec] px-3 py-1 text-xs font-medium text-[#2f6b45]">
                {course.demoFee}
              </span>
              <span className="rounded-full bg-[#f4efe6] px-3 py-1 text-xs font-medium text-[#5f5b53]">
                Guided Learning
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Who it is for"
                title="A course designed for learners who want a practical start."
                description="This learning path is intended to feel approachable, guided, and useful for people exploring eco-product learning."
              />

              <div className="mt-8 space-y-4">
                {course.audience.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-[#e7e0d4] bg-white p-5 text-sm text-[#1f1f1a]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="What you will learn"
                title="Core areas this course helps you understand."
                description="The exact depth may vary by course format, but these are the kinds of outcomes the learning is intended to support."
              />

              <div className="mt-8 space-y-4">
                {course.learn.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-[#e7e0d4] bg-white p-5 text-sm text-[#1f1f1a]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4efe6] py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Course highlights"
                title="What makes this learning path useful."
                description="These highlights help explain the practical and guided nature of the course."
              />

              <div className="mt-8 space-y-4">
                {course.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] bg-white p-5 text-sm text-[#1f1f1a]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Materials & demo"
                title="What to expect before enrolling."
                description="Sustira uses demo sessions to help learners understand the course fit before moving further."
              />

              <div className="mt-8 rounded-[28px] bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f6b45]">
                  Demo Fee
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#1f1f1a]">
                  {course.demoFee}
                </p>

                <div className="mt-6 space-y-3 text-sm leading-6 text-[#5f5b53]">
                  {course.materials.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="rounded-[32px] bg-[#f4efe6] p-4">
              <div className="aspect-[4/5] w-full rounded-[28px] bg-[#e6dfd2]" />
            </div>

            <div>
              <SectionHeading
                eyebrow="Trainer / founder"
                title="Guided with a practical and supportive approach."
                description="Sustira’s course direction is shaped to feel approachable, founder-led, and useful for learners who want clarity before going deeper."
              />

              <p className="mt-6 text-sm leading-7 text-[#5f5b53] md:text-base">
                The learning experience is intended to be simple, guided, and
                encouraging, especially for users who are just beginning their
                journey into eco-product exploration.
              </p>

              <div className="mt-8">
                <Button label="Book a Demo" href="/book-demo" variant="primary" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}