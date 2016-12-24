import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import graphqlSchema from "./graphql-schema";
import graphqlResolvers from "./graphql-resolvers";

export function initGraphQL(app: express.Application){
    app.use('/graphql', graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true
    }));
}