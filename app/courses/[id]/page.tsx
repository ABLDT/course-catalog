import Link from "next/link";
import { getCourse } from "@/lib/courses";
import { notFound } from "next/navigation";
import { LikeButton } from "@/components/LikeButton";
import { EnrollForm } from "@/components/EnrollForm";


type CoursePageProps = {
    params: Promise<{ id: string }>;
};


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

                <LikeButton
                    courseId={course.id}
                    initialLikes={course.likes}
                />

                <h2 className="mt-6 mb-2 text-xl font-bold">
                    Enroll in this course
                </h2>

                <EnrollForm courseId={course.id} />
            </div>
        </main>
    );
}