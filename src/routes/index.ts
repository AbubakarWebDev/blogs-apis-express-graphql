import { Router } from 'express';

import { userRouter } from '@/routes/user.routes.js';

const rootRouter = Router();

rootRouter.use('/user', userRouter);

export { rootRouter };
