import Post from "@/app/(afterLogin)/home/_component/Post";
import style from "./photoModal.module.css";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import ActionButtons from "@/app/(afterLogin)/home/_component/ActionButtons";
import PhotoModalCloseButton from "./_component/PhotoModalCloseButton";
import { faker } from "@faker-js/faker";

type Props = {
    params: { username: string; id: string; photoId: string };
};

export default function Page({ params }: Props) {
    const photo = {
        link: faker.image.urlLoremFlickr(),
        Post: {
            content: faker.lorem.text(),
        },
    };

    return (
        <div className={style.container}>
            <PhotoModalCloseButton />
            <div className={style.imageZone}>
                <img src={photo.link} alt={photo.Post?.content} />
                <div
                    className={style.image}
                    style={{ backgroundImage: `url(${photo.link})` }}
                />
                <div className={style.buttonZone}>
                    <div className={style.buttonInner}>
                        <ActionButtons white />
                    </div>
                </div>
            </div>
            <div className={style.commentZone}>
                <Post />
                <CommentForm />
                <Post />
            </div>
        </div>
    );
}
