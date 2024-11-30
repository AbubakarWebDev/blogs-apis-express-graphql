const responseMessage = {
    USER: {
        DELETED: 'User is deleted',
        CREATED: 'User created successfully',
        LOGGED_IN: 'User logged in successfully',
        DELETE_USER: 'User deleted successfully',
        RETRIEVED: 'Users retrieved successfully',
        UPDATED: 'User details updated successfully',
        NO_USERID_FOUND: 'No user found for this userId',
    },
    OTHER: {
        SERVER_ERROR: 'Internal Server Error',
    },
} as const;

export { responseMessage };
