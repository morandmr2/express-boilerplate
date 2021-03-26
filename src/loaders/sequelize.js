const { Sequelize } = require('sequelize');
const config = require('../config');
const { Logger } = require('../utils');

module.exports = async (app) => {
  const sequelize = new Sequelize(config.databaseUrl, {
    logging: false,
  });
  app.set('dbClient', sequelize);

  try {
    await sequelize.authenticate();
    Logger.info('Connection to database has been established successfully.');
  } catch (error) {
    Logger.error('Unable to connect to the database:', error);
  }

  // @todo register models

};