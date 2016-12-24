import * as express from 'express';
import * as cors from 'cors';
import {initGraphQL} from "./graphql/graphql-initializer";

export const APPLICATION_PORT = 4000;

export function initApplication(): express.Application{
    const app = express();
    app.use(cors());
    initGraphQL(app);
    app.listen(APPLICATION_PORT);
    return app;
}