import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  return (
    <main className="bg-[#fcfaf5]">
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
              Contact
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1f1f1a] md:text-6xl">
              Let’s help you find the right starting point.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5f5b53] md:text-lg">
              Whether you want to explore a course, understand demo options, or
              ask about the right fit, Sustira is here to help.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-[#e7e0d4] bg-white p-6 md:p-8">
              <SectionHeading
                eyebrow="Send a message"
                title="Tell us what you are looking for."
              />

              <form className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-[#1f1f1a]"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none placeholder:text-[#8b857d] focus:border-[#2f6b45]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-[#1f1f1a]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none placeholder:text-[#8b857d] focus:border-[#2f6b45]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[#1f1f1a]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none placeholder:text-[#8b857d] focus:border-[#2f6b45]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-medium text-[#1f1f1a]"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Enter your city"
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none placeholder:text-[#8b857d] focus:border-[#2f6b45]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-2 block text-sm font-medium text-[#1f1f1a]"
                  >
                    Interest Area
                  </label>
                  <input
                    id="interest"
                    type="text"
                    placeholder="Course, demo, materials, guidance..."
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none placeholder:text-[#8b857d] focus:border-[#2f6b45]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[#1f1f1a]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us what you would like to know"
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none placeholder:text-[#8b857d] focus:border-[#2f6b45]"
                  />
                </div>

                <div className="pt-2">
                  <Button label="Submit Enquiry" href="/thank-you" variant="primary" />
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] bg-[#f4efe6] p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f6b45]">
                  Contact details
                </p>

                <div className="mt-5 space-y-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                  <p>
                    Reach out to learn more about courses, demo sessions, and
                    the best path to begin with Sustira.
                  </p>

                  <div>
                    <p className="font-medium text-[#1f1f1a]">Phone</p>
                    <p>+91 9901050050</p>
                  </div>

                  <div>
                    <p className="font-medium text-[#1f1f1a]">Email</p>
                    <p>sustira.org@gmail.com</p>
                  </div>

                  <div>
                    <p className="font-medium text-[#1f1f1a]">Location</p>
                    <p>Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}