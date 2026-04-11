import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="rounded-[32px] bg-[#2f6b45] px-6 py-10 text-white md:px-10 md:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
            Take the next step
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
            Start your learning journey with Sustira.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
            Explore a course, book a demo, or connect with us to know what fits
            you best.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button label="Book a Demo" href="/book-demo" variant="secondary" />
            <Button label="Contact Us" href="/contact" variant="secondary" />
            <Button label="WhatsApp Us" href="/contact" variant="secondary" />
          </div>
        </div>
      </Container>
    </section>
  );
}