type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#2f6b45]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight text-[#1f1f1a] md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-4 text-base leading-7 text-[#5f5b53] ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}