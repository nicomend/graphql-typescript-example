import {buildSchema} from "graphql/utilities/buildASTSchema";
const graphQLSchema: any = buildSchema(`
  type Query {
  allPosts(filter: String): [Post],
  allUsers(filter: String): [User]
  }
  
  type User {
  name: String,
  id: Int,
  posts(filter: String): [Post]
  }
  
  type Mutation {
  createPost(description: String, imageUrl: String): Post,
  deletePost(id:String): Post
  }
  
  type Post {
  id: String,
  description: String,
  imageUrl: String,
  user: User
  }
`);

export default graphQLSchema;