const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const {book, author} = require("./data")

//Ünlem koyduğumuzda değerin null olamacağini belirtir
const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    surname: String!
    age: Int
    books: [Book!]
  }

  type Book {
    id: ID!
    title: String!
    author: Author
    score: Float
    isPublished: Boolean
  }

  type Query {
    book: Book
    author: Author
  }
`;

const resolvers = {
  Query: {
    book: () => book,
    author: () => author,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

server.listen().then(({ url }) => console.log("Apolo server is up"));
