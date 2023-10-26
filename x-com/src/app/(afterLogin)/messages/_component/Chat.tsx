"use client";

import { faker } from "@faker-js/faker";
import style from "./chat.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { useRouter } from "next/navigation";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Chat() {
    const router = useRouter();
    const user = {
        //임시
        id: "yuhyeon0516",
        nickname: "yuhyeon",
        messages: [
            { chatId: 1, content: "안녕하세요.", createdAt: new Date() },
            { chatId: 2, content: "안녕히가세요.", createdAt: new Date() },
        ],
    };

    function onClick() {
        router.push(`/messages/${user.messages.at(-1)?.chatId}`);
    }

    return (
        <div className={style.chat} onClickCapture={onClick}>
            <div className={style.chatUserImage}>
                <img src={faker.image.avatar()} alt="avater" />
            </div>
            <div className={style.chatInfo}>
                <div className={style.userInfo}>
                    <b>{user.nickname}</b>
                    &nbsp;
                    <span>@{user.id}</span>
                    &nbsp; · &nbsp;
                    <span className={style.lastChatDate}>
                        {dayjs(user.messages.at(-1)?.createdAt).fromNow(true)}
                        &nbsp;전
                    </span>
                </div>
                <div className={style.lastChatText}>
                    {user.messages.at(-1)?.content}
                </div>
            </div>
        </div>
    );
}
