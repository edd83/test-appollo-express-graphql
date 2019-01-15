const {
    ApolloServer,
    gql
} = require('apollo-server');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

// The GraphQL schema
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            hello: {
                type: GraphQLString,
                description: 'A simple type for getting started!',
                resolve: () => 'world',
            },
            date: {
                type: GraphQLString,
                description: 'A simple way to get the date!',
                resolve: () => new Date(),
            },
        },
    }),
});

const server = new ApolloServer({
    schema
});

server.listen().then(({
    url
}) => {
    console.log(`🚀 Server ready at ${url}`);
});