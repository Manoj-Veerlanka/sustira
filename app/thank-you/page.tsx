import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function ThankYouPage() {
  return (
    <main className="bg-[#fcfaf5]">
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl rounded-[32px] border border-[#e7e0d4] bg-white px-6 py-10 text-center md:px-10 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
              Thank you
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#1f1f1a] md:text-5xl">
              We’ve received your details.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#5f5b53] md:text-lg">
              Thank you for reaching out to Sustira. We will review your enquiry
              or demo request and get back to you with the next steps.
            </p>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
              <div className="rounded-[24px] bg-[#f4efe6] p-5">
                <p className="text-sm font-semibold text-[#1f1f1a]">
                  1. We review
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f5b53]">
                  We check your submitted details and understand your interest.
                </p>
              </div>

              <div className="rounded-[24px] bg-[#f4efe6] p-5">
                <p className="text-sm font-semibold text-[#1f1f1a]">
                  2. We contact you
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f5b53]">
                  Our team reaches out with guidance, clarity, or demo details.
                </p>
              </div>

              <div className="rounded-[24px] bg-[#f4efe6] p-5">
                <p className="text-sm font-semibold text-[#1f1f1a]">
                  3. You move ahead
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f5b53]">
                  You can then decide the best next step for your learning path.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button label="Back to Home" href="/" variant="secondary" />
              <Button label="Explore Courses" href="/courses" variant="primary" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}