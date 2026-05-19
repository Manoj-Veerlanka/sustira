import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";

const courseData = {
  "solar-energy-initiative": {
    title: "Solar Energy Initiative",
    overview:
      "A practical introductory course designed to help learners understand solar energy, its importance as an alternate energy source, and how renewable energy can support sustainable living and business opportunities.",
    image: "/images/courses/contentCourses/content-solar.png",
    demoFee: "₹499",
    brochure: "/brochures/Sustira_Solar_Energy_Brochure.docx",
    quickPoints: [
      "Demo session available before enrollment",
      "Clean energy learning",
      "Beginner friendly",
    ],
    who: [
      "Entrepreneurs exploring green business ideas",
      "Engineers interested in renewable energy",
      "Learners curious about sustainable energy solutions",
      "Individuals wanting alternate energy understanding",
      "People interested in practical environmental impact",
    ],
    learn: [
      "Basics of solar energy and how it works",
      "Role of renewable energy in today's sector",
      "Practical applications of solar systems",
      "How solar power supports sustainable living",
      "How individuals and small businesses can adopt clean energy",
    ],
    outcomes: [
      "Awareness of Solar Energy Opportunities",
      "Clearer Understanding of Alternate Energy",
      "Confidence to Explore Further",
      "Foundation for Future Green-Business Thinking",
    ],
    outcomeDescriptions: [
      "Identify the potential of solar energy in homes, businesses, and communities.",
      "Grasp key concepts of renewable energy and its real-world relevance.",
      "Build a strong base to explore solar technologies and energy solutions.",
      "Develop a mindset to create sustainable impact through clean energy initiatives.",
    ],
    outcomeIcons: ["💡", "📘", "🎯", "🌿"],
    demoInfo:
      "Start with a paid demo session to understand the teaching style, course direction, and practical value of the course.",
    trainerName: "N V N Deepthi",
    trainerRole: "Energy Educator & Sustainability Mentor",
    trainerPhone: "9901050050",
    trainerImage: "/images/courses/founder.png",
    ctaHeading: "Ready to explore clean energy learning?",
    ctaSubtext:
      "Book your demo session today and take the first step towards a more sustainable future.",
  },

  "organic-seasonal-healthy-pickles": {
    title: "Organic Seasonal Healthy Pickles",
    overview:
      "A guided course focused on making traditional, chemical-free seasonal pickles using natural ingredients, while connecting food preparation, nutrition, preservation, and product thinking.",
    image: "/images/courses/contentCourses/pickles.png",
    demoFee: "Coming Soon",
    brochure: "/brochures/SUSTIRA_Seasonal_Healthy_Pickles_Brochure.docx",
    quickPoints: [
      "Demo session available before enrollment",
      "Seasonal product learning",
      "Beginner friendly",
    ],
    who: [
      "Homemakers interested in healthy product making",
      "Entrepreneurs exploring food-based product ideas",
      "Learners interested in traditional Indian food practices",
      "People curious about natural and chemical-free products",
      "Aspiring small-scale food creators",
    ],
    learn: [
      "How to make healthy seasonal organic products",
      "Natural ingredient selection",
      "Preservation basics",
      "Preparation methods for quality results",
      "How traditional food knowledge connects to product creation",
    ],
    outcomes: [
      "Confidence to Begin Pickle-Making Learning",
      "Better Ingredient and Preparation Awareness",
      "Practical Product-Making Understanding",
      "Connection Between Heritage Food and Entrepreneurship",
    ],
    outcomeDescriptions: [
      "Understand how to begin learning traditional pickle-making with confidence.",
      "Build awareness of ingredients, preparation, and seasonal food choices.",
      "Explore practical food-product thinking for small-scale creation.",
      "Connect Indian food heritage with simple entrepreneurship possibilities.",
    ],
    outcomeIcons: ["🌿", "🥭", "✅", "🏡"],
    demoInfo:
      "Start with a paid demo session to understand the teaching style, course direction, and hands-on learning approach.",
    trainerName: "N V N Deepthi",
    trainerRole: "Sustainability Mentor",
    trainerPhone: "9901050050",
    trainerImage: "/images/courses/founder.png",
    ctaHeading: "Start with a demo before you decide.",
    ctaSubtext:
      "Book your demo session and understand whether this course is the right fit for your learning journey.",
  },

  "sap-ehs-basic-course-guidance": {
    title: "SAP EHS Basic Foundation Course",
    overview:
      "A structured introductory course that provides a practical overview of Environment, Health, and Safety within SAP. It helps learners understand compliance, sustainability, incident tracking, and workplace safety concepts in a real industry context.",
    image: "/images/courses/contentCourses/sap.png",
    demoFee: "₹299",
    brochure: "/brochures/SUSTIRA_SAP_EHS_Brochure.docx",
    quickPoints: [
      "Weekend demo from 8–9 PM",
      "SAP EHS foundation",
      "Beginner friendly",
    ],
    who: [
      "Chemical engineers",
      "IT professionals",
      "Compliance officers",
      "EHS practitioners",
      "Learners seeking SAP EHS foundational understanding",
    ],
    learn: [
      "Overview of SAP EHS in SAP S/4HANA",
      "Product safety and stewardship concepts",
      "Safety Data Sheet and hazardous substance management",
      "Specification management and configuration basics",
      "Connection between safety, compliance, and sustainability systems",
    ],
    outcomes: [
      "Better Awareness of Compliance Needs",
      "Understanding of Sustainability and Safety Goals",
      "Exposure to Proactive Safety Culture",
      "Insight Into EHS Process Efficiency Using SAP",
    ],
    outcomeDescriptions: [
      "Understand how EHS connects to regulatory and business requirements.",
      "Learn how sustainability and workplace safety connect in enterprise systems.",
      "Explore the importance of preventing incidents and improving safety awareness.",
      "Understand how SAP can support structured EHS process management.",
    ],
    outcomeIcons: ["🛡️", "🌿", "✅", "⚙️"],
    demoInfo: "2 days demo, 1 hour each, on weekends from 8 to 9 PM.",
    trainerName: "N V N Deepthi",
    trainerRole: "EHS Specialist",
    trainerPhone: "9901050050",
    trainerImage: "/images/courses/founder.png",
    ctaHeading: "Start with a demo before you decide.",
    ctaSubtext:
      "Book your demo session and understand whether this course is the right fit for your learning journey.",
  },

  "chemical-free-soap-making": {
    title: "Chemical-Free Soap Making",
    overview:
      "A guided introductory course designed to help learners understand the practical side of soap-making through structured explanation, ingredient awareness, and supportive learning.",
    image: "/images/courses/contentCourses/soap.png",
    demoFee: "Coming Soon",
    brochure: "/brochures/SUSTIRA_30_Day_Soap_Making_Brochure.docx",
    quickPoints: [
      "Demo session available before enrollment",
      "Ingredient awareness",
      "Beginner friendly",
    ],
    who: [
      "Beginners",
      "Homemakers",
      "Product enthusiasts",
      "Learners interested in eco-friendly alternatives",
      "Aspiring small-scale creators",
    ],
    learn: [
      "Product basics",
      "Ingredient awareness",
      "Process understanding",
      "Practical considerations in soap-making",
      "Confidence to continue learning further",
    ],
    outcomes: [
      "Understanding of Soap-Making Fundamentals",
      "Confidence to Begin Small-Scale Practice",
      "Awareness of Ingredients and Process Flow",
      "Stronger Product-Thinking Foundation",
    ],
    outcomeDescriptions: [
      "Build a simple foundation around soap-making concepts.",
      "Gain confidence to explore practical learning further.",
      "Understand the role of ingredients and process choices.",
      "Develop early product-thinking awareness for future learning.",
    ],
    outcomeIcons: ["🧼", "✅", "🌿", "📘"],
    demoInfo:
      "Start with a paid demo session to understand the teaching style, course direction, and learning experience.",
    trainerName: "N V N Deepthi",
    trainerRole: "Sustainability Mentor",
    trainerPhone: "9901050050",
    trainerImage: "/images/courses/founder.png",
    ctaHeading: "Start with a demo before you decide.",
    ctaSubtext:
      "Book your demo session and understand whether this course is the right fit for your learning journey.",
  },

  "eco-product-basics": {
    title: "Eco Product Basics",
    overview:
      "A practical beginner-level course that introduces eco-friendly product creation, sustainable material thinking, and the foundations of product awareness in a simple and approachable way.",
    image: "/images/courses/contentCourses/beginner.png",
    demoFee: "Coming Soon",
    brochure: "/brochures/sustira_eco_brochure.pdf",
    quickPoints: [
      "Beginner-friendly direction",
      "Sustainable material thinking",
      "Beginner friendly",
    ],
    who: [
      "Beginners",
      "Eco-conscious learners",
      "Aspiring product creators",
      "Learners interested in sustainable alternatives",
      "People exploring eco-friendly creation for the first time",
    ],
    learn: [
      "Foundational eco-product concepts",
      "Basic sustainable material thinking",
      "Product awareness and quality thinking",
      "Practical approach to eco-conscious creation",
      "How product ideas connect to real-world learning",
    ],
    outcomes: [
      "Understanding of Eco-Product Fundamentals",
      "Confidence to Explore Deeper Learning",
      "Sustainability-Oriented Thinking",
      "Foundation for Future Product-Focused Courses",
    ],
    outcomeDescriptions: [
      "Understand the basics of eco-conscious product creation.",
      "Gain confidence to continue into deeper product learning.",
      "Build awareness of sustainable choices and material thinking.",
      "Prepare for future practical product-focused learning paths.",
    ],
    outcomeIcons: ["🌿", "✅", "♻️", "📘"],
    demoInfo:
      "Start with a paid demo session to understand the learning style, course direction, and whether this path fits your interests.",
    trainerName: "N V N Deepthi",
    trainerRole: "Sustainability Mentor",
    trainerPhone: "9901050050",
    trainerImage: "/images/courses/founder.png",
    ctaHeading: "Start with a demo before you decide.",
    ctaSubtext:
      "Book your demo session and understand whether this course is the right fit for your learning journey.",
  },

  "beginner-product-business-basics": {
    title: "Beginner Product Business Basics",
    overview:
      "A practical introductory course designed to help learners think about how a skill or product idea can connect to a small-scale business opportunity in a simple and realistic way.",
    image: "/images/courses/contentCourses/ecoproducts.png",
    demoFee: "Coming Soon",
    brochure: "/brochures/SUSTIRA_COURSES_AND_ECO_PRODUCTS.pdf",
    quickPoints: [
      "Business basics",
      "Product opportunity thinking",
      "Beginner friendly",
    ],
    who: [
      "Aspiring entrepreneurs",
      "Homemakers exploring product-based work",
      "Beginners with skill-based interests",
      "Learners curious about small-scale product business ideas",
      "People wanting guided first-step clarity",
    ],
    learn: [
      "Product-based opportunity thinking",
      "How learning connects to making and selling",
      "Beginner-level business awareness",
      "Importance of product quality and direction",
      "How to move from interest to action",
    ],
    outcomes: [
      "Understanding of Beginner Product-Business Thinking",
      "Confidence to Evaluate Next Steps",
      "Awareness of Skill-to-Product Opportunities",
      "Foundation for Future Eco-Business Learning",
    ],
    outcomeDescriptions: [
      "Understand how product ideas can connect to small business direction.",
      "Gain confidence to think through possible next steps.",
      "Explore how skills may become product-based opportunities.",
      "Build a simple foundation for future eco-business learning.",
    ],
    outcomeIcons: ["💼", "✅", "🌱", "📘"],
    demoInfo:
      "Start with a paid demo session to understand the course direction and whether this path is suitable for your goals.",
    trainerName: "N V N Deepthi",
    trainerRole: "Sustainability Mentor",
    trainerPhone: "9901050050",
    trainerImage: "/images/courses/founder.png",
    ctaHeading: "Start with a demo before you decide.",
    ctaSubtext:
      "Book your demo session and understand whether this course is the right fit for your learning journey.",
  },
} as const;

type CourseSlug = keyof typeof courseData;

type CourseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const quickPointIcons: Record<string, string> = {
  "Demo session available before enrollment": "📅",
  "Clean energy learning": "🌱",
  "Beginner friendly": "👤",
  "Weekend demo from 8–9 PM": "📅",
  "SAP EHS foundation": "🌱",
  "Seasonal product learning": "🥭",
  "Ingredient awareness": "🌱",
  "Beginner-friendly direction": "🌱",
  "Sustainable material thinking": "♻️",
  "Business basics": "💼",
  "Product opportunity thinking": "🌱",
};

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { slug } = await params;
  const course = courseData[slug as CourseSlug];

  if (!course) {
    notFound();
  }

  return (
    <main className="bg-[#fcfaf5]">
      {/* Hero */}
      <section className="py-10">
        <Container>
          <div className="relative min-h-[520px] overflow-hidden rounded-[28px] border border-[#e7e0d4] bg-[#f4efe6]">
            <Image
              src={course.image}
              alt={course.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

           

            <div className="relative z-10 flex min-h-[520px] max-w-4xl flex-col justify-center px-6 py-10 md:px-12 md:py-14">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl" 
               style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8)' }}>
                {course.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-white md:text-xl"
                 style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.95), 0 0 15px rgba(0,0,0,0.9)' }}>
                {course.overview}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Points */}
      <section className="pb-10">
        <Container>
          <div className="grid gap-4 rounded-[28px] border border-[#e7e0d4] bg-white p-4 sm:grid-cols-2 xl:grid-cols-3">
            <QuickPointCard icon="₹" text={`Demo Fee ${course.demoFee}`} />

            {course.quickPoints.map((point) => (
              <QuickPointCard
                key={point}
                icon={quickPointIcons[point] ?? "✦"}
                text={point}
              />
            ))}

             <Link
        href={course.brochure}
        download
        target="_blank"
        className="flex min-h-[92px] items-center rounded-[22px] border border-[#2f6b45]/25 bg-[#fcfaf5] px-5 py-4 text-sm font-semibold leading-6 text-[#2f6b45] shadow-sm ring-1 ring-black/5 transition hover:bg-[#e8f2ec]"
      >
        <span className="mr-3 text-lg">📄</span>
        <span>Download Brochure</span>
      </Link>

            <Link
              href="/book-demo"
              className="flex min-h-[92px] items-center justify-center rounded-[22px] bg-[#2f6b45] px-6 py-5 text-base font-semibold text-white transition hover:bg-[#285a3a]"
            >
              Book a Demo →
            </Link>
          </div>
        </Container>
      </section>

      {/* Who + Learn */}
      <section className="py-10">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <DetailListCard
              icon="👥"
              title="Who This Course Is For"
              items={course.who}
            />

            <DetailListCard
              icon="🎓"
              title="What You Will Learn"
              items={course.learn}
            />
          </div>
        </Container>
      </section>

      {/* Key Outcomes */}
      <section className="py-10">
        <Container>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
              Key Outcomes
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1f1f1a]">
              What you take away
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {course.outcomes.map((outcome, index) => (
              <OutcomeCard
                key={outcome}
                icon={course.outcomeIcons[index] ?? "🌿"}
                title={outcome}
                description={course.outcomeDescriptions[index] ?? ""}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing / What to Expect */}
<section className="py-10">
  <Container>
    <div className="grid gap-6 md:grid-cols-3">
      <PricingCard
        label="Demo Session"
        price={course.demoFee}
        description="A simple starting point to understand the course style, teaching approach, and learning value before moving further."
        points={[
          "Introductory guided session",
          "Understand the course flow",
          "Clarify whether the path fits you",
        ]}
      />

      <PricingCard
        label="Full Course"
        price="Custom / Varies"
        description="Full course pricing may differ based on the learning track, materials, format, and depth of guidance involved."
        points={[
          "Course-specific learning journey",
          "Practical product understanding",
          "Guided support and outcomes",
        ]}
      />

      <PricingCard
        label="Consultation / Guidance"
        price="On Request"
        description="For users who want broader clarity around eco-product direction, learning choices, or early business guidance."
        points={[
          "Personalized discussion",
          "Product direction support",
          "Suitable next-step guidance",
        ]}
      />
    </div>

    <div className="mt-16 grid gap-10 rounded-[32px] bg-[#f4efe6] p-8 md:grid-cols-2 md:p-12">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
          Included
        </p>

        <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight text-[#1f1f1a] md:text-4xl">
          What users should expect at this stage.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-[#5f5b53]">
          Sustira is launching with a practical and simple model, so pricing
          stays flexible where needed and clear where possible.
        </p>
      </div>

      <div className="space-y-6 text-base leading-7 text-[#5f5b53]">
        <p>
          Demo pricing is intended to help users explore the learning style
          before committing to deeper course participation.
        </p>

        <p>
          Full course pricing may vary depending on the topic, scope, materials,
          and format. Guidance-based support may also be offered depending on
          the learner&apos;s needs.
        </p>

        <p>
          As Sustira grows, pricing structures may become more detailed, but the
          launch approach is intentionally simple.
        </p>
      </div>
    </div>
  </Container>
</section>

      {/* Demo + Trainer */}
      <section className="py-10">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard
              icon="📅"
              title="Demo Information"
              text={course.demoInfo}
            />

            <TrainerCard
              image={course.trainerImage}
              name={course.trainerName}
              role={course.trainerRole}
              phone={course.trainerPhone}
            />
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
<section className="py-16 md:py-24">
        <Container>
          <div className="rounded-[32px] bg-[#2f6b45] px-6 py-10 text-white md:px-10 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
              Get started
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
              Start with a demo before you decide.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
              Explore the course details, understand the topic, and book a demo
              to find the right path for you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/book-demo" label="Book a Demo" variant="secondary" />
              <Button href="/contact" label="Contact Us" variant="secondary" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function PricingCard({
  label,
  price,
  description,
  points,
}: {
  label: string;
  price: string;
  description: string;
  points: string[];
}) {
  return (
    <div className="flex h-full flex-col rounded-[28px] border border-[#e7e0d4] bg-white p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6b45]">
        {label}
      </p>

      <h3 className="mt-5 text-3xl font-semibold text-[#1f1f1a]">
        {price}
      </h3>

      <p className="mt-6 text-sm leading-7 text-[#5f5b53]">
        {description}
      </p>

      <ul className="mt-8 space-y-4 text-sm leading-6 text-[#1f1f1a]">
        {points.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}

function QuickPointCard({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex min-h-[92px] items-center rounded-[22px] bg-[#fcfaf5] px-5 py-4 text-sm font-semibold leading-6 text-[#1f1f1a] shadow-sm ring-1 ring-black/5">
      <span className="mr-3 text-lg text-[#2f6b45]">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function DetailListCard({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="flex h-full flex-col rounded-[28px] border border-[#e7e0d4] bg-white p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f2ec] text-xl">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-[#1f1f1a] md:text-2xl">
          {title}
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-[#e7e0d4] bg-[#fcfaf5] px-4 py-3 text-sm leading-6 text-[#5f5b53]"
          >
            <span className="mr-2 font-semibold text-[#2f6b45]">✓</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function OutcomeCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-[220px] flex-col rounded-[24px] border border-[#e7e0d4] bg-white p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f2ec] text-xl">
        {icon}
      </div>

      <h3 className="text-base font-semibold leading-6 text-[#1f1f1a]">
        {title}
      </h3>

      {description && (
        <p className="mt-3 text-sm leading-6 text-[#5f5b53]">{description}</p>
      )}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="min-h-[230px] rounded-[28px] border border-[#e7e0d4] bg-white p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f2ec] text-xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#1f1f1a]">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-[#5f5b53]">{text}</p>
    </div>
  );
}

function TrainerCard({
  image,
  name,
  role,
  phone,
}: {
  image: string;
  name: string;
  role: string;
  phone: string;
}) {
  return (
    <div className="min-h-[230px] rounded-[28px] border border-[#e7e0d4] bg-white p-6">
      <div className="flex h-full items-center gap-6">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[#e7e0d4] bg-[#e8f2ec]">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#1f1f1a]">{name}</h3>

          <p className="mt-1 text-sm text-[#5f5b53]">{role}</p>

          <p className="mt-4 text-sm font-semibold text-[#1f1f1a]">
            Trainer / Guidance
          </p>

          <p className="mt-3 flex items-center gap-2 text-sm font-medium text-[#2f6b45]">
            <span>📞</span> {phone}
          </p>
        </div>
      </div>
    </div>
  );
}