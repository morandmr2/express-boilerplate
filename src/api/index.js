const { Router } = require('express');
const testRoutes = require('./routes/test');

module.exports = (app) => {
  const apiRouter = Router();
  testRoutes(app, apiRouter);

  return apiRouter;
};