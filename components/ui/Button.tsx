import Link from "next/link";

type ButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  label,
  href,
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition";

  const variantClasses =
    variant === "primary"
      ? "bg-[#2f6b45] text-white hover:opacity-95"
      : "border border-[#cfc5b5] bg-[#fcfaf5] text-[#1f1f1a] hover:bg-[#f4efe6]";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {label}
    </Link>
  );
}