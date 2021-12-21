import express from 'express';
import logger from './logger';
import * as dotenv from 'dotenv';
import userRouter from './routers/user';

// initialize dotenv to use environment variables from .env file
dotenv.config();

const app = express();

app.use(express.json()); // parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false })); // parse incoming requests with urlencoded payloads

// API routes
app.use('/user', userRouter);

app.listen(process.env.PORT, () =>
  logger.info(`Server is listening on port ${process.env.PORT}`)
);
