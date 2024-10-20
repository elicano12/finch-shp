const express = require('express');
const pino = require('pino');
const pinoHttp = require('pino-http');
require('./config/databases/postgres');

const routes = require('./routes');
const errorHandlerMiddleware = require('./middlewares/errorHandler');

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use(
  pinoHttp({
    logger: pino({
      level: process.env.LOG_LEVEL || 'info',
    }),
  })
);

// Routes
app.use('/api', routes);

// Middleware to handle errors
app.use(errorHandlerMiddleware);

module.exports = app;