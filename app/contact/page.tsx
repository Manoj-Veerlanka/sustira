"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      city: String(formData.get("city") || "").trim(),
      interest: String(formData.get("interest") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    const validationErrors: Record<string, string> = {};

    if (payload.fullName.length < 2) {
      validationErrors.fullName = "Name must be at least 2 characters";
    }

    if (!/^[A-Za-z\s]+$/.test(payload.fullName)) {
      validationErrors.fullName = "Name should contain only letters";
    }

    if (!/^\+?[0-9]{10,15}$/.test(payload.phone)) {
      validationErrors.phone = "Phone must be 10 digits";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      validationErrors.email = "Please enter a valid email";
    }

    if (payload.message.length < 5) {
      validationErrors.message = "Message must be at least 5 characters";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const response = await fetch("/api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      alert("Something went wrong. Please try again.");
      return;
    }

    form.reset();
    router.push("/thank-you");
  }

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

              <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-[#1f1f1a]"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    maxLength={40}
                    placeholder="Enter your full name"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /[^A-Za-z\s]/g,
                        ""
                      );
                    }}
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none placeholder:text-[#8b857d] focus:border-[#2f6b45]"
                  />

                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.fullName}
                    </p>
                  )}
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
                    name="phone"
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="Enter your 10 digit phone number"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /(?!^\+)[^0-9]/g,
                        ""
                      );
                    }}
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none placeholder:text-[#8b857d] focus:border-[#2f6b45]"
                  />

                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
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
                    name="email"
                    type="email"
                    required
                    maxLength={100}
                    placeholder="Enter your email address"
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none placeholder:text-[#8b857d] focus:border-[#2f6b45]"
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
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
                    name="city"
                    type="text"
                    maxLength={100}
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
                    name="interest"
                    type="text"
                    maxLength={200}
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
                    name="message"
                    rows={5}
                    required
                    maxLength={1000}
                    placeholder="Tell us what you would like to know"
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none placeholder:text-[#8b857d] focus:border-[#2f6b45]"
                  />

                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="rounded-full bg-[#2f6b45] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#28583a]"
                  >
                    Submit Enquiry
                  </button>
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
                    <p>support@sustira.org</p>
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