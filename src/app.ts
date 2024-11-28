import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';

import { errorHandler } from '@middlewares/globalErrorHandler.js';

import { apiRequestLogger } from '@logger/logger.js';

import { rootRouter } from '@routes/index.js';

import { resolvers } from './graphql/resolvers/index.js';
import { typeDefs } from './graphql/typedefs/index.js';

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRequestLogger);

app.get('/healthz', (req, res) => {
    return res.send('healthy');
});

app.use('/graphql', expressMiddleware(server));

app.use('/v1', rootRouter);

app.use(errorHandler);

export { app };
