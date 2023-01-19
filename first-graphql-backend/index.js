const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const author = {
  id: "1",
  name: "Albert",
  surname: "Camus",
  age: 50,
  books: [
    { id: "1", title: "Test Title", score: "9", isPublished: false },
    { id: "2", title: "Test 2", score: "8", isPublished: true },
  ],
};

const book = {
  id: "xsc123545",
  title: "Yabanci",
  author,
  score: 6.9,
  isPublished: true,
};
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
