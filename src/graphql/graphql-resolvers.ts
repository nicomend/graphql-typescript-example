import {resolveFunctions as usersResolve} from "./resolvers/users";
import {merge} from 'lodash';
import {resolveFunctions as postResolve} from "./resolvers/posts";

const graphqlResolvers = merge(postResolve, usersResolve);

export default graphqlResolvers;