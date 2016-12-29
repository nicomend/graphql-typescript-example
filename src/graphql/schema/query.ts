const Query = `
    type Query {
        allPosts(filter: String): [Post],
        allUsers(filter: String): [User],
        me: User
    }
`;

export default Query;