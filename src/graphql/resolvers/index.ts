import { v4 as uuidv4 } from 'uuid';

import type { User } from '@/types/user.types.js';
import { responseMessage } from '@/utils/responseMessage.js';

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

            return responseMessage.USER.CREATED;
        },

        editUser: (_: any, args: { userId: string; user: User }) => {
            const userIndex = users.findIndex(
                (user) => user._id === args.userId,
            );

            if (userIndex === -1) return responseMessage.USER.NO_USERID_FOUND;

            users[userIndex] = {
                _id: args.userId,
                name: args.user.name,
                email: args.user.email,
                password: args.user.password,
            };

            return responseMessage.USER.UPDATED;
        },

        deleteUser: (_: any, args: { userId: string }) => {
            const userIndex = users.findIndex(
                (user) => user._id === args.userId,
            );

            if (userIndex === -1) return responseMessage.USER.NO_USERID_FOUND;

            users.splice(userIndex, 1);

            return responseMessage.USER.DELETE_USER;
        },
    },
};
