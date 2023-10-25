import Backbutton from "../_component/Backbutton";
import SearchForm from "../_component/SearchForm";
import Post from "../home/_component/Post";
import SearchTab from "./_component/SearchTab";

import style from "./search.module.css";

type Props = {
    searchParams: { q: string; f?: string; pf?: string };
};

export default function Page({ searchParams }: Props) {
    return (
        <div className={style.main}>
            <div className={style.searchTop}>
                <div className={style.searchZone}>
                    <div className={style.buttonZone}>
                        <Backbutton />
                    </div>
                    <div className={style.formZone}>
                        <SearchForm q={searchParams.q} />
                    </div>
                </div>
                <SearchTab />
            </div>
            <div className={style.list}>
                {/* <SearchResult searchParams={searchParams} /> */}
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}
