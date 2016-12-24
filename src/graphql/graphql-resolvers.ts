import {PostsResolver} from "./resolvers/posts";
import {UsersResolvers} from "./resolvers/users";

const graphqlResolvers: any = Object.assign(
    {},
    PostsResolver.get(),
    UsersResolvers.get()
);

export default graphqlResolvers;