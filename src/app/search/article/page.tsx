import {Api} from "@/app/api";
import ArticleView from "@/app/_components/article-view/ArticleView";
import BackButton from "@/app/_components/back-button/BackButton";
import styles from "./page.module.scss";

interface LocalProps {
    params: { slug: string };
    searchParams?: { [key: string]: string };
}
const ArticlePage = async ({  searchParams }: LocalProps) => {
    const { searchArticles } = Api();
    const article = searchParams?.webUrl ? (await searchArticles(decodeURI(searchParams.webUrl)))[0] : undefined;
    return (
        <div className={styles["article-page"]}>
            <BackButton width={28} height={28}/>
            <ArticleView article={article} />
        </div>
    )
}
export default ArticlePage;
