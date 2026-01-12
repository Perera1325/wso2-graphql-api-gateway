const { ApolloServer, gql } = require('apollo-server');

// GraphQL Schema
const typeDefs = gql`
  type Student {
    id: ID!
    name: String!
    course: String!
  }

  type Query {
    students: [Student]
  }
`;

// Sample Data
const students = [
  { id: "1", name: "Adam", course: "API Engineering" },
  { id: "2", name: "Sara", course: "GraphQL Basics" }
];

// Resolvers
const resolvers = {
  Query: {
    students: () => students
  }
};

// Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(({ url }) => {
  console.log(`🚀 GraphQL Server running at ${url}`);
});

