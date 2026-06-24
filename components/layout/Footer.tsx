import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" },
];

const secondaryLinks = [
  { label: "About Sustira", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#f8f6f1]">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-16 items-start md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start lg:-mt-1">
  <Link href="/" className="inline-flex items-center">
    <Image
      src="/images/footer-logo.png"
      alt="Sustira"
      width={170}
      height={60}
      className="h-auto w-[300px] md:w-[300px]"
    />
  </Link>
</div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-900">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition hover:text-neutral-950"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-900">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {secondaryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition hover:text-neutral-950"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-900">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              <li>
                <a href="tel:+918309965652" className="transition hover:text-neutral-950">
                  +91 8309965652
                </a>
              </li>
              <li>
                <a
                  href="mailto:sustira.org@gmail.com"
                  className="transition hover:text-neutral-950"
                >
                 sustira.org@gmail.com
                </a>
              </li>
              <li>Hyderabad, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/5 py-6">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Sustira. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}