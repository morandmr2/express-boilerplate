const sequelizeLoader = require('./sequelize');
const expressLoader = require('./express');

module.exports = async (app) => {
  await sequelizeLoader(app);
  expressLoader(app);
}