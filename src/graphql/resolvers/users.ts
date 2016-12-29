import {database} from '../../database';
import rp = require('request-promise');
import gql from "graphql-tag/index";
import moviesGraphqlClient from "../../movies-client";

const moviesQuery = gql`
    query Query{
        allMovies{
            name
        }
    }
`;

const createMovieMutation = gql`
    mutation Mutation{
        createMovie{
            name
        }
    }
`;

export const resolveFunctions = {
    Query: {
        allUsers(root, {filter}) {
            let users = database.users;

            return filter ? users.filter((user) => {
                return user.name.includes(filter);
            }) : users;
        },
        me(root, args, context){
            return database.users.find((user) => user.id === context.id);
        },
        allMovies(){
            return moviesGraphqlClient.query({
                query: moviesQuery,
                forceFetch: true
            }).then(result => result.data.allMovies);
        }
    },
    User: {
        posts(root, {filter})
        {
            let posts = database.posts.filter((post) => filter ? post.description.includes(filter) && this.id === post.userId : this.id === post.userId);
            return posts;
        }
    },
    Mutation: {
        createMovie(){
            return moviesGraphqlClient.mutate({
                mutation: createMovieMutation
            }).then(result => result.data.createMovie);
        }
    }
};