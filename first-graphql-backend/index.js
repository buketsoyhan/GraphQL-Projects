const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

//Ünlem koyduğumuzda değerin null olamacağini belirtir

const typeDefs = gql`
  type Book {
    title: String!
    author: String
  }

  type Query {
    books: Book!
  }
`;

const resolvers = {
  Query: {
    books: () => {
      return {
        title: "Yabanci",
        author: "Albert Camus",
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

server.listen().then(({ url }) => console.log("Apolo server is up"));
