import {ArticlePreview} from "@/app/_model";
import styles from "./PreviewList.module.scss";

interface LocalProps {
    articlePreviews: ArticlePreview[];
    onViewArticle: (articleUrl: string) => void;
}

const PreviewList = ({
    articlePreviews,
    onViewArticle
}: LocalProps) => {
    return (
        <div>
            { articlePreviews.map((preview: ArticlePreview) => (
                <div className={styles["preview-item"]} key={preview.title} onClick={() => {
                    onViewArticle(preview.url);
                }}>
                    <span className={styles["list-item"]}>{preview.date.toDateString()}</span>
                    <h3 className={styles["list-item"]}>{preview.title}</h3>
                    <p className={styles["list-item"]}>{preview.snippet}</p>
                </div>
            ))}
        </div>
    );
}
export default PreviewList;
