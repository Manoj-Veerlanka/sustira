import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const focusAreas = [
  {
    title: "Environment – Solar Power Energy",
    description:
      "Learn how to harness renewable energy through solar power solutions. This course introduces fundamentals of solar systems, practical applications, and how individuals and small businesses can adopt clean energy for sustainable living and cost savings.",
  },
  {
    title: "Health – Healthy Seasonal Pickles",
    description:
      "Discover the art of making traditional, chemical-free seasonal pickles using natural ingredients. This program blends nutrition, preservation techniques, and entrepreneurship, helping you create healthy food products rooted in Indian heritage.",
  },
  {
    title: "Safety – SAP EHS Course Guidance",
    description:
      "Step into the world of Environmental Health & Safety with structured guidance on SAP EHS modules. Designed for students and professionals, this course connects safety, compliance, and digital systems to real industry opportunities.",
  },
];

const courses = [
  {
    slug: "solar-energy-initiative",
    sector: "Environment Sector",
    title: "Solar Energy Initiative",
    description:
      "Learn basics of solar energy and its importance as alternate energy.",
    suitableFor:
      "Entrepreneurs, engineers, and learners who want to promote alternate energy sources.",
    demoFee: "₹499",
    image: "/images/courses/solar-energy.png",
  },
  {
    slug: "organic-seasonal-healthy-pickles",
    sector: "Health Sector",
    title: "Organic Seasonal Healthy Pickles",
    description: "How can a healthy seasonal organic product be made?",
    suitableFor: "Entrepreneurs, homemakers, and curious learners.",
    demoFee: "₹199",
    image: "/images/courses/healthy-pickles.png",
  },
  {
    slug: "sap-ehs-basic-course-guidance",
    sector: "Safety Sector",
    title: "SAP EHS Basic Course Guidance",
    description: "SAP EHS course highlights and basic foundation guidance.",
    suitableFor:
      "Students, professionals, compliance learners, and EHS aspirants.",
    demoFee: "₹299",
    image: "/images/courses/sap-ehs.png",
  },
   {
    slug: "beginner-product-business-basics",
    sector: "General",
    title: "Beginner Product Business Basics",
    description:
      "Get introduced to practical thinking around taking a skill toward a possible product-based opportunity.",
    suitableFor:
      "Early-stage learners, aspiring creators, and beginners curious about product-based opportunities.",
    demoFee: "299",
    image: "/images/courses/business-basics.png",
  },
  {
    slug: "chemical-free-soap-making",
    sector: "Health / Product",
    title: "Chemical-Free Soap Making",
    description:
      "Learn the basics of soap-making, ingredients, process understanding, and practical product awareness.",
    suitableFor:
      "Beginners, homemakers, product enthusiasts, and aspiring small-scale creators.",
    demoFee: "Coming Soon",
    image: "/images/courses/soap-making.png",
  },
  {
    slug: "eco-product-basics",
    sector: "General",
    title: "Eco Product Basics",
    description:
      "Explore foundational concepts in eco-friendly product creation and sustainable material thinking.",
    suitableFor: "Beginners and curious learners exploring eco-product ideas.",
    demoFee: "Coming Soon",
    image: "/images/courses/eco-product-basics.png",
  },
 
];

export default function CoursesPage() {
  return (
    <main className="bg-[#fcfaf5]">
      {/* Hero */}
<section className="py-16 md:py-24">
  <Container>
    <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
      {/* Left content */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2f6b45]">
          Courses
        </p>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#1f1f1a] md:text-5xl xl:text-6xl">
          Learn. Create. Sustain.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-[#5f5b53] md:text-lg">
          Whether you want to build a green business, learn new skills, or
          contribute to the environment — Sustira gives you the tools to create
          real impact.
        </p>
      </div>

      {/* Right image */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative h-[260px] w-full max-w-[520px] overflow-hidden rounded-[36px] bg-[#f4efe6] shadow-sm ring-1 ring-[#e7e0d4] md:h-[340px]">
          <Image
            src="/images/courses/coursehero.png"
            alt="Eco-product learning with natural materials"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </Container>
</section>

      {/* Focus Areas */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
              Our Focus Areas
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#1f1f1a] md:text-4xl">
              Explore learning paths across environment, health, and safety.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-[28px] border border-[#e7e0d4] bg-white p-6"
              >
                <h3 className="text-xl font-semibold text-[#1f1f1a]">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#5f5b53]">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Course Listings */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
              Course Listings
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#1f1f1a] md:text-4xl">
              Choose a course that matches your interest and goals.
            </h2>
          </div>

          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.slug}
                className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[#e7e0d4] bg-white"
              >
                <div className="h-[260px] w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2f6b45]">
                    {course.sector}
                  </p>

                  <h3 className="mt-4 min-h-[72px] text-2xl font-semibold leading-tight text-[#1f1f1a]">
                    {course.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-[#5f5b53]">
                    {course.description}
                  </p>

                  <div className="mt-5 min-h-[112px]">
                    <p className="text-sm font-medium text-[#1f1f1a]">
                      Suitable for
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#5f5b53]">
                      {course.suitableFor}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between rounded-2xl bg-[#f4efe6] px-4 py-3">
                      <span className="text-sm font-medium text-[#5f5b53]">
                        Demo Fee
                      </span>
                      <span className="text-sm font-semibold text-[#1f1f1a]">
                        {course.demoFee}
                      </span>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="inline-flex items-center justify-center rounded-full border border-[#d9d0c2] px-5 py-3 text-sm font-medium text-[#1f1f1a] transition hover:bg-[#f4efe6]"
                      >
                        View Details
                      </Link>

                      <Button
                        href="/book-demo"
                        label="Book Demo"
                        variant="primary"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="rounded-[32px] bg-[#2f6b45] px-6 py-10 text-white md:px-10 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
              Get started
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
              Start with a demo before you decide.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
              Explore the course details, understand the topic, and book a demo
              to find the right path for you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href="/book-demo"
                label="Book a Demo"
                variant="secondary"
              />
              <Button href="/contact" label="Contact Us" variant="secondary" />
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