import * as express from 'express';
import bodyParser = require('body-parser');
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import graphqlSchema from "./graphql-schema";
import {makeExecutableSchema, addMockFunctionsToSchema, MockList} from 'graphql-tools';
import graphqlResolvers from './graphql-resolvers';
import casual = require('casual');
import mocks from "./graphql-mock";

export function initGraphQL(app: express.Application) {
    const mock = process.argv[2] === 'mock';
    const endpointURL = '/graphql';
    const schema = makeExecutableSchema({typeDefs: graphqlSchema, resolvers: graphqlResolvers});
    if (mock) {
        addMockFunctionsToSchema({
            schema,
            mocks
        });
    }

    app.use(endpointURL,
        bodyParser.json(),
        graphqlExpress((request) => {
            return {
                schema: schema,
                context: request.user
            }
        })
    );

    app.use('/graphiql', graphiqlExpress({
        endpointURL: endpointURL,
    }));
}