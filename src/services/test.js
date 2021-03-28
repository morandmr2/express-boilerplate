class TestService {
  constructor(app) {
    this.app = app;
  }

  async findById(id) {
    const { models } = this.app.get('sequelizeClient');
    return await models.test.findByPk(id);
  }

  add(numberA, numberB) {
    if ( isNaN(numberA) || isNaN(numberB) ) {
      throw new Error('Invalid parameters');
    }
    return numberA + numberB;
  }
}

module.exports = TestService;