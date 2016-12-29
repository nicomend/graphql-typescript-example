import {MockList} from "graphql-tools";
import casual = require('casual');

const mocks = {
    Query: () => ({
        allMovies: () => new MockList([2, 20])
    }),
    Movie: () => ({
        name: casual.name
    })
}

export default mocks;