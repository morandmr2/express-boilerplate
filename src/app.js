const express = require('express');
const config = require('./config');
const loadApp = require('./loaders');
const { Logger } = require('./utils');

async function startServer() {
  const app = express();
  await loadApp(app);

  app.listen(config.port, () => {
    Logger.info(`Express server listening on port ${config.port}`);
  })
  .on('error', (err) => {
    Logger.error(`Error : ${err.message}`);
  });
}

startServer();

process
  .on('uncaughtException', (err) => {
    Logger.error(`Uncaught exception : ${err.message}`);
    process.exit(1);
  })
  .on('unhandledRejection', (err) => {
    Logger.error(`Unhandled Promise rejection : ${err}`);
    process.exit(1);
  });
