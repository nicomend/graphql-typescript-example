import {database} from "../../database";
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
        }
    },
    User: {
        posts(root, {filter}) {
            let posts = database.posts.filter((post) => filter ? post.description.includes(filter) && this.id === post.userId : this.id === post.userId);
            return posts;
        }
    }
};