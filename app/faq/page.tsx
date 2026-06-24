import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "Who can join the courses?",
    answer:
      "Sustira is designed for beginners, homemakers, aspiring women entrepreneurs, and anyone interested in eco-friendly product learning.",
  },
  {
    question: "Are demos paid?",
    answer:
      "No, demo sessions are intended to be free introductory sessions so learners can understand the approach before moving into a full course.",
  },
  {
    question: "What happens after the demo?",
    answer:
      "After the demo, learners can decide whether they want to continue into a full course or explore other suitable learning options.",
  },
  {
    question: "Are sessions live or recorded?",
    answer:
      "The format may vary by course or session type. Early offerings are expected to be guided and interactive, with clarity shared before enrollment.",
  },
  {
    question: "Do I need prior chemistry knowledge?",
    answer:
      "No, the early learning approach is intended to be beginner-friendly and practical, with guidance that makes the content easier to understand.",
  },
  {
    question: "Will materials be provided?",
    answer:
      "This may depend on the course and format. Material-related details can be shared during the course or demo communication process.",
  },
  {
    question: "Can this help me start a small business?",
    answer:
      "Sustira is intended to support practical learning and early product direction, which can help users move toward future eco-product or small business possibilities.",
  },
  {
    question: "How do I contact the team?",
    answer:
      "You can use the Contact page, book a demo, or connect through WhatsApp when that option is enabled.",
  },
];

export default function FaqPage() {
  return (
    <main className="bg-[#fcfaf5]">
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
              FAQ
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1f1f1a] md:text-6xl">
              Common questions about learning with Sustira.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5f5b53] md:text-lg">
              Here are some of the common questions users may have before
              booking a demo, joining a course, or exploring the platform.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Simple answers to help you move forward with confidence."
            description="The goal is to reduce hesitation and make it easier for new learners to understand what to expect."
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[28px] border border-[#e7e0d4] bg-white p-6"
              >
                <h2 className="text-xl font-semibold text-[#1f1f1a]">
                  {faq.question}
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#5f5b53] md:text-base">
                  {faq.answer}
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
                eyebrow="Still need help?"
                title="Talk to us if you are unsure where to begin."
                description="Some learners know exactly what they want. Others need a little guidance first. Both are completely okay."
              />
            </div>

            <div className="space-y-4 text-sm leading-7 text-[#5f5b53] md:text-base">
              <p>
                If you are confused about which course to explore, whether a
                demo is right for you, or how to start, reaching out is the
                best next step.
              </p>

              <p>
                Sustira is meant to feel supportive and approachable, especially
                for first-time learners.
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
              Ready to explore your next step?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
              Book a demo or contact us to find the learning path that fits you
              best.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button label="Book free Demo" href="/book-demo" variant="secondary" />
              <Button label="Contact Us" href="/contact" variant="secondary" />
              <Button label="Chat on WhatsApp"
                                  href="https://wa.me/918309965652?text=Hi%20Sustira%20Team%2C%20I%20want%20to%20know%20more%20about%20your%20courses."
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