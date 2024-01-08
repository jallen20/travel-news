import {Article} from "@/app/_model";
import {getFullImageUrl} from "@/app/_util";
import styles from "./ArticleView.module.scss";
import Image from "next/image";

interface LocalProps {
    article?: Article
}

const ArticleView = ({
    article
}: LocalProps) => {
    if (!article) return <></>;
    const media = article?.media[0];
    return (
        <div className={styles["article-view"]}>
            <h2>{article?.title}</h2>
            <span><i>{article?.author}</i></span>
            <img src={getFullImageUrl(media?.url)} alt={media?.caption}/>
            { article?.headline &&
                <h3>{article.headline}</h3>
            }
            <p>{article?.content}</p>
            <span><i>Posted {article?.updatedDate.toLocaleDateString()} {article?.updatedDate.toLocaleTimeString()}</i></span>
        </div>
    )
}
export default ArticleView;
