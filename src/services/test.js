class TestService {
  constructor(app) {
    this.app = app;
  }

  async findById(id) {
    const { models } = this.app.get('sequelizeClient');
    return await models.test.findByPk(id);
  }
}

module.exports = TestService;