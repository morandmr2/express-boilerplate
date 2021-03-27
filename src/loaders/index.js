const sequelizeLoader = require('./sequelize');
const expressLoader = require('./express');
const serviceLoader = require('./services');

module.exports = async (app) => {
  await sequelizeLoader(app);
  serviceLoader(app);

  // express loader must be place after serviceLoader
  expressLoader(app);
}