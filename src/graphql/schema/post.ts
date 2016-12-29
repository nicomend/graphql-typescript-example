const Post = `
    type Post {
        #id of the post
        id: Int,
        description: String,
        imageUrl: String,
        #author user
        user: User
    }
`;

export default Post;