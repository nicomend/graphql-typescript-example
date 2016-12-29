import Schema from "./schema/schema";
import Query from "./schema/query";
import Mutation from "./schema/mutation";
import Post from "./schema/post";
import User from "./schema/user";
import Movie from "./schema/movie";

const graphQLSchema: string[] = [Schema, Query, Mutation, Post, User, Movie];
export default graphQLSchema;
