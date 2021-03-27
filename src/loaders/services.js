const services = require('../services');

module.exports = (app) => {
  const appServices = {};
  for ( serviceName in services ) {
    appServices[serviceName] = services[serviceName](app);
  }
  app.set('services', appServices);
}