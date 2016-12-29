const Query = `
    type Query {
        allPosts(filter: String): [Post],
        allUsers(filter: String): [User],
        me: User,
        allMovies: [Movie]
    }
`;

export default Query;