const { Router } = require('express');

module.exports = (app, apiRouter) => {
  const test = Router();
  const { TestService } = app.get('services');

  apiRouter.use('/test', test);

  test.get('/:id', async (req, res, next) => {
    try {
      const result = await TestService.findById(req.params.id);

      res.json(result);
    } catch (err) {
      next(err);
    }
  });
}