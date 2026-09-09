import Link from "next/link";
import { getCourse, getCourses } from "@/lib/courses";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";

type CoursePageProps = {
    params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
    const courses = await getCourses();

    return courses.map((course) => ({
        id: course.id,
    }));
}

export default async function CoursePage({
    params,
}: CoursePageProps) {
    const { id } = await params;
    const course = await getCourse(id);

    if (!course) {
        notFound();
    }

    return (
        <main className="p-8">
            <Link
                href="/courses"
                className="text-sm text-gray-600 hover:underline"
            >
                ← Back to Courses
            </Link>

            <div className="mt-6 max-w-2xl rounded-lg border p-6">
                <h1 className="text-3xl font-bold">
                    {course.title}
                </h1>

                <p className="mt-4 text-gray-600">
                    {course.description}
                </p>

                <p className="mt-4 font-medium">
                    Credits: {course.credits}
                </p>

                <LikeButton initialLikes={course.likes} />
            </div>
        </main>
    );
}