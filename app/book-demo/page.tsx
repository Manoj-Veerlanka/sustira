"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BookDemoPage() {
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      course: String(formData.get("course") || "").trim(),
      city: String(formData.get("city") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    const validationErrors: Record<string, string> = {};

    if (payload.name.length < 2) {
      validationErrors.name = "Name must be at least 2 characters";
    }

    if (!/^[A-Za-z\s]+$/.test(payload.name)) {
      validationErrors.name = "Name should contain only letters";
    }

    if (!/^\+?[0-9]{10,15}$/.test(payload.phone)) {
      validationErrors.phone = "Phone must be 10 to 15 digits";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      validationErrors.email = "Please enter a valid email";
    }

    if (!payload.course) {
      validationErrors.course = "Please select a course";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const response = await fetch("/api/book-demo", {
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

              <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-[#1f1f1a]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={40}
                    placeholder="Enter your name"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /[^A-Za-z\s]/g,
                        ""
                      );
                    }}
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none placeholder:text-[#8b857d] focus:border-[#2f6b45]"
                  />

                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
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
                      e.currentTarget.value = e.currentTarget.value.replace(/(?!^\+)[^0-9]/g,"");
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
                    htmlFor="course"
                    className="mb-2 block text-sm font-medium text-[#1f1f1a]"
                  >
                    Select Course
                  </label>

                  <select
                    id="course"
                    name="course"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none focus:border-[#2f6b45]"
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

                  {errors.course && (
                    <p className="mt-1 text-sm text-red-600">{errors.course}</p>
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
                    maxLength={30}
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
                    name="message"
                    rows={5}
                    maxLength={1000}
                    placeholder="Tell us your interest, questions, or preferred learning direction"
                    className="w-full rounded-2xl border border-[#ddd4c7] bg-[#fcfaf5] px-4 py-3 text-sm text-[#1f1f1a] outline-none placeholder:text-[#8b857d] focus:border-[#2f6b45]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="rounded-full bg-[#2f6b45] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#28593b]"
                  >
                    Continue to Confirmation
                  </button>
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