import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BookDemoPage() {
  return (
    <main className="bg-[#fcfaf5]">
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
              Book a Demo
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1f1f1a] md:text-6xl">
              Start with a guided demo before choosing your full learning path.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5f5b53] md:text-lg">
              A demo helps you understand the course style, practical learning
              approach, and whether Sustira is the right fit for your goals.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-[#e7e0d4] bg-white p-6 md:p-8">
              <SectionHeading
                eyebrow="Booking form"
                title="Tell us a little about what you want to explore."
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
                    htmlFor="course"
                    className="mb-2 block text-sm font-medium text-[#1f1f1a]"
                  >
                    Select Course
                  </label>
                  <select
                    id="course"
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none focus:border-[#2f6b45]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose a course
                    </option>
                    <option value="solar-energy-initiative">
  Solar Energy Initiative
</option>

<option value="organic-seasonal-healthy-pickles">
  Organic Seasonal Healthy Pickles
</option>

<option value="sap-ehs-basic-course-guidance">
  SAP EHS Beginner Course Guidance
</option>

<option value="chemical-free-soap-making">
  Chemical-Free Soap Making
</option>

<option value="eco-product-basics">
  Eco Product Development
</option>

<option value="beginner-product-business-basics">
  Beginner Product Business Guidance
</option>
                  </select>
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
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[#1f1f1a]"
                  >
                    Anything you want us to know?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us your interest, questions, or preferred learning direction"
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none placeholder:text-[#8b857d] focus:border-[#2f6b45]"
                  />
                </div>

                <div className="pt-2">
                  <Button label="Continue to Confirmation" href="/thank-you" variant="primary" />
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] bg-[#f4efe6] p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f6b45]">
                  Demo details
                </p>

                <h2 className="mt-4 text-2xl font-semibold text-[#1f1f1a]">
                  A simple first step before full enrollment.
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-[#5f5b53] md:text-base">
                  <p>
                    A demo session is meant to help you understand the learning
                    style, session format, and whether the course feels right
                    for your goals.
                  </p>

                  <div>
                    <p className="font-medium text-[#1f1f1a]">Demo Fee</p>
                    <p>Varies by course</p>
                  </div>

                  <div>
                    <p className="font-medium text-[#1f1f1a]">Format</p>
                    <p>Guided introductory session</p>
                  </div>

                  <div>
                    <p className="font-medium text-[#1f1f1a]">Next Step</p>
                    <p>Move into the full course if it fits you</p>
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