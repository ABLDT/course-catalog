import Link from "next/link";

type CourseCardProps = {
    id: string;
    title: string;
    description: string;
    credits: number;
    likes: number;
};

export default function CourseCard({
    id,
    title,
    description,
    credits,
    likes,
}: CourseCardProps) {
    return (
        <Link
            href={`/courses/${id}`}
            className="block rounded-lg border p-6 hover:bg-gray-50"
        >
            <h2 className="text-xl font-bold">{title}</h2>

            <p className="mt-2 text-gray-600">
                {description}
            </p>

            <div className="mt-4 flex justify-between text-sm">
                <span>Credits: {credits}</span>
                <span>Likes: {likes}</span>
            </div>
        </Link>
    );
}