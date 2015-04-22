var jasminePit = require('../index');

jasminePit.install(global);

describe('jasminePit should work on Jasmine 1.x: ', function () {
  it('should have `pit.only` on globalObject', function () {
    expect(global.pit.only).toBeDefined();
  });
});
