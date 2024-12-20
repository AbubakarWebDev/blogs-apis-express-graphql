import { z } from 'zod';

const createUserValidator = z.object({
    email: z.string().min(1).email(),
    name: z.string().min(1),
    password: z.string().min(6).max(10),
});

const updateUserValidator = z.object({
    name: z.string().min(1),
});

type CreateUserType = z.infer<typeof createUserValidator>;
type UpdateUserType = z.infer<typeof updateUserValidator>;

export {
    type CreateUserType,
    createUserValidator,
    type UpdateUserType,
    updateUserValidator,
};
