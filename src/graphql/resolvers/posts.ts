import {database} from "../../database";
import {Post, IPost} from "../../models";
export class PostsResolver {
    static get(): any {
        return {
            allPosts: PostsResolver.allPosts,
            createPost: PostsResolver.createPost,
            deletePost: PostsResolver.deletePost
        };
    }

    private static allPosts({filter}: {filter: string}): Post[] {
        let posts: Post[] = database.posts.map((post: IPost) => {
            return new Post(post);
        });

        return filter ? posts.filter((post: Post) => {
            return post.description.includes(filter);
        }) : posts;
    }

    private static createPost({description, imageUrl}: {description: string, imageUrl: string}): Post {
        let post: IPost = {
            description: description,
            imageUrl: imageUrl,
            id: new Date().getTime().toString(),
            userId: 1,
        };
        database.posts.push(post);
        return new Post(post);
    }

    private static deletePost({id}:{id: string}): Post {
        let index = database.posts.findIndex((post) => post.id === id);
        if (index > -1) {
            return new Post(database.posts.splice(index, 1)[0]);
        }

        throw new Error('Error, post id does not exists!!!');
    }
}