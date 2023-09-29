import { gql } from "graphql-request";

//1qwQQiqgCH7aLvH4KdgrHa"
export const HOME_PAGE = gql`
    query getHome($id: String!) {
        homePage(id: $id) {
            title
            subtitle
            cta {
                label
                url
            }
            seo{
                seoTitle,
                description
            }
            recentProjectsCollection {
                items {
                    title
                    description
                    image {
                        description
                        url
                    }
                    externalUrl
                }
            }

            logosBlackVersionCollection {
                items {
                    description
                    url
                }
            }

            logosWhiteVersionCollection {
                items {
                    description
                    url
                }
            }

            contactText

            profilePicture {
                description
                url
            }
        }
    }
`;
