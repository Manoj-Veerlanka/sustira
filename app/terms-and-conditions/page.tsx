import Container from "@/components/ui/Container";

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-[#fcfaf5]">
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
              Terms & Conditions
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1f1f1a] md:text-6xl">
              The basic terms for using the Sustira website and services.
            </h1>

            <p className="mt-6 text-base leading-7 text-[#5f5b53] md:text-lg">
              These Terms &amp; Conditions describe the general rules,
              responsibilities, and expectations related to the use of the
              Sustira website, enquiries, demo sessions, and related services.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="max-w-4xl space-y-10 rounded-[32px] border border-[#e7e0d4] bg-white p-6 md:p-10">
            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                1. Use of the website
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                By accessing or using the Sustira website, users agree to use
                the platform for lawful, respectful, and genuine enquiry or
                learning-related purposes only.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                2. Information provided by users
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                Users are expected to provide accurate and relevant information
                when submitting forms, enquiries, or demo requests. Sustira may
                rely on this information to communicate and provide suitable
                guidance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                3. Course and demo information
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                Course details, demo availability, content structure, and
                pricing may evolve over time. Sustira may update offerings,
                schedules, or descriptions as the platform grows.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                4. Payments and bookings
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                Where demo or course payments apply, users are expected to
                follow the booking and payment process shared by Sustira. Final
                payment, cancellation, or refund policies may be clarified at
                the time of booking or enrollment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                5. Intellectual property
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                Website content, branding, learning materials, and related
                content associated with Sustira should not be copied, reused, or
                distributed without permission unless clearly stated otherwise.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                6. Service changes
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                Sustira may modify, pause, or discontinue any part of the
                website, course offerings, demo structure, or service flow as
                required by business, operational, or quality-related needs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                7. Limitation of responsibility
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                While Sustira aims to provide accurate and helpful information,
                the platform does not guarantee uninterrupted access, complete
                absence of errors, or guaranteed outcomes from any course, demo,
                or guidance interaction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                8. Updates to these terms
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                These Terms &amp; Conditions may be updated from time to time as
                the website, services, pricing, or business model evolves.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                9. Contact
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                For questions related to these Terms &amp; Conditions, users may
                contact Sustira through the Contact page or the communication
                details listed on the website.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}