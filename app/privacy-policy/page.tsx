import Container from "@/components/ui/Container";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#fcfaf5]">
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
              Privacy Policy
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1f1f1a] md:text-6xl">
              How Sustira collects and uses information.
            </h1>

            <p className="mt-6 text-base leading-7 text-[#5f5b53] md:text-lg">
              This Privacy Policy explains how Sustira may collect, use, and
              protect information shared by users through the website.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="max-w-4xl space-y-10 rounded-[32px] border border-[#e7e0d4] bg-white p-6 md:p-10">
            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                1. Information we may collect
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                Sustira may collect information that users share through contact
                forms, demo booking forms, or other enquiries. This may include
                name, phone number, email address, city, course interest, and
                any message submitted through the site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                2. How information may be used
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                Information may be used to respond to enquiries, provide course
                or demo details, improve services, communicate relevant updates,
                and support the user’s learning journey with Sustira.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                3. Information sharing
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                Sustira does not intend to sell personal information to third
                parties. Information may only be used for business, operational,
                communication, or service-related purposes connected with the
                platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                4. Data security
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                Reasonable efforts may be taken to store and handle information
                securely. However, no website or online system can guarantee
                absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                5. Cookies and analytics
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                Sustira may use basic website analytics, cookies, or similar
                technologies in the future to understand site usage and improve
                the user experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                6. User choice
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                Users may choose whether or not to submit personal information
                through the website. If a user would like to request correction
                or removal of submitted details, they may contact Sustira
                directly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                7. Changes to this policy
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                This Privacy Policy may be updated from time to time as the
                platform grows, features change, or business needs evolve.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1f1f1a]">
                8. Contact
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                For questions related to this Privacy Policy, users may contact
                Sustira through the Contact page or the communication details
                shared on the website.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}