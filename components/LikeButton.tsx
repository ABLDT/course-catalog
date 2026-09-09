"use client";

import { useState } from "react";

type LikeButtonProps = {
    initialLikes: number;
};

export default function LikeButton({
    initialLikes,
}: LikeButtonProps) {
    const [likes, setLikes] = useState<number>(initialLikes);

    function handleLike() {
        setLikes(likes + 1);
    }

    return (
        <button
            onClick={handleLike}
            className="mt-6 rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
        >
            Like: {likes}
        </button>
    );
}