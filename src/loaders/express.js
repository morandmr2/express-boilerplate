const bodyParser = require('body-parser');
const config = require('../config');
const apiRoutes = require('../api'); 

module.exports = (app) => {
  // parse body responses to json format for all endpoints
  app.use(bodyParser.json());

  // use selected prefix for api routes
  app.use(config.apiPrefix, apiRoutes());

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });

  // error handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};