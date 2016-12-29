const User = `
    type User {
        name: String,
        id: Int,
        posts(filter: String): [Post]
    }
`;

export default User;
