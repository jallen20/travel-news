export interface Article {
    title: string;
    headline?: string;
    createdDate: Date;
    updatedDate: Date;
    author: string;
    content: string;
    media: MultiMedia[];
    url: string;
    abstract: string;
}

export interface ArticlePreview {
    title: string;
    date: Date;
    snippet: string;
    media: MultiMedia[];
    url: string;
}

export interface MultiMedia {
    url: string;
    caption: string;
    webUrl: string;
    width?: number;
    height?: number;
}
