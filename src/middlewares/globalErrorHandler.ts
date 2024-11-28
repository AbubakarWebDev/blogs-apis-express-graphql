import type { NextFunction, Request, Response } from 'express';

import { type APIErrorType, ApiError } from '@utils/apiError.js';
import { responseMessage } from '@utils/responseMessage.js';

const errorHandler = (
    error: APIErrorType,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction,
) => {
    if (!(error instanceof ApiError)) {
        const statusCode = error.statusCode || 500;
        const message = error.message || responseMessage.OTHER.SERVER_ERROR;

        error = new ApiError(statusCode, message);
    }

    return res.status(error.statusCode).json({ message: error.message });
};

export { errorHandler };
