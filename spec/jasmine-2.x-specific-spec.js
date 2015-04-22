var jasminePit = require('../index');

jasminePit.install(global);

describe('jasminePit should work on Jasmine 2.x: ', function () {
  it('should have `fpit` on globalObject', function () {
    expect(global.fpit).toBeDefined();
  });
});
