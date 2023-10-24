import React from "react";
import style from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import xLogo from "../../../public/xLogo.ico";
import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";
import TrendSection from "./_component/TrendSection";
import FollowRecommend from "./_component/FollowRecommend";
import RightSearchZone from "./_component/RightSearchZone";

export default function AfterLoginLayout({
    children,
    modal,
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <div className={style.container}>
            <header className={style.leftSectionWrapper}>
                <section className={style.leftSection}>
                    <div className={style.leftSectionFixed}>
                        <Link className={style.logo} href={"/home"}>
                            <div className={style.logoPill}>
                                <Image
                                    src={xLogo}
                                    alt="xLogo"
                                    width={30}
                                    height={30}
                                />
                            </div>
                        </Link>
                        <nav>
                            <ul>
                                <NavMenu />
                            </ul>
                            <Link
                                href={"/compose/tweet"}
                                className={style.postButton}
                            >
                                게시하기
                            </Link>
                        </nav>
                        <LogoutButton />
                    </div>
                </section>
            </header>
            <div className={style.rightSectionWrapper}>
                <div className={style.rightSectionInner}>
                    <main className={style.main}>{children}</main>
                    <section className={style.rightSection}>
                        <RightSearchZone />

                        <TrendSection />

                        <FollowRecommend />
                    </section>
                </div>
            </div>
            {modal}
        </div>
    );
}
