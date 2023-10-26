import style from "./messages.module.css";
import Chat from "./_component/Chat";

export default function Page() {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <h3>쪽지</h3>
            </div>

            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
        </div>
    );
}
