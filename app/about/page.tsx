import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <main className="bg-[#fcfaf5]">
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
              About Sustira
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1f1f1a] md:text-6xl">
              A founder-led platform for practical eco-product learning and growth.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5f5b53] md:text-lg">
              Sustira is being built to make chemistry-based eco-product learning
              more approachable, supportive, and practical for people who want
              to learn, create, and grow with confidence.
            </p>
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
                eyebrow="Founder story"
                title="Built from a desire to make learning more practical and meaningful."
                description="Sustira is envisioned as a warm, guided platform where learners can move beyond abstract ideas and build confidence through eco-product-focused learning."
              />

              <div className="mt-6 space-y-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                <p>
                  The idea behind Sustira is to create a space where learning
                  feels useful, supportive, and connected to real outcomes.
                  Instead of making knowledge feel distant or overly technical,
                  the goal is to make it approachable and action-oriented.
                </p>

                <p>
                  Through practical courses, demo sessions, and product-focused
                  guidance, Sustira aims to support people who want to explore
                  eco-friendly product creation with clarity and encouragement.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4efe6] py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Sustira started"
            title="To connect learning with real eco-product possibilities."
            description="Sustira is not only about understanding concepts. It is about helping learners take meaningful steps toward product awareness, practical skill-building, and future opportunities."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#1f1f1a]">
                Practical learning
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5f5b53]">
                Make learning easier to understand through guided, hands-on,
                product-oriented experiences.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#1f1f1a]">
                Eco-product vision
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5f5b53]">
                Encourage sustainable thinking through eco-friendly product
                themes, materials, and future possibilities.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#1f1f1a]">
                Guided growth
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5f5b53]">
                Support learners with a warmer, more human path from curiosity
                to confidence and action.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Mission & vision"
                title="A platform that supports learning, creation, and future growth."
                description="Sustira aims to create a meaningful bridge between learning, eco-conscious product thinking, and guided entrepreneurial direction."
              />
            </div>

            <div className="space-y-4 text-sm leading-7 text-[#5f5b53] md:text-base">
              <p>
                The mission is to make eco-product learning more accessible,
                supportive, and useful for Indian learners who want practical
                knowledge and real direction.
              </p>

              <p>
                The long-term vision is to grow Sustira into a broader ecosystem
                that supports learning, materials understanding, product
                exploration, and future community-based opportunities.
              </p>
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
                title="Designed for learners who want a supportive and practical start."
                description="Sustira is especially relevant for people who want to learn by doing, explore eco-friendly product ideas, and move forward with confidence."
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[#e7e0d4] bg-white p-5 text-sm text-[#1f1f1a]">
                Beginners exploring product learning
              </div>

              <div className="rounded-[24px] border border-[#e7e0d4] bg-white p-5 text-sm text-[#1f1f1a]">
                Homemakers and aspiring women entrepreneurs
              </div>

              <div className="rounded-[24px] border border-[#e7e0d4] bg-white p-5 text-sm text-[#1f1f1a]">
                Learners interested in eco-friendly products
              </div>

              <div className="rounded-[24px] border border-[#e7e0d4] bg-white p-5 text-sm text-[#1f1f1a]">
                People looking for guided, practical direction
              </div>
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
              Start your learning journey with Sustira.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
              Explore a course, book a demo, or connect with us to know what fits
              you best.
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