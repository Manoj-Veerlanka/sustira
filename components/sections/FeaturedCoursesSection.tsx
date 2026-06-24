import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const courses = [
  {
    number: "01",
    title: "Solar Energy Initiative",
    href: "/courses/solar-energy-initiative",
    tags: [
      { label: "Environment", tone: "green" },
      { label: "Free Demo", tone: "gold" },
    ],
  },
  {
    number: "02",
    title: "SAP EHS Beginner Course Guidance",
    href: "/courses/sap-ehs-basic-course-guidance",
    tags: [
      { label: "Safety", tone: "green" },
      { label: "Free Demo", tone: "gold" },
    ],
  },
  {
    number: "03",
    title: "Beginner Product Business Guidance",
    href: "/courses/beginner-product-business-basics",
    tags: [
      { label: "Business", tone: "green" },
      { label: "Free Demo", tone: "gold" },
    ],
  },
  {
    number: "04",
    title: "Organic Seasonal Healthy Pickles",
    href: "/courses/organic-seasonal-healthy-pickles",
    tags: [
      { label: "Health", tone: "teal" },
      { label: "Free Demo", tone: "gold" },
    ],
  },
  {
    number: "05",
    title: "Chemical-Free Soap Making",
    href: "/courses/chemical-free-soap-making",
    tags: [
      { label: "Product", tone: "teal" },
      { label: "Free Demo", tone: "gold" },
    ],
  },
  {
    number: "06",
    title: "Eco Product Development",
    href: "/courses/eco-product-basics",
    tags: [
      { label: "Basics", tone: "teal" },
      { label: "Free Demo", tone: "gold" },
    ],
  },
];

type TagTone = "green" | "gold" | "teal";

const tagToneClasses: Record<TagTone, string> = {
  green: "border border-[#2f6b45]/15 bg-[#e8f2ec] text-[#2f6b45]",
  gold: "border border-[#c8860a]/15 bg-[#fbf0d8] text-[#c8860a]",
  teal: "border border-[#1a6b6b]/15 bg-[#e0f0f0] text-[#1a6b6b]",
};

export default function FeaturedCoursesSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured Courses"
          title="Explore practical courses designed for eco-product learning."
          description="Sustira offers beginner-friendly learning paths across environment, health, safety, product creation, and eco-business guidance. Start with a free demo before choosing your course."
          align="center"
        />

        <div className="mt-12 border-t border-black/10">
          {courses.map((course) => (
            <Link
              key={course.number}
              href={course.href}
              className="group grid grid-cols-1 gap-4 border-b border-black/10 py-6 transition-all duration-300 hover:bg-[#f7f1e7] md:grid-cols-[72px_1fr_360px] md:items-center md:px-0 md:hover:px-4"
            >
              <div className="text-sm font-semibold tracking-[0.08em] text-[#8b8b80]">
                {course.number}
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-[#1f1f1a] transition-colors duration-300 group-hover:text-[#2f6b45] md:text-2xl">
                {course.title}
              </h3>

              <div className="grid items-center gap-3 md:grid-cols-[120px_150px_24px] md:justify-end">
                {course.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`inline-flex h-8 items-center justify-center rounded-full px-4 text-xs font-medium tracking-[0.03em] ${
                      tagToneClasses[tag.tone as TagTone]
                    }`}
                  >
                    {tag.label}
                  </span>
                ))}

                <span className="text-xl text-[#8b8b80] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#2f6b45]">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}