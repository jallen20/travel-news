import {Article, ArticlePreview} from "@/app/_model";

export const Api = () => ({
    getTopTravelStories : async (): Promise<ArticlePreview[]> => {
        const res = await fetch("https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=5XctBarAXdAbfGcmMDAj8tzENh9iF5lJ");
        if (!res.ok) {
            throw new Error('Error fetching travel news.');
        }
        const json = await res.json();
        return json.results
            .filter((result: any) => result.section !== "admin")
            .map((result: any) => ({
                title: result.title,
                date: new Date(result.created_date),
                snippet: result.abstract,
                url: result.url,
                media: result.multimedia?.map((multimedia: any) => ({
                    url: multimedia.url,
                    caption: multimedia.caption,
                    webUrl: result.url,
                    width: result.width,
                    height: result.height,
                })) ?? []
        }))
    },
    searchArticles: async (query: string, isUrl: boolean = true): Promise<Article[]> => {
        const queryParam = isUrl ?
            `fq=web_url:("${query}")` : `q=${query}`
        const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?${queryParam}&api-key=5XctBarAXdAbfGcmMDAj8tzENh9iF5lJ`);
        if (!res.ok) {
            throw new Error(`Error fetching resource at ${query}.`);
        }
        const json = await res.json();
        return json.response.docs.map((result: any) => ({
            title: result.headline.main,
            headline: result.headline.print_headline,
            createdDate: new Date(result.pub_date),
            updatedDate: new Date(),
            content: result.lead_paragraph,
            abstract: result.abstract,
            url: result.web_url,
            author: result.byline.original,
            media: result.multimedia?.map((multimedia: any) => ({
                url: multimedia.url,
                caption: multimedia.caption,
                webUrl: result.url,
                width: result.width,
                height: result.height,
            })) ?? []
        }))
    }
})
