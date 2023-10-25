import Link from "next/link";
import style from "./post.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "./ActionButtons";
import PostArticle from "../../_component/PostArticle";
import { faker } from "@faker-js/faker";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post() {
    const target = {
        postId: 1,
        User: {
            id: "elonmusk",
            nickname: "Elon Musk",
            image: "/X_black.ico",
        },
        content: "X 클론코딩 중",
        createdAt: new Date(),
        Images: [
            {
                imageId: 1,
                link: faker.image.urlPicsumPhotos(),
            },
        ],
    };

    return (
        <PostArticle post={target}>
            <div className={style.postWrapper}>
                <div className={style.postUserSection}>
                    <Link
                        href={`/${target.User.id}`}
                        className={style.postUserImage}
                    >
                        <img
                            src={target.User.image}
                            alt={target.User.nickname}
                        />
                        <div className={style.postShade} />
                    </Link>
                </div>
                <div className={style.postBody}>
                    <div className={style.postMeta}>
                        <Link href={`/${target.User.id}`}>
                            <span className={style.postUserName}>
                                {target.User.nickname}
                            </span>
                            &nbsp;
                            <span className={style.postUserId}>
                                @{target.User.id}
                            </span>
                            &nbsp; · &nbsp;
                        </Link>
                        <span className={style.postDate}>
                            {dayjs(target.createdAt).fromNow(true)}전
                        </span>
                    </div>
                    <div>{target.content}</div>
                    <div className={style.postImageSection}>
                        {target.Images && target.Images.length > 0 && (
                            <Link
                                href={`/${target.User.id}/status/${target.postId}/photo/${target.Images[0].imageId}`}
                                className={style.postImageSection}
                            >
                                <img src={target.Images[0]?.link} alt="" />
                            </Link>
                        )}
                    </div>
                    <ActionButtons />
                </div>
            </div>
        </PostArticle>
    );
}
