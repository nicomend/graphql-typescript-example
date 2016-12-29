import * as express from 'express';
import * as cors from 'cors';
import {initGraphQL} from "./graphql/graphql-initializer";
import winston = require("winston");

export const APPLICATION_PORT = 4001;

export function initApplication(): express.Application {
    const app = express();
    winston.level = 'debug';
    app.use(cors());
    initGraphQL(app);
    app.listen(APPLICATION_PORT, () => {
        winston.debug(`App is running at localhost:${APPLICATION_PORT}`);
        winston.debug(`Running a GraphQL API server at localhost:${APPLICATION_PORT}/graphql`);
    });
    return app;
}