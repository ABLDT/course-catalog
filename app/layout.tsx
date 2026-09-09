import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Advanced Web Technologies Course Catalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <nav className="flex gap-6 p-4">
            <Link
              href="/"
              className="font-medium hover:underline"
            >
              Home
            </Link>

            <Link
              href="/courses"
              className="font-medium hover:underline"
            >
              Courses
            </Link>

            <Link
              href="/about"
              className="font-medium hover:underline"
            >
              About
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}