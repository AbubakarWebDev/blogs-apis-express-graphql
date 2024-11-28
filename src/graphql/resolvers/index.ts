import { v4 as uuidv4 } from 'uuid';

import type { User } from '@projTypes/user.types.js';

const users: User[] = [
    {
        id: '12321',
        name: 'abubakar',
        email: 'muhammadabubakar.bkr@gmail.com',
        password: 'password',
    },
];

export const resolvers = {
    Query: {
        users: () => {
            return users.map((user) => ({
                id: user.id,
                name: user.name,
                email: user.email,
            }));
        },
    },

    Mutation: {
        createUser: (_: any, args: { user: User }) => {
            users.push({
                id: uuidv4(),
                name: args.user.name,
                email: args.user.name,
                password: args.user.password,
            });

            return 'User Created Successfully';
        },

        editUser: (_: any, args: { userId: string; user: User }) => {
            const userIndex = users.findIndex(
                (user) => user.id === args.userId,
            );

            users[userIndex] = {
                id: args.userId,
                name: args.user.name,
                email: args.user.email,
                password: args.user.password,
            };

            return 'User Updated Successfully';
        },

        deleteUser: (_: any, args: { userId: string }) => {
            const userIndex = users.findIndex(
                (user) => user.id === args.userId,
            );

            users.splice(userIndex, 1);

            return 'User Deleted Successfully';
        },
    },
};
