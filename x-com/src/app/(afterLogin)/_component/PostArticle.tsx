"use client";

import { useRouter } from "next/navigation";
import style from "./postArticle.module.css";

type Props = {
    children: React.ReactNode;
    post: {
        postId: number;
        User: {
            id: string;
            nickname: string;
            image: string;
        };
        content: string;
        createdAt: Date;
        Images: {
            imageId: number;
            link: string;
        }[];
    };
};

export default function PostArticle({ children, post }: Props) {
    const router = useRouter();

    function onClick() {
        router.push(`/${post.User.id}/status/${post.postId}`);
    }

    return (
        <article onClickCapture={onClick} className={style.post}>
            {children}
        </article>
    );
}
