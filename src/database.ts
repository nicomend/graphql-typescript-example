import {IPost, IUser} from "./models";
export const database: Database = {
    posts: [
        {
            description: 'wowowo',
            imageUrl: 'http://wallpaper-gallery.net/images/image/image-13.jpg',
            userId: 1,
            id: new Date().getTime().toString()
        }
    ],
    users: [
        {
            id: 1,
            name: 'Nico'
        }
    ]
};

interface Database{
    posts: IPost[],
    users: IUser[]
}