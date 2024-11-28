export const typeDefs = `#graphql
  type Query {
    hello: String
    greet(name: String!): String
  }
`;
