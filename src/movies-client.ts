import ApolloClient, { createNetworkInterface } from 'apollo-client';
require('isomorphic-fetch');

// by default, this client will send queries to `/graphql` (relative to the URL of your app)
const moviesGraphqlClient = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://localhost:4001/graphql'
    }),
});

export default moviesGraphqlClient;