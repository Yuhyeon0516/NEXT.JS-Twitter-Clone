import Post from "@/app/(afterLogin)/home/_component/Post";
import style from "./singlePost.module.css";
import Backbutton from "@/app/(afterLogin)/_component/Backbutton";
import CommentForm from "./_component/CommentForm";

export default function Page() {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <Backbutton />
                <h3 className={style.headerTitle}>게시하기</h3>
            </div>
            <Post />
            <CommentForm />
            <div>
                {/* 나중에 답글로 변경 할 예정 */}
                <Post />
            </div>
        </div>
    );
}
