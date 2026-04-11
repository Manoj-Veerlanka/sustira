import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    title: "Natural soap ingredients",
    description:
      "Explore the kinds of ingredients and material choices used in chemistry-based eco-product learning.",
  },
  {
    title: "Pickle-making materials",
    description:
      "Understand practical inputs, preparation context, and product thinking around traditional eco-friendly making.",
  },
  {
    title: "Eco-product components",
    description:
      "See how product ideas connect with material understanding, process learning, and launch readiness.",
  },
];

export default function ProductsPreviewSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <SectionHeading
            eyebrow="Products & materials"
            title="A preview of the eco-product world behind the learning."
            description="Sustira is not only about learning concepts. It also helps users connect course knowledge with ingredients, materials, and product-focused understanding."
          />

          <div className="md:justify-self-end">
            <Button label="Explore Courses" href="/courses" variant="secondary" />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[28px] border border-[#e7e0d4] bg-white"
            >
              <div className="aspect-[4/3] bg-[#f4efe6]" />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1f1f1a]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5f5b53]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}