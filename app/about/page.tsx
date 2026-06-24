import Button from "@/components/ui/Button";
import Image from "next/image";
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
              A founder-led platform rooted in sustainability, practical
              learning, and meaningful growth.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5f5b53] md:text-lg">
              Sustira is being built to make eco-product learning more
              approachable, practical, and supportive for learners who want to
              learn with clarity, create with confidence, and grow with purpose.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="space-y-5">
              <div className="rounded-[32px] bg-[#f4efe6] p-4">
                <div className="overflow-hidden rounded-[28px] bg-[#e6dfd2]">
                  <Image
                    src="/images/courses/founder.jpeg"
                    alt="N. V. N. Deepthi, founder of Sustira"
                    width={900}
                    height={1200}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="rounded-[28px] border border-[#e7e0d4] bg-white p-6">
                <h3 className="text-2xl font-semibold text-[#1f1f1a]">
                  N. V. N. Deepthi
                </h3>

                <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-[#2f6b45]">
                  Founder · Sustainability & EHS Professional
                </p>

                <div className="mt-5 space-y-3 text-sm leading-6 text-[#5f5b53]">
                  <p>
                    <strong className="text-[#1f1f1a]">16+ years</strong> in
                    Environmental Sustainability, EHS, SAP EHS/EHSM,
                    sustainability initiatives, and community development.
                  </p>

                  <p>
                    <strong className="text-[#1f1f1a]">
                      MSc Environmental Management
                    </strong>{" "}
                    — Coventry University, London, UK.
                  </p>

                  <p>
                    <strong className="text-[#1f1f1a]">
                      B.Tech Chemical Engineering
                    </strong>{" "}
                    — JNTU-affiliated institution.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    label="View LinkedIn"
                    href="https://www.linkedin.com/in/deepthi-n-v-n-28213b28"
                    variant="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  />

                  <Button
                    label="Book a Demo"
                    href="/book-demo"
                    variant="secondary"
                  />
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Founder story"
                title="Built from sustainability expertise, EHS experience, and a strong belief in practical learning."
                description="Sustira reflects a founder-led vision shaped by environmental sustainability, SAP EHS/EHSM consulting, circular economy thinking, training, and community impact initiatives."
              />

              <div className="mt-6 space-y-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                <p>
                  Sustira was created to make sustainability and eco-product
                  learning more practical, approachable, and useful for learners
                  who want to move from curiosity to confidence.
                </p>

                <p>
                  Deepthi&apos;s background combines environmental management,
                  industrial sustainability, EHS systems, SAP EHS/EHSM
                  consulting, waste management, and awareness-led training
                  programs.
                </p>

                <p>
                  Her work also extends into inclusive education and
                  community-focused initiatives, supporting programs that
                  encourage empathy, communication, and meaningful social
                  impact.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Environmental Sustainability & ESG",
                  "SAP EHS / EHSM Consulting",
                  "Waste Management & Circular Economy",
                  "Environmental Compliance & Risk Management",
                  "Sustainability Training & Awareness",
                  "Community Development & Inclusive Education",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-[#e7e0d4] bg-white p-4 text-sm font-medium text-[#1f1f1a]"
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
          <SectionHeading
            eyebrow="Leadership team"
            title="A multidisciplinary team bringing sustainability, technology, business, and marketing expertise together."
            description="Sustira combines environmental sustainability, enterprise technology, artificial intelligence, marketing, and renewable energy experience to create practical learning opportunities."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-[#e7e0d4] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#1f1f1a]">
                N. V. N. Deepthi
              </h3>

              <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-[#2f6b45]">
                Founder
              </p>

              <p className="mt-4 text-sm leading-7 text-[#5f5b53]">
                Environmental Sustainability and EHS professional with 16+
                years of experience in sustainability programs, SAP EHS/EHSM,
                environmental compliance, circular economy initiatives, and
                community development.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#e7e0d4] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#1f1f1a]">
                Neelapalem Ramanjaneyulu
              </h3>

              <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-[#2f6b45]">
                Co-Founder & Technology Advisor
              </p>

              <p className="mt-4 text-sm leading-7 text-[#5f5b53]">
                B.Tech in Computer Science and Master&apos;s in Artificial
                Intelligence with 20+ years of experience in SAP Business
                Planning and Consolidation, SAP BW, enterprise analytics, data
                platforms, and digital transformation.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#e7e0d4] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#1f1f1a]">
                Joseph Mangam
              </h3>

              <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-[#2f6b45]">
                Marketing Director
              </p>

              <p className="mt-4 text-sm leading-7 text-[#5f5b53]">
                B.A. English graduate with 9+ years of experience in marketing,
                sales, customer engagement, and renewable energy sectors,
                including solar energy business outreach and market development.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Qualifications & project work"
            title="A strong foundation in environmental management, engineering, and sustainability-led research."
            description="Deepthi’s academic and professional journey combines environmental sustainability, chemical engineering, EHS systems, circular economy thinking, and practical project work."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-[#e7e0d4] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#1f1f1a]">
                Academic qualifications
              </h3>

              <div className="mt-4 space-y-4 text-sm leading-7 text-[#5f5b53]">
                <p>
                  <strong className="text-[#1f1f1a]">
                    MSc Environmental Management
                  </strong>{" "}
                  — Coventry University, London, UK.
                </p>

                <p>
                  <strong className="text-[#1f1f1a]">
                    B.Tech Chemical Engineering
                  </strong>{" "}
                  — JNTU-affiliated institution.
                </p>

                <p>
                  Her academic foundation includes sustainability, resource
                  management, pollution control, chemical processes, industrial
                  operations, and environmental engineering.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e7e0d4] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#1f1f1a]">
                Professional certifications
              </h3>

              <div className="mt-4 space-y-4 text-sm leading-7 text-[#5f5b53]">
                <p>
                  <strong className="text-[#1f1f1a]">
                    Introduction to Sustainability
                  </strong>{" "}
                  — University of Illinois Urbana-Champaign.
                </p>

                <p>
                  <strong className="text-[#1f1f1a]">
                    Computational Fluid Dynamics Training
                  </strong>{" "}
                  — Indian Institute of Technology Kanpur.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e7e0d4] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#1f1f1a]">
                Carbon footprint reduction project
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#5f5b53]">
                As part of her environmental management studies, Deepthi worked
                on reducing carbon emissions in petrochemical refining
                operations, including emission hotspot analysis, sustainable
                process improvements, environmental performance monitoring, and
                EHS-aligned operational practices.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#e7e0d4] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#1f1f1a]">
                Waste tire recycling project
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#5f5b53]">
                Deepthi developed a pilot-scale solution for separating nylon
                fibers from waste rubber tires, supporting circular economy
                principles, resource recovery, recycling process optimization,
                and environmental impact reduction.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4efe6] py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Sustira started"
            title="To connect sustainability, learning, and real eco-product possibilities."
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
                Sustainability-led thinking
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5f5b53]">
                Encourage eco-conscious product exploration through
                environmental awareness, responsible choices, and long-term
                thinking.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#1f1f1a]">
                Guided growth
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5f5b53]">
                Support learners with a warmer path from curiosity to
                confidence, skill-building, and creation.
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
              {[
                "Beginners exploring product learning",
                "Homemakers and aspiring women entrepreneurs",
                "Learners interested in eco-friendly products",
                "People looking for guided, practical direction",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[#e7e0d4] bg-white p-5 text-sm text-[#1f1f1a]"
                >
                  {item}
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
              Start your learning journey with Sustira.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
              Explore a course, book a demo, or connect with us to know what
              fits you best.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button label="Book free Demo" href="/book-demo" variant="secondary" />
              <Button label="Contact Us" href="/contact" variant="secondary" />
              <Button
                label="Chat on WhatsApp"
                href="https://wa.me/918309965652?text=Hi%20Sustira%20Team%2C%20I%20want%20to%20know%20more%20about%20your%20courses."
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}