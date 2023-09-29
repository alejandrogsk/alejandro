import { Image } from "./Image"
import { Project } from "./Project"

export type HomePage = {
    title: string[],
    subtitle: string,
    cta: {
        label: string,
        url: string
    }
    seo: {
        seoTitle:string,
        description: string
        pageTitle: string
    }
    recentProjectsCollection: {
        items: Project[]
    }

    logosBlackVersionCollection: {
        items: Image[]
    }

    logosWhiteVersionCollection: {
        items: Image[]
    }
}




