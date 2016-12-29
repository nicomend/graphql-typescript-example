import * as express from 'express';
import bodyParser = require('body-parser');
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import graphqlSchema from "./graphql-schema";
import {makeExecutableSchema, addMockFunctionsToSchema, MockList} from 'graphql-tools';
import casual = require('casual');
import mocks from "./graphql-mock";

export function initGraphQL(app: express.Application) {
    const mock = true;
    const endpointURL = '/graphql';
    const schema = makeExecutableSchema({typeDefs: graphqlSchema});
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
                schema: schema
            }
        })
    );

    app.use('/graphiql', graphiqlExpress({
        endpointURL: endpointURL,
    }));
}