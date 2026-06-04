import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sustira | Learn. Create. Sustain.",
  description:
    "Practical sustainability and eco-product learning for people who want to learn, create, and grow with purpose.",
  openGraph: {
    title: "Sustira | Learn. Create. Sustain.",
    description:
      "A founder-led platform for practical sustainability learning, eco-product exploration, and guided growth.",
    url: "https://sustira.org",
    siteName: "Sustira",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fcfaf5] text-neutral-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}