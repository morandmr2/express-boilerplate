const { assert, expect } = require('chai');
const { TestService } = require('../../src/services');
const TestServiceInstance = new TestService();

describe('TestService methods', function() {
  it('Should add two numbers', function() {
    assert.equal(TestServiceInstance.add(1,2), 3);
    assert.throws(() => TestServiceInstance.add());
  });
});