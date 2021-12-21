import express from 'express';
import logger from './logger';
import * as dotenv from 'dotenv';

// initialize dotenv to use environment variables from the .env file
dotenv.config();

const app = express();

app.listen(process.env.PORT, () =>
  logger.info(`Server is listening on port ${process.env.PORT}`)
);
