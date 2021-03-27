
const { DataTypes } = require('sequelize');

module.exports = (app) => {
  const sequelizeClient = app.get('sequelizeClient');

  const test = sequelizeClient.define('test', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'test',
  });

  test.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return test;
};