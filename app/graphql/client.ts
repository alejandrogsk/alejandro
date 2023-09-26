import { GraphQLClient } from 'graphql-request'

export const endpointURL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIROMENT_ID}`
const MY_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

export function gqlClient( headers: any = {
    Authorization: `Bearer ${MY_TOKEN}`
}) {   
    const client = new GraphQLClient(endpointURL, { headers })
    return client;
}