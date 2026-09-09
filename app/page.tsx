import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">
        Course Catalog
      </h1>

      <p className="mt-4">
        Welcome to our Advanced Web Technologies course catalog.
      </p>

      <Link
        href="/courses"
        className="mt-6 inline-block rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
      >
        View Courses
      </Link>
    </main>
  );
}