export const resolvers = {
    Query: {
        hello: () => 'Hello, World!',
        greet: (_: any, { name }: { name: string }) => `Hello, ${name}!`,
    },
};
