'use client';

import style from './logoutButton.module.css';

export default function LogoutButton() {
    const me = {
        //임시
        id: 'yuhyeon0516',
        image: 'https://avatars.githubusercontent.com/u/120432007?v=4',
        nickname: 'yuhyeon',
    };

    return (
        <button className={style.logOutButton}>
            <div className={style.logOutUserImage}>
                <img src={me.image} alt={me.id} />
            </div>

            <div className={style.logOutUserName}>
                <div>{me.nickname}</div>
                <div>@{me.id}</div>
            </div>
        </button>
    );
}
