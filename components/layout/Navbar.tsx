import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight text-neutral-900"
          >
            Sustira
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-700 transition hover:text-neutral-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>

         <div className="hidden md:block">
            <Button href="/book-demo" label="Book a Demo" />
          </div>

          <div className="md:hidden">
            <Button href="/book-demo" label="Demo" />
          </div>

        </div>
      </Container>
    </header>
  );
}