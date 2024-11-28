export const typeDefs = `#graphql
    type User {
        id: String!
        name: String
        email: String!
    }

    # Define an Input type for creating users
    input UserInput {
        name: String!
        email: String!
        password: String!
    }

    type Query {
        users: [User]
    }

    type Mutation {
        deleteUser(userId: String!): String
        createUser(user: UserInput!): String
        editUser(userId: String!, user: UserInput!): String
    }
`;
