import {database} from "../../database";
import {User} from "../../models";
export class UsersResolvers {
    static get(): any {
        return {
            allUsers: UsersResolvers.allUsers
        };
    }

    private static allUsers({filter}: {filter: string}): User[] {
        let users = database.users.map((user) => {
            return new User(user);
        });

        return filter ? users.filter((user) => {
            return user.name.includes(filter);
        }) : users;
    }
}