import {initApplication, APPLICATION_PORT} from "./app-initializer";

initApplication();
console.log(`App is running at localhost:${APPLICATION_PORT}`);
console.log(`Running a GraphQL API server at localhost:${APPLICATION_PORT}/graphql`);
