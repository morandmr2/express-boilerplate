const { Sequelize } = require('sequelize');
const config = require('../config');
const { Logger } = require('../utils');
const models = require('../models');

module.exports = async (app) => {
  const sequelize = new Sequelize(config.databaseUrl, {
    logging: false,
  });
  app.set('sequelizeClient', sequelize);
  
  try {
    await sequelize.authenticate();
    Logger.info('Connection to database has been established successfully.');
  } catch (error) {
    Logger.error('Unable to connect to the database:', error);
  }

  // Register models
  for ( modelName in models ) {
    models[modelName](app);
  }

  // Set up data relationships
  Object.keys(sequelize.models).forEach( name => {
    if ( 'associate' in sequelize.models[name] ) {
      sequelize.models[name].associate(sequelize.models);
    }
  });

  sequelize.sync({ force: true });
  Logger.info('Database synchronized with model definitions.');

};