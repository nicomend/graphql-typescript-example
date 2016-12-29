import {IPost, IUser} from './models';
export const database: Database = {
    posts: [
        {
            description: 'wowowo',
            imageUrl: 'http://wallpaper-gallery.net/images/image/image-13.jpg',
            userId: 1,
            id: new Date().getTime()
        }
    ],
    users: [
        {
            id: 1,
            name: 'Nico',
            password: 'password'
        }
    ]
};

interface Database{
    posts: IPost[],
    users: IUser[]
}