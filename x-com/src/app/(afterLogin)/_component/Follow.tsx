import style from './follow.module.css';

export default function Follow() {
    const user = {
        id: 'elonmusk',
        nickname: 'Elon Musk',
        image: '/X_black.ico',
    };
    return (
        <div className={style.container}>
            <div className={style.userLogoSection}>
                <div className={style.userLogo}>
                    <img src={user.image} alt="image" />
                </div>
            </div>

            <div className={style.userInfo}>
                <div className={style.title}>{user.nickname}</div>
                <div className={style.count}>@{user.id}</div>
            </div>

            <div className={style.followButtonSection}>
                <button>팔로우</button>
            </div>
        </div>
    );
}
