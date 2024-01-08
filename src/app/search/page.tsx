"use client";
import {useRouter} from "next/navigation";
import {Api} from "@/app/api";
import {useState} from "react";
import {Article} from "@/app/_model";
import PreviewList from "@/app/_components/preview-list/PreviewList";
import {toArticlePreview} from "@/app/_util";
import styles from "./page.module.scss";
import {Search} from "react-bootstrap-icons";

const SearchPage = () => {
    const router = useRouter();
    const { searchArticles } = Api();
    const [articles, setArticles] = useState<Article[]>([]);
    const [query, setQuery] = useState<string | undefined>(undefined);

    const onSearch = () => {
        if (query) {
            searchArticles(query, false).then(setArticles)
        }
    }

    const showArticle = (webUrl: string) => {
        router.push(`/search/article?webUrl=${encodeURI(webUrl)}`);
    }

    return (
        <div className={styles["search-page"]}>
            <div className={styles["search-bar-wrapper"]}>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" value={query} onChange={e => setQuery(e.target.value)} className={styles["search-bar"]}/>
                    <button type="submit" onClick={() => onSearch()}>
                        <Search/>
                    </button>
                </form>
            </div>
            { articles.length ?
                <div className={styles["search-results"]}>
                    <PreviewList articlePreviews={articles.map(toArticlePreview)} onViewArticle={showArticle}/>
                </div>
                :
                <div className={styles["no-results"]}>
                    <div className={styles["no-results-content"]}>
                        <Search/>
                        <span>No Results Found.</span>
                    </div>
                </div>
            }
        </div>
    )
}
export default SearchPage;
