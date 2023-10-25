import Backbutton from "../_component/Backbutton";
import Post from "../home/_component/Post";
import style from "./page.module.css";

export default function Page() {
    const user = {
        //임시
        id: "yuhyeon0516",
        image: "https://avatars.githubusercontent.com/u/120432007?v=4",
        nickname: "yuhyeon",
    };

    return (
        <div className={style.main}>
            <div className={style.header}>
                <Backbutton />
                <h3 className={style.headerTitle}>{user.nickname}</h3>
            </div>
            <div className={style.userZone}>
                <div className={style.userImage}>
                    <img src={user.image} alt={user.id} />
                </div>
                <div className={style.userName}>
                    <div>{user.nickname}</div>
                    <div>@{user.id}</div>
                </div>
                <button className={style.followButton}>팔로우</button>
            </div>
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}
