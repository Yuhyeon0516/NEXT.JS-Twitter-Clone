import Follow from './Follow';
import style from './followRecommend.module.css';

export default function FollowRecommend() {
    return (
        <div className={style.followRecommend}>
            <h3>팔로우 추천</h3>
            <Follow />
            <Follow />
            <Follow />
        </div>
    );
}
