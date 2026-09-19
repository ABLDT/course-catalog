import { getCourses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export default async function CoursesPage() {
    const courses = await getCourses();

    return (
        <main className="p-8">
            <h1 className="mb-6 text-3xl font-bold">
                Courses
            </h1>

            <p className="mb-6 text-gray-600">
                Available courses: {courses.length}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        description={course.description}
                        credits={course.credits}
                        likes={course.likes}
                    />
                ))}
            </div>
        </main>
    );
}