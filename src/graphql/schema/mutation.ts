const Mutation = `
    type Mutation {
        createPost(description: String, imageUrl: String): Post,
        deletePost(id:String): Post,
        createMovie(name:String): Movie
    }
`;
export default Mutation;