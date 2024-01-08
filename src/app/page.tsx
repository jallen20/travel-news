"use client";

import { useEffect, useState} from "react";
import {Api} from "@/app/api";
import {ArticlePreview} from "@/app/_model";
import PreviewList from "@/app/_components/preview-list/PreviewList";
import CarouselView from "@/app/_components/carousel-view/CarouselView";
import {useRouter} from "next/navigation";
import styles from "./page.module.scss";

const HomePage = () => {
    const router = useRouter();
    const { getTopTravelStories } = Api();
    const [articles, setArticles] = useState<ArticlePreview[] | undefined>(undefined);

    useEffect(() => {
        getTopTravelStories().then(setArticles);
    }, []);


    const images = articles
        ?.map(article => article.media[0])
        .filter(article => !!article);

    const showArticle = (webUrl: string) => {
        router.push(`/search/article?webUrl=${encodeURI(webUrl)}`);
    }

    return (
        <div className={styles["home-page-container"]}>
            <div className={styles["carousel-view-container"]}>
                <CarouselView media={images ?? []} onImageClick={showArticle}/>
            </div>
            <div className={styles["preview-list-container"]}>
                    <PreviewList
                        articlePreviews={articles ?? []}
                        onViewArticle={showArticle}
                    />
            </div>
        </div>
    )
}
export default HomePage;
