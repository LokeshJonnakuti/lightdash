import { GraphQLClient } from 'graphql-request';

export default class DbtCloudGraphqlClient {
    private graphqlEndpoint =
        'https://cloud.getdbt.com/semantic-layer/api/graphql';

    async runQuery(bearerToken: string, environmentId: string, query: string) {
        const client = new GraphQLClient(this.graphqlEndpoint, {
            headers: {
                Authorization: `Bearer ${bearerToken}`,
                'X-dbt-partner-source': 'lightdash',
            },
        });
        return client.request(query, {
            environmentId,
        });
    }
}
