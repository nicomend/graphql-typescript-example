import {MockList} from "graphql-tools";
import casual = require('casual');

const mocks = {
    Query: () => ({
        allPosts: () => new MockList([2, 20])
    }),
    Post: () => ({
        id: casual.integer(0, 10000000),
        description: casual.sentence,
        imageUrl: casual.url
    }),
    User: () => ({
        id: casual.integer(0, 10000000),
        name: casual.sentence,
        imageUrl: casual.url,
        posts: () => new MockList([2, 20])
    })
}

export default mocks;