module.exports = (app) => {
  const { models } = app.get('sequelizeClient');

  async function findById(id) {
    return await models.test.findByPk(id);
  }

  return {
    findById,
  }
}