const services = require('../services');
const { Logger } = require('../utils');

module.exports = (app) => {
  const appServices = {};
  for ( serviceName in services ) {
    appServices[serviceName] = new services[serviceName](app);
  }
  app.set('services', appServices);

  Logger.info('Services have been registered successfully.');
}