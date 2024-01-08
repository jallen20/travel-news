import {Article, ArticlePreview} from "@/app/_model";

export const getFullImageUrl = (url?: string) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `https://www.nytimes.com/${url}`;
}

export const toArticlePreview = (article: Article): ArticlePreview => ({
    title: article.title,
    snippet: article.abstract,
    media: article.media,
    url: article.url,
    date: article.createdDate
});
