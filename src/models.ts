import {database} from "./database";
export interface IPost {
    description: string,
    imageUrl: string,
    id: string,
    userId: number
}

export interface IUser {
    name: string,
    id: number
}

export class Post implements IPost{
    description: string;
    imageUrl: string;
    id: string;
    userId: number;
    constructor({description, imageUrl, id, userId}: IPost) {
        this.description = description;
        this.imageUrl = imageUrl;
        this.id = id;
        this.userId = userId;
    }

    user() {
        let user = database.users.find((user) => this.userId === user.id)
        return user ? new User(user) : user;
    }

}

export class User implements IUser{
    name: string;
    id: number;
    constructor({name, id}: IUser) {
        this.name = name;
        this.id = id;
    }

    posts({filter}) {
        let posts = database.posts.filter((post) => filter ? post.description.includes(filter) && this.id === post.userId : this.id === post.userId);
        return posts.map((post) => new Post(post));
    }

}