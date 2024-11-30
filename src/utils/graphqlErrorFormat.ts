import type { GraphQLFormattedError } from 'graphql';

// Custom error formatting function
export const formatError = (
    formattedError: GraphQLFormattedError,
    _error: unknown,
) => {
    return {
        message: formattedError.message || 'Internal server error',
        code: formattedError.extensions?.code,
    };
};
