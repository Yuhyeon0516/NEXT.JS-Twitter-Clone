import { faker } from "@faker-js/faker";
import style from "./chatDetail.module.css";
import Link from "next/link";
import Backbutton from "../../_component/Backbutton";
import cx from "classnames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function ChatDetailPage() {
    const user = {
        //임시
        id: "yuhyeon0516",
        nickname: "yuhyeon",
        image: faker.image.avatar(),
    };

    const messages = [
        {
            chatId: 1,
            id: "yuhyeon0516",
            content: "안녕하세요.",
            createdAt: new Date(),
        },
        {
            chatId: 2,
            id: "me",
            content: "안녕히가세요.",
            createdAt: new Date(),
        },
    ];

    return (
        <div className={style.main}>
            <div className={style.header}>
                <Backbutton />
                <div>
                    <h2>{user.nickname}</h2>
                </div>
            </div>
            <Link className={style.userInfo} href={`/${user.nickname}`}>
                <img src={user.image} alt={user.id} />
                <div>
                    <b>{user.nickname}</b>
                </div>
                <div>@{user.id}</div>
            </Link>
            <div className={style.chatList}>
                {messages.map((message) => {
                    if (message.id === "me") {
                        return (
                            <div
                                key={message.chatId}
                                className={cx(style.message, style.myMessage)}
                            >
                                <div className={style.content}>
                                    {message.content}
                                </div>
                                <div className={style.date}>
                                    {dayjs(message.createdAt)
                                        .format("YYYY년 MM월 DD일 A h:mm")
                                        .toString()}
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div
                            key={message.chatId}
                            className={cx(style.message, style.yourMessage)}
                        >
                            <div className={style.content}>
                                {message.content}
                            </div>
                            <div className={style.date}>
                                {dayjs(message.createdAt)
                                    .format("YYYY년 MM월 DD일 A h:mm")
                                    .toString()}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
