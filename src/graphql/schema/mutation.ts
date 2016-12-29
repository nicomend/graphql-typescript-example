const Mutation = `
    type Mutation {
        createPost(description: String, imageUrl: String): Post,
        deletePost(id:String): Post
    }
`;
export default Mutation;