const { ApolloServer, gql } = require("apollo-server");
const conectarDB = require("./Config/db");
const typeDefs = require("./db/schema");
const resolvers = require("./db/resolvers");

// conectar a la base de datos
conectarDB();

/*
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (root, args, context) => "Hello world!"
  }
};
*/

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
