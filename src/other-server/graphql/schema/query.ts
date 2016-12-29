const Query = `
    type Query {
        allMovies(filter: String): [Movie]
    }
`;

export default Query;