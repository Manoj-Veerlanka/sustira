import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    number: "01",
    title: "Chemical-free Soap Making",
    href: "/courses",
    tags: [
      { label: "Hands-on", tone: "green" },
      { label: "Demo ₹299", tone: "gold" },
    ],
  },
  {
    number: "02",
    title: "Organic Pickle Making",
    href: "/courses",
    tags: [
      { label: "Hands-on", tone: "green" },
      { label: "Beginner", tone: "teal" },
    ],
  },
  {
    number: "03",
    title: "Eco-Product Development",
    href: "/services",
    tags: [
      { label: "Business", tone: "teal" },
      { label: "Mentored", tone: "gold" },
    ],
  },
  {
    number: "04",
    title: "Eco-Business Guidance",
    href: "/services",
    tags: [
      { label: "Launch", tone: "green" },
      { label: "Community", tone: "gold" },
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
          eyebrow="What We Offer"
          title="A warm, practical path into eco-product learning."
          description="Sustira supports learners through courses, demo sessions, product guidance, and eco-business direction in a simple and supportive way."
          align="center"
        />

        <div className="mt-12 border-t border-black/10">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group grid grid-cols-1 gap-4 border-b border-black/10 py-6 transition-all duration-300 hover:bg-[#f7f1e7] hover:px-4 md:grid-cols-[72px_1fr_auto] md:items-center"
            >
              <div className="text-sm font-semibold tracking-[0.08em] text-[#8b8b80]">
                {service.number}
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-[#1f1f1a] transition-colors duration-300 group-hover:text-[#2f6b45] md:text-2xl">
                {service.title}
              </h3>

              <div className="flex items-center justify-between gap-4 md:justify-end">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`rounded-full px-3 py-1 text-xs font-medium tracking-[0.03em] ${tagToneClasses[tag.tone as TagTone]}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

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