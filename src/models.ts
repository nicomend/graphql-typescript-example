export interface IPost {
    description: string,
    imageUrl: string,
    id: number,
    userId: number
}

export interface IUser {
    name: string,
    id: number,
    password: string
}