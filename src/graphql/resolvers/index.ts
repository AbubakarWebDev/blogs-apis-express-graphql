import { v4 as uuidv4 } from 'uuid';

import type { User } from '@projTypes/user.types.js';

const users: User[] = [
    {
        _id: '12321',
        name: 'abubakar',
        email: 'muhammadabubakar.bkr@gmail.com',
        password: 'password',
    },
];

export const resolvers = {
    Query: {
        users: () => {
            return users.map<Omit<User, 'password'>>(
                ({ password: _, ...rest }) => rest,
            );
        },
    },

    Mutation: {
        createUser: (_: any, args: { user: User }) => {
            users.push({
                _id: uuidv4(),
                name: args.user.name,
                email: args.user.name,
                password: args.user.password,
            });

            return 'User Created Successfully';
        },

        editUser: (_: any, args: { userId: string; user: User }) => {
            const userIndex = users.findIndex(
                (user) => user._id === args.userId,
            );

            users[userIndex] = {
                _id: args.userId,
                name: args.user.name,
                email: args.user.email,
                password: args.user.password,
            };

            return 'User Updated Successfully';
        },

        deleteUser: (_: any, args: { userId: string }) => {
            const userIndex = users.findIndex(
                (user) => user._id === args.userId,
            );

            users.splice(userIndex, 1);

            return 'User Deleted Successfully';
        },
    },
};
