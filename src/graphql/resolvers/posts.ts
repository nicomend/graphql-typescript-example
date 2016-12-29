import {IPost} from "../../models";
import {database} from "../../database";
export const resolveFunctions = {
    Query: {
        allPosts(root, {filter}: {filter: string}){
            let posts = database.posts;

            return filter ? posts.filter((post: IPost) => {
                return post.description.includes(filter);
            }) : posts;
        }
    },
    Mutation: {
        createPost(root, {description, imageUrl}: {description: string, imageUrl: string}) {
            let post: IPost = {
                description: description,
                imageUrl: imageUrl,
                id: new Date().getTime().toString(),
                userId: 1,
            };
            database.posts.push(post);
            return post;
        },
        deletePost(root, {id}:{id: string}): IPost {
            let index = database.posts.findIndex((post) => post.id === id);
            if (index > -1) {
                return database.posts.splice(index, 1)[0];
            }

            throw new Error('Error, post id does not exists!!!');
        }
    },
    Post: {
        user(root: IPost) {
            let user = database.users.find((user) => root.userId === user.id);
            return user;
        }
    }
};